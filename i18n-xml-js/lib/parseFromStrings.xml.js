#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const babelParser = require('@babel/parser');
const generate = require('@babel/generator').default;
const transform = require('@babel/core').transform;
const traverse = require('traverse');
const xml2js = require('xml2js');


var parser = new xml2js.Parser();


const es5Mode = process.argv[process.argv.length-2] === 'es5' || process.argv[process.argv.length-1] === 'es5';
let argument = process.argv[process.argv.length-1];

if(process.argv[process.argv.length-1] === 'es5') {
  argument = process.argv[process.argv.length-2];
}

if(/parseFromStrings\.xml.js$/.test(argument) || /parseFromStrings\.xml$/.test(argument) || /parseFromStrings$/.test(argument)) {
  argument = '**/*.xml'
}
const pattern = path.resolve(process.cwd(), argument);
console.log(pattern);
var files = glob.sync(pattern, {
  ignore: ['/**/node_modules/**', 'node_modules/**']
});
console.log(files);

parseXml(files).then((d)=>{
  console.log(d);
}).catch((e)=>{
  console.error(e)
});


async function parseXml(files) {

  for(let i=0; i<files.length; i++) {
    // 数据读取
    const data = await ((file)=>new Promise((resolve, reject)=>{
      fs.readFile(file,{encoding:'utf-8'}, function(err, data) {
        data = data.replace(/<xliff:g[^>]*>|<\/xliff:g>/ig,'');

        parser.parseString(data, function (err, result) {
          if(err) {
            reject(err)
          }
          resolve(handle2LocalForm(result));
        });
      });
    }))(files[i]);

    // save Data
    await ((data, fileName) => new Promise((resolve, reject)=>{
      fileName = fileName.replace(/\.xml$/i, '.js');
      
      handle2Js(data, (targetJs)=>{
        fs.writeFile(fileName, targetJs, function(err){
          if(err){
              reject(err);
          } else {
            console.log(fileName, 'done');
            resolve();
          }
        });

      })
      
    }))(data, files[i])

  }
  return 'success';
}


// 根据json 数据处理得到最后的 local语言  xx.js 文件
function handle2Js (data, callBack) {
  const JSONString = JSON.stringify(data, null, 2);
  const dataJsStr = `const local = ${JSONString};
export default local;`
  const outAST= babelParser.parse(dataJsStr, {
    sourceType: "module",
  });

  // 把函数字符串，转换成真正的函数
  const handledAST = traverse(outAST).map((item)=>{
    if(item && item.type === 'StringLiteral') {
      if(/^\(\.\.\.arg\)\=\>/.test(item.value)) {
        const tmpAST = babelParser.parseExpression(item.value);
        return tmpAST;
      } else {
        return item;
      }
    }
  });
  const outString = generate(handledAST);
  if(es5Mode) { // 如果es5模式。则转换成es5的代码
    transform(outString.code, {
      presets:[
        [
          "@babel/env",
          {
            'targets': {
              'browsers': ['android >= 4.4'],
            },
            modules: false
          },
        ],
      ]
    }, function(err, result) {
      callBack(result.code);
    });
  } else {
    callBack(outString.code);
  }
}


// 把数据处理成符合我们多语言的数据格式
function handle2LocalForm(data) {
  const re = {};
  if(!data || !data.resources) {
    return re;
  }
  const resources = data.resources;
  const stringArray = handleStringArray(resources['string-array']);
  const plurals = handlePlurals(resources['plurals']);
  const string = handleString(resources['string']);
  re.array = stringArray;
  re.plurals = plurals;
  re.string = string;
  // console.log(re);
  return re;
}

function handleString(string) {
  re = {}
  if(!string || !string.length) {
    return re;
  }
  // 转换成key-value
  string.forEach((item)=>{
    re[item.$.name] = replaceVariable(item._);
  });
  return re
}

function handleStringArray(stringArray) {
  re = {}
  if(!stringArray || !stringArray.length) {
    return re;
  }
  // 转换成key-value
  stringArray.forEach((item)=>{
    re[item.$.name] = item.item.map((val)=>replaceVariable(val));
  });
  return re
}

function handlePlurals(plurals) {
  re = {}
  if(!plurals || !plurals.length) {
    return re;
  }
  // 转换成key-value
  plurals.forEach((item)=>{
    re.cardinal={}
    re.cardinal[item.$.name] = {}
    // androd里边只有 最基本的复数逻辑
    item.item.forEach(( numTypeData )=>{
      re.cardinal[item.$.name][numTypeData.$.quantity] = replaceVariable(numTypeData._)
    })
    
  });
  return re
}

// 把有变量的私字符串，变成函数字符串
function replaceVariable(str) {
  if (/%[ds]|%\d\$[ds]/.test(str)) {
    var argInd = 0;
    let rstr = str.replace(/%(\d)\$[ds]/g,(a,b,c)=>{
      let num = parseInt(b);
      if(!isNaN(num) && num>0 && num > argInd) {
        argInd = num;
      }
      return `\${arg[${num-1}]}`;
    })
    rstr = rstr.replace(/%[ds]/g,(a,b,c)=>{
      return `\${arg[${argInd++}]}`;
    })
    return `(...arg)=>\`${rstr}\``
  } else {
    return str
  }
}
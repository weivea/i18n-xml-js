# i18n-xml-js

js端的国际化 多语言处理方案，   

. 可以适配react(动态切换语言)， 建议v16.12.0 以上版本  
. 可以适配vue 2.x(动态切换语言), 建议v2.6.x 以上版本     
. 在 Vue和 React 下由于页面业务复杂，允许子组件注册独立的 国际化模块    
. **可以将android规范下的国际化多语言资源文件 strings.xml, 编译为自己所需要的js资源文件**   

**复数判断参考**
http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html

# Install

```shell
npm install i18n-xml-js --save
```

## Usage

[Vue插件使用文档](https://github.com/weivea/i18n-xml-js/tree/master/vuePlugin.md)    

[React插件使用文档](https://github.com/weivea/i18n-xml-js/tree/master/reactPlugin.md)

[Vue在线示例](https://weivea.github.io/i18n-xml-js/)   

[React在线示例](https://weivea.github.io/i18n-xml-js/react/)


最简单的例子：
```javascript
import I18nJs, {setLocal, addPluralization, plurals} from 'i18n-xml-js';

const en = {
  "array": {
    "cities": ["beijing", "shanghai", "jinan", "qingdao"]
  },
  // 复数
  "plurals": {
    "cardinal": {
      "wastetime": {
        "one": (...arg) => `${arg[0]} minute`,
        "other": (...arg) => `${arg[0]} minutes`
      }
    },
    "ordinal": {
      takeRight: {
        // zero,
        one: (...args)=>`Take the ${args[0]}st right.`,
        two: (...args)=>`Take the ${args[0]}nd right.`,
        few: (...args)=>`Take the ${args[0]}rd right.`,
        // many,
        other: (...args)=>`Take the ${args[0]}th right.`
      }
    },
    "range":{
      days: {
        other: (...args)=>`${args[0]}–${args[0]} days`
      }
    }
  },
  "string": {
    "welcome_messages": (...arg) => `Hello, ${arg[0]}! You have ${arg[1]} new messages.`,
    "app_name": "GetApps",
    "pref_title_auto_update_market": "Update \"GetApps\" automatically",
    "notif_button_update_all": "<font color=#ff6243>Update all</font>",
    "btn_retry": "TRY AGAIN",
    "btn_price": (...arg) => `￥${arg[0]}`,
    "btn_progress": (...arg) => `${arg[0]}%%`,
    "btn_pausable": "PAUSE",
    "user_agreement_msg": (...arg) => `To use the basic features of this service, you must agree that us can collect, process, and use your personal data, including the personal balabalabalabala <a href=\"${arg[0]}\">Privacy Policy</a>. Agree?`
  }
};
const zh={
  "array": {
    "cities": ["北京", "上海", "济南", "青岛"]
  },
  "plurals": {
    "cardinal": {
      "wastetime": {
        "other": (...arg) => `${arg[0]} 分钟`
      }
    },
    "ordinal": {
      takeRight: {
        // zero,
        // many,
        other: (...args)=>`选择第 ${args[0]} 个 权利.`
      }
    },
    "range":{
      days: {
        other: (...args)=>`${args[0]}–${args[1]} 天`
      }
    }
  },
  "string": {
    "welcome_messages": (...arg) => `你好, ${arg[0]}! 你有 ${arg[1]} 条消息.`,
    "app_name": "应用商店",
    "pref_title_auto_update_market": "自动更新 \"应用商店\"",
    "notif_button_update_all": "<font color=#ff6243>升级所有应用</font>",
    "btn_retry": "再试一下",
    "btn_price": (...arg) => `￥${arg[0]}`,
    "btn_progress": (...arg) => `${arg[0]}%%`,
    "btn_pausable": "暂停",
    "user_agreement_msg": (...arg) => `好长一段文字呀，啦啦啦阿拉蕾 <a href=\"${arg[0]}\">快快快快快快</a>. 同意吗?`
  }
};

// 设置显示语言。默认就是en
setLocal('en')

// 'en' 相当于备用语言，如果en里有些字段没有，则用zh里的显示
const i18n = I18nJs({en, zh}, 'en')

const lang = i18n.lang;

// 获取一个字段
lang.string.app_name // GetApps
lang.array.cities[0] // beijing

// 有参数的字段
lang.string.welcome_messages('小明', 20) //Hello, 小明! You have 20 new messages.

// 处理复数
// 基础的复数, 第一个数字用于判断复数类型，后边的参数用于模板字符串
plurals.cardinal(lang.plurals.cardinal.wastetime, 5, 5) // 5 minutes
plurals.cardinal(lang.plurals.cardinal.wastetime, 1, 1) // 1 minute

//序数复数, 第一个数字用于判断复数类型，后边的参数用于模板字符串
plurals.cardinal(lang.plurals.ordinal.takeRight, 5, 5) // Take the 5th right.
plurals.cardinal(lang.plurals.ordinal.takeRight, 1, 1) // Take the 1st right.

// 区间复数 第一、二个数字用于判断复数类型，后边的参数用于模板字符串
plurals.range(lang.plurals.range.days, 1, 2, 1, 2) // 1–2 days


// addPluralization(pluralization)
// i18n-xml-js 默认的复数解析规则只有 en(英语)，zh(中文)，姚添加其它语言的，就需要用到 addPluralization

// 增加日语的复数判断器 
addPluralization({
  ja: {
    // 基本复数
    cardinal: (count)=>{
      if (count == 0) {
        return 'zero'
      }
      return 'other'
    },
    // 序数复数
    ordinal: (count)=>{
      return 'other'
    },
    // 区间复数
    range: (count1, count2)=>{
      return 'other'
    }
  }
})
//**复数判断参考**
//http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html


```

## 编译符合android国际化规范的xml资源文件为js

具体可以参考 [react-example](https://github.com/weivea/i18n-xml-js/tree/master/example/react-example)
**需要注意的是Android下边没有基于序数和区间的复数规则~ 所以编译出的文件复数只有plurals.cardinal**


package.json 添加scriprs 命令 `npm run parseFormXML`
##### 说明：i18n/\*\*/\*.xml 是我们要编译的文件
```json
"scripts": {
    "parseFormXML": "parseFromXML i18n/**/*.xml"
  },
```

zh.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:xliff="urn:oasis:names:tc:xliff:document:1.2">
    <string-array name="citys">
      <item>北京</item>
      <item>上海</item>
      <item>济南</item>
      <item>青岛</item>
    </string-array>
    <plurals name="wastetime">
      <item quantity="one">%d 分钟</item>
      <item quantity="other">%d 分钟</item>
    </plurals>
    <string name="welcome_messages">你好, %1$s! 你有 %2$d 新消息.</string>
    <string name="app_name" translatable="false">应用市场</string>
    <string name="pref_title_auto_update_market">自动更新 "应用市场"</string>
    <string name="notif_button_update_all"><![CDATA[<font color=#ff6243>更新全部</font>]]></string> <!--仅海外按钮高亮-->
    <string name="btn_retry">再试一次</string>
    <string name="btn_price">￥<xliff:g id="priceNumber">%1$s</xliff:g></string>
    <string name="btn_progress"><xliff:g id="precentage">%1$d</xliff:g>%%</string>
    <string name="btn_pausable">暂停</string>
    <string name="user_agreement_msg"><![CDATA[To 要使用本应用基础服务, 你需要同意本应用搜集和使用您的个人信息, 巴拉巴拉吧啦 <a href=\"%1$s\">隐私政策</a>. 您是否同意?]]></string>
</resources>
```

output: zh.js
```javascript
const local = {
  "array": {
    "citys": ["北京", "上海", "济南", "青岛"]
  },
  "plurals": {
    "cardinal": {
      "wastetime": {
        "one": (...arg) => `${arg[0]} 分钟`,
        "other": (...arg) => `${arg[0]} 分钟`
      }
    }
  },
  "string": {
    "welcome_messages": (...arg) => `你好, ${arg[0]}! 你有 ${arg[1]} 新消息.`,
    "app_name": "应用市场",
    "pref_title_auto_update_market": "自动更新 \"应用市场\"",
    "notif_button_update_all": "<font color=#ff6243>更新全部</font>",
    "btn_retry": "再试一次",
    "btn_price": (...arg) => `￥${arg[0]}`,
    "btn_progress": (...arg) => `${arg[0]}%%`,
    "btn_pausable": "暂停",
    "user_agreement_msg": (...arg) => `要使用慈祥基础服务, 你需要同意本应用搜集和使用您的个人信息, 巴拉巴拉吧啦 <a href=\"${arg[0]}\">隐私政策</a>. 您是否同意?`
  }
};
export default local;
```

## API说明

### I18nJs

国际化多语言实例工厂
```javascript
import I18nJs from 'i18n-xml-js';
//...

// I18nJs({语言资源对象}, '备用语言(一定要选择语言资源对象 里有的key)') 
const i18n = I18nJs({en, zh, /* ..其他语言.. */}, 'en') 
```

### setLocal
设置当前语言
```javascript
import {setLocal} from 'i18n-xml-js';
//...
// setLocal('当前语言')
setLocal('en')
```

# addPluralization
增加复数判断器 ,i18n-xml-js 默认只包含en(英语)，zh(中文)的复数判断器
```javascript
import {addPluralization} from 'i18n-xml-js';
//...
// addPluralization({复数规则解析对象})
addPluralization({// 增加日语的复数判断器 
  ja: {
    // 基本复数
    cardinal: (count)=>{
      if (count == 0) {
        return 'zero'
      }
      return 'other'
    },
    // 序数复数
    ordinal: (count)=>{
      return 'other'
    },
    // 区间复数
    range: (count1, count2)=>{
      return 'other'
    }
  }
})
```

### plurals
当前语言下的复数判断器
```javascript
import {plurals} from 'i18n-xml-js';
//...
// 基础的复数, 第一个数字用于判断复数类型，后边的参数用于模板字符串
plurals.cardinal(lang.plurals.cardinal.wastetime, 5, 5) // 5 minutes
plurals.cardinal(lang.plurals.cardinal.wastetime, 1, 1) // 1 minute

//序数复数, 第一个数字用于判断复数类型，后边的参数用于模板字符串
plurals.cardinal(lang.plurals.ordinal.takeRight, 5, 5) // Take the 5th right.
plurals.cardinal(lang.plurals.ordinal.takeRight, 1, 1) // Take the 1st right.

// 区间复数 第一、二个数字用于判断复数类型，后边的参数用于模板字符串
plurals.range(lang.plurals.range.days, 1, 2, 1, 2) // 1–2 days
```

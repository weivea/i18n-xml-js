# i18n-xml-js/lib/react-plugin

[React在线示例](https://weivea.github.io/i18n-xml-js/react)   

[示例代码](https://github.com/weivea/i18n-xml-js/tree/master/example/react-example)

i18n-xml-js提供的vue插件可以很好地满足: 切换语言后，react响应式渲染，**且可以动态注册翻译资源子模块**

## 使用 `i18n-xml-js/lib/react-plugin`

index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {I18nJs, I18nProvider} from 'i18n-xml-js/lib/react-plugin.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import zh from './i18n/zh.js'
import en from './i18n/en.js'

// 注册英语，中文两种翻译资源， 并设置 '英语为默认备用语言'
const i18n = new I18nJs({en, zh}, 'en');

// 应用用I18nProvider 包裹
ReactDOM.render(<I18nProvider i18n={i18n} defaultLocal={'zh'}><App/></I18nProvider>, 

document.getElementById('root'));

serviceWorker.unregister();

```

App.js
```javascript
import React from 'react';
import {I18nConsumer, useI18nJs} from 'i18n-xml-js/lib/react-plugin.js'
// import CustomI8n from './CustomI8n.js';
import logo from './logo.svg';
import './App.css';

// 异步加载 
import asyncLoad from './asyncLoad.js'
const CustomI8n = asyncLoad(()=>import('./CustomI8n.js'));

function App() {
  return (
    <I18nConsumer>
      {({lang, setLocal, local, localPlurals})=>{
        return (<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{lang.string.welcome_messages('小朋友', 5)}</h2>
            <ul>
              <li>
                选择语言:
                <select value={local} onChange={(e)=>{setLocal(e.currentTarget.value)}}>
                  <option value="en">en</option>
                  <option value="zh">zh</option>
                </select>
              </li>
              <li>应用名字:{lang.string.app_name}</li>
              <li>动作:<span dangerouslySetInnerHTML={{__html:lang.string.notif_button_update_all}}></span></li>
              <li>城市: {lang.array.citys.map((city)=><span key={city}> {city} </span>)}</li>
              <li>基本复数(时长):{localPlurals.cardinal(lang.plurals.cardinal.wastetime,1, 1)}</li>
              <li>基本复数(时长):{localPlurals.cardinal(lang.plurals.cardinal.wastetime,2, 2)}</li>
            </ul>
            <HookUsage/>
            <CustomI8n/>
          </header>
        </div>)
      }}
    </I18nConsumer>
  );
}


/**
 * 基于hooks来使用
 * @param {*} props 
 */
const HookUsage = (props)=>{
  // 使用hooks获取语言
  const {lang, setLocal, local, localPlurals} = useI18nJs();
  return (<ul>
    <li><h3>基于hooks的使用:</h3></li>
    <li>
      选择语言:
      <select value={local} onChange={(e)=>{setLocal(e.currentTarget.value)}}>
        <option value="en">en</option>
        <option value="zh">zh</option>
      </select>
    </li>
    <li>用户提示:<span dangerouslySetInnerHTML={{__html:lang.string.user_agreement_msg('https://baidu.com/')}}></span></li>
    <li>动作2:<span dangerouslySetInnerHTML={{__html:lang.string.btn_retry}}></span></li>
    <li>城市: {lang.array.citys.map((city)=><span key={city}> {city} </span>)}</li>
    <li>基本复数(时长):{localPlurals.cardinal(lang.plurals.cardinal.wastetime,1, 1)}</li>
    <li>基本复数(时长):{localPlurals.cardinal(lang.plurals.cardinal.wastetime,2, 2)}</li>
  </ul>)
}

export default App;

```

## 动态注册翻译子模块

```javascript
import React from 'react';
import {registerI18nModule, useI18nJs} from 'i18n-xml-js/lib/react-plugin.js';
import I18nJs from 'i18n-xml-js';

const customI18Module = new I18nJs({
  en:{
    string:{
      words: 'I`am independent translational content',
      time: (...args)=>`The time is ${args[0]}`
    }
  },
  zh: {
    string:{
      words: '我是独立的翻译内容',
      time: (...args)=>`现在的时间是 ${args[0]}`
    }
  }
});


// 注册子模块翻译资源
registerI18nModule('custom', customI18Module);

const CustomI8n = (props)=>{
  const {langModule} = useI18nJs();
  return (<div className="CustomI8">
    <h3>注册的独立翻译模块</h3>
    <ul>
      <li>{langModule.custom.string.words}</li>
      <li>时间  {langModule.custom.string.time('22:22:22')}</li>
    </ul>
  </div>)
}

export default CustomI8n;

```


## API说明


### i18nPlugin

reacy插件，
```javascript
import {I18nConsumer, useI18nJs} from 'i18n-xml-js/lib/react-plugin.js'

// I18nConsumer 提供 I18n的消费组件
// useI18nJs 提供 I18n的hooks组件

```
I18nConsumer、useI18nJs 都提供如下属性：

`local`, `lang`, `langModule`, `setLocal`, `localPlurals`


### local

当前语言

#### lang
当前语言下的翻译资源


#### langModule
当前语言下的翻译资源模块总和


#### setLocal

设置语言

#### localPlurals

当前语言下的复数判断器
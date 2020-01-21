import React from 'react';
import {I18nConsumer} from 'i18n-xml-js/lib/react-plugin.js'
import logo from './logo.svg';
import './App.css';

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

}

export default App;

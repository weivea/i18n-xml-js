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

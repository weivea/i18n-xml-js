import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types';
import  {I18nJsClass, setLocal,  plurals} from '../index.js';
export {default as I18nJs} from '../index.js'
// import PropTypes from 'prop-types';
const _i18VmModules ={}
let _value, _setValue;
const LangContext = React.createContext({
  local:'',
  lang:{},
  langModule: {},
  setLocal: ()=>{},
  plurals: {}
});

function _getLangModule() {
  const langModule = {};
  for (let vmName in _i18VmModules) {
    langModule[vmName] = _i18VmModules[vmName].lang;
  }
  return langModule;
}
/**
 * 注册module
 * @param {模块名} name 
 * @param {I18nJsClass 实例} vm 
 */
export function registerI18nModule(name, vm){
  if(_i18VmModules[name]){
    console.warn(new Error( `_i18VmModules['${name}']模块已经被注册过了` ));
    return;
  }
  _i18VmModules[name] = vm;
  if(!_value || !_setValue) {
    return;
  }
  const langModule = _getLangModule();
  _setValue(Object.assign({}, _value, {
    langModule,
  }))

}

export function I18nConsumer(props){
  return <LangContext.Consumer>
    {props.children}
  </LangContext.Consumer>
}

export const useI18nJs = ()=> {
  return useContext(LangContext);
}

/**
 * 
 * @param {*} props 
 * @param props.defaultLocal 默认本地语
 * @param props.lang  I18nJs实例
 */
export const I18nProvider = (props) => {
    const [value, setValue] = useState(()=>{
      const defaultLocal = props.defaultLocal;
      setLocal(defaultLocal)
      const langModule = _getLangModule();
      // 设置 local
      const _setLocal = (local)=> {
        setLocal(local);
        const langModule = _getLangModule();
        setValue(Object.assign({}, value, {
          lang: props.lang.lang,
          langModule,
          local: local
        }))
      }
      return {
        lang: props.lang.lang,
        local: defaultLocal || 'en',
        langModule,
        setLocal: _setLocal,
        localPlurals: plurals
      }
    })
    _value=value;
    _setValue =setValue;
    return <LangContext.Provider value={value}>
      {props.children}
    </LangContext.Provider>

}

I18nProvider.propTypes = {
  defaultLocal: PropTypes.string,
  lang: PropTypes.instanceOf(I18nJsClass)
}

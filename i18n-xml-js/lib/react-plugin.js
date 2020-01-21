import React, { useState } from 'react';
import { I18nJsClass, setLocal, plurals } from '../index.js';
export { default as I18nJs } from '../index.js'; // import PropTypes from 'prop-types';

let i18Vm;
const I18nProviderVmList = [];
const i18VmModules = {};
const LangContext = React.createContext({
  local: '',
  lang: {},
  langModule: {},
  setLocal: () => {},
  plurals: {}
});
/**
 * @param {语言:en|zh|....} name 
 * @param {I18nJsClass实例} vm 
 */

export function registerI18nModule(name, vm) {}
export function I18nConsumer(props) {
  return React.createElement(LangContext.Consumer, null, props.children);
}
export const I18nProvider = props => {
  const [value, setValue] = useState(() => {
    const defaultLocal = props.defaultLocal;
    setLocal(defaultLocal);

    const _setLocal = local => {
      setLocal(local);
      setValue(Object.assign({}, value, {
        lang: props.lang.lang,
        local: local
      }));
    };

    return {
      lang: props.lang.lang,
      local: defaultLocal || 'en',
      langModule: {},
      setLocal: _setLocal,
      localPlurals: plurals
    };
  });
  console.log(value); // const [value, setValue] = useState(1)

  return React.createElement(LangContext.Provider, {
    value: value
  }, props.children);
};

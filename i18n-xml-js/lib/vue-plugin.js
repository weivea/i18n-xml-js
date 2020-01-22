import Vue from 'vue'
import { I18nJsClass, setLocal,  plurals} from '../index.js';
export {default as I18nJs, addPluralization} from '../index.js'

let _Vue;
let i18Vm;
const _i18VmModules ={}

// 将i18的lang数据与
let langVueVm
function bindLang() {
  if(langVueVm) {
    langVueVm.lang=i18Vm.lang;
  }else {
    langVueVm = new Vue({
      data(){
        return {
          lang: i18Vm.lang
        }
      },
      computed: {
        _lang() {
          return this.lang;
        }
      }
    });
  }
}

let moduleLangVueVm;
function bindModuleLang(name) {
  if(moduleLangVueVm) {
    if (name) {
      if (moduleLangVueVm.langModule[name]){
        moduleLangVueVm.langModule[name] = _i18VmModules[name].lang;
      } else {
        Vue.set(moduleLangVueVm.langModule, name, _i18VmModules[name].lang);
      }
    } else {
      for (let _name in _i18VmModules) {
        if (moduleLangVueVm.langModule[_name]){
          moduleLangVueVm.langModule[_name] = _i18VmModules[_name].lang;
        } else {
          Vue.set(moduleLangVueVm.langModule, _name, _i18VmModules[_name].lang);
        }
      }
    }
    
  }else {
    moduleLangVueVm = new Vue({
      data(){
        const langModule = {}
        if (name) {
          langModule[name] = _i18VmModules[name].lang;
        } else {
          for (let _name in _i18VmModules) {
            langModule[_name] = _i18VmModules[_name].lang;
          }
        }
        return {
          langModule
        }
      },
      computed: {
        _langModule() {
          return this.langModule;
        }
      }
    });
  }
}


let vueLocalVm
function setVueLocal(local) {
  setLocal(local);
  if(vueLocalVm) {
    vueLocalVm.local=local
  } else {
    vueLocalVm = new Vue({
      data(){
        return {
          local: local
        }
      },
      computed: {
        _local() {
          return this.local;
        }
      }
    });
  }
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
  bindModuleLang(name);
}



const plugin = {
  install: function(Vue, opt={}){
    if(_Vue){
      return;
    }
    _Vue = Vue;
    opt.local && setVueLocal(opt.local);
    if(opt.i18 instanceof I18nJsClass) {
      i18Vm = opt.i18;
      bindLang();
    } else {
      throw new Error('需要参数 opt.i18 是 I18nJsClass 的实例化对象');
    }
    Object.defineProperties(Vue.prototype, {
      $local: {
        get() {
          return vueLocalVm._local
        }
      },
      $lang: {
        get() {
          return langVueVm._lang
        }
      },
      $langModule:{
        get() {
          return moduleLangVueVm._langModule
        }
      },
      $setLocal:{
        // 设置本地语言，更新lang
        get(){
          return function(local){
            setVueLocal(local);
            bindLang();
            bindModuleLang();
          }
        }
      },
      $localPlurals:{
        get(){
          return plurals
        }
      }
    });
  }
}
export default plugin;

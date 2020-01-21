import { I18nJsClass, setLocal,  plurals} from '../index.js';
export {default as I18nJs} from '../index.js'

let _Vue;
let i18Vm;
const i18VmModules ={}

// 将i18的lang数据与
let langVueVm
function bindLang() {
  if(langVueVm) {
    langVueVm.lang=i18Vm.lang;
  }else {
    langVueVm = new _Vue({
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
        moduleLangVueVm.langModule[name] = i18VmModules[name].lang;
      } else {
        _Vue.set(moduleLangVueVm.langModule, name, i18VmModules[name].lang);
      }
    } else {
      for (let _name in i18VmModules) {
        if (moduleLangVueVm.langModule[_name]){
          moduleLangVueVm.langModule[_name] = i18VmModules[_name].lang;
        } else {
          _Vue.set(moduleLangVueVm.langModule, _name, i18VmModules[_name].lang);
        }
      }
    }
    
  }else {
    moduleLangVueVm = new _Vue({
      data(){
        const langModule = {}
        if (name) {
          langModule[name] = i18VmModules[name].lang;
        } else {
          for (let _name in i18VmModules) {
            langModule[_name] = i18VmModules[_name].lang;
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
    vueLocalVm = new _Vue({
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
      },
      $registerI18nModule: {
        get(){
          return function(name, vm){
            i18VmModules[name] = vm;
            bindModuleLang(name);
          }
        }
      }
    });
  }
}
export default plugin;

import merge from 'lodash/merge';
const defaultLocal = 'en';
let local = defaultLocal;

//语言复数判断器
export const pluralization = {
  'zh': {
    cardinal: (count)=>{
      if (count == 0) {
        return 'zero'
      }
      return 'other'
    },
    ordinal: (count)=>{
      return 'other'
    },
    range: (count1, count2)=>{
      return 'other'
    }
  },
  'en': {
    cardinal: (count)=>{
      if (count == 0) {
        return 'zero'
      }
      if (count == 1) {
        return 'one'
      }
      return 'other'
    },
    ordinal: (n)=>{
      if (n % 10 == 1 && n % 100 != 11) {
        return 'one'
      }
      if (n % 10 == 2 && n % 100 != 12) {
        return 'two'
      }
      if (n % 10 == 3 && n % 100 != 13) {
        return 'few'
      }
      return 'other'
    },
    range: (count1, count2)=>{
      return 'other'
    }
  }
}; 

const i18nJsVMList = [];

export class I18nJsClass {
  /**
   * @param {翻译语言} langs 
   * @param {备份f翻译 default: 'en'} backup 
   */
  constructor(langs={}, backup){
    this.backup = backup || defaultLocal;
    this.langs = {}; // 所有语言
    this.lang = {};// 当前语言
    this.addLangs(langs);
    this.updateLang();
  }
  
  updateLang() {
    let lang = this.langs[local] || {};
    let backupLang = {}
    merge(backupLang, this.langs[this.backup]);
    merge(backupLang, lang);
    this.lang = backupLang;
  }
  addLangs(_langs) {
    Object.assign(this.langs, _langs)
  }
  
}

// 添加语言复数判断器
/**
 * @param {*} _pluralizations 
 * _pluralizations={en:..., zh:...}
 */
export function addPluralization(_pluralizations) {
  Object.assign(pluralization, _pluralizations)
}

// 给外部调用的 复数判断器
export const plurals={};
Object.defineProperties(plurals, {
  'cardinal': {
    get() {
      return function(plurals_cardinal, count, ...args) {
        if(!plurals_cardinal) {return ''};
        const type = pluralization[local].cardinal(count);
        let data = plurals_cardinal[type] || plurals_cardinal.other;
        if(typeof data === 'function') {
          data = data(...args);
        }
        return data || '';
      }
    }
  },
  'ordinal': {
    get() {
      return function(plurals_ordinal, count, ...args) {
        if(!plurals_ordinal) {return ''};
        const type = pluralization[local].ordinal(count);
        let data = plurals_ordinal[type] || plurals_ordinal.other;
        if(typeof data === 'function') {
          data = data(...args);
        }
        return data || '';
      }
    }
  },
  'range': {
    get() {
      return function(plurals_range, count1, count2, ...args) {
        if(!plurals_range) {return ''};
        const type = pluralization[local].range(count1, count2);
        let data = plurals_range[type] || plurals_range.other;
        if(typeof data === 'function') {
          data = data(...args);
        }
        return data || '';
      }
    }
  }
})

/**
 * 
 * @param {语言} _local 
 */
export function setLocal(_local) {
  if(local === _local) {
    return;
  }
  local = _local;
  i18nJsVMList.forEach((vm)=>{
    vm.updateLang(local);
  })
}

/**
 * @param {翻译语言} langs 
 * @param {默认用英语作为备份语言 default: 'en'} backup 
 */
function I18nJs(langs, backup) {
  const ivm = new I18nJsClass(langs, backup)
  i18nJsVMList.push(ivm);
  return ivm;
}

export default I18nJs;


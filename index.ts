
// 复数判断函数类型
type PluralizationFun = (x:number)=>string
// 不同语言 复数判断函数map表
interface KeyPluralizationFun {
  cardinal: PluralizationFun // 基本数字
  ordinal?: PluralizationFun // 序数
  range?: PluralizationFun // 区间
}

interface KeyPluralizationLang {
  cardinal: object // 基本数字
  ordinal?: object // 序数
  range?: object // 区间
}

export class I18nJs {
  langs: object;
  local: object;
  localLang: string;
  pluralization: KeyPluralizationFun;

  static pluralization: object = {}
  /**
   * 
   * @param langs 语言资源对象
   * @param localLang 本地语言名
   */
  constructor(langs: object| undefined = {}, localLang: string | undefined){
    this.langs = langs
    this.local = {}
    this.localLang = ''
    if(localLang) {
      this.setLocal(localLang)
    }
  }
  static setPluralization(localLang: string, plural: KeyPluralizationFun | PluralizationFun) {
    if (typeof plural === 'function') {
      plural = {
        cardinal: plural
      }
    }
    I18nJs.pluralization[localLang] = plural.cardinal
    I18nJs.pluralization[localLang].__proto__ =  plural
  }

  // 基本数字
  cardinal(langs:KeyPluralizationLang, count1:number) {
    const langType = this.pluralization.cardinal(count1);
    const langsTmp = langs.cardinal || langs;
    const lang = langsTmp[langType]
    return this._getLang(lang, count1)
  }

  // 序数
  ordinal(langs:KeyPluralizationLang, count1:number) {
    const langType = this.pluralization.ordinal(count1);
    const langsTmp = langs.ordinal || langs;
    const lang = langsTmp[langType]
    return this._getLang(lang, count1)
  }

  // 区间
  range(langs:KeyPluralizationLang, count1:number, count2:number) {
    const langType = this.pluralization.range(count1);
    const langsTmp = langs.range || langs;
    const lang = langsTmp[langType]
    return this._getLang(lang, count1, count2)
  }

  _getLang(lang:string, a?, b?) {
    let i=0;
    const args = arguments;
    const re =lang.replace(/\{\{[^}]+\}\}/g, function(a){
      i++
      return args[i]
    })
    return re;
  }

  // 设置本地语
  setLocal(localLang: string) {
    this.localLang = localLang
    this.local = this.langs[localLang] || {}
    this.pluralization = I18nJs.pluralization[localLang]
  }
}

// 默认的中文复数判断
I18nJs.setPluralization('zh', {
  cardinal: (count)=>{
    return 'other'
  },
  ordinal: (count)=>{
    return 'other'
  },
  range: (count)=>{
    return 'other'
  }
})

// 默认的英文复数判断
I18nJs.setPluralization('en', {
  cardinal: (count)=>{
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
  range: (count)=>{
    return 'other'
  }
})
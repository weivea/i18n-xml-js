const I18nJs = require('../index.js').I18nJs
const en=require('./en.js')
const zh=require('./zh.js')


// // 默认的中文复数判断
// I18nJs.setPluralization('zh', {
//   cardinal: (count)=>{
//     return 'other'
//   },
//   ordinal: (count)=>{
//     return 'other'
//   },
//   range: (count)=>{
//     return 'other'
//   }
// })

// // 默认的英文复数判断
// I18nJs.setPluralization('en', {
//   cardinal: (count)=>{
//     if (count = 1) {
//       return 'one'
//     }
//     return 'other'
//   },
//   ordinal: (n)=>{
//     if (n % 10 == 1 && n % 100 != 11) {
//       return 'one'
//     }
//     if (n % 10 == 2 && n % 100 != 12) {
//       return 'two'
//     }
//     if (n % 10 == 3 && n % 100 != 13) {
//       return 'few'
//     }
//     return 'other'
//   },
//   range: (count)=>{
//     return 'other'
//   }
// })


const i18n = new I18nJs({
  en,
  zh
}, 'en');

const local = i18n.local
console.log(local.helloWorld)

// 基数
console.log(i18n.cardinal(local.haveHat, 1))
console.log(i18n.cardinal(local.haveHat, 2))

// 序数
console.log(i18n.ordinal(local.takeRight,1))
console.log(i18n.ordinal(local.takeRight,12))
console.log(i18n.ordinal(local.takeRight,102))
console.log(i18n.ordinal(local.takeRight,1103))
console.log(i18n.ordinal(local.takeRight,14))

// 区间
console.log(i18n.range(local.daysRang,'0-1'))
console.log(i18n.range(local.daysRang,'4-5'))


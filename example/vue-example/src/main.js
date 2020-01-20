import Vue from 'vue'
import App from './App.vue'
import i18Plugin from 'i18-xml-js/lib/vue-plugin';
import I18nJs, {addPluralization} from 'i18-xml-js';

import zh from './i18n/zh.js'
import en from './i18n/en.js'
import ja from './i18n/ja.js'

// 增加日语的复数判断器 
addPluralization({
  ja: {
    // 基本复数
    cardinal: (count)=>{
      if (count == 0) {
        return 'zero'
      }
      return 'other'
    },
    // 序数复数
    ordinal: (count)=>{
      return 'other'
    },
    // 区间复数
    range: (count1, count2)=>{
      return 'other'
    }
  }
})

Vue.config.productionTip = false;

Vue.use(i18Plugin, {
  local: 'zh',
  i18: new I18nJs({en, zh, ja}, 'zh')
});

window.vm = new Vue({
  render: h => h(App),
}).$mount('#app')


# i18n-xml-js/lib/vue-plugin

[Vue在线示例](https://weivea.github.io/i18n-xml-js/)   

[示例代码](https://github.com/weivea/i18n-xml-js/tree/master/example/vue-example)

i18n-xml-js提供的vue插件可以很好地满足: 切换语言后，vue响应式渲染，**且可以动态注册翻译资源子模块**

## 使用 `i18n-xml-js/lib/vue-plugin`

```javascript
import Vue from 'vue'
import App from './App.vue'
import i18nPlugin, {I18nJs, addPluralization} from 'i18n-xml-js/lib/vue-plugin';

import zh from './i18n/zh.js'
import en from './i18n/en.js'
import ja from './i18n/ja.js'
Vue.config.productionTip = false;

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

Vue.use(i18nPlugin, {
  local: 'zh',
  i18: new I18nJs({en, zh, ja}, 'zh')
});

window.vm = new Vue({
  render: h => h(App),
}).$mount('#app')

```

## 组件渲染如何调用

```html
<template>
  <div class="hello">
    
    <h1>{{ $lang.string.welcome_messages('小朋友', 5) }}</h1>
    <ul>
      <li>
        选择语言:
        <select v-model="selected">
          <option v-bind:value="'en'">en</option>
          <option v-bind:value="'zh'">zh</option>
          <option v-bind:value="'ja'">ja</option>
        </select>
      </li>
      <li>应用名字:{{$lang.string.app_name}}</li>
      <li>动作:<span v-html="$lang.string.notif_button_update_all"></span></li>
      <li>城市:<span v-for="(city, ind) in $lang.array.cities" :key="ind"> {{city}} </span></li>

      <!-- 前1个数字用于判断 选择复数规则，后1个用于模板字符串 -->
      <li>基本复数(时长):{{$localPlurals.cardinal($lang.plurals.cardinal.wastetime,1, 1)}}</li>
      <li>基本复数(时长):{{$localPlurals.cardinal($lang.plurals.cardinal.wastetime,2, 2)}}</li>
      <li>序数复数:{{$localPlurals.ordinal($lang.plurals.ordinal.takeRight,1, 1)}}</li>
      <li>序数复数:{{$localPlurals.ordinal($lang.plurals.ordinal.takeRight,2, 2)}}</li>
      <li>序数复数:{{$localPlurals.ordinal($lang.plurals.ordinal.takeRight,3, 3)}}</li>
      <li>序数复数:{{$localPlurals.ordinal($lang.plurals.ordinal.takeRight,4, 4)}}</li>

      <!-- 前2个数字用于判断 选择复数规则，后两个用于模板字符串 -->
      <li>区间复数:{{$localPlurals.range($lang.plurals.range.days, 1, 2, 1, 2)}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      selected: this.$local
    }
  },
  watch: {
    selected(val){
      // 设置选择语言
      this.$setLocal(val);
    }
  }
}
</script>
```

## 动态注册翻译资源子模块

```html
<template>
  <div class="CustomI8">
    <h3>注册的独立翻译模块</h3>
    <ul>
      <!-- 从子模块获取翻译资源 -->
      <li>{{$langModule.custom.string.words}}</li>
      <li>时间 {{$langModule.custom.string.time('22:22:22') }}</li>
    </ul>
  </div>
</template>
<script>
  import {I18nJs, registerI18nModule} from 'i18n-xml-js/lib/vue-plugin';
  const customI18Module = I18nJs({
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
  }, 'zh');

  // 这里只用 en 和 zh , 当local设置为其它语言时，我们使用备份翻译zh

  registerI18nModule('custom', customI18Module); // 注册的独立翻译模块

  export default {
    name:'CustomI8',
  }
</script>
```

## API说明


### i18nPlugin

vue插件，
```javascript
import i18nPlugin from 'i18n-xml-js/lib/vue-plugin';
//....
Vue.use(i18nPlugin, {
  local: 'zh', // 默认语言
  i18: new I18nJs({en, zh, ja}, 'zh') // i18n翻译资源实例
});
```

i18nPlugin 为Vue.prototype原型添加如下属性：

`$local`, `$lang`, `$langModule`, `$setLocal`, `$localPlurals`

#### Vue.prototype.$local

当前语言

#### Vue.prototype.$lang
当前语言下的翻译资源


#### Vue.prototype.$langModule
当前语言下的翻译资源模块总和


#### Vue.prototype.$setLocal

设置语言

#### Vue.prototype.$localPlurals

当前语言下的复数判断器




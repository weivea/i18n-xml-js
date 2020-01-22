<template>
  <div class="CustomI8">
    <h3>注册的独立翻译模块</h3>
    <ul>
      <li>{{$langModule.custom.string.words}}</li>
      <li>时间  {{$langModule.custom.string.time('22:22:22') }}</li>
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

  registerI18nModule('custom', customI18Module)


  export default {
    name:'CustomI8',
  }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {

  margin: 2px 10px;
}
a {
  color: #42b983;
}
</style>
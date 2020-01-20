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
import I18nJs from 'i18-xml-js';
export default {
  name:'CustomI8',
  beforeCreate () {
    this.$registerI18nModule('custom', new I18nJs({
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
    }))
  }
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
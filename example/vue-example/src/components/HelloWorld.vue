<template>
  <div class="hello">
    
    <h1>{{ $lang.string.welcome_messages('小朋友', 5) }}</h1>
    <ul>
      <li>
        选择语言:
        <select v-model="selected">
            <!-- 内联对象字面量 -->
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
      selected: 'zh'
    }
  },
  watch: {
    selected(val){
      this.$setLocal(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
    <CustomI8 />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomI8 from './components/CustomI8.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CustomI8
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

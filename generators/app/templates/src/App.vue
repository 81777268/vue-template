<template>
<div id="app">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>

import Vue from 'vue';

export default {
  name: 'app',
  data() {
    return {}
  },
  beforeMount: function() {},
  computed: {},
}
</script>

<style lang='scss' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>

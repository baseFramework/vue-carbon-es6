<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
export default {
  store
}
</script>

<style>
html {
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

body {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  /*margin: 0;*/
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  /*text-align: center;*/
  width: 100%;
  height: 100%;
}

#app a {
  color: #42b983;
  text-decoration: none;
  font-size: 13px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

div.vc-page-content {
  min-height: 100%;
}

#app .page-content{
  margin-top: 102px;
}

</style>

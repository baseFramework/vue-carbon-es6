<template>
  <header-bar>
    <!--<icon-button slot="left" icon="arrow_back" v-link="{ name: 'index' }"></icon-button>-->
    <span>{{ title }}</span>
  </header-bar>
</template>

<script>
import { routeName } from '../vuex/getters'
export default {
  data () {
    return {
      title: ''
    }
  },
  vuex: {
    getters: {
      routeName
    }
  },
  ready () {
    this.title = '果壳'
//    if (this.routeName === 'index' || this.routeName === 'math') {
//      this.title = '果壳'
//    } else if (this.routeName === 'mine') {
//      this.title = '其他'
//    }
  }
}
</script>

<style scoped>
.vc-header-bar {
  color: #fff !important;
  background-color: #000 !important;
  border-bottom: 1px solid #85C155;
  position: fixed;
}
a {
  color: #fff !important;
}
</style>

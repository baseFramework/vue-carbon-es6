<template>
  <tab-bar :active="-1">
    <tab-bar-item v-link="{ name: 'biology', activeClass: 'is-selected' }">
      生物
    </tab-bar-item>
    <tab-bar-item v-link="{ name: 'math', activeClass: 'is-selected' }">
      数学
    </tab-bar-item>
    <tab-bar-item v-link="{ name: 'internet', activeClass: 'is-selected' }">
      互联网
    </tab-bar-item>
    <tab-bar-item v-link="{ name: 'interview', activeClass: 'is-selected' }">
     专访
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  export default{
  }
</script>

<style scoped>
  .vc-tab-bar {
    top: 56px;
    position: fixed;
  }
  .is-selected {
    color: #474a4f !important;
    background-color: #fff !important;
  }
</style>

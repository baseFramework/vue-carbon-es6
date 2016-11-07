<template>
  <layout>
    <div class="index-page">
        Hello World!
    </div>
  </layout>
</template>

<script>
import Layout from './Layout'

export default {
  components: {
    Layout
  },
  ready () {
  }
}
</script>

<style scoped>
  .index-page{
    margin-top: 60px;
    padding: 0 10px;
  }
</style>

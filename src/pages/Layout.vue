<template>
  <vc-header></vc-header>
  <vc-navi></vc-navi>
      <slot></slot>
</template>

<script>
import vcHeader from '../components/Header'
import vcNavi from '../components/navi'
export default {
  components: {
    vcHeader,
    vcNavi
  }
}
</script>

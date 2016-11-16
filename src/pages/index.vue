<template>
  <layout>
    <div class="page-content">
      <list v-for="item in biologyList">
        <card>
          <card-header>
            <card-title>{{item.title}}</card-title>
          </card-header>
          <img v-bind:src="item.listimg" style="width: 100%" />
          <card-content>
            {{item.summary}}
          </card-content>
        </card>
      </list>
    </div>
  </layout>
</template>

<script>
  import Layout from './Layout'
  import {getBiologyList} from '../vuex/actions'
  import {biologyList} from '../vuex/getters'

  export default {
    vuex: {
      // 数据可以直接使用
      getters: {
        biologyList
      },
      // 方法可以直接调用
      actions: {
        // 获取生物列表数据
        getBiologyList
      }
    },
    components: {
      Layout
    },
    ready () {
      this.getBiologyList(0, 10)
      console.log(12345)
      console.log(this.biologyList)
    }
  }
</script>

<style scoped>
  .vc-card {
    box-shadow: none
  }

  .vc-card-header {
    font-size: 14px;
    text-align: left;
  }

  .vc-card-content-inner {
    font-size: 12px;
  }

  .vc-card-image img{
    width: 100%;
  }
</style>

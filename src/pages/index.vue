<template>
  <layout>
    <div class="vc-page page-content">
      <scroll-view v-el:scroller>
        <list>
          <item-cell  v-for="item in biologyList">
            <card >
              <card-header>
                <card-title>{{item.title}}</card-title>
              </card-header>
              <img v-bind:src="item.listimg" style="width: 100%" />
              <card-content>
                {{item.summary}}
              </card-content>
            </card>
          </item-cell>
        </list>
        <infinite-scroll v-if="biofinished === false" v-bind:trigger="$els.scroller" v-on:load="loadMore" v-bind:loading="loading" style="padding-bottom: 10px"></infinite-scroll>
      </scroll-view>
    </div>
  </layout>
</template>

<script>
  import Layout from './Layout'
  import {getBiologyList, setBioend, setBiofinished} from '../vuex/actions'
  import {biologyList, bioend, biofinished} from '../vuex/getters'
  import event from '../common/event'

  export default {
    data: function () {
      return {
        end: 10,
        loading: false
      }
    },
    vuex: {
      // 数据可以直接使用
      getters: {
        biologyList,
        bioend,
        biofinished
      },
      // 方法可以直接调用
      actions: {
        // 获取生物列表数据
        getBiologyList,
        // 设置生物数字
        setBioend,
        // 设置生物是否结束
        setBiofinished
      }
    },
    components: {
      Layout
    },
    ready () {
      event.bindEvent()
      if (this.bioend === 10) {
        this.getBiologyList(0, 10)
      }
    },
    methods: {
      loadMore () {
        console.log(this.biofinished)
        this.loading = true
        setTimeout(() => {
          if (this.bioend < 100) {
            var start = this.bioend
            var end = this.bioend + 10
            this.getBiologyList(start)
            this.setBioend(end)
          } else {
            this.setBiofinished(true)
          }
          this.loading = false
        }, 100)
      }
    }
  }
</script>

<style scoped>
  .vc-card {
    box-shadow: none;
    width:100%;
    margin:0;
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

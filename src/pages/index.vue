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
        <infinite-scroll v-bind:trigger="$els.scroller" v-on:load="loadMore" v-bind:loading="loading"></infinite-scroll>
      </scroll-view>
    </div>
  </layout>
</template>

<script>
  import Layout from './Layout'
  import {getBiologyList} from '../vuex/actions'
  import {biologyList} from '../vuex/getters'
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
      event.bindEvent()
      this.getBiologyList(0, 10)
    },
    methods: {
      loadMore () {
        console.log('action more!')
        setTimeout(() => {
          if (this.end < 50) {
            this.loading = true
            var start = this.end + 1
            var end = this.end + 10
            this.getBiologyList(start, end)
            this.end = end
          }
          this.loading = false
        }, 1000)
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

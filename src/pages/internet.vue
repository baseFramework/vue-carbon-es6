<template>
  <layout>
    <div class="vc-page page-content">
      <scroll-view v-el:scroller>
        <list>
          <item-cell  v-for="item in internetList">
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
        <infinite-scroll v-if="internetfinished === false" v-bind:trigger="$els.scroller" v-on:load="loadMore" v-bind:loading="loading" style="padding-bottom: 10px"></infinite-scroll>
      </scroll-view>
    </div>
  </layout>
</template>

<script>
  import Layout from './Layout'
  import {getInternetList, setInternetend, setInternetfinished} from '../vuex/actions'
  import {internetList, internetend, internetfinished} from '../vuex/getters'
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
        internetList,
        internetend,
        internetfinished
      },
      // 方法可以直接调用
      actions: {
        // 获取互联网列表数据
        getInternetList,
        // 设置互联网数字
        setInternetend,
        // 设置互联网是否结束
        setInternetfinished
      }
    },
    components: {
      Layout
    },
    ready () {
      event.bindEvent()
      if (this.internetend === 10) {
        this.getInternetList(0, 10)
      }
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          if (this.internetend < 100) {
            var start = this.internetend
            var end = this.internetend + 10
            this.getInternetList(start)
            this.setInternetend(end)
          } else {
            this.setInternetfinished(true)
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

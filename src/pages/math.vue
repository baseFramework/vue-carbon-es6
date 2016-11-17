<template>
  <layout>
    <div class="vc-page page-content">
      <scroll-view v-el:scroller>
        <list>
          <item-cell  v-for="item in mathList">
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
        <infinite-scroll v-if="mathfinished === false" v-bind:trigger="$els.scroller" v-on:load="loadMore" v-bind:loading="loading" style="padding-bottom: 10px"></infinite-scroll>
      </scroll-view>
    </div>
  </layout>
</template>

<script>
  import Layout from './Layout'
  import {getMathList, setMathend, setMathfinished} from '../vuex/actions'
  import {mathList, mathend, mathfinished} from '../vuex/getters'
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
        mathList,
        mathend,
        mathfinished
      },
      // 方法可以直接调用
      actions: {
        // 获取数学列表数据
        getMathList,
        // 设置数学数字
        setMathend,
        // 设置数学是否结束
        setMathfinished
      }
    },
    components: {
      Layout
    },
    ready () {
      event.bindEvent()
      if (this.mathend === 10) {
        this.getMathList(0, 10)
      }
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          if (this.mathend < 100) {
            var start = this.mathend
            var end = this.mathend + 10
            this.getMathList(start)
            this.setMathend(end)
          } else {
            this.setMathfinished(true)
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

<template>
  <layout>
    <div class="vc-page page-content">
      <scroll-view v-el:scroller>
        <list>
          <item-cell  v-for="item in interviewList">
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
        <infinite-scroll v-if="interviewfinished === false" v-bind:trigger="$els.scroller" v-on:load="loadMore" v-bind:loading="loading" style="padding-bottom: 10px"></infinite-scroll>
      </scroll-view>
    </div>
  </layout>
</template>

<script>
  import Layout from './Layout'
  import {getInterviewList, setInterviewend, setInterviewfinished} from '../vuex/actions'
  import {interviewList, interviewend, interviewfinished} from '../vuex/getters'
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
        interviewList,
        interviewend,
        interviewfinished
      },
      // 方法可以直接调用
      actions: {
        // 获取生物列表数据
        getInterviewList,
        // 设置生物数字
        setInterviewend,
        // 设置生物是否结束
        setInterviewfinished
      }
    },
    components: {
      Layout
    },
    ready () {
      event.bindEvent()
      if (this.interviewend === 10) {
        this.getInterviewList(0, 10)
      }
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          if (this.interviewend < 100) {
            var start = this.interviewend
            var end = this.interviewend + 10
            this.getInterviewList(start)
            this.setInterviewend(end)
          } else {
            this.setInterviewfinished(true)
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

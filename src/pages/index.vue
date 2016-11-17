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
  import {getBiologyList, setBioend} from '../vuex/actions'
  import {biologyList, bioend} from '../vuex/getters'
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
        bioend
      },
      // 方法可以直接调用
      actions: {
        // 获取生物列表数据
        getBiologyList,
        // 设置生物数字
        setBioend
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
        this.loading = true
        console.log(this.bioend)
        setTimeout(() => {
          this.loading = false
          if (this.bioend < 30) {
            var start = this.bioend + 1
            var end = this.bioend + 10
            this.getBiologyList(start, end)
            this.setBioend(end)
          }
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

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  apiUrl: 'https://api.ipoplary.com/api/',
  latestApi: 'zhihu/latest',
  historyApi: 'zhihu/day/',
  listApi: '/api/list',
  detailApi: '/api/detail',
  activePage: '',
  zhihuDailyList: [],
  zhihuDailyCount: 0,
  historyList: [],
  biologyList: [],
  historyDate: ''
}

const mutations = {
  GET_LATEST_LIST (state, response) {
    state.zhihuDailyList = response.data.list
    state.zhihuDailyCount = response.data.list.length
  },

  GET_MORE (state, response) {
    state.zhihuDailyList = state.zhihuDailyList.concat(response.data.list)
    state.zhihuDailyCount += response.data.list.length
  },

  GET_HISTORY_LIST (state, response) {
    state.historyList = response.data.list
  },

  SET_HISTORY_DATE (state, date) {
    state.historyDate = date
  },

  GET_BIOLOGY_LIST (state, response) {
    state.biologyList = state.biologyList.concat(response.data.data.results)
  }
}

export default new Vuex.Store({
  state,
  mutations
})

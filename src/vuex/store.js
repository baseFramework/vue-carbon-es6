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
  bioend: 10,
  bioload: false,
  biofinished: false,
  historyDate: ''
}

const mutations = {
  GET_BIOLOGY_LIST (state, response) {
    state.biologyList = state.biologyList.concat(response.data.data.results)
  },
  SET_BIOEND (state, num) {
    state.bioend = num
  },
  SET_BIOFINISHED (state, boolean) {
    state.biofinished = boolean
  }
}

export default new Vuex.Store({
  state,
  mutations
})

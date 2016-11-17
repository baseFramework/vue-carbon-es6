import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  listApi: '/api/list',
  detailApi: '/api/detail',
  activePage: '',
  biologyList: [],
  bioend: 10,
  bioload: false,
  biofinished: false,
  mathList: [],
  mathend: 10,
  mathload: false,
  mathfinished: false
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
  },
  GET_MATH_LIST (state, response) {
    state.mathList = state.mathList.concat(response.data.data.results)
  },
  SET_MATHEND (state, num) {
    state.mathend = num
  },
  SET_MATHFINISHED (state, boolean) {
    state.mathfinished = boolean
  }
}

export default new Vuex.Store({
  state,
  mutations
})

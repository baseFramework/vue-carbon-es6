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
  mathfinished: false,
  internetList: [],
  internetend: 10,
  internetload: false,
  internetfinished: false,
  interviewList: [],
  interviewend: 10,
  interviewload: false,
  interviewfinished: false
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
  },
  GET_INTERNET_LIST (state, response) {
    state.internetList = state.internetList.concat(response.data.data.results)
  },
  SET_INTERNETEND (state, num) {
    state.internetend = num
  },
  SET_INTERNETFINISHED (state, boolean) {
    state.internetfinished = boolean
  },
  GET_INTERVIEW_LIST (state, response) {
    state.interviewList = state.interviewList.concat(response.data.data.results)
  },
  SET_INTERVIEWEND (state, num) {
    state.interviewend = num
  },
  SET_INTERVIEWFINISHED (state, boolean) {
    state.interviewfinished = boolean
  }
}

export default new Vuex.Store({
  state,
  mutations
})

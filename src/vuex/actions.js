import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const getBiologyList = ({ dispatch, state }, start) => {
  var url = state.listApi

  Vue.http.get(url, {
    params: {
      start: start,
      size: 10,
      object: 'biologylist'
    }
  })
    .then(function (response) {
      dispatch('GET_BIOLOGY_LIST', response)
    })
}

export const setBioend = ({ dispatch, state }, num) => {
  dispatch('SET_BIOEND', num)
}

export const setBiofinished = ({ dispatch, state }, boolean) => {
  dispatch('SET_BIOFINISHED', boolean)
}

export const getMathList = ({ dispatch, state }, start) => {
  var url = state.listApi

  Vue.http.get(url, {
    params: {
      start: start,
      size: 10,
      object: 'mathlist'
    }
  })
      .then(function (response) {
        dispatch('GET_MATH_LIST', response)
      })
}

export const setMathend = ({ dispatch, state }, num) => {
  dispatch('SET_MATHEND', num)
}

export const setMathfinished = ({ dispatch, state }, boolean) => {
  dispatch('SET_MATHFINISHED', boolean)
}

export const getInternetList = ({ dispatch, state }, start) => {
  var url = state.listApi

  Vue.http.get(url, {
    params: {
      start: start,
      size: 10,
      object: 'internetlist'
    }
  })
      .then(function (response) {
        dispatch('GET_INTERNET_LIST', response)
      })
}

export const setInternetend = ({ dispatch, state }, num) => {
  dispatch('SET_INTERNETEND', num)
}

export const setInternetfinished = ({ dispatch, state }, boolean) => {
  dispatch('SET_INTERNETFINISHED', boolean)
}

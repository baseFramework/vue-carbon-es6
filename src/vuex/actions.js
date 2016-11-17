import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const getBiologyList = ({ dispatch, state }, start, end) => {
  var url = state.listApi

  Vue.http.get(url, {
    params: {
      start: start,
      end: end,
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

export default (router) => router.map({
  '/index': {
    name: 'biology',
    component: require('./pages/index')
  },
  '/math': {
    name: 'math',
    component: require('./pages/math')
  },
  '/internet': {
    name: 'internet',
    component: require('./pages/internet')
  },
  '/interview': {
    name: 'interview',
    component: require('./pages/interview')
  }
})

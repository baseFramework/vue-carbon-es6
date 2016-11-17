/**
 * 事件js
 */

function scrollAction () {
  console.log(parseInt(document.body.offsetHeight - window.screen.availHeight))
}

const bindEvent = function () {
  console.log('here')
  window.addEventListener('scroll', scrollAction)
}

export default {
  bindEvent: bindEvent
}

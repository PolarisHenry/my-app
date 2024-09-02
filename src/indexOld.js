// import Vue from 'vue'
// import App from './app.vue'

const wokooApp = document.createElement('div')

wokooApp.id = 'wokooApp-my-app-43490'

const timeUtilId = setInterval(() => {
  const nav = document.querySelector("nav > div:nth-child(2)")

  /* if (nav) {
    console.log('雕虫小吉');

    nav.insertBefore(wokooApp, nav.firstChild);
    const vm = new Vue({
      el: wokooApp,
      render: (h) => h(App),
    })
    clearInterval(timeUtilId)
  } */

    nav.insertBefore(wokooApp, nav.firstChild);

    wokooApp.innerHTML = '<span>傻逼</span>'
    clearInterval(timeUtilId)


}, 300);


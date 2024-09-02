/* import Vue from 'vue'
import App from './app.vue'

const wokooApp = document.createElement('div')

wokooApp.id = 'wokooApp-my-app-43490'

document.body.append(wokooApp);
const vm = new Vue({
  el: wokooApp,
  render: (h) => h(App),
})
 */

import { createApp } from 'vue'
import App from './App.vue'

const wokooApp = document.createElement('div');
wokooApp.id = 'wokooApp-my-app-43490';
document.body.appendChild(wokooApp);

const app = createApp(App);
app.mount(wokooApp);

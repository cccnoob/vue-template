import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from "./router";
Vue.config.productionTip = false
import "./static/style/normalize.css";
import store from "./store";
import ElementUI from 'element-ui'
import { i18n } from './lang'

Vue.use(ElementUI,{
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

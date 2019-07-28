import 'babel-polyfill';
import Vue from 'vue';
import fastclick from 'fastclick';
import 'common/stylus/index.styl';
import App from './App';
import router from './router';
import VueLazyLoad from 'vue-lazyload'


fastclick.attach(document.body);

Vue.use(VueLazyLoad,{
  loading:require('common/image/default.png'),

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
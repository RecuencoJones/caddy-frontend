import Vue from 'vue';
import App from './App.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: (h) => h(App)
  }).$mount('#root')
});

import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';

import Hexal from './components/hexal.vue';
import Blog from './components/blog.vue';
import About from './components/about.vue';
import Contacts from './components/contacts.vue';
import Projects from './components/projects.vue';



Vue.use(VueRouter);

let routes = new VueRouter({
  routes: [
    { path: '/hexal', component: Hexal },
    { path: '/home', component: Blog },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/projects', component: Projects }
  ]
});


new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
});

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import List from './views/List.vue';
import ShopCart from './views/ShopCart.vue';
import User from './views/user.vue';
import Detail from './views/Detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/l',
      name: 'List',
      component: List,
    },
    {
      path: '/s_h',
      name: 'ShopCart',
      component: ShopCart,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/u',
      name: 'User',
      component: User,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

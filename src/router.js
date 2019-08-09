import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import NewAccunt from './views/NewAccunt'
import Userform from './views/Userform'
import Userformsecond from './views/Userformsecond'
import Userformthird from './views/Userformthird'
import Profile_user from './views/Profile_user'
import Capture from './views/Capture'
import List from './views/List'
import Welcomepage from './views/Welcomepage'
import Navbar from './views/Navbar'

import Proof from './views/Proof'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcomepage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/newaccunt',
      name: 'newaccunt',
      component: NewAccunt,
    },
    {
      path: '/userform',
      name: 'form',
      component: Userform,
    },
    {
      path: '/userformcont',
      name: 'userformsecond',
      component: Userformsecond,
    },
    {
      path: '/userformthird',
      name: 'userthird',
      component: Userformthird,
    },
    {
      path: '/myprofile',
      name: 'profile',
      component: Profile_user,
    },
    {
      path: '/capture',
      name: 'capture',
      component: Capture,
    },
    {
      path: '/listfact',
      name: 'list',
      component: List,
    },
    {
      path: '/navbar',
      name: 'navabar',
      component: Navbar,
    },
    {
      path: '/proof',
      name:'proof',
      component: Proof
    },
    
    
  //  {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  //   }
  ]
})

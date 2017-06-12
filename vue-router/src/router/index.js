import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstroute from '@/components/firstroute'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
   {
   	path:'/firstroute',
   	name: 'firstroute',
   	component: firstroute

   }
  ]
})

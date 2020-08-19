import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import person from '@/components/person'
import indexui from '@/components/index-ui'
import theme from '@/components/theme'
import add from '@/components/addadmin'
import updateadmin from '@/components/updateadmin'
import login from '@/components/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login

    },
    {
      path: '/updateadmin/:adminId',
      name: 'updateadmin',
      component: updateadmin
    },
    {
      path: '/',
      name: 'theme',
      component: theme
    },
    {
      path: '/addadmin',
      name:'add',
      component: add

    },
    
    {
      path: '/indexui',
      name: 'indexui',
      component: indexui
    },
    {
      path: '/hellos',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path:'/person',
      name:'person',
      component:person
    }
  ]
})

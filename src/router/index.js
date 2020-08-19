import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/admin/HelloWorld'
import index from '@/components/admin/index'
import person from '@/components/admin/person'
import indexui from '@/components/admin/index-ui'
import theme from '@/components/admin/theme'
import add from '@/components/admin/addadmin'
import updateadmin from '@/components/admin/updateadmin'
import login from '@/components/admin/login'


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

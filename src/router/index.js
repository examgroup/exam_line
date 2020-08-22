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
import updateFill from  '@/components/question/updateFill'
import getAllFill from '@/components/question/index-fill'
import saveFill from  '@/components/question/saveFill'
import updateJudge from  '@/components/question/updateJudge'
import getAllJudge from '@/components/question/index-judge'
import saveJudge from  '@/components/question/saveJudge'
import updateMulti from  '@/components/question/updateMulti'
import getAllMulti from '@/components/question/index-Mu'
import saveMulti from  '@/components/question/saveMulti'
import question from '@/components/question'
import studentTable from  '@/components/student/studenttable'
import studentAdd from '@/components/student/studentadd'
import studentupdate from '@/components/student/studentupdate'
import teacheradd from '@/components/teacher/teacheradd'
import teachertable from '@/components/teacher/teachertable'
import teacherupdate from '@/components/teacher/teacherupdate'

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
    },
    {
      path: '/updateFill/:questionId',
      name: 'updateFill',
      component: updateFill
    },
    {
      path: '/getAllFill',
      name: 'getAllFill',
      component: getAllFill
    },
    {
      path: '/saveFill',
      name: 'saveFill',
      component: saveFill
    },
    {
      path: '/updateJudge/:questionId',
      name: 'updateJudge',
      component: updateJudge
    },
    {
      path: '/getAllJudge',
      name: 'getAllJudge',
      component: getAllJudge
    },
    {
      path: '/saveJudge',
      name: 'saveJudge',
      component: saveJudge
    },

    {
      path: '/updateMulti/:questionId',
      name: 'updateMulti',
      component: updateMulti
    },
    {
      path: '/getAllMulti',
      name: 'getAllMulti',
      component: getAllMulti
    },
    {
      path: '/saveMulti',
      name: 'saveMulti',
      component: saveMulti
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
    path: '/studentTable',
  name: 'studentTable',
  component: studentTable
},
{
  path: '/studentAdd',
    name: 'studentAdd',
  component: studentAdd
},
{
  path: '/studentupdate/:studentId',
    name: 'studentupdate',
  component: studentupdate
},
{
  path: '/teacheradd',
    name: 'teacheradd',
  component: teacheradd
},
{
  path: '/teachertable',
    name: 'teachertable',
  component: teachertable
},
{
  path: '/teacherupdate/:teacherId',
    name: 'teacherupdate',
  component: teacherupdate
}
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Practise_ES6 from '@/components/PractiseES6'
import DragableController from '@/components/DragableController'
import iViewTabs from '@/components/iViewTabs'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ES6',
      name: 'Practise_ES6_01',
      component: Practise_ES6
    },
    {
      path: '/DragableController',
      name: 'DragableController',
      component: DragableController
    },
    {
      path: '/iViewTabs',
      name: 'iViewTabs',
      component: iViewTabs
    }
  ]
})

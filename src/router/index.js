import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/page/index'
import goodsList from '@/page/goodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      children: [{
        path: '/goodsList',
        name: 'goods',
        component: goodsList
      },
      {
        path: '/index',
        name: 'index',
        component: Index
      }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})

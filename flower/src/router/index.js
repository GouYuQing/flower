import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/pages/Main'
import Me from '@/components/pages/Me'
import ShoppingGuide from '@/components/pages/ShoppingGuide'
import FlowerCenter from '@/components/pages/FlowerCenter'
import ShoppingCar from '@/components/pages/ShoppingCar'
import Coupons from '@/components/pages/Coupons'
import Address from '@/components/pages/Address'
import PhonePerson from '@/components/pages/PhonePerson'
import Order from '@/components/pages/Order'
import RedRose from '@/components/pages/redRose'
import GoodsDetails from '@/components/pages/GoodsDetails'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/',
          name: 'ShoppingGuide',
          component: ShoppingGuide
        },
        {
          path:'/flowerCenter',
          name:'FlowerCenter',
          component:FlowerCenter,
        },
        {
          path:'/shoppingCar',
          name:'ShoppingCar',
          component:ShoppingCar
        },
        {
          path:'/me',
          name:'Me',
          component:Me
        },
      ]
    },
    {
      path:'/coupons',
      name:'Coupons',
      component:Coupons
    },
    {
      path:'/phonePerson',
      name:'PhonePerson',
      component:PhonePerson
    },
    {
      path:'/address',
      name:'Address',
      component:Address
    },
    {
      path:'/order',
      name:'Order',
      component:Order
    },
    {
      path:'/redRose',
      name:'RedRose',
      component:RedRose
    },
    {
      path:'/goodsDetails',
      name:'GoodsDetails',
      component:GoodsDetails
    }
  ]
})

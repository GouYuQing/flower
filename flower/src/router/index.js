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
  ]
})

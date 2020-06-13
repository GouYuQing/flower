import Vue from 'vue'
import App from './App'
import router from './router'
import {Swipe, SwipeItem,Lazyload,Card,SwitchCell, DropdownMenu, DropdownItem,Button,GoodsAction, GoodsActionIcon, GoodsActionButton,Sku,Col,Row ,Field, Popup,CouponCell, CouponList,Tabbar,TabbarItem,NavBar,Cell,CellGroup} from 'vant'

Vue.use(Lazyload).use(Swipe).use(SwipeItem).use(Card).use(Button).use(SwitchCell).use(DropdownMenu).use(DropdownItem).use(Col).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Sku).use(Row).use(Field).use(Cell).use(Popup).use(CouponCell).use(CouponList).use(CellGroup).use(Tabbar).use(TabbarItem).use(NavBar)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

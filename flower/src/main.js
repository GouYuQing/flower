import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Sku,Col,Row ,Field, Popup,CouponCell, CouponList,Tabbar,TabbarItem,NavBar,Cell,CellGroup} from 'vant'

Vue.use(Button).use(Col).use(Sku).use(Row).use(Field).use(Cell).use(Popup).use(CouponCell).use(CouponList).use(CellGroup).use(Tabbar).use(TabbarItem).use(NavBar)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

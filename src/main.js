import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 按需引入element-ui
import {
    Container,
    Header, 
    Aside, 
    Main, 
    Button, 
    Menu, 
    Submenu, 
    RadioGroup, 
    RadioButton,
    MenuItem,
    Table,
    TableColumn,
    Popover,
    Tag,
    Message
} from 'element-ui'
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tag)

// element-ui Message组件需要全局挂载
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

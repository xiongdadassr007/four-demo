import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import User from '@/views/menuChildren/User.vue'
import Right from '@/views/menuChildren/Right.vue'
import Goods from '@/views/menuChildren/Goods.vue'
import Order from '@/views/menuChildren/Order.vue'
import System from '@/views/menuChildren/System.vue'
import Detail from '@/views/menuChildren/Detail.vue'


Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    { path: '/login', component: Login },
    { path: '/', redirect: '/login' },
    { path: '/home', redirect: '/home/user' },
    { path: '/home', component: Home, children: [
        { path: '/home/user', component: User },
        { path: '/home/right', component: Right },
        { path: '/home/goods', component: Goods },
        { path: '/home/order', component: Order },
        { path: '/home/system', component: System },
        { path: '/home/detail/:page', component: Detail, props: true }
    ]
        
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由守卫设置
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if(token) {
        if(to.path === '/login') next('/home')
        else next()
    } else {
        if(to.path === '/login') next()
        else next('/login')
    }
})

export default router

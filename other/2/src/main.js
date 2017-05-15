import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import { Global } from './libs/global'

Vue.use(VueRouter)

window['_g'] = Global
var _global = Global
var pageRouterOption = [
    {
        path: '/home',
        name: 'home',
        component: function (resolve) {
            require(['./pages/home.vue'], resolve)
        }
    },
    {
        path: '/game',
        name: 'game',
        component: function (resolve) {
            require(['./pages/game.vue'], resolve)
        }
    },
    {
        path: '/video',
        name: 'video',
        component: function (resolve) {
            require(['./pages/video.vue'], resolve)
        }
    },
    {
        path: '/about',
        name: 'about',
        component: function (resolve) {
            require(['./pages/about.vue'], resolve)
        }
    },
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '*',
        redirect: 'home'
    }
]

// 路由配置
var router = new VueRouter({
    linkActiveClass: 'active',
    routes: pageRouterOption
})

// console.dir(router)
_global.resizeWidth()

// 加载页面之前
router.beforeEach(function (to, from, next) {
    _global.loading = true
    next()
})
// 加载页面之后
router.afterEach(function (to) {
    setTimeout(function () {
        _global.loading = false
    }, 400)
})

new Vue({router, render: h => h(App)}).$mount('#app')

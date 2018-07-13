import 'babel-polyfill'
import Vue          from 'vue'
import VueRouter    from 'vue-router'
import Vuex         from 'vuex'
import Iview        from 'iview'
import App          from './App.vue'
// import VueResource  from 'vue-resource'
import axios        from 'axios'
// import Index        from '@/components/homepage/index.vue'
import Router       from './router/router.js'
import api          from './js/api'

Vue.config.debug = true


// Vue.use(VueResource)
Vue.prototype.$http = axios
Vue.prototype.$api  = api
Vue.use(VueRouter)
Vue.use(Vuex     )
Vue.use(Iview     )

// 创建一个路由器实例 配置路由规则
const router = new VueRouter({

    mode  : 'history',
    base  : __dirname,
    routes: Router.api

});

const store = new Vuex.Store({

    state : {

        poo : '',
        cor : '',
        hid : '',
        bas : '',
        res : '',
        reo : '',
        box : '',
        val : '',
        clis: '',
        obos : ''
        
    },

    mutations : {

        poo (state, msg) {
            state.poo = msg
        },

        cor (state, msg) {
            state.cor = msg
        },

        hid (state, msg) {
            state.hid = msg
        },

        bas (state, msg) {
            state.bas = msg
        },

        res (state, msg) {
            state.res = msg
        },

        reo (state, msg) {
            state.reo = msg
        },

        box (state, msg) {
            state.box = msg
        },

        val (state, msg) {
            state.val = msg
        },
        
        clis (state, msg) {
            state.clis = msg
        },
        
        obos (state, msg) {
            state.obos = msg
        },
    }

});

const app = new Vue({

    router,
    store,
    render: h => h(App)

}).$mount('#app')

import 'babel-polyfill'
import Vue          from 'vue'
import VueRouter    from 'vue-router'
import Vuex         from 'vuex'
// import Iview        from 'iview'
import App          from './App.vue'
// import VueResource  from 'vue-resource'
import axios        from 'axios'
// import Index        from '@/components/homepage/index.vue'
import Router       from './router/router.js'
// import MetaInfo     from 'vue-meta-info'
import api          from './js/api'
// import imgZoom      from 'vue2.0-zoom'
// import PicZoom      from 'vue-piczoom'
// import Calendar     from 'vue2-datepick'

// import './css/com.css'  ;
// import './css/style.css';

Vue.config.debug = true

axios.defaults.withCredentials = true //解决session不一致问题

// Vue.use(VueResource)
Vue.prototype.$http = axios
Vue.prototype.$api  = api
Vue.use(VueRouter)
Vue.use(Vuex     )
// Vue.use(Iview    )
// Vue.use(MetaInfo )
// Vue.use(Calendar)

// 创建一个路由器实例 配置路由规则
const router = new VueRouter({

    mode  : 'history',
    base  : __dirname,
    routes: Router.api

});

router.afterEach((to,from,next) => {

    window.scrollTo(0,0);
    
});

const store = new Vuex.Store({

    state : {

        poo : '',
        cor : '',
        hid : '',
        bas : '',
        box : '',
        val : '',
        info: '',
        res : '',
        reo : '',
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

        box (state, msg) {
            state.box = msg
        },

        val (state, msg) {
            state.val = msg
        },

        info (state, msg) {
            state.info = msg
        },

        reo (state, msg) {
            state.reo = msg
        },

        clis (state, msg) {
            state.clis = msg
        },
        
        obos (state, msg) {
            state.obos = msg
        },

        res (state, msg) {
            state.res = msg
        },

        
    }

});

const app = new Vue({

    router,
    store,
    render: h => h(App)

}).$mount('#app')

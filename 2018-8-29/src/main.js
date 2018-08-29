import 'babel-polyfill'
import Vue          from 'vue'
import VueRouter    from 'vue-router'
import Vuex         from 'vuex'
// import Iview        from 'iview'
import App          from './App.vue'
import axios        from 'axios'
import Router       from './router/router.js'
import MetaInfo     from 'vue-meta-info'
import api          from './js/api'
import qs    from 'qs'
import BaiduMap from 'vue-baidu-map'

// import './css/com.css'  ;
// import './css/style.css';

Vue.config.debug = true

axios.defaults.withCredentials = true //解决session不一致问题

Vue.prototype.$http = axios
Vue.prototype.$api  = api
Vue.use(VueRouter)
Vue.use(Vuex     )
// Vue.use(Iview    )
Vue.use(MetaInfo )

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})


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
        reo : '',
        res : '',
        cliss  : '',
        obos   : '',
        pson   : '',
        psons  : '',
        clos   : '',
        active : '',
        rch    : '',
        nexts  : '',
        nextss : '',
        nexttwo: '',
        checres: '',
        up     : '',
        expr   : '',
        len    : '',
        next   : '',
        agins  : '',
        modifypass  : '',
        modifypay   : '',
        modifyphone : '',
        modifyname  : '',
        modifymail  : '',
        list   : '',
        page   : '',
        listo  : '',
        sreen  : '',
        payment: '',
        QRious : '',
        immediately : '',
        Sliding : '',   //滑动验证状态
        imgList : '',

    },

    mutations : {
        
        imgList (state, msg) {
            state.imgList = msg
        },
        
        Sliding (state, msg) {
            state.Sliding = msg
        },
        
        immediately (state, msg) {
            state.immediately = msg
        },
        
        QRious (state, msg) {
            state.QRious = msg
        },

        payment (state, msg) {
            state.payment = msg
        },
        
        sreen (state, msg) {
            state.sreen = msg
        },

        listo (state, msg) {
            state.listo = msg
        },

        page (state, msg) {
            state.page = msg
        },

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

        res (state, msg) {
            state.res = msg
        },

        list (state, msg) {
            state.list = msg
        },
        cliss (state, msg) {
            state.cliss = msg
        },
        
        obos (state, msg) {
            state.obos = msg
        },

        res (state, msg) {
            state.res = msg
        },

        pson (state, msg) {
            state.pson = msg
        },

        psons (state, msg) {
            state.psons = msg
        },

        clos (state, msg) {
            state.clos = msg
        },

        active (state, msg) {
            state.active = msg
        },

        infor (state, msg) {
            state.infor = msg
        },

        rch (state, msg) {
            state.rch = msg
        },

        nexts (state, msg) {
            state.nexts = msg
        },

        nextss (state, msg) {
            state.nextss = msg
        },

        nexttwo (state, msg) {
            state.nexttwo = msg
        },

        checres (state, msg) {
            state.checres = msg
        },

        up (state, msg) {
            state.up = msg
        },

        expr (state, msg) {
            state.expr = msg
        },

        len (state, msg) {
            state.len = msg
        },

        agins (state, msg) {
            state.agins = msg
        },

        modifypass (state, msg) {
            state.modifypass = msg
        },

        modifypay (state, msg) {
            state.modifypay = msg
        },

        modifyphone (state, msg) {
            state.modifyphone = msg
        },

        modifyname (state, msg) {
            state.modifyname = msg
        },

        modifymail (state, msg) {
            state.modifymail = msg
        },

        next (state, msg) {
            state.next = msg
        },
        
    }

});

const app = new Vue({

    router,
    store,
    render: h => h(App)

}).$mount('#app')

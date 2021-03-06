




// 按需加载
let index       = ( ) => import('@/components/homepage/index.vue'       )
let login       = ( ) => import('@/components/login/login.vue'          )
let regPers     = ( ) => import('@/components/register/reg-pers.vue'    )
let regBas      = ( ) => import('@/components/register/reg-bas.vue'     )
let reg         = ( ) => import('@/components/register/reg.vue'         )
let regCompanyo = ( ) => import('@/components/register/reg-companyo.vue')
let regCompanyt = ( ) => import('@/components/register/reg-companyt.vue')
let order       = ( ) => import('@/components/mylease/order.vue'        )
let details     = ( ) => import('@/components/details/details.vue'      )
let detailsou   = ( ) => import('@/components/detailsou/detailsou.vue'  )
let detailsto   = ( ) => import('@/components/detailsto/detailsto.vue'  )
let center      = ( ) => import('@/components/center/center.vue'        )
let helpcen     = ( ) => import('@/components/helpcen/helpcen.vue'      )
let zlsp        = ( ) => import('@/components/zlsp/zlsp.vue'            )
let bjb         = ( ) => import('@/components/bjb/bjb.vue'              )
let ytj         = ( ) => import('@/components/ytj/ytj.vue'              )
let tsj         = ( ) => import('@/components/tsj/tsj.vue'              )
let contrast    = ( ) => import('@/components/contrast/contrast.vue'    )
let pages       = ( ) => import('@/components/pages/pages.vue'          )
let whole       = ( ) => import('@/components/whole/whole.vue'          )
let settlement  = ( ) => import('@/components/settlement/settlement.vue')
let payment     = ( ) => import('@/components/payment/payment.vue'      )
let payments    = ( ) => import('@/components/payment/payments.vue'     )
let Paymentpage = ( ) => import('@/components/payment/Paymentpage.vue'  )
let paysuccess  = ( ) => import('@/components/payment/paysuccess.vue'   )

//后台路由
let indexs      = ( ) => import('@/backstage/homepages/index.vue'    )


let api = [{
        path     : '/',
        component: index
    },{
        path     : '/login',
        component: login
    },{
        path     : '/regPers',
        component: regPers
    },{
        path     : '/reg',
        component: reg
    },{
        path     : '/order',
        component: order
    },{
        path     : '/details',
        component: details
    },{
        path     : '/detailsou',
        component: detailsou
    },{
        path     : '/detailsto',
        component: detailsto
    },{
        path     : '/center',
        component: center
    },{
        path     : '/helpcen',
        component: helpcen
    },{
        path     : '/zlsp',
        component: zlsp
    },{
        path     : '/bjb',
        component: bjb
    },{
        path     : '/ytj',
        component: ytj
    },{
        path     : '/tsj',
        component: tsj
    },{
        path     : '/contrast',
        component: contrast
    },{
        path     : '/pages',
        component: pages
    },{
        path     : '/whole',
        component: whole
    },{
        path     : '/regBas',
        component: regBas
    },{
        path     : '/regCompanyo',
        component: regCompanyo
    },{
        path     : '/regCompanyt',
        component: regCompanyt
    },{
        path     : '/settlement',
        component: settlement
    },{
        path     : '/payment',
        component: payment
    },{
        path     : '/payments',
        component: payments
    },{
        path     : '/Paymentpage',
        component: Paymentpage
    },{
        path     : '/indexs',
        component: indexs
    },{
        path     : '/indexs',
        component: indexs
    },{
        path     : '/paysuccess',
        component: paysuccess
    }
]

export default {
	api
}

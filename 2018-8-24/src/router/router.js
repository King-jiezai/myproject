




// 按需加载
let index            = ( ) => import('@/components/homepage/index.vue'                                       )
let login            = ( ) => import('@/components/login/login.vue'                                          )
let regPers          = ( ) => import('@/components/register/reg-pers.vue'                                    )
let regBas           = ( ) => import('@/components/register/reg-bas.vue'                                     )
let reg              = ( ) => import('@/components/register/reg.vue'                                         )
let regCompanyo      = ( ) => import('@/components/register/reg-companyo.vue'                                )
let regCompanyt      = ( ) => import('@/components/register/reg-companyt.vue'                                )
let orders           = ( ) => import('@/components/orders/orders.vue'                                        )
let details          = ( ) => import('@/components/details/details.vue'                                      )
let detailsou        = ( ) => import('@/components/detailsou/detailsou.vue'                                  )
let detailsto        = ( ) => import('@/components/detailsto/detailsto.vue'                                  )
let center           = ( ) => import('@/components/center/center.vue'                                        )
let helpcen          = ( ) => import('@/components/helpcen/helpcen.vue'                                      )
let zlsp             = ( ) => import('@/components/zlsp/zlsp.vue'                                            )
let bjb              = ( ) => import('@/components/bjb/bjb.vue'                                              )
let contrast         = ( ) => import('@/components/contrast/contrast.vue'                                    )
let pages            = ( ) => import('@/components/pages/pages.vue'                                          )
let whole            = ( ) => import('@/components/whole/whole.vue'                                          )
let settlement       = ( ) => import('@/components/settlement/settlement.vue'                                )
let payment          = ( ) => import('@/components/payment/payment.vue'                                      )
let payments         = ( ) => import('@/components/payment/payments.vue'                                     )
let paysuccess       = ( ) => import('@/components/payment/paysuccess.vue'                                   )
let invoices         = ( ) => import('@/components/invoices/invoices.vue'                                    )
let ShoppingCart     = ( ) => import('@/components/ShoppingCart/ShoppingCart.vue'                            )
let myRentalbox      = ( ) => import('@/components/MyRentalBox/my-rentalbox.vue'                             )
let integral         = ( ) => import('@/components/MemberCenter/member-integral/member-integral.vue'         )
let evaluate         = ( ) => import('@/components/payment/evaluate.vue'                                     )
let evaluates        = ( ) => import('@/components/payment/evaluates.vue'                                    )
let Paymentpage      = ( ) => import('@/components/payment/Paymentpage.vue'                                  )
let member           = ( ) => import('@/components/MemberCenter/member-center/member-center.vue'             )
let manage           = ( ) => import('@/components/MemberCenter/integral-management/integral-management.vue' )
let refund           = ( ) => import('@/components/refund/refund.vue'                                        )
let retrievePassword = ( ) => import('@/components/retrieve-password/retrieve-password.vue'                  )
let Personalcen      = ( ) => import('@/components/percenter/Personalcen.vue'                                )



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
        path     : '/orders',
        component: orders
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
        path     : '/paysuccess',
        component: paysuccess
    },{
        path     : '/invoices',
        component: invoices
    },{
        path     : '/ShoppingCart',
        component: ShoppingCart
    },{
        path     : '/myRentalbox',
        component: myRentalbox
    },{
        path     : '/integral',
        component: integral
    },{
        path     : '/evaluate',
        component: evaluate
    },{
        path     : '/evaluates',
        component: evaluates
    },{
        path     : '/Paymentpage',
        component: Paymentpage
    },{
        path     : '/member',
        component: member
    },{
        path     : '/manage',
        component: manage
    },{
        path     : '/refund',
        component: refund
    },{
        path     : '/retrievePassword',
        component: retrievePassword
    },{
        path     : '/Personalcen',
        component: Personalcen
    }
]

export default {
	api
}




import axios from 'axios'
import qs    from 'qs'
import Vue   from 'vue'

let field = "http://120.78.142.125/dg"
// let field = "http://120.78.75.195:8080/dg"
// let field = "http://192.168.1.130:8080/dg"
// let field = "http://192.168.1.172:8080/dg"
// let field = "http://192.168.1.164:8080/dg" //本地


let URL = `${ field }`

const post = (url, params) => {

    return new Promise( (resolve, reject) => {

        axios.post               (
            URL + url,
            params
        )
        .then(async response =>  {
            resolve(response)
        })
        .catch( error    =>      {
            resolve(error)
        })

    })
    
}

const get = (url, params) => {

    return new Promise( (resolve, reject) => {

        axios.get(
            URL + url,           {
            params : params,
        })
        .then(async response =>  {
            resolve(response)
        })
        .catch( error    =>      {
            resolve(error)
        })

    })
    
}

export default {

    ['login'                 ] : o => post('/user/login.do'                  , qs.stringify(o)),  //密码登录

    ['phoneLogin'            ] : o => post('/user/phoneLogin.do'             , qs.stringify(o)),  //验证码登录

    ['getUserInfo'           ] : o => post('/user/getUserInfo.do'            , qs.stringify(o)),  //获取个人信息

    ['phoneCode'             ] : o => post('/user/phoneCode.do'              , qs.stringify(o)),  //发送手机验证码

    ['register'              ] : o => post('/user/register.do'               , qs.stringify(o)),  //注册

    ['logout'                ] : o => post('/user/logout.do'                 , qs.stringify(o)),  //退出登录

    ['checkPhone'            ] : o => post('/user/checkPhone.do'             , qs.stringify(o)),  //手机号码校验

    ['checkRegister'         ] : o => post('/user/checkRegister.do'          , qs.stringify(o)),  //验证是否发送过手机验证码

    ['forgetResetPassword'   ] : o => post('/user/forgetResetPassword.do'    , qs.stringify(o)),  //找回密码

    ['checkUsername'         ] : o => post('/user/checkUsername.do'          , qs.stringify(o)),  //昵称校验

    ['addShipping'           ] : o => post('/shipping/addShipping.do'        , qs.stringify(o)),  //添加收货地址
    
    ['listShipping'          ] : o => post('/shipping/listShipping.do'       , qs.stringify(o)),  //查询单个所有收货地址

    ['deleteShipping'        ] : o => post('/shipping/deleteShipping.do'     , qs.stringify(o)),  //删除收货地址

    ['selectShipping'        ] : o => post('/shipping/selectShipping.do'     , qs.stringify(o)),  //查询个人单个收货地址
    
    ['updateShipping'        ] : o => post('/shipping/updateShipping.do'     , qs.stringify(o)),  //修改收货地址

    ['getCategoryList'       ] : o => post('/category/getCategoryList.do'    , qs.stringify(o)),  //门户分类展示

    ['list'                  ] : o => post('/product/list.do'                , qs.stringify(o)),  //商品查询列表

    ['detail'                ] : o => post('/product/detail.do'              , qs.stringify(o)),  //查看商品详情

    ['salesList'             ] : o => post('/product/salesList.do'           , qs.stringify(o)),  //周排行列表

    ['recommendList'         ] : o => post('/product/recommendList.do'       , qs.stringify(o)),  //热租列表

    ['cartList'              ] : o => post('/cart/list.do'                   , qs.stringify(o)),  //购物车商品列表

    ['cartAdd'               ] : o => post('/cart/add.do'                    , qs.stringify(o)),  //加入购物车

    ['delete_product'        ] : o => post('/cart/delete_product.do'         , qs.stringify(o)),  //删除购物车的商品

    ['selectAll'             ] : o => post('/cart/selectAll.do'              , qs.stringify(o)),  //购物车的商品全选

    ['unSelectAll'           ] : o => post('/cart/unSelectAll.do'            , qs.stringify(o)),  //购物车的商品反全选

    ['select'                ] : o => post('/cart/select.do'                 , qs.stringify(o)),  //购物车的商品单选

    ['unSelect'              ] : o => post('/cart/unSelect.do'               , qs.stringify(o)),  //购物车的商品反单选

    ['getOrderPurchase'      ] : o => post('/order/getOrderPurchase.do'      , qs.stringify(o)),  //立即租赁、下单

    ['create'                ] : o => post('/order/create.do'                , qs.stringify(o)),  //提交订单

    ['orderList'             ] : o => post('/order/list.do'                  , qs.stringify(o)),  //个人订单列表

    ['getOrderListStatus'    ] : o => post('/order/getOrderListStatus.do'    , qs.stringify(o)),  //个人中心订单列表状态
    
    ['orderDetail'           ] : o => get ('/order/detail.do'                ,               o),  //订单详情

    ['orderCancel'           ] : o => get ('/order/cancel.do'                ,               o),  //取消订单

    ['alipay'                ] : o => post('/order/alipay.do'                , qs.stringify(o)),  //支付宝支付

    ['unionPay'              ] : o => post('/union/unionPay.do'              , qs.stringify(o)),  //银行卡支付

    ['listDisplay'           ] : o => get ('/links/listDisplay.do'           ,               o),  //友情链接

    ['afterSaleListAfterSale'] : o => get ('/afterSale/listAfterSale.do'     ,               o),  //查询商品售后的商品信息

    ['afterSaleAdd'          ] : o => post('/afterSale/add.do'               , qs.stringify(o)),  //提交申请售后内容

    ['afterSaleAnnul'        ] : o => get ('/afterSale/annul.do'             ,               o),  //撤销申请售后内容

}
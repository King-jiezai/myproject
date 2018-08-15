


import axios from 'axios'
import qs    from 'qs'
import Vue   from 'vue'

let field = "http://120.78.75.195:8080/dg"
// let field = "http://192.168.43.148:8080/dg"


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

    ['login'        ] : o => post('/user/login.do'            , qs.stringify(o)),

    ['getUserInfo'  ] : o => post('/user/getUserInfo.do'      , qs.stringify(o)),

    ['phoneCode'    ] : o => post('/user/phoneCode.do'        , qs.stringify(o)),

    ['register'     ] : o => post('/user/register.do'         , qs.stringify(o)),

    ['logout'       ] : o => post('/user/logout.do'           , qs.stringify(o)),

    ['checkPhone'   ] : o => post('/user/checkPhone.do'       , qs.stringify(o)),

    ['checkUsername'] : o => post('/user/checkUsername.do'    , qs.stringify(o)),

    ['addShipping'  ] : o => post('/shipping/addShipping.do'  , qs.stringify(o)),
    
    ['listShipping' ] : o => post('/shipping/listShipping.do' , qs.stringify(o)),
  

}
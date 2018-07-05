


import axios from 'axios'
import qs    from 'qs'
import Vue   from 'vue'

let field = "http://120.78.75.195:8080"


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

    ['login'] : o => post('/guangzu/user/login.do', qs.stringify(o))

}
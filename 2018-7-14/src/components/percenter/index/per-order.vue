


<style scoped>

    .my_order {
        width: 700px;
        float: left;
        overflow: hidden;

    }
    .my_order-nav {
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        background: #a0cdeb;
    }
    .my_order-nav p {
        float: left;
        margin: 0 15px;
        color: #fff;
    }
    .my_order-nav p:last-child {
        float: right;
    }
    .my_order-top {
        float: left;
        width: 100%;
        height: 36px;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }
    .my_order-cont {
        float: left;
        width: 128px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
    .bors {
        border-bottom: 1px solid #fff!important;
    }
    .my_order-cont img {
        float: left;
        margin: 10px 5px 0px 20px;
    }
    .my_order-cont:nth-child(3) img {
        margin: 8px 5px 0px 20px;
    }
     .my_order-cont:nth-child(5) img {
        margin: 7px 5px 0px 20px;
    }
    .my_order-cont p {
        float: left;
        font-size: 15px;
    }
    .my_order-cont .ooo{
        color: #0393F3;
    }

</style>

<template>


        <div class="my_order">
            <div class="my_order-nav">
                <p>我的订单</p>
                <p>查看全部订单 ></p>
            </div>
            <div class="my_order-top">
                <div class="my_order-cont" :class="{'bors': display == index}" v-for='(item,index) in res' @click="ords(index)">
                    <img :src="item.img">
                    <p :class="{'ooo': fos == index}">{{item.fon}}{{item.pay}}</p>           
                </div>
            </div>

            <div v-if="one">
                <orderOnes></orderOnes>
            </div>
            <div v-if="two">
                <orderTwo></orderTwo>
            </div>
            <div v-if="three">
                <orderThree></orderThree>
            </div>
            <div v-if="four">
                <orderFour></orderFour>
            </div>
           
        </div>

</template>

<script>

    import orderOnes   from '@/components/percenter/index/order-one.vue'
    import orderTwo   from '@/components/percenter/index/order-two.vue'
    import orderThree   from '@/components/percenter/index/order-three.vue'
    import orderFour   from '@/components/percenter/index/order-four.vue'


    export default {
        
        components : {

            orderOnes,
            orderTwo,
            orderThree,
            orderFour,
       
        },

        data () {

            return {


                pay : '',

                fos : false,

                display : false,

                one : true ,

                two : false,

                three : false,

                four : false,

                res : [{
                    fon : '待付款：',
                    img : '../../../static/images/percent/3.png',
                    pay : 2

                },{
                    fon : '待收货：',
                    img : '../../../static/images/percent/4.png',
                    pay : 0

                },{
                    fon : '待评论',
                    img : '../../../static/images/percent/5.png'

                },{
                    fon : '在租设备',
                    img : '../../../static/images/percent/6.png'

                }]
                          
            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {
            
            ords (index) {

                this.display = index

                this.fos = index

                if (this.res[index].fon == '待付款：') {

                    this.one = true

                    this.two = false

                    this.three = false

                    this.four = false
                }

                if (this.res[index].fon == '待收货：') {
                    
                    this.two = true

                    this.one = false

                    this.three = false

                    this.four = false
                }


                if (this.res[index].fon == '待评论') {
                    
                    this.two = false

                    this.one = false

                    this.three = true

                    this.four = false
                }

                if (this.res[index].fon == '在租设备') {
                    
                    this.two = false

                    this.one = false

                    this.three = false

                    this.four = true
                }
            }

        },

        created () {

            
            // if( this.red == 0 ){

            //     this.pay = 0

            // } else {

            //     this.pay = this.red.length

            //     console.log(this.pay)
               
            // }
    
            // if (this.pay == '') {

            //     this.shows = true

            //     this.red = null

            // }else {

            //     this.show = true

            //     this.shows = false
            // }
            
           
        },

        mounted () {

        }
    }

</script>

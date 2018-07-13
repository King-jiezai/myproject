


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
        width: 128px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-right: 1px solid #ddd;
    }
    .my_order-top img {
        float: left;
        margin: 10px 5px 0px 20px;
    }
    .my_order-top:nth-child(3) img {
        margin: 8px 5px 0px 20px;
    }
     .my_order-top:nth-child(5) img {
        margin: 7px 5px 0px 20px;
    }
    .my_order-top p {
        float: left;
        font-size: 15px;
    }
    .my_order-top .fukuan{
        float: left;
        color: #0393F3;
    }
    .my_order-cent {
        float: left;
        width: 100%;
        overflow: hidden;
        border-top: 1px solid #ddd;
        background:  #f0f8fe;
    }
    .my_order-null {
        float: left;
        width: 100%;
        height: 100px;
        overflow: hidden;
        background:  #f0f8fe;
        line-height: 100px;
        text-align: center;
    }
    .cent_left {
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid #C2E6FE;
        position: relative;
        background:  #fff;
    }
    .cent_left:hover {
        background: #f0f8fe;
    }
    .cent_left:last-child {
        margin-bottom: 20px;
    }
    .cent_left img {
        float: left;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 10px 10px 10px 20px; 
    }
    .cent_left .fonts {
        left: 120px;
        width: 230px;
        color: #333;
        font-size: 11px;
        margin-top: 20px;
        position: absolute;
    }
    .cent_left .fonts:nth-child(3) {
        top: 40px;
    }
    .cent_left span {
        position: absolute;
        color: #ADADAD;
    }
    .rent {
        float: left;
        width: 160px;
        overflow: hidden;
        margin:20px 0 0 270px;
    }
    .rent p {
        width: 80px;
        float: left;
        font-size: 11px;
        color:  #ADADAD;
    }
    .rent p:last-child {
        font-size: 13px;
        color: #666;
    }
    .rent p:last-child span {
        color: #e60012;
    }
    .rents {
        float: right; 
        margin-top: 20px;   
        width: 60px;
        text-align: center;
        cursor: pointer;
        margin-right: 20px;   
    }
    .rents p:last-child {
        border: 1px solid #ccc;
        margin-top: 3px;
    }
    .cent_left:nth-child(1) {
        height: 100px;
    }
    .cent_left:nth-child(1) .rents p:last-child {
        border: 0px;
    }
    .cent_left:nth-child(1) img {
        border: 0px;
    }
    .color {     
        color: #e60012;
    }

</style>

<template>


        <div class="my_order">
            <div class="my_order-nav">
                <p>我的订单</p>
                <p>查看全部订单 ></p>
            </div>
            <div class="my_order-top">
                <img src="../../../static/images/percent/3.png">
                <p class="fukuan">待付款：{{ pay }}</p>           
            </div>
             <div class="my_order-top">
                <img src="../../../static/images/percent/4.png">
                <p>待收货</p>                     
            </div>
             <div class="my_order-top">
                <img src="../../../static/images/percent/5.png">
                <p>带评论</p>                         
            </div>
             <div class="my_order-top">
                <img src="../../../static/images/percent/6.png">
                <p>在租设备</p>
            </div>
            <div class="my_order-cent">
                <div class="my_order-null" v-show="shows">
                     <p>你还没有订单记录，快<router-link to='/zlsp'>去逛逛</router-link>吧</p>
                </div>
                <div class="cent_left" v-for='(item,index) in red' v-show='show'>
                    <img :src="item.img">
                    <p class="fonts">{{ item.fon }}</p>
                    <p class="fonts">{{ item.ordernum }}<span>{{ item.num }}</span></p>
                    <div class="rent">
                        <p>{{ item.rent }}{{ item.zu }}</p>
                        <p>{{ item.deposit }}{{ item.ya }}</p>
                        <p>{{ item.real }}<span>{{ item.shi }}</span></p>
                    </div>
                    <div class="rents">
                        <p>{{ item.oos }}</p>
                        <p @click="clis(index)" :class="{'color': cond == index}" @mouseenter="moue(index)" @mouseleave="moul">{{ item.oox }}</p>                                  
                    </div>
                </div>
            </div>
        </div>

</template>

<script>


    export default {
        
        components : {
            
       
        },

        data () {

            return {


                pay : '',

                fabulous : 0 ,

                like : 0 ,

                fabulouss : 0 ,

                likes : 0 ,

                show  : false ,

                shows : false ,

                oos   : false ,

                cond  : null ,

                red : [{
                    img : '../../../static/images/percent/1-1.png',
                    fon : '二手笔记本电脑 联想ThinkpadX220 X230 12寸ibm超薄手提上网本【包邮】',
                    ordernum: '订单号：',
                    rent: '租金：￥',
                    deposit : '押金：￥',
                    real : '实付：￥', 
                    oos : '待付款',
                    oox : '立即付款',
                    num : 1565488444321,
                    zu : 120,
                    ya : 1500,
                    shi :1620,
                },{
                    img : '../../../static/images/percent/1-1.png',
                    fon : '二手笔记本电脑 联想ThinkpadX220 X230 12寸ibm超薄手提上网本【包邮】',
                    ordernum: '订单号：',
                    rent: '租金：￥',
                    deposit : '押金：￥',
                    real : '实付：￥', 
                    oos : '待付款',
                    oox : '立即付款',
                    num : 1565488444321,
                    zu : 120,
                    ya : 1500,
                    shi :1620,
                }],
                          
            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {
            
            clis (index) {            

                if (this.red[index].oox == '立即付款') {

                    this.$router.push('/settlement')
                }
            },

            moue (index) {

                this.cond = index

            },

            moul () {

                this.cond = null

                 console.log(55544)
            }

        },

        created () {
            
            if( this.red == 0 ){

                this.pay = 0

            } else {

                this.pay = this.red.length
            }
    
            if (this.pay == '') {

                this.shows = true

                this.red = null

            }else {

                this.show = true

                this.shows = false
            }
            
           
        },

        mounted () {

        }
    }

</script>

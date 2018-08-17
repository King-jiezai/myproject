

<style scoped>

    .member-welfare {
        width: 1200px;
        margin: 0 auto;
        margin-top: 50px;
    }
    .welfare-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .line {
        float: left;
        width:500px;
        height:1px;
        padding:0px;
        background-color:#000;
        overflow:hidden;
        margin-top: 17px;
    }
    .lines {
        float: right;
        width:500px;
        height:1px;
        padding:0px;
        background-color:#000;
        overflow:hidden;
        margin-top: 17px;
    }
    .welfare-cent {
        width: 200px;
        height: 30px;
        line-height: 30px;
        float: left;
    }
    .welfare-cent img{
       margin-left: 5px;
    }
    .welfare-cent span {
        margin: 0 40px;
        font-size: 20px;
        font-weight: bold;
    }
    .welfare-cont {
        width: 100%;
        height: 312px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .welfare-imgs {
        float:  left;
        height: 312px;
        width: 277px;
        margin-right: 30px;
        position: relative;
    }
    .welfare-imgs:hover .mem-receive{
        display: block;
    }
    .welfare-imgs:last-child {
        margin-right: 0px;
    }
    .welfare-texs {
        position: relative;
        height: 84px;
        box-shadow: 0px 2px 1px #ccc;
        margin-top: -7px;
    }
    .welfare-texs .reduce{
        line-height: 48px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #000;
        letter-spacing: 3px;
    }
    .ord-member {
        width: 195px;
        margin: 0 41px;
        height: 36px;
        line-height: 36px;
    }
    .ord-member p:first-child {
        float: left;
    }
    .ord-member p:last-child {
        float: right;
    }
    .mem-receive {
        width: 100%;
        height: 36px;
        line-height: 36px;
        background-color: #e60012;
        color: #fff;
        font-size: 16px;
        text-align: center;
        position: absolute;
        top: 50px;
        cursor: pointer;
        display: none;
    }
    .coupon {
        position: absolute;
        width: 180px;
        height: 80px;
        background-color: #fff;
        top: 75px;
        left: 50px;
        overflow: hidden;
    }
    .coupon img {
        float: left;
        margin: -14px 0 0 -12px;
    }
    .coupon .discount {
        float: left;
        font-size: 22px;
        color: #F8757A;
        margin:10px 0 0px 5px;
    }
    .active-times {
        width: 100%;
        float: left;
        height: 38px;
        text-align: center;
    }

</style>

<template>
    
    <!--member-welfare 会员福利-->
    <div class="member-welfare">
        <div class="welfare-top">
            <div class="line"></div>
            <div class="welfare-cent">
                <img src="../../../../static/images/member/5.png">
                <span>会员福利</span>
                <img src="../../../../static/images/member/5.png">
            </div>
            <div class="lines"></div>
        </div>

        <div class="welfare-cont">
            <div class="welfare-imgs">
                <img src="../../../../static/images/member/2.png">
                <div class="welfare-texs">
                    <p class="reduce">满1000元立减60元</p>
                    <div class="ord-member">
                        <p>{{ member }}</p>
                        <p>积分：{{ integral }}</p>
                    </div>
                    <div class="mem-receive">
                        <p>立即领取</p>
                    </div>
                </div>
                <div class="coupon">
                    <img src="../../../../static/images/member/new.png">
                    <p class="discount">优惠券</p>
                    <div class="active-times">
                        <p>活动时间</p>
                        <p>{{ statrtime }}-{{ endtime }}</p>
                    </div>
                </div>
            </div>
            <div class="welfare-imgs">
                <img src="../../../../static/images/member/3.png">
                <div class="welfare-texs">
                    <p class="reduce">满1000元立减60元</p>
                    <div class="ord-member">
                        <p>{{ member }}</p>
                        <p>积分：{{ integral }}</p>
                    </div>
                    <div class="mem-receive">
                        <p>立即领取</p>
                    </div>
                </div>
                <div class="coupon">
                    <img src="../../../../static/images/member/new.png">
                    <p class="discount">优惠券</p>
                    <div class="active-times">
                        <p>活动时间</p>
                        <p>{{ statrtime }}-{{ endtime }}</p>
                    </div>
                </div>
            </div>
            <div class="welfare-imgs">
                <img src="../../../../static/images/member/4.png">
                <div class="welfare-texs">
                    <p class="reduce">满1000元立减60元</p>
                    <div class="ord-member">
                        <p>{{ member }}</p>
                        <p>积分：{{ integral }}</p>
                    </div>
                    <div class="mem-receive">
                        <p>立即领取</p>
                    </div>
                </div>
                <div class="coupon">
                    <img src="../../../../static/images/member/new.png">
                    <p class="discount">优惠券</p>
                    <div class="active-times">
                        <p>活动时间</p>
                        <p>{{ statrtime }}-{{ endtime }}</p>
                    </div>
                </div>
            </div>
            <div class="welfare-imgs">
                <img src="../../../../static/images/member/2.png">
                <div class="welfare-texs">
                    <p class="reduce">满1000元立减60元</p>
                    <div class="ord-member">
                        <p>{{ member }}</p>
                        <p>积分：{{ integral }}</p>
                    </div>
                    <div class="mem-receive">
                        <p>立即领取</p>
                    </div>
                </div>
                <div class="coupon">
                    <img src="../../../../static/images/member/new.png">
                    <p class="discount">优惠券</p>
                    <div class="active-times">
                        <p>活动时间</p>
                        <p>{{ statrtime }}-{{ endtime }}</p>
                    </div>
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

                member : '普通会员',
            
                integral : 100,

                statrtime : "2018-7-28",

                endtime   : "2018-8-12",
         
            }

        },

        computed : {

        },

        methods : {

   

        },

        created () {

      

            
        },

        mounted () {}

    }

</script>

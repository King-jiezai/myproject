

<style scoped>

    .my-coupon {
        width: 910px;
        position: relative;
    }
    .coupon-top {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #f1f1f1;
        font-size: 14px;
        cursor: pointer;
    }
    .coupon-top p:first-child {
        float: left;
        margin-left: 30px;
        position: relative;
        z-index: 999;    
    }
    .coupon-top p:last-child {
        float: right;
        margin-right: 20px;
        color: #277FFD;
    }
    .coupon-all {
        width: 118px;
        height: 165px;
        background-color: #fff;
        box-shadow: 0px 1px 7px #ccc;
        position: absolute;
        margin: -40px 0 0 13px;
        z-index: 1;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .coupon-tex {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
    }
    .coupon-tex:first-child {
        margin-top: 40px;
    }
    .coupon-tex:hover {
        background-color: #ccc;
        color: #fff;
        font-size: 14px;
    }
    .coupon-null {
        height: 120px;
        width: 100%;
        border: 1px solid #ccc;
        border-top:0px;
        line-height: 120px;
        text-align: center;
        font-size: 16px;
    }
    .coupon-cent {
        overflow: hidden;
        width: 100%;
        border: 1px solid #ccc;
        border-top:0px;
    }
    .coupon-cos {
        float: left;
        width: 240px;
        height: 300px;
        margin:10px 0 30px 47px;
    }
    .cos-top {
        width: 100%;
        height: 160px;
        background-color: #a6c8f4;
    }
    .cos-top img {
        float: right;
        position: relative;
    }
    .cos-price {
        width: 200px;
        margin:30px 0px 0 20px;
        text-align: center;
        position: absolute;
    }
    .cos-price p {
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }
    .cos-price span {
        text-align: center;
        font-size: 40px;
    }
    .cos-time {
        width: 100%;
        float: left;
        padding: 0 10px;
        text-align: center;
        margin-top: 65px;
        color: #fff;
        font-size: 13px;
    }
    .cos-bottom {
        width: 100%;
        height: 140px;
        position: relative;
        background-color: #f1f1f1;
    }
    .cos-bottom .imgs {
        width: 241px;
        position: absolute;
        margin-top: 0px;
    }
    .cos-bottom p {
        width: 100%;
        float: left;
        padding: 0 10px;
        line-height: 20px;
        color: #999;
    }
    .cos-bottom .scope-use {
        margin-top: 25px;
        padding: 0 10px;
        line-height: 20px;
    }
    .cos-bottom .source {
        padding: 0 10px;
        line-height: 25px;
        margin-top: 5px;
    }
    .cos-bottom .source span {
        letter-spacing: 23px;
    }
    .cos-use {
        float: left;
        width: 80px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border:1px solid #ccc;
        margin:10px 80px;
    }
    .coupon-userules {
        width: 600px;
        height: 290px;
        background-color: #fff;
        box-shadow: 0px 1px 3px #666;
        position: absolute;
        top: 40px;
        left: 110px;
        z-index: 1px;
    }
    .userules-top {
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        background-color: #f1f1f1;
    }
    .userules-top p {
        float: left;
        font-size: 16px;
    }
    .userules-top p:last-child {
        float: right;
        cursor: pointer;
    }
    .userules-cent {
        width: 560px;
        height: 210px;
        overflow-y: auto;
        margin: 20px;
        font-size: 14px;
        overflow-x: hidden;
    }
    .userules-cent p {
        line-height: 31px;
        color: #999;
    }

</style>

<template>
    
    <!--my-coupon 我的优惠券-->
    <div class="my-coupon">

        <!--coupon-top 优惠券头部-->
        <div class="coupon-top">
            <p @click.stop="cliall">全部优惠券
                <Icon type="ios-arrow-down" />
            </p>
            <p @click="user">优惠券规则说明</p>
        </div>

        <!--coupon-all 点击全部优惠券弹出优惠券的状态-->
        <div class="coupon-all" v-show="all">
            <div class="coupon-tex" v-for="item in coupon">
                <p>{{ item.fon }}</p>
            </div>
        </div>
        
        <!--coupon-null 没有优惠券-->
        <div class="coupon-null" v-show="one">
            <p>亲！这里好空荡哟~~~</p>
        </div>
        
        <!--coupon-cent 优惠券的内容-->
        <div class="coupon-cent" v-show="two">        
            <div class="coupon-cos" v-for="item in price">

                <!--cos-top 每张优惠券的上门部分内容-->
                <div class="cos-top">
                    <img src="../../../../static/images/member/now.png">
                    <div class="cos-price">
                        <p>￥<span>{{ item.pri }}</span></p>
                        <p>满{{ item.mon }}使用</p>
                    </div>
                    <p class="cos-time"><span>{{ item.stime }}</span>-<span>{{ item.ltime }}</span></p>
                </div>

                <!--cos-bottom 每张优惠券的下门部分内容-->
                <div class="cos-bottom">
                    <img src="../../../../static/images/member/yhq.png" class="imgs">
                    <p class="scope-use">使用范围：在活动期间适用全场产品满<span>{{ item.mon }}</span>元使用</p>
                    <p class="source"><span>来</span>源：促销活动</p>
                    <div class="cos-use">
                        <p>立即使用</p>
                    </div>
                </div>
                
            </div>
        </div>
        
        <!--coupon-userules 优惠券使用规则说明-->
        <div class="coupon-userules" v-show="use">
            <div class="userules-top">
                <p>优惠券使用规则说明</p>
                <p @click="close">X</p>
            </div>

            <!--userules-cent 优惠券使用规则说明的内容-->
            <div class="userules-cent">
                <p>优惠券使用规则说明</p>
                <p>1.优惠券的使用只允许首月租金缴纳，次月租金缴纳不允许使用优惠券。</p>
                <p>2.优惠券使用的金额不开具发票，不做退款处理(不设找零)。</p>
                <p>3.租赁期限在一年及以上可使用优惠券，一年以下短期租赁不可使用。</p>
                <p>4.货到付款不能使用优惠券。</p>
                <p>5.全新商品不能使用优惠券。</p>
                <p>6.优惠券只能抵扣月租金，不能抵扣押金。</p>
            </div>
        </div>
    </div>


</template>

<script>

    import { Icon } from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            Icon
   
        },

        data () {

            return {

                all  : false,

                one  : false,

                two  : false,

                use  : false,

                coupon : [{
                    fon : '全部优惠券'
                },{
                    fon : '未使用'
                },{
                    fon : '已使用'
                },{
                    fon : '已过期'
                }],

                price : [
                // {
                //     pri : '60.00',
                //     mon : 1000,
                //     stime : '2018.07.26 02:00',
                //     ltime : '2018.12.26 12:00'
                // },{
                //     pri : '60.00',
                //     mon : 1000,
                //     stime : '2018.07.26 02:00',
                //     ltime : '2018.12.26 12:00'
                // },{
                //     pri : '60.00',
                //     mon : 1000,
                //     stime : '2018.07.26 02:00',
                //     ltime : '2018.12.26 12:00'
                // }
                ]

            }

        },

        computed : {

            ...mapState([

                'obos'
            ])
        },

        watch : {

            //点击整个页面关闭优惠券的使用状态的弹框
            obos () {

                this.all = false
            }
        },

        methods : {

            //点击全部优惠券打开和关闭优惠券的使用状态的弹框
            cliall () {

                this.all = !this.all
            },

            //点击优惠券使用规则说明打开和关闭优惠券使用规则说明的弹框
            user () {

                this.use = !this.use
            },

            //关闭优惠券使用规则说明的弹框
            close () {

                this.use = false
            }

        },

        created () {

            //判断有没有优惠券，有就显示优惠券的内容，没有就显示空
            if (this.price == 0 ) {

                this.one = true

                this.two = false
            }else {
                this.one = false

                this.two = true
            }
            
        },

        mounted () {}

    }

</script>

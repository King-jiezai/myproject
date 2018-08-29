
<style scoped>

    .fsl-top {
        text-align: center;
        color: #e60012;
        font-size: 18px;
    }
    .fsl-top {
        margin-bottom: 28px;
    }
    .fsl-cent {
        width: 100%;
        font-size: 14px;
    }
    .fsl-cent .cous{
        line-height: 25px;
        margin: 20px 0;
    }
    .fsl-cent span {
        color: #e60012;
    }
    .coupon {
        width: 100%;
        margin-top: 30px;
    }
    .coupon-img {
        width: 735px;
        height: 110px;
        margin: 0 auto;
        background: url(../../../../static/images/222.png);
        padding-top: 1px;
        margin-bottom: 20px;
        background-repeat: no-repeat; 
    }
    .coupon-left {
        float: left;
        width: 116px;
        height: 108.5px;
        text-align: center;
        border:2px solid #44BAAE;
        border-right: 0px;
    }
    .coupon-img:nth-child(3) .coupon-left {
        padding:28px 16px ;
    }
    .coupon-img:nth-child(3) .coupon-left p{
        width: 80px;
        line-height: 25px;
    }
    .coupon-img:nth-child(3) .coupon-left p{
        width: 80px;
        line-height: 25px;
    }
    .coupon-img:nth-child(4) .coupon-left {
        padding:28px 16px ;
    }
    .coupon-img:nth-child(3) .coupon-right p:last-child{
        line-height: 21px;
    }
    .coupon-left p {
        line-height: 108px;
        margin: 0px;
        font-size: 20px;
        color: #3cb3a6;
        font-weight: bold;
    }
    .coupon-right {
        float: left;
        width: 619px;
        height: 110px;
        padding: 10px 30px;
        color: #fff;
    }
    .coupon-right p{
        text-align: center;
        line-height: 30px;
        font-size: 16px
    }
    .coupon-right p:last-child {
        text-align: left;
        font-size: 13px;
        line-height: 24px;
    }

</style>

<template>

    <div class="helpcen-one">
        <div class="fsl-top">优惠券规则</div>
        <div class="fsl-cent">
            <p class="cous"> 优惠券是广租发放给用户或用户通过领取码领取的，用于减免租金支付的惠民措施。优惠券优惠部分不开具发票，以下为广租现有优惠券使用限制条件的详细</p>
            <span>说明（同一优惠券可能会有多个限制）：</span>
            <div class="coupon">
                <div class="coupon-img">
                    <div class="coupon-left">
                        <p>首期</p>
                    </div>
                    <div class="coupon-right">
                        <p>用户在下单支付首期租金时使用</p>
                        <p>例如：10000-100的首期优惠券，订单需支付首期租金需在10000元以上才可以使用，使用后实际支付减免100元；</p>
                    </div>
                </div>
                <div class="coupon-img">
                    <div class="coupon-left">
                        <p>非首期</p>
                    </div>
                    <div class="coupon-right">
                        <p>用户在下单支付非首期租金时使用</p>
                        <p>例如：10000-100的非首期优惠券，在订单支付完成后，产生的月账单租金需在10000元以上才可以使用，使用后实际当月租金支付减免100元；</p>
                    </div>
                </div>
                <div class="coupon-img">
                    <div class="coupon-left">
                        <p>针对新</p>
                        <p>租赁设备</p>
                    </div>
                    <div class="coupon-right">
                        <p>领券时间早于下单时间可以使用</p>
                        <p>例如：2016年3月25日领取的针对新租赁设备的优惠券，可以用于2016年3月25日以后下的订单（比如2016年4月1日）的首期订单及以后每月产生的账单；但是不能用于2016年3月25日以前下的订单（比如2016年2月5日）每月产生的账单。</p>
                    </div>
                </div>
                <div class="coupon-img">
                    <div class="coupon-left">
                        <p>针对</p>
                        <p>新用户</p>
                    </div>
                    <div class="coupon-right">
                        <p>注册用户首次下单可以使用</p>
                        <p>例如：新注册用户在领取了针对新用户的优惠券，在优惠券有效期内，该优惠券可以是用于该用户的第一个订单。</p>
                    </div>
                </div>
            </div>
        </div>    
        
    </div>
   
<!--  -->

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

            }

        },

        methods : {

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>

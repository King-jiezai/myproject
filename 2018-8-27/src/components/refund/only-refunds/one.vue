

<style scoped>

    .only-refunds {
        width: 100%;
        overflow: hidden;
    }
    .only_nav {
        width: 1200px;
        height: 40px;
        float: left;
        position: relative;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .only_one {
        float: left;
        width: 400px;
        height: 40px;
        background-color: #FF0000;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
    .only-one {
        float: left;
        height: 40px;
        width: 380px;
    }
     .only_one img{
        height: 40px;
        float: left;
        position:absolute;
        left:380px;
    }
    .only_two {
        float: left;
        width: 420px;
        height: 40px;
        background-color: #ccc;
        color: #666;
        text-align: center;
        line-height: 40px;
        margin-left: -20px;
    }
    .only-two {
        float: left;
        height: 40px;
        width: 420px;
    }
     .only_two img{
        height: 40px;
        float: left;
        position:absolute;
    }
    .only_three {
        float: left;
        width: 400px;
        height: 40px;
        background-color: #ccc;
        color: #666;
        text-align: center;
        line-height: 40px;
    }
    .only-three {
        float: left;
        height: 40px;
        width: 374px;
    }
    .only_three img{
        height: 40px;
        float: left;
    }
    .only-cent {
        width: 1160px;
        overflow: hidden;
        border: 1px solid #ccc;
        margin: 20px 20px 0 20px;
    }
    .only-left {
        width: 758px;
        float: left;
        overflow: hidden;
    }
    .only-right {
        width: 400px;
        border-left:1px solid #ccc;
        overflow: hidden;
        height: 700px; 
    }
    .left-shopping {
        height: 90px;
        width: 100%;
        margin-top: 20px;
    }
    .refund-shopping {
        width: 140px;
        float: left;
        line-height: 90px;
        text-align: right;
        font-size: 14px;
    }
    .refund-img {
        float: left;
        width: 88px;
        height: 88px;
        border: 1px solid #ccc;
        margin-right: 10px;
    }
    .refund-img img {
        margin: 9px 3px;
    }
    .text {
        width: 520px;
        float: left;
        margin-top: 8px;
    }
    .texts {
        width: 520px;
        float: left;
        margin-top: 10px;
        color: #999;
    }
    .refunds-reasons {
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin-top: 20px;
    }
    .refunds-reasons .reasons {
        width: 140px;
        float: left;
        line-height: 35px;
        text-align: right;
        font-size: 14px;
    }
    .refunds-reasons span {
        color: #e60012;
        margin-right: 2px;
    }
    .refunds-reasons .inpub {
        float: left;
        width: 200px;
        outline: medium;
        padding-left: 10px;
        color: #ccc;
        cursor: pointer;
        height: 35px;
        border-radius: 5px;
        border: 0px;
        border: 1px solid #ccc; 
    }
    .select {
        width: 200px;
        overflow: hidden;
        background-color: #fff;
        border:1px solid #ccc;
        height: 170px;
        overflow-y: auto;
        position: absolute;
        margin-left: 140px;
        margin-top: 30px;
        z-index: 9999;
    }
    .select p {
        padding-left: 30px;
    }
    .select p:hover {
        background-color: #e60012;
        color: #fff;
        cursor: pointer;
    }
    .refunds-amount {
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin-top: 30px;
    }
    .refunds-amount .reasons {
        width: 140px;
        float: left;
        line-height: 35px;
        text-align: right;
        font-size: 14px;
    }
    .refunds-amount span {
        color: #e60012;
        margin-right: 2px;
    }
    .refunds-amount .amount {
        float: left;
        width: 200px;
        outline: medium;
        padding-left: 10px;
        color: #e60012;
        cursor: pointer;
        height: 35px;
        border-radius: 5px;
        border: 0px;
        border: 1px solid #ccc;  
    }
    .freight {
        margin-top: 10px;
        margin-left: 150px;
        color: #999;
        font-size: 14px;
    }
    .refunds-efundment {
        width: 100%;
        height:160px;
        line-height: 35px;
        margin-top: 30px;
    }
    .refunds-efundment p {
        width: 140px;
        float: left;
        line-height: 35px;
        text-align: right;
        font-size: 14px;
    }
    .refunds-efundment span {
        color: #e60012;
        margin-right: 2px;
    }
    .refunds-efundment textarea {
        width: 555px;
        height: 160px;
        outline: medium;
        padding-left: 10px;
        color: #999;
    }
    .refunds-upimg {
        width: 100%;
        height:120px;
        line-height: 35px;
        margin-top: 30px;
    }
    .refunds-upimg p {
        width: 140px;
        float: left;
        line-height: 35px;
        text-align: right;
        font-size: 14px;
    }
    .refunds-upimg span {
        color: #e60012;
        margin-right: 2px;
    }
    .upimg {
        float: left;
    }
    .refunds-sumis {
        width: 166px;
        height: 45px;
        line-height: 45px;
        border-radius: 5px;
        background-color: #e60012;
        color: #fff;
        text-align: center;
        margin: 30px 0 30px 140px;
        font-size: 16px;
        letter-spacing: 2px;
        cursor: pointer;
    }
    .reasons-null {
        float: left;
        height: 30px;
        line-height: 30px;
        color: #e60012;
        margin-left: 20px;
    }
    .inps {
        color: #666!important;
    }
    
    
</style>

<template>

    <!--only-refunds 买家申请仅退款-->
    <div class="only-refunds" @click="only">

        <!--only_nav 买家申请退款步骤-->
        <div class="only_nav">

            <!--only_one 买家申请退款第一步-->
            <div class="only_one">
                <div class="only-one">
                    <p>1.买家申请仅退款</p>
                </div>
                <span><img src="../../../../static/images/refund/111.png"></span>
            </div>
            
            <!--only_two 买家申请退款第二步-->
            <div class="only_two">
                <div class="only-two">
                    <p>2.卖家处理退款申请</p>
                </div>
                <span><img src="../../../../static/images/refund/55.png"></span>
            </div>

            <!--only_three 买家申请退款成功-->
            <div class="only_three">
                <div class="only-three">
                    <p>3.退款完毕</p>
                </div>
            </div>

        </div>

        <!--only-cent 买家申请退款商品详情-->
        <div class="only-cent">

            <!--only-left 左边商品详情-->
            <div class="only-left">
                <div class="left-shopping">
                    <p class="refund-shopping">退款商品：</p>
                    <div class="refund-img">
                        <img :src="imgs">
                    </div>
                    <p class="text">{{ fon }}</p>
                    <p class="texts">租赁方案:</p>
                </div>

                <!--refunds-reasons 退款原因-->
                <div class="refunds-reasons">
                    <p class="reasons"><span class="sp1">*</span>退款原因：</p>
                    <div class="inpub" @click.stop="clses" :class="{'inps': inpus}">
                        <p>{{ val }}</p>
                    </div>
                    <Icon type="ios-arrow-down" />
                    <div class="reasons-null" v-show="reas">
                        <p>请选择退款原因</p>
                    </div>
                    <div class="select" v-show="sels">
                        <p v-for="(item,index) in sel" @click="clisel(index)">{{ item.fon }}</p>
                    </div>
                </div>

                <!--refunds-amount 退款金额-->
                <div class="refunds-amount">
                    <p class="reasons"><span class="sp1">*</span>退款金额：</p>
                    <div class="amount">
                        <p>￥：{{ vals }}</p>
                    </div> 
                </div>
                <p class="freight">最多￥{{ vals}},含发货运费￥{{ mon }}</p>
                
                <!--refunds-efundment 退款说明-->
                <div class="refunds-efundment">
                    <p><span class="sp1">*</span>退款说明：</p>
                    <textarea v-model="value6" placeholder="退款说明"></textarea>
                </div>

                <!--refunds-upimg 上传图片-->
                <div class="refunds-upimg">
                    <p><span class="sp1">*</span>上传图片：</p>
                    <div class="upimg">
                        <zupImg></zupImg>
                    </div>
                </div>

                <!--refunds-sumis 提交-->
                <div class="refunds-sumis" @click="clisum">
                    <p>提交</p>
                </div>
            </div>

            <!--only-right 右边订单详情-->
            <div class="only-right">
                <detailss></detailss>
            </div>
        </div>
        
    </div>

</template>

<script>
    
    import zupImg from '@/components/mylease/upimg/up-img.vue'
    import detailss   from '@/components/refund/refunds-details.vue'
    import {Icon } from 'iview'

    export default {

        components : {

            Icon,
            zupImg,
            detailss
        },

        data () {

            return {
               
                imgs : '../../../../static/images/refund/11.png',

                fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                sel : [{
                    fon : '1.租期到期退租'
                },{
                    fon : '2.提前退货退租'
                },{
                    fon : '3.性能配置不够用/卡机/死机'
                },{
                    fon : '4.多拍/拍错/不想要'
                },{
                    fon : '5.该商品京东降价了'
                },{
                    fon : '6.迟迟没有收到货/不想要了'
                }],

                sels : false,
                
                val  : '请选择',

                inpus : false,

                vals : 2160,

                value6: '',

                mon  : 0,

                reas   : false,

            }
            
        },

        watch : {

    
        },

        computed : {

            
            
        },

        methods : {

            clses () {

                this.sels = !this.sels
      
            },

            clisel (index) {

                this.val = this.sel[index].fon

                this.inpus = true

                if (this.val != '') {

                    this.reas = false
                }

            },

            clisum () {

                if (this.val == '请选择') {

                    this.reas = true
                } else {

                    this.reas = false

                    this.$store.commit('poo', false)

                    setTimeout(() => {
                        this.$store.commit('poo', true)
                    }, 10)

                }
            },

            only () {

                this.sels = false
            }
            
        },

        created () {

            
        },

        mounted () {

        }

    }

</script>

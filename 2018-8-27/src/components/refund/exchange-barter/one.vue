

<style scoped>

    .exchange-barter {
        width: 100%;
        overflow: hidden;
    }
    .barter_nav {
        width: 1200px;
        height: 40px;
        float: left;
        position: relative;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .barter_one {
        float: left;
        width: 400px;
        height: 40px;
        background-color: #FF0000;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
    .barter-one {
        float: left;
        height: 40px;
        width: 380px;
    }
     .barter_one img{
        height: 40px;
        float: left;
        position:absolute;
        left:380px;
    }
    .barter_two {
        float: left;
        width: 420px;
        height: 40px;
        background-color: #ccc;
        color: #666;
        text-align: center;
        line-height: 40px;
        margin-left: -20px;
    }
    .barter-two {
        float: left;
        height: 40px;
        width: 420px;
    }
     .barter_two img{
        height: 40px;
        float: left;
        position:absolute;
    }
    .barter_three {
        float: left;
        width: 400px;
        height: 40px;
        background-color: #ccc;
        color: #666;
        text-align: center;
        line-height: 40px;
    }
    .barter-three {
        float: left;
        height: 40px;
        width: 374px;
    }
    .barter_three img{
        height: 40px;
        float: left;
    }
    .barter-cent {
        width: 1160px;
        overflow: hidden;
        border: 1px solid #ccc;
        margin: 20px 20px 0 20px;
    }
    .barter-left {
        width: 758px;
        float: left;
        overflow: hidden;
    }
    .barter-right {
        width: 400px;
        border-left:1px solid #ccc;
        overflow: hidden;
        height: 700px; 
    }
    .barter-shopping {
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
    .barter-img {
        float: left;
        width: 88px;
        height: 88px;
        border: 1px solid #ccc;
        margin-right: 10px;
    }
    .barter-img img {
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
    .barter-reasons {
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin-top: 20px;
    }
    .barter-reasons .reasons {
        width: 140px;
        float: left;
        line-height: 35px;
        text-align: right;
        font-size: 14px;
    }
    .barter-reasons span {
        color: #e60012;
        margin-right: 2px;
    }
    .barter-reasons .inpub {
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
    .barter-null {
        float: left;
        height: 30px;
        line-height: 30px;
        color: #e60012;
        margin-left: 20px;
    }
    .inps {
        color: #666!important;
    }
    .barter-efundment {
        width: 100%;
        height:160px;
        line-height: 35px;
        margin-top: 30px;
    }
    .barter-efundment p {
        width: 140px;
        float: left;
        line-height: 35px;
        text-align: right;
        font-size: 14px;
    }
    .barter-efundment span {
        color: #e60012;
        margin-right: 2px;
    }
    .barter-efundment textarea {
        width: 555px;
        height: 160px;
        outline: medium;
        padding-left: 10px;
        color: #999;
    }
    .barter-upimg {
        width: 100%;
        height:120px;
        line-height: 35px;
        margin-top: 30px;
    }
    .barter-upimg p {
        width: 140px;
        float: left;
        line-height: 35px;
        text-align: right;
        font-size: 14px;
    }
    .barter-upimg span {
        color: #e60012;
        margin-right: 2px;
    }
    .upimg {
        float: left;
    }
    .barter-sumis {
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
    
    
</style>

<template>

    <!--exchange-barter 买家申请换货-->
    <div class="exchange-barter" @click="only">

        <!--barter_nav 买家申请换货步骤-->
        <div class="barter_nav">

            <!--barter_one 买家申请换货第一步-->
            <div class="barter_one">
                <div class="barter-one">
                    <p>1.买家申请换货</p>
                </div>
                <span><img src="../../../../static/images/refund/111.png"></span>
            </div>
            
            <!--barter_two 买家申请换货第二步-->
            <div class="barter_two">
                <div class="barter-two">
                    <p>2.卖家处理换货申请</p>
                </div>
                <span><img src="../../../../static/images/refund/55.png"></span>
            </div>

            <!--barter_three 买家申请换货成功-->
            <div class="barter_three">
                <div class="barter-three">
                    <p>3.买家确认，换货成功</p>
                </div>
            </div>

        </div>

        <!--barter-cent 买家申请换货商品详情-->
        <div class="barter-cent">

            <!--barter-left 左边商品详情-->
            <div class="barter-left">
                <div class="barter-shopping">
                    <p class="refund-shopping">换货商品：</p>
                    <div class="barter-img">
                        <img :src="imgs">
                    </div>
                    <p class="text">{{ fon }}</p>
                    <p class="texts">租赁方案:</p>
                </div>

                <!--barter-reasons 换货原因-->
                <div class="barter-reasons">
                    <p class="reasons"><span class="sp1">*</span>换货原因：</p>
                    <div class="inpub" @click.stop="clses" :class="{'inps': inpus}">
                        <p>{{ val }}</p>
                    </div>
                    <Icon type="ios-arrow-down" />
                    <div class="barter-null" v-show="reas">
                        <p>请选择换货原因</p>
                    </div>
                    <div class="select" v-show="sels">
                        <p v-for="(item,index) in sel" @click="clisel(index)">{{ item.fon }}</p>
                    </div>
                </div>
                
                <!--barter-efundment 换货说明-->
                <div class="barter-efundment">
                    <p><span class="sp1">*</span>换货说明：</p>
                    <textarea v-model="value6" placeholder="换货说明"></textarea>
                </div>

                <!--barter-upimg 上传凭证-->
                <div class="barter-upimg">
                    <p><span class="sp1">*</span>上传凭证：</p>
                    <div class="upimg">
                        <zupImg></zupImg>
                    </div>
                </div>

                <!--barter-sumis 提交-->
                <div class="barter-sumis" @click="clisum">
                    <p>提交</p>
                </div>
            </div>

            <!--barter-right 右边订单详情-->
            <div class="barter-right">
                <oneDetails></oneDetails>
            </div>
        </div>
        
    </div>

</template>

<script>
    
    import zupImg from '@/components/mylease/upimg/up-img.vue'
    import oneDetails   from '@/components/refund/exchange-barter/one-details.vue'
    import {Icon } from 'iview'

    export default {

        components : {

            Icon,
            zupImg,
            oneDetails
        },

        data () {

            return {
               
                imgs : '../../../../static/images/refund/11.png',

                fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                sel : [{
                    fon : '不喜欢/不想要'
                },{
                    fon : '租赁期间硬件有所损坏'
                },{
                    fon : '收到和商品不符'
                },{
                    fon : '其他'
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

                    this.$store.commit('cli', false)

                    setTimeout(() => {
                        this.$store.commit('cli', true)
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

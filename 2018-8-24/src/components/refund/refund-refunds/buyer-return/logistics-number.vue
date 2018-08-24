

<style scoped>
     
    .body {
        width: 100%;
        overflow: hidden;
    }   
    .logisticss {
        width: 100%;
        overflow: hidden;   
    }
    .left-shopping {
        width: 728px;
        overflow: hidden;
        margin: 0 10px;
        padding: 20px 10px 0 10px;
        margin-bottom: 30px
    }
    .logistics-cent {
        width: 738px;
        overflow: hidden;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
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
    .modify-pss {
        float: left;
        width:85px;
        height: 30px;
        line-height: 30px;
        text-align: right;
        font-size: 14px;
        color: #333;
        margin:0 10px 0 50px;
    }
    .sp1 {
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .logistics-company {
        height: 30px;
        width: 738px;
        line-height: 30px;
        overflow: hidden;
        margin-bottom: 30px;
    }
    .inpcom {
        float: left;
        width: 200px;
        height: 30px;
        line-height: 30px;
        border:1px solid #ccc;
        padding-left: 10px;
        border-radius: 5px;
    }
    .inpcom p {
        float: left;
    }
    .reasons-null {
        float: left;
        height: 30px;
        line-height: 30px;
        color: #e60012;
        margin-left: 20px;
    }
    .select {
        width: 200px;
        height: 150px;
        overflow: hidden;
        background-color: #fff;
        border:1px solid #ccc;
        overflow-y: auto;
        position: absolute;
        z-index: 9999;
        margin: 30px 0 0 145px;
        border-top: 0px;
    }
    .select p {
        padding-left: 40px;
    }
    .select p:hover {
        background-color: #ccc;
        cursor: pointer;
    }
    .inps {
        color: #666!important;
    }
    .logistics-number {
        height: 30px;
        width: 738px;
        line-height: 30px;
        overflow: hidden;
        margin-bottom: 30px;
    }
    .logistics-number input {
        float: left;
        width: 200px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        outline: medium;
        padding-left: 10px;
        border: 0px;
        border:1px solid #ccc;
    }
    .logistics-phone {
        height: 30px;
        width: 738px;
        line-height: 30px;
        overflow: hidden;
        margin-bottom: 30px;
    }
    .logistics-phone input {
        float: left;
        width: 200px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        outline: medium;
        padding-left: 10px;
        border: 0px;
        border:1px solid #ccc;
    }
    ::-webkit-input-placeholder { 
        color:#ccc;
    }
    .submission {
        width: 150px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        background-color: #e60012;
        color: #fff;
        margin: 20px 0 30px 140px;
        text-align: center;
    }

</style>

<template>
    
    <div class="body">
        <!--logisticss 买家退货 填写退货信息-->
        <div class="logisticss" @click="close" v-show="logis">
            <div class="left-shopping">
                <div class="refund-img">
                    <img :src="imgs">
                </div>
                <p class="text">{{ fon }}</p>
                <p class="texts">租赁方案:</p>
            </div>

            <!--logisticss-cent 买家退货内容-->
            <div class="logistics-cent">

                <!--logistics-company 物流公司-->
                <div class="logistics-company">
                    <p class="modify-pss"><span class="sp1">*</span>物流公司：</p>
                    <div class="inpcom" @click.stop="clses" :class="{'inps': inpus}">
                        <p>{{ val }}</p>
                        <Icon type="ios-arrow-down" />
                    </div>
                    <div class="reasons-null" v-show="reas">
                        <p>请选择物流公司</p>
                    </div>
                    <div class="select" v-show="sels">
                        <p v-for="(item,index) in sel" @click="clisel(index)">{{ item.fon }}</p>
                    </div>
                </div>

                <!--logistics-number 物流单号-->
                <div class="logistics-number">
                    <p class="modify-pss"><span class="sp1">*</span>物流单号：</p>
                    <input type="text" placeholder="请填写单号" v-model="number" @blur="blurnum">
                    <div class="reasons-null" v-show="reass">
                        <p>请填写物流单号</p>
                    </div>
                </div>
                
                <!--logistics-phone 联系电话-->
                <div class="logistics-phone">
                    <p class="modify-pss"><span class="sp1">*</span>联系电话：</p>
                    <input type="text" v-model="phone" @blur="blurphone">
                    <div class="reasons-null" v-show="sphone">
                        <p>请填写联系电话</p>
                    </div>
                    <div class="reasons-null" v-show="sphones">
                        <p>手机格式不对</p>
                    </div>
                </div>
                
                <!--submission 提交按钮-->
                <div class="submission" @click="submi"><p>提交</p></div>
            </div>
        </div>

        <!--information 等待商家收货并退款-->
        <div v-show="info"> 
            <information></information>
        </div>        
    </div>

</template>

<script>
    
    import information from '@/components/refund/refund-refunds/buyer-return/logistics-information.vue'
    import { Icon } from 'iview'

    export default {

        components : {

            Icon,
            information
        },

        data () {

            return {

                imgs : '../../../../static/images/refund/11.png',

                fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                val  : '请选择',

                inpus : false,

                reas  : false,

                sels  : false,

                sel : [{
                    fon : '顺丰快递'
                },{
                    fon : '圆通快递'
                },{
                    fon : 'Al万象物流'
                },{
                    fon : '安能物流'
                },{
                    fon : '安世通国际快递'
                },{
                    fon : '安迅物流'
                },{
                    fon : '百世国际'
                },{
                    fon : '百世快递'
                },{
                    fon : '韵达'
                },{
                    fon : '申通'
                },{
                    fon : '中通'
                },{
                    fon : 'EMS'
                },{
                    fon : '优速'
                },{
                    fon : '天天'
                },{
                    fon : '汇通'
                },{
                    fon : '邮政包裹'
                },{
                    fon : '宅急送'
                }],

                info : false,

                logis: true,

                num : false,

                phon: false,

                reass : false,

                sphone: false,

                sphones: false,

                number : '',

                phone : '',
                
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

            close () {

                this.sels = false
            },

            blurnum () {

                if (this.number == '') {

                    this.reass = true
                }else {

                    this.reass = false
                }
            },

            blurphone () {

                let blur = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/

                if (this.phone == '') {

                     this.sphone = true

                     this.sphones = false
                }else {

                    if (blur.test(this.phone)) {

                        this.sphone = false

                        this.sphones= false

                    } else if (!blur.test(this.phone)){

                        this.sphone = false

                        this.sphones = true

                    }
                }

            },

            submi () {

                this.blurnum()

                this.blurphone ()

                if (this.val == '请选择') {

                    this.reas = true
                }else if (this.reass == false && this.sphone == false && this.sphones == false) { 

                    this.info = true

                    this.logis = false

                    this.$store.commit('infor', false)

                    setTimeout(() => {
                        this.$store.commit('infor', true)
                    }, 10)
                }
                
            }
        },

        created () {
            
            

        },

        mounted () {

        }

    }

</script>

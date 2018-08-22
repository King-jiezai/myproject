


<style scoped>
    
    .body {
        width: 910px;
        overflow: hidden;
    }
    .invoice_top {
        height: 40px;
        line-height: 40px;
        background: #eff9fe;
    }
    .invoice_top p {
        float: left;
        margin-left: 16px;
        font-size: 14px;
        cursor: pointer;
    }
    .invoice_top span {
        margin-left: 15px;
        color: #ccc;
    }
    .invoice_top p:nth-child(2) span {
        display: none!important;
    }
    .lon {
        color: #42C9FF;
    }
    .acc-input {
        float: right;
        margin-right: 20px;
    }
    .acc-input .ins {
        width: 223px;
        height: 25px;
        border:1px solid #00b7ee;
        border-radius: 5px;
        padding-left: 10px;
        line-height: 25px;
        margin:7px 0 0 0px;
        outline: medium;
        float: left;
        font-size: 12px;
    }
    .stay-img  {
        width: 40px;
        height: 25px;
        text-align: center;
        background: #02B7EE;
        float: left;
        margin: 7px 0 0 -8px;
        border-radius: 5px;
    }
    .stay-img img {
        margin-top: 4px;
    }

</style>

<template>
  
    <div class="body">

        <!-- invoice_top 头部导航-->
        <div class="invoice_top">
            <p v-for='(item,index) in invo' :class="{'lon' : fons == index}" @click="invos(index)">{{ item.fon }}<span>|</span></p>
            
            <!-- acc-input 搜索订单编号-->
            <div class="acc-input">
                <input class="ins" type="text" placeholder="订单编号">

                <div class="stay-img">
                    <img src="../../../../static/images/order/search.png">
                </div>
            </div>
        </div>
        
        <!-- saleapply 申请售后表-->    
        <div v-if="saleapply">
            <saleapply></saleapply>
        </div>
         
        <!-- applica 申请售后记录表-->             
        <div v-if="applica">
            <saleRecord></saleRecord>
        </div>

    </div>  

</template>

<script>

    import saleRecord from '@/components/orders/myinvoice/sale-record.vue'
    import saleapply  from '@/components/orders/myinvoice/sale-apply.vue'
        
    import { RadioGroup, Radio, Icon } from 'iview'

    export default {

        components : {

            RadioGroup,
            Radio,
            Icon,
            saleapply,
            saleRecord,

        },

        data () {

            return {

                invo : [{
                    fon : '售后申请' 
                },{
                    fon : '售后申请记录' 
                }],

                fons : false,

                applica : false,

                saleapply : true,
                
            }
            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            invos (index) {

                if (this.invo[index].fon == '售后申请') {

                    this.applica = false

                    this.saleapply = true

                } else {
                    
                    this.saleapply = false

                    this.applica = true
                    
                }

                this.fons = index

            }

        },

        created () {

           

        },

        mounted () {

        }

    }

</script>



<style scoped>

    .only-refunds {
        width: 100%;
        overflow: hidden;
    }
    .consult-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .consult-top p:first-child {
        float: left;
        font-size: 16px;
    }
    .consult-top p:last-child {
        float: right;
        color: #32A5FE;
        cursor: pointer;
    }
    .message {
        width: 100%;
        height: 350px;
        margin: 30px 0  10px 0;
        border-radius: 5px;
    }
    .left-history {
        width: 100%;
        height: 150px;
        margin-top: 20px;
        border-bottom: 1px solid #ccc;
    }
    .first-history {
        width: 100%;
        height: 100px;
        margin-top: 20px;
        border-bottom: 1px solid #ccc; 
    }
    .two-history {
        width: 100%;
        height: 120px;
        margin-top: 20px;
        border-bottom: 1px solid #ccc; 
    }
    .two-history .history-cent {
        float: left;
        width: 620px;
        line-height: 20px;
        color: #666;
    }
    .two-history .history-cent span{
        margin: 0 20px 0 50px;
    }
    .history-img {
        float: left;
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }
    .history-name {
        float: left;
        width: 620px;
        height: 20px;
        line-height: 20px;       
    }
    .history-name p:first-child {
        float: left;
        color: #666;
    }
    .history-name p:last-child {
        float: right;
        color: #999;
    }
    .history-name span {
        margin-left: 10px;
    }
    .history-cent {
        float: left;
        font-size: 12px;
        line-height: 20px;
        color: #666;
    }
    .history-cent span {
        margin: 0 3px;
    }
    
</style>

<template>

    <!--only-refunds 买家申请仅退款-->
    <div class="only-refunds">             
        <!--left-consult 协商历史-->
        <div class="left-consult">
            <div class="consult-top">
                <p>协商历史</p>
                <p @click="climess">我要留言</p>
            </div>

            <!--message 留言-->
            <div class="message" v-show="mess">
                <message></message>
            </div>
            
            <!--left-history 协商的数据-->
            <div class="left-history" v-for="item in hess" v-show="fire">
                <div class="history-img">
                    <img :src="item.naimg">
                </div>
                <div class="history-name">
                    <p>{{ item.names }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cent">
                    <p>{{item.enterprise}}</p>
                    <p>物流公司：{{item.cause}}</p>
                    <p>退货单号：{{item.loo}}</p>
                    <p>退款说明：{{item.res}}</p>
                </div>
            </div>

            <!--first-history 商家协商历史-->
            <div class="first-history" v-for="item in ser" v-show="one">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>{{ item.name }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cent">
                    <p>买家{{item.fon}}</p>
                </div>
            </div>
            
            <!--two-history 商家协商历史-->
            <div class="two-history" v-for="item in sers" v-show="two">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>{{ item.name }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cent">
                    <p>{{item.fon}}</p>
                    <p>退货地址：{{item.mname}}，{{item.phone}}，{{item.addr}}<span>{{item.addrs}}，</span>{{item.post}}</p>
                    <p>{{item.texs}}</p>
                </div>
            </div>

            <!--left-history 协商的数据-->
            <div class="left-history" v-for="item in his" v-show="three">
                <div class="history-img">
                    <img :src="item.naimg">
                </div>
                <div class="history-name">
                    <p>{{ item.names }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cent">
                    <p>买家({{item.names}})于{{ item.datas }}<span>{{ item.time }}</span>{{item.fon}}了退款申请</p>
                    <p>退款类型：{{item.enterprise}}</p>
                    <p>退货金额：{{item.loo}}</p>
                    <p>退款原因：{{item.cause}}</p>
                    <p>退款描述：{{item.describe}}</p>
                </div>
            </div>

            <!--left-history 协商的数据-->
            <div class="left-history" v-for="item in hiss" v-show="four">
                <div class="history-img">
                    <img :src="item.naimg">
                </div>
                <div class="history-name">
                    <p>{{ item.names }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cent">
                    <p>买家({{item.names}})于{{ item.datas }}<span>{{ item.time }}</span>{{item.fon}}了退款申请</p>
                    <p>退款类型：{{item.enterprise}}</p>
                    <p>退货金额：{{item.loo}}</p>
                    <p>退款原因：{{item.cause}}</p>
                    <p>退款描述：{{item.describe}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    
    import message   from '@/components/refund/refund-refunds/leaving-message.vue'

    import { mapState } from 'vuex'

    export default {

        components : {

            message

        },

        data () {

            return {

                mess : false,

                one : false,

                two : false,

                three : false,

                four : false,

                fire : false,
               
                his : [{

                    names : "Dg_晴天",

                    datas : '2018-8-08',

                    time : '13:50:00',

                    state: '未发货',

                    naimg : '../../../../static/images/refund/999.jpg',

                    enterprise :'仅退款',

                    cause : '不想要了',

                    loo : 2160,

                    describe : '并授权卖家填写运单号',

                    fon : '创建'
                }],

                hiss : [{

                    names : "Dg_晴天",

                    datas : '2018-8-08',

                    time : '13:50:00',

                    state: '未发货',

                    naimg : '../../../../static/images/refund/999.jpg',

                    enterprise :'仅退款',

                    cause : '不想要了',

                    loo : 2160,

                    describe : '并授权卖家填写运单号',

                    fon : '修改'
                }],

                hess : [{

                    names : "Dg_晴天",

                    datas : '2018-8-08',

                    time : '13:50:00',

                    naimg : '../../../../static/images/refund/999.jpg',

                    enterprise :'买家已退货',

                    cause : '顺丰快递',

                    loo : '12365444455',

                    res : '',

                    
                }],

                ser : [{
                    name : '广租',
                    datas : '2018-08-04',
                    time : '13:50:00',
                    imgs : '../../../../static/images/refund/777.jpg',
                    fon  : '买家购物行为为评价良好，享受7天退换0秒响应服务'
                }],

                sers :[{
                    name : '广租',
                    datas : '2018-08-04',
                    time : '13:50:00',
                    imgs : '../../../../static/images/refund/777.jpg',
                    fon  : '买家购物行为为评价良好，享受7天退换0秒响应服务',
                    mname: '王先生',
                    phone: '15913422512',
                    addr : '广东省广州市',
                    addrs: '天河区石牌西路8号',
                    post : '210630',
                    texs : '请将退货商品包装好，且商品不影响二次销售；请勿发平邮或付件，商品寄出后，需及时在每笔退款上操作，填写物流信息；以免退款超时关闭'
                }],

            }
            
        },

        watch : {

            res () {

                this.three = true

            },

            next () {

                this.one = true

                this.two = true

                this.three = true

                this.four = true
            },

            infor () {

                this.one = true

                this.two = true

                this.three = true

                this.four = false

                this.fire = true
            }
    
        },

        computed : {
            
            ...mapState([

                'res',

                'next',

                'infor'

            ])
        },

        methods : {
           
            climess () {
                this.mess = !this.mess
            },
        },

        created () {
            
        
        },

        mounted () {

        }

    }

</script>

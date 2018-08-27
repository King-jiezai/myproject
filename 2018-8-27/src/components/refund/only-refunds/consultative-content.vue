

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
    .first-history {
        width: 100%;
        height: 100px;
        margin-top: 20px;
        border-bottom: 1px solid #ccc; 
    }
    .history-cents {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
    }
    .history-cents p {
        float: left;
    }
    .history-cents span {
        color: #32A5FE;
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
        <!--left-consult 协商记录-->
        <div class="left-consult">
            <div class="consult-top">
                <p>协商记录</p>
                <p @click="climess">我要留言</p>
            </div>

            <!--message 留言-->
            <div class="message" v-show="mess">
                <message></message>
            </div>

            <!--first-history 商家协商记录内容-->
            <div class="first-history" v-for="item in serss" v-show="two">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>{{ item.name }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cent">
                    <p>商家主动同意，退款给买家{{item.fon}}元。</p>
                </div>
            </div>

            <!--first-history 商家协商记录内容-->
            <div class="first-history" v-for="item in hoss" v-show="four">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>{{ item.name }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cent">
                    <p>{{item.fon}}</p>
                </div>
            </div>

            <!--first-history 商家协商记录内容-->
            <div class="first-history" v-for="item in sers" v-show="three">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>{{ item.name }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cent">
                    <p>{{item.fon}}</p>
                </div>
            </div>

            <!--first-history 商家协商记录内容-->
            <div class="first-history" v-for="item in his" v-show="one">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>{{ item.name }}</p>
                    <p>{{ item.datas }}<span>{{ item.time }}</span></p>
                </div>
                <div class="history-cents">
                    <p>发起了<span>{{item.enterprise}}</span>申请，</p>
                    <p>货物状态：<span>{{item.state}}</span>，</p>
                    <p>原因：<span>{{item.cause}}</span>，</p>
                    <p>金额：<span>{{item.loo}}</span>元</p>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    
    import message   from '@/components/refund/leaving-message.vue'

    import { mapState } from 'vuex'

    export default {

        components : {

            message

        },

        data () {

            return {

                mess : false,

                one : true,

                two : false,

                three : false,

                four : false,
               
                his : [{

                    name : "Dg_晴天",
                    datas : '2018-8-08',
                    time : '13:50:00',
                    state: '未发货',
                    imgs : '../../../../static/images/refund/999.jpg',
                    enterprise :'仅退款',
                    cause : '不想要了',
                    loo : 2160,

                }],

                hoss : [{
                    name : 'Dg_晴天',
                    datas : '2018-08-04',
                    time : '13:50:00',
                    imgs : '../../../../static/images/refund/999.jpg',
                    fon  : '买家主动撤销了退货申请',
                }],

                sers : [{
                    name : '广租',
                    datas : '2018-08-04',
                    time : '13:50:00',
                    imgs : '../../../../static/images/refund/777.jpg',
                    fon  : '商家同意了本次售后服务申请',
                }],

                serss : [{
                    name : '广租',
                    datas : '2018-08-04',
                    time : '13:50:00',
                    imgs : '../../../../static/images/refund/777.jpg',
                    fon  : 2160,
                }],


            }
            
        },

        watch : {

            res () {

                this.one = true

            },

            next () {

                this.one = true

                this.two = true

                this.three = true
            },

            rch () {

                this.one = true

                this.four = true
            }
    
        },

        computed : {
            
            ...mapState([

                'res',

                'next',

                'rch'

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

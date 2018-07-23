


<style scoped>

    .order_account {
        width: 910px;
        overflow: hidden;
    }
    .account_top {
        height: 47px;
        background: #ECF9FF;
    }
    .account_txt {
        float: left;
        width: 70%;
        height: 47px;
        line-height: 47px;
        padding-left: 20px;
    }
    .account_txt p {
        width:170px;
        float: left;
        font-size: 16px;
    }
    .account_txt span {
        color:#e60012;
    }
    .account_rech {
        float: left;
        width: 60px;
        height: 25px;
        border:1px solid #e60012;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        color: #000;
        margin: 12px 0px 12px 120px;
        cursor: pointer;
    }
    .account_rechs {
        float: left;
        width: 60px;
        height: 25px;
        border:1px solid #e60012;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        color: #000;
        margin: 12px 10px;
        cursor: pointer;
    }  
    .rech {
        color: #e60012;
        margin: 25px 0 5px 20px;
    }
    .account_all {
        overflow: hidden;
    }
    .all-nav {
        height: 35px;
        background: #EEEEEE;
        line-height: 35px;
        padding: 0 10px;
    }
    .all-nav p {
        float: left;
        width: 125px;
        text-align: center;
    }
    .all-nav p:nth-child(1) {
        width: 150px;
        padding-left: 10px;
        text-align: left;
    }
    .all-nav p:nth-child(2) {
        width: 150px;
    }
    .all-nav p:nth-child(7) {
        width: 88px;
    }
    .all_cont {
        overflow: hidden;
        border: 1px solid #ccc;
        border-top: 0px;
    }
    .all-cont {
        margin: 0 0 0 10px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px dashed #ccc;
    }
    .all-cont:last-child {
        border-bottom:0px;
    }
    .all-cont p {
        float: left;
        width: 125px;
        text-align: center;
    }
    .all-cont p:nth-child(1) {
        width: 150px;
        padding-left: 10px;
        text-align: left;
    }
    .all-cont p:nth-child(2) {
        width: 150px;
    }
    .all-cont p:nth-child(4) {
        color: #e60012;
    }
    .all-cont p:nth-child(5) {
        color: #e60012;
    }
    .all-cont p:nth-child(7) {
        width: 88px;
    }
        
</style>

<template>
 

        <div class="account_cont">
             <div class="account_top">
                <div class="account_txt">
                    <p>账户余额：<span>￥{{acc}}</span></p>
                    <p>账户状态：<span>{{tai}}</span></p>
                </div>
                <div class="account_rech" @click="rechss">
                        <p>{{rech}}</p>
                </div>
                 <div class="account_rechs" @click="forup">
                        <p>{{rechs}}</p>
                </div>        
            </div>

            <p class="rech">充值记录</p>   

            <div class="account_all">
                 <div class="all-nav">
                   <p>交易时间</p>
                   <p>交易单号</p>
                   <p>支付类型</p>
                   <p>充值金额</p>
                   <p>赠送金额</p>
                   <p>账户余额</p>
                   <p>操作</p>
                </div>
                <div class="all_cont">
                    <div class="all-cont" v-for="item in res">
                        <p>{{ item.time     }}</p>
                        <p>{{ item.num      }}</p>
                        <p>{{ item.type     }}</p>
                        <p>￥+{{ item.recn  }}.00</p>
                        <p>￥+{{ item.give  }}</p>
                        <p>￥{{ item.balance}}</p>
                        <p>{{ item.oper     }}</p>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>

    import {Icon} from 'iview'
    export default {

        components : {

            Icon

        },

        data () {

            return {

                acc : 1000,

                tai : "有效",

                rech : '充值',

                rechs : '提现',
        
                res :  [
                    {
                        time : '2018-7-12 12:14:26',
                        num  : '165545668874465',
                        type : '银行卡',
                        recn : 100,
                        give : 200,
                        balance : 300,
                        oper : '充值'
                    },{
                        time : '2018-7-12 12:14:26',
                        num  : '165545668874465',
                        type : '银行卡',
                        recn : 100,
                        give : 200,
                        balance : 300,
                        oper : '提现'
                    }, {
                        time : '2018-7-12 12:14:26',
                        num  : '165545668874465',
                        type : '银行卡',
                        recn : 100,
                        give : 200,
                        balance : 300,
                        oper : '充值'
                    },{
                        time : '2018-7-12 12:14:26',
                        num  : '165545668874465',
                        type : '银行卡',
                        recn : 100,
                        give : 200,
                        balance : 300,
                        oper : '提现'
                    }
                ]

            }

            
        },

        watch : {

        },

        computed : {

        },

        methods : {

            rechss () {

                if (this.rech == '充值') {

                    this.$store.commit('rch',false)

                    setTimeout(() => {
                        this.$store.commit('rch',true)
                    }, 10)


                }
            },

            forup () {

                if (this.rechs == '提现') {

                    this.$store.commit('up',false)

                    setTimeout(() => {
                        this.$store.commit('up',true)
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

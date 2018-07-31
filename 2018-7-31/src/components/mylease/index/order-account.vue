


<style scoped>

    .body {
        width: 100%;
        overflow: hidden;
    }
    .order_account {
        width: 910px;
        overflow: hidden;
        border:1px solid #ccc;
    }
    .account_top {
        height: 87px;
    }
    .account_txt {
        float: left;
        width: 70%;
        height: 47px;
        line-height: 47px;
        margin: 20px 0 20px 10px; 
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
        background: #e60012;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        margin: 30px 0;
        cursor: pointer;
    }
    .account_rechs {
        float: left;
        width: 60px;
        height: 25px;
        background: #e60012;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        margin: 30px 0 30px 20px;
        cursor: pointer;
    }   
    .check {
        float: right;
        line-height: 87px;
        margin-right: 20px;
        font-size: 14px;
        color: #43C3F0;
        cursor: pointer;
    }
    .account_nav {
        height: 42px;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
    }
    .account_nav div {
        float: left;
        width: 300px;
        height: 42px;
        line-height: 42px;
        font-size: 14px;
        text-align: center;
    }
    .account_nav div:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .account_nav div:nth-child(2) p{
        float: left;
        margin-left: 50px;
    }
    .account_nav span {
        color: #e60012;
        font-size: 16px;
    }
    .details {
        color: #e60012;
        font-size: 14px;
        cursor: pointer;
    }
    .account_income {
        height: 38px;
        line-height: 38px;
        background: #E6F7FF;
        margin-top: 25px;
        font-size: 14px;
    }
    .account_income .acc-left {
        float: left;
        width: 400px;
        margin-left: 10px;
    }
    .account_income .acc-left p {
        float: left;
        font-size: 14px;
    }
     .account_income .acc-left span {
       padding: 1px 1px;
       background: #666;
       margin: 0 10px;
    }
    .acc-right {
        width: 498px;
        float: left;
    }
    .acc-right p{
        float: left;
    }
    .acc-input .ins {
        width: 223px;
        height: 25px;
        border:1px solid #00b7ee;
        border-radius: 5px;
        padding-left: 10px;
        line-height: 25px;
        margin:7px 0 0 50px;
        outline: medium;
        float: left;
        font-size: 12px;
    }
    .stay-img  {
        width: 36px;
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
    .icon {
        margin: 9px 5px 0 20px; 
        float: left;
        color: #02B7EE;
        font-size: 18px;
    }
    .all {
        cursor: pointer;
        margin-left: 20px;
    }
    .all span{
        margin-left: 5px;
        color: #ccc;
    }
    .export {
        color: #02B7EE;
    }
    .account_bottom {
        height: 85px;
    }
    .acc-nav {
        height: 35px;
        background: #EEEEEE;
        line-height: 35px;
        margin-top: 25px;
        font-size: 14px;
    }
    .acc-nav p:first-child {
        margin-left: 10px;
        text-align: left;
    }
    .acc-nav p:last-child {
        text-align: right;
        padding-right: 10px;
    }
    .acc-nav p {
        float: left;
        width: 175px;
        text-align: center;
    }
    .acc-cont {
        height: 50px;
        line-height: 50px;
    }
    .acc-cont p {
        text-align: center;
    }
    .account_all {
        margin-top: 25px;
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
        text-align: left;
    }
    .all-nav p:nth-child(2) {
        width: 150px;
    }
    .all-nav p:nth-child(7) {
        width: 88px;
    }
    .all-cont {
        margin: 0 10px;
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
        <div class="order_account" >
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

                <p class="check" @click="checre">{{chec}}</p>    

            </div>
                <div class="account_nav">
                    <div> 
                        <p>冻结金额：<span>￥{{frozen}}.00</span></p>
                    </div>
                    <div>
                        <p>免押金额度：<span>￥{{exe}}.00</span></p>
                        <p class="details">详情</p>
                    </div>
                    <div> 
                        <p>可用免押金额度：<span>￥{{kexe}}.00</span></p>
                    </div>
                </div> 

                <div class="account_income">
                    <div class="acc-left">
                       <p>所有收支<span></span></p>
                       <p>收入<span></span></p>
                       <p>支付</p>
                    </div>
                    <div class="acc-right">
                       <p class="all" @click="recond">所有记录<span><Icon type="arrow-down-b"></Icon></span></p>
                       <div class="acc-input">
                            <input class="ins" type="text" placeholder="订单号 / 交易订单号">

                            <div class="stay-img">
                                <img src="../../../../static/images/order/search.png">
                            </div>
                        </div>
                        <Icon type="ios-upload-outline" class="icon"></Icon>
                        <p class="export">导出明细</p>

                   </div>
                </div>

                <div class="account_bottom" v-show="note">
                    <div class="acc-nav">
                       <p>交易时间</p>
                       <p>交易单号</p>
                       <p>金额变化</p>
                       <p>账户余额</p>
                       <p>备注</p>
                    </div>
                    <div class="acc-cont">
                        <p>暂无信息！</p>      
                   </div>
                </div>
                <div class="account_all" v-show="alls">
                     <div class="all-nav">
                       <p>交易时间</p>
                       <p>交易单号</p>
                       <p>支付类型</p>
                       <p>充值金额</p>
                       <p>赠送金额</p>
                       <p>账户余额</p>
                       <p>操作</p>
                    </div>
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
                <div class="account_all" v-show="allss">
                     <div class="all-nav">
                       <p>交易时间</p>
                       <p>交易单号</p>
                       <p>支付类型</p>
                       <p>充值金额</p>
                       <p>赠送金额</p>
                       <p>账户余额</p>
                       <p>操作</p>
                    </div>
                    <div class="all-cont" v-for="item in reo">
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
   
</template>

<script>


    import {Icon} from 'iview'

    export default {

        components : {

            Icon,
          
        },

        data () {

            return {

                acc : 1000,

                tai : "有效",

                frozen : 0,

                exe :  0,

                kexe : 0,

                rech : '充值',

                rechs : '提现',

                note : true,

                alls  : false,

                allss : false ,

                chec  : "查看充值明细",

                res :  [
                    // {
                    //     time : '2018-7-12 12:14:26',
                    //     num  : '165545668874465',
                    //     type : '银行卡',
                    //     recn : 100,
                    //     give : 200,
                    //     balance : 300,
                    //     oper : '充值'
                    // },{
                    //     time : '2018-7-12 12:14:26',
                    //     num  : '165545668874465',
                    //     type : '银行卡',
                    //     recn : 100,
                    //     give : 200,
                    //     balance : 300,
                    //     oper : '提现'
                    // }
                ],

                reo :  [
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
            },

            recond () {

                this.allss = !this.allss

                if (this.res == 0) {

                    this.note = !this.note

                    this.alls = false
                }else {
                    this.alls = !this.alls

                    this.note = false
                }
              
            },

            checre () {

                if (this.chec == '查看充值明细') {

                    this.$store.commit('checres',false)

                    setTimeout(() => {
                        this.$store.commit('checres',true)
                    }, 10)

                }
            }
    
        },

        created () {

           if (this.res == 0) {

                this.alls = false

                this.note = true

           }else {
                this.alls = true

                this.note = false
           }
          
        },

        mounted () {

        }

    }

</script>

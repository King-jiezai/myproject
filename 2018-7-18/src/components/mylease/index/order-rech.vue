


<style scoped>

    .order_account {
        width: 910px;
        overflow: hidden;
    }
    .account_top {
        background: #f1f1f1;
        height: 47px;
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
    .account_rechs {
        float: left;
        width: 55px;
        height: 25px;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        color: #000;
        cursor: pointer;
        border:1px solid #ccc;
        margin: 12px 0;
        margin-left: 90px;
    }   
    .check {
        float: left;
        line-height: 47px;
        margin-left:20px ;
        font-size: 14px;
        color: #e60012;
        cursor: pointer;
    }
    .account_cont {
        width: 100%;
        overflow: hidden;
    }
    .account_step {
        height: 78px;
        border-bottom: 1px solid #ccc;
    }
    .step_nav {
        width: 361px;
        height: 30px;
        margin: 24px 0;
        float: right;
        position: relative;
    }
    .step-one {
        float: left;
        height: 24px;
        width: 100px;
        background: #0293D4;
        margin: 3px 0;
        line-height: 24px;
        color: #fff;
        text-align: center;   
    }
    .step-two {
        float: left;
        height: 24px;
        width: 100px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        padding-left: 30px; 
    }
    .step-three {
        float: left;
        height: 24px;
        width: 100px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        padding-left: 30px;  
    }
    .step_one img{
        height: 24px;
        display:block;
        position:absolute;
        top:3px;
        left:100px;
    }
    .step_two img{
        height: 24px;
        display:block;
        position:absolute;
        top:3px;
        left:200px;
    }
    .step_one {
        float: left;
        width: 117px;
    }
    .step_two {
        float: left;
        width: 117px;
        margin-left: -17px;
    }
    .step_three {
        float: left;
        width: 117px;
        margin-left: -17px;
    }
    .account_rech {
        margin: 43px 0 37px 20px;
    }
    .account_jine {
        margin: 0px 0 0px 20px;
        line-height: 37px;
    }
    .account_jine p:last-child{
        color: #999;
    }
    .ins {
        width: 220px;
        height: 37px;
        line-height: 37px;
        padding-left: 10px;
        outline: medium;
        margin-right: 10px;
    }
    .next {
        height: 37px;
        width: 100px;
        line-height: 37px;
        text-align: center;
        background: #e60012;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        margin: 37px 0 0 80px ;
    }
        
</style>

<template>

    <div class="order_account">
        <div class="account_top">
            <div class="account_txt">
                <p>账户余额：<span>￥{{acc}}</span></p>
                <p>账户状态：<span>{{tai}}</span></p>
            </div>
            <div class="account_rechs" @click="forup">
                    <p>{{rechs}}</p>
            </div>
            <p class="check" @click="checre">{{chec}}</p>          
        </div>

        <div v-if="one">
            <accountOne></accountOne>
        </div>
         <div v-if="two">
            <accountTwo></accountTwo>
        </div>
         <div v-if="three">
            <accountThree></accountThree>
        </div>
   
    </div>

</template>

<script>

    import accountOne from '@/components/mylease/acount/acount-one.vue'
    import accountTwo from '@/components/mylease/acount/acount-two.vue'
    import accountThree from '@/components/mylease/acount/acount-three.vue'


    import {Icon} from 'iview'
    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
            accountOne,
            accountTwo,
            accountThree,
    

        },

        data () {

            return {

                acc : 1000,

                tai : "有效",

                dispaly : false,

                one : true,

                two : false,

                three : false,

                four : false,

                rechs : '提现',

                accou : 'D-1230',

                chec : "查看充值明细"

            }

            
        },

        watch : {

            nexts () {

                this.one = false

                this.two = true

            },

            nexttwo () {
                   
                this.two = false

                this.three = true
            }
        },

        computed : {

             ...mapState([

                'nexts', 

                'nexttwo',              

            ])
        },

        methods : {

            checre () {

                if (this.chec == '查看充值明细') {

                    this.$store.commit('checres',false)

                    setTimeout(() => {
                        this.$store.commit('checres',true)
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

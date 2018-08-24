


<style scoped>

    .account_forward {
        width: 910px;
        overflow: hidden;
        font-size: 14px;
    }
    .forward-left {
        width: 70px;
        float: left;
        margin-top: 30px;

    }
    .forward-left p {
        float: left;
        margin-top: 3px;
    }
    .forward-right {
        float: left;
        margin-top: 30px;
    }
    .ins {
        width: 250px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        margin-right: 10px;
        outline: medium;
    }
    .forward-right span {
        margin-left: 10px;
    }
    .up-p {
        color: #e60012;
        font-size: 12px;
        margin:5px 0 0 10px;
    }
    .forward-up {
        margin-top: 30px;
        width: 100px;
        height:30px;
        background: #e60012;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
    .styls {
        border:1px solid #e60012;
    }
    .prompt {
        float: left;
        margin-top: 30px;
        color: #999;
        font-size: 13px;
    }
    .prompt p {
        line-height: 25px;
    }
        
</style>

<template>
 
    <div class="account_forward">     
        <p>提现申请</p>
        <div class="forward-left">
            <p>我要提现：</p>
        </div>
        <div class="forward-right">
            <p><input type="text" class="ins" v-model="cont" :class="{'styls': vabl}">元<span>( 最大可提现金额：0.00元 )</span></p>
            <p class="up-p" v-show="show">请输入提现金额</p>
            <div class="forward-up">
                <p @click="upfors">提现申请</p>
            </div>
        </div>
        <div class="prompt">
            <p>温馨提示：</p>
            <p>1.提现申请审核通过后，可提现金额及余额会立刻减少，提现金额到达提现账户的时间则要视情况而定，请关注提现账户是否到账，如未到账，请咨询客服；</p>
            <p>2.提现金额输入值必须小于或等于可提现金额</p>
            <p>3.提现金额将按照充值路劲退回到充值账户</p>
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

                cont : '',

                show : false,

                vabl : false
              
            }
            
        },

        watch : {

        },

        computed : {

        },

        methods : {

            upfors () {

                if (this.cont == 0) {

                    this.show = true
                    this.vabl =true

                } else {

                    this.show = false
                    this.vabl =false
                    
                }

            }

           
        },

        created () {

        },

        mounted () {

        }

    }

</script>

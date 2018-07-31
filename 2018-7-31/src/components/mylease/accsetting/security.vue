







<style scoped>

    .security {
        width: 910px;
        overflow: hidden;
    }
    .hear {
        width: 910px;
        height: 38px;
        font-size: 16px;
        line-height: 38px;
        padding: 0 15px;
        background: #FEF4F3;
    }
    .sec_hear {
        overflow: hidden;
        padding: 50px 50px 40px;
        border-bottom: 1px solid #ccc;
    }
    .sec_hear_left {
        float: left;
        line-height: 24px;
    }
    .sec_hear_left span {
        float: left;
        color: #000;
        font-size: 16px;
    }
    .sec_hear_left p {
        float: left;
        color: #999;
        margin-left: 15px;
    }
    .sec_hear_right {
        width: 68px;
        line-height: 24px;
        text-align: center;
        float: right;
        color: #0891fb;
        cursor: pointer;
    }
    .sec_box {
        overflow: hidden;
        padding: 50px 50px 40px;
        border-bottom: 1px solid #ccc;
    }
    .sec_box_left {
        float: left;
    }
    .sec_box_left span {
        float: left;
        font-size: 16px;
        color: #000;
    }
    .sec_box_left p {
        float: left;
        line-height: 24px;
        margin-left: 15px;
        color: #999;
    }
    .sec_box_bos {
        float: right;
    }
    .sec_box_cen {
        color: #000;
        font-size: 14px;
        float: left;
        margin-right: 80px;
    }
    .sec_box_cen img {
        position: relative;
        top: 3px;
    }
    .sec_box_right {
        color: #fff;
        padding: 3px 10px;
        background: #E03F51;
        border-radius: 5px;
        float: right;
        cursor: pointer;
    }

</style>

<template>

    <div class="security">
        <div class="hear">安全中心</div>

        <div class="sec_hear">
            <div class="sec_hear_left">
                <span>登录密码</span>
                <p>为了账户更加安全，建议您定期更换密码。</p>
            </div>

            <p class="sec_hear_right" @click="modifypass">修改</p>
        </div>

        <div class="sec_box">
            <div class="sec_box_left">
                <span>邮箱验证</span>
                <p>邮箱验证方便您及时接收优惠促销信息，以及积分、优惠劵和账户余额变动的提醒。</p>
            </div>

            <div class="sec_box_bos">
                <div class="sec_box_cen">
                    <img src="../../../../static/images/pre/2.png">
                    <span>未验证</span>
                </div>

                <div class="sec_box_right" @click="modifymail">立即验证</div>
            </div>
        </div>

        <div class="sec_box">
            <div class="sec_box_left">
                <span>手机验证</span>
                <p>您验证的手机：15766509816</p>
            </div>

            <div class="sec_box_bos">
                <div class="sec_box_cen">
                    <img src="../../../../static/images/pre/3.png">
                    <span>已验证</span>
                </div>

                <p class="sec_hear_right" @click="modifyphone">修改</p>
            </div>
        </div>

        <div class="sec_box">
            <div class="sec_box_left">
                <span>支付密码</span>
                <p>设置支付密码能有效的保障账户安全，在使用充值、提现等操作时需要输入支付密码。</p>
            </div>

            <div class="sec_box_bos">
                <div class="sec_box_cen">
                    <img src="../../../../static/images/pre/2.png">
                    <span>未验证</span>
                </div>

                <div class="sec_box_right" @click="modifypay">立即验证</div>
            </div>
        </div>

        <div class="sec_box">
            <div class="sec_box_left">
                <span>实名验证</span>
                <p>完成实名验证，可享受更多权益，保障账户安全。</p>
            </div>

            <div class="sec_box_bos">
                <div class="sec_box_cen">
                    <img src="../../../../static/images/pre/2.png">
                    <span>未验证</span>
                </div>

                <div class="sec_box_right" @click="modifyname">立即验证</div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {

        components : {

        },

        data () {

            return {

            }

        },

        methods : {

            modifypass () {

                this.$store.commit('modifypass',false)

                setTimeout(() => {
                        this.$store.commit('modifypass',true)
                }, 10)
            },

            modifymail () {

                 this.$store.commit('modifymail',false)

                setTimeout(() => {
                        this.$store.commit('modifymail',true)
                }, 10)
            },

            modifypay () {

                this.$store.commit('modifypay',false)

                setTimeout(() => {
                        this.$store.commit('modifypay',true)
                }, 10)

            },

             modifyphone () {

                this.$store.commit('modifyphone',false)

                setTimeout(() => {
                        this.$store.commit('modifyphone',true)
                }, 10)
            },

             modifyname () {

                this.$store.commit('modifyname',false)

                setTimeout(() => {
                        this.$store.commit('modifyname',true)
                }, 10)
            }
        },

        created () {
            
        },

        mounted () {

        }

    }

</script>

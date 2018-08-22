

<style scoped>

    .member-promote {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
    }
    .promote-cent {
        float: left;
        width: 232px;
        height: 280px;
        background-color: #fff;
        margin: 4px;
        cursor: pointer;
    }
    .promote-cent:hover {
        float: left;
        width: 232px;
        height: 280px;
        margin: 4px;
        background-color: #f5f5f5;
        box-shadow: 0 0px 16px #ddd;       
    }
    .promote-cent img {
        margin:30px 81px;
    }
    .promote-cent:hover .shopping-member{
        font-size: 18px;
        font-weight: bold;      
    }
    .shopping-member {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 16px;
    }
    .shopping-more {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        padding:0 10px;
        font-size: 14px;
        color: #999;       
    }
    .shopping-more p {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .line {
        width: 30px;
        height: 3px;
        background-color:#000;
        margin: 0 auto;
        margin-top: 10px;   
    }
    .promote-go {
        width: 80px;
        height: 30px;
        line-height: 27px;
        margin:0 auto;
        border:2px solid #e60012;
        border-radius: 20px;
        color: #e60012;
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
    }

</style>

<template>
    
    <!--member-promote 会员提升-->
    <div class="member-promote">
        <div class="promote-cent" v-for="(item,index) in prom">
            <img :src="item.imgs">
            <div class="shopping-member">
                <p>{{ item.memb }}</p>
            </div>
            <div class="shopping-more">
                <p>{{ item.shop}}</p>
            </div>
            <div class="line">
            
            </div>
            <div class="promote-go" @click="go(index)">
                <p>{{ item.fon }}</p>
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

                prom : [{
                    imgs : '../../../../static/images/member/101.png',
                    memb : '购物积分',
                    shop : '购物越多，(实际支付金额)获得积分越多',
                    fon  : '去购物'
                },{
                    imgs : '../../../../static/images/member/102.png',
                    memb : '完善账户资料',
                    shop : '+10分积分',
                    fon  : '去完善'
                },{
                    imgs : '../../../../static/images/member/103.png',
                    memb : '订单评价',
                    shop : '+2分积分(每日最多60分)获得积分越多',
                    fon  : '去评价'
                },{
                    imgs : '../../../../static/images/member/104.png',
                    memb : '去晒单',
                    shop : '+5分积分',
                    fon  : '去晒单'
                },{
                    imgs : '../../../../static/images/member/105.png',
                    memb : '回答问题',
                    shop : '+2分积分(每日最高50分)',
                    fon  : '去回答'
                },{
                    imgs : '../../../../static/images/member/106.png',
                    memb : '每月购物3天',
                    shop : '+30分积分',
                    fon  : '去购物'
                },{
                    imgs : '../../../../static/images/member/107.png',
                    memb : '购买新品类',
                    shop : '+10分积分',
                    fon  : '去购物'
                },{
                    imgs : '../../../../static/images/member/108.png',
                    memb : '分享商品或活动',
                    shop : '+2分积分(每日最多60分)获得积分越多',
                    fon  : '去分享'
                },{
                    imgs : '../../../../static/images/member/109.png',
                    memb : '购物年限',
                    shop : '+5分积分',
                    fon  : '去购物'                   
                },{
                    imgs : '../../../../static/images/member/121.png',
                    memb : '使用零钱支付',
                    shop : '+2积分(每日最高60分)',
                    fon  : '去使用'
                },{
                    imgs : '../../../../static/images/member/122.png',
                    memb : '绑定银行卡',
                    shop : '+50积分',
                    fon  : '去绑定'
                },{
                    imgs : '../../../../static/images/member/123.png',
                    memb : '实名认证',
                    shop : '+100积分',
                    fon  : '去认证'
                },{
                    imgs : '../../../../static/images/member/124.png',
                    memb : '绑定邮箱',
                    shop : '+10分积分(每日最高60分)获得积分越多',
                    fon  : '去绑定'
                },{
                    imgs : '../../../../static/images/member/125.png',
                    memb : '绑定微信',
                    shop : '+20积分',
                    fon  : '去绑定'
                },{
                    imgs : '../../../../static/images/member/126.png',
                    memb : '绑定QQ',
                    shop : '+20积分',
                    fon  : '已完成'
                }]
         
            }

        },

        computed : {

        },

        methods : {

            go (index) {

                if (this.prom[index].fon == '去购物') {

                    window.open('/zlsp')
                }

                if (this.prom[index].fon == '去评价') {

                    window.open('/evaluates')
                }

                if (this.prom[index].fon == '去认证') {
                    
                }

            }

        },

        created () {
            
        },

        mounted () {}

    }

</script>

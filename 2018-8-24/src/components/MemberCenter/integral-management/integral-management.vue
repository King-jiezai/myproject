


<style scoped>

    .manage {
        width: 100%;
        overflow: hidden;
    }
    .navs {
        width: 100%;
        margin: 0 auto ;
    }
    .manage-cont {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 40px;
    }
    .manage-nav {
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #EB6878;
        cursor: pointer;
    }
    .mana-inats {
        width: 150px;
        line-height: 38px;
        text-align: center;
        float: left;
        color: #e60012;
    }
    .mana-inat {
        width: 150px;
        line-height: 38px;
        text-align: center;
        float: left;
        border: 1px solid #EB6878;
        border-bottom: 0px;
        border-right: 0px;
    }
    .mana-inat:last-child {
        border-right: 1px solid #EB6878;

    }
    .manasy {
        background-color: #EB6876;
        color: #fff;
    }
    .integral {
        width: 100%;
        height: 160px;
        background-color: #F5F5F5;
        border: 1px solid #DDDDDD;
        margin-top: 20px;
    }
    .integral-mana {
        float: left;
        width: 350px;
        height: 140px;
        margin: 10px 0 ;
        border-right: 1px solid #ccc;
        text-align: center;
    }
    .integral-mana  p:first-child {
        font-size: 20px;
        margin:20px 0 0 0;
        color: #098B05;
        font-weight: bold;
    }
    .integral-mana  p:last-child {
        font-size: 50px;
        color: #0A8A01;
        font-weight: bold;
    }
    .integral-manas {
        float: left;
        width: 350px;
        height: 140px;
        margin: 10px 0 ;
        border-right: 1px solid #ccc;
        text-align: center;
    }
    .integral-manas  p:first-child {
        font-size: 20px;
        margin:20px 0 0 0;
        color: #e60012;
        font-weight: bold;
    }
    .integral-manas  p:last-child {
        font-size: 50px;
        color: #e60012;
        font-weight: bold;
    }
    .exchange {
        float: left;
        width: 360px;
        height: 50px;
        line-height: 50px;
        background-color: #eb6877;
        color: #fff;
        margin: 55px 69px;
        border-radius: 10px;
        text-align: center;
        font-size: 20px;
    }
    .integral-detail {
        width: 100%;
        overflow: hidden;
    }
    .center-foor {
        margin-top: 70px;
        background: #fafafa;
        margin-bottom: 50px;
    }
    .center-foor .heas {
        border-bottom: 1px solid #666;
    }
    
</style>

<template>
    
    <!--manage 积分管理-->
    <div class="manage">
        <!--navs 广租头部-->
        <div class="navs">
            <navs></navs>
        </div>

        <div class="manage-cont">
            <div class="manage-nav">
                <div class="mana-inats">
                    <p>积分管理</p>
                </div>
                <div class="mana-inat" v-for="(item , index) in mana" @click="climan(index)" :class="{'manasy' : mans == index}">
                    <p>{{ item.fon }}</p>
                </div>
            </div>

            <div class="integral">
                <div class="integral-mana">
                    <p>可用的积分</p>
                    <p>{{ jfen }}</p>
                </div>
                 <div class="integral-manas">
                    <p>将要过期的积分</p>
                    <p>{{ gfen }}</p>
                </div>

                <div class="exchange">
                    <p>兑换超值商品与优惠券</p>
                </div>
            </div>

            <!--integral-detail 积分明细-->
            <div class="integral-detail" v-show="one">
                <detail></detail>
            </div>

            <!--integral-expend 积分支出-->
            <div class="integral-expend" v-show="two">
                <expend></expend>
            </div>

            <!--integral-gift 礼品列表-->
            <div class="integral-gift" v-show="three">
                <gift></gift>
            </div>

            <!--integral-exchange 兑换记录-->
            <div class="integral-exchange" v-show="four">
                <exchange></exchange>
            </div>
     
        </div>

        <!--"center-foor 底部-->
        <div class="center-foor">
            <div class="heas">
                <tail-hear></tail-hear>
            </div>

            <tail-foor></tail-foor>
        </div>
    </div>

</template>

<script>

    import navs      from '@/components/public/navs.vue'
    import detail    from '@/components/MemberCenter/integral-management/integral-detail.vue'
    import expend    from '@/components/MemberCenter/integral-management/integral-expenditure.vue'
    import gift      from '@/components/MemberCenter/integral-management/gift-list.vue'
    import exchange  from '@/components/MemberCenter/integral-management/record-exchange.vue'
    import tailHear  from '@/components/public/tail-hear.vue'
    import tailFoor  from '@/components/public/tail-foor.vue'

    import {Icon, Page} from 'iview'

    export default {

        components : {

            navs,
            Page,
            Icon,
            tailHear,
            tailFoor,
            detail,
            expend,
            gift,
            exchange,

        },

        data () {

            return {

                jfen : 1300,

                gfen  : 500,

                mana : [{
                    fon : '积分明细'
                },{
                    fon : '积分支出'
                },{
                    fon : '礼品列表'
                },{
                    fon : '兑换记录'
                }],

                one : true,

                two : false,

                three : false,
                
                four  : false,

                mans : false,

            }

        },

        computed : {

        },

        methods : {

            climan (index) {

                this.mans = index

                if (this.mana[index].fon == '积分明细') {

                    this.one = true

                    this.two = false

                    this.three = false

                    this.four = false

                }

                if (this.mana[index].fon == '积分支出') {

                    this.one = false

                    this.two = true

                    this.three = false

                    this.four = false

                }

                if (this.mana[index].fon == '礼品列表') {

                    this.one = false

                    this.two = false

                    this.three = true

                    this.four = false

                }

                if (this.mana[index].fon == '兑换记录') {

                    this.one = false

                    this.two = false

                    this.three = false

                    this.four = true

                }

            }
            
        }

    }

</script>

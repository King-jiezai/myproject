







<style scoped>

    .member {
        width: 100%;
        overflow: hidden;
    }
    .navs {
        width: 100%;
        margin: 0 auto ;
    }
    .member-imgs {
        height: 504px;
    }
    .member-imgs img {
        float: left;
        position: relative;
    }
    .member-personal {
        height: 504px;
        width: 345px;
        border-radius: 10px;
        background-color: #fff;
        position: absolute;
        margin-left: 360px;
        box-shadow: 0 1px 10px #ccc;
    }
    .personal-top {
        width: 100%;
        float: left;
        height: 216px;
        background-color:#404354;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .personal-radius {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: #fff;
        margin: 0 auto;
        margin-top: 10px;
    }
    .personal-radius img{
        width: 90px;
        height: 90px;
        margin: 0 auto;
    }
    .per-name {
        text-align: center;
        line-height: 30px;
        color: #fff;
        margin-top: 10px;
    }
    .per-line {
        width: 325px;
        margin:15px 20px;
    }
    .per-line .per-radius {
        width: 15px;
        float: left;
        height: 15px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 1px 10px #fff;

    }
    .per-line .per-ine {
        width: 290px;
        height: 4px;
        float: left;
        background-color: #fff;
        margin-top: 6px;
    }
    .enjoymember {
        color: #fff;
        padding:  20px;
        margin-top: 30px;
        text-align: center;
    }
    .signin {
        float: left;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #e60012;
        font-size: 14px;
        font-weight: bold;
        background-color: #FFE7E7;
    }
    .signin p {
        float: left;
        margin-left: 140px;
    }
    .signin img {
        float:right;
        margin: 5px 20px 5px 0;
    }
    .per-data {
        float: left;
        width: 150px;
        height: 70px;
        margin: 15px 96px ;
        border-radius: 5px;
        border:1px solid #FFE7E7;
    }
    .data-left {
        width: 65px;
        float: left;
        text-align: center;
        font-size: 14px;
        margin-top: 15px;
    }
    .data-right {
        width: 65px;
        float: right;
        text-align: center;
        font-size: 28px;
        line-height: 70px;
        font-weight: bold;
    }
    .per-data img {
        height: 70px;
        margin-left: 5px;
    }
    .signin-day {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border:1px solid #e60012;
        border-radius: 5px; 
        margin: 0 121px;
        color: #e60012;
        font-size: 14px;
    }
    .signin-day img {
        margin: 7px 5px 7px 25px;
    }
    .signin-day p {
        float: left;
    }
    .memInte {
        float: left;
        width: 300px;
        height: 30px;
        line-height: 30px;
        margin: 10px 20px 0 20px;
        border-bottom: 1px solid #FFE7E7;
    }
    .memInte span {
        float: left;
    }
    .memberup {
        float: right;
        width: 80px;
        height: 17px;
        line-height: 18px;
        text-align: center;
        background-color: #e60012;
        border-radius: 5px;
        margin-top: 5px;
        color: #fff;
    }
    .memberup p {
        float: left;
        margin-left: 15px;
    }
   .memberup img {
        margin: 4px 10px;
    }
    .memInters {
        float: left;
        margin-top: 10px;
        margin: 10px 12px 0 12px;
    }
    .memInters div {
        float: left;
        width: 80px;
        text-align: center;
    }
    .memInters div img {
        margin:0 20px 10px 20px;
    }
    .member-welfare {
        width: 100%;
        margin: 0 auto;
        margin-top: 50px;
    }
    .member-cation {
        width: 100%;
        margin: 0 auto;
        margin-top: 30px;
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
    
    <!--member 会员中心-->
    <div class="member">
            <!--navs 广租头部-->
            <div class="navs">
                <navs></navs>
            </div>

            <!--member-imgs 会员个人信息-->
            <div class="member-imgs">
                <img src="../../../static/images/member/1.jpg">
                <div class="member-personal">
                    <div class="personal-top">
                        <div class="personal-radius">
                            <img src="../../../static/images/member/aa-03.png">
                        </div>
                        <p class="per-name">{{ name }}</p>
                        <div class="per-line">
                            <p class="per-radius"></p>
                            <p class="per-ine"></p>
                        </div>
                        <p class="enjoymember">继续获得1个购物天数，即可升级为优享会员</p>
                    </div>
                    <div class="signin">
                        <p>每日签到</p>
                        <img src="../../../static/images/member/6.png">
                    </div>
                    <div class="per-data">
                        <div class="data-left">
                            <p>{{ year }}-{{ month }}</p>  
                            <p>{{ week }}</p> 
                        </div>
                        <img src="../../../static/images/member/1111.png">                              
                        <div class="data-right">
                            <p>{{ date }}</p> 
                        </div> 
                     
                    </div>
                    <div class="signin-day">
                        <img src="../../../static/images/member/7.png">
                        <p>签到</p>
                    </div>
                    
                    <!--member-interests 会员权益-->
                    <div class="memInte">
                        <span>会员权益</span>
                        <div class="memberup">
                            <p>去提升</p>
                            <img src="../../../static/images/member/3333.png">
                        </div>
                    </div>

                    <div class="memInters">
                        <div>
                            <img src="../../../static/images/member/8.png">
                            <span>会员价</span>
                        </div>
                        <div>
                            <img src="../../../static/images/member/9.png">
                            <span>会员生日</span>
                        </div>
                        <div>
                            <img src="../../../static/images/member/10.png">
                            <span>优惠券</span>
                        </div>
                        <div>
                            <img src="../../../static/images/member/11.png">
                            <span>开卡送积分</span>
                        </div>
                    </div>
                </div>
            </div>

            <!--member-welfare 会员福利-->
            <div class="member-welfare">
                <welfare></welfare>
            </div>

            <!--.member-welfare 会员商品列表-->
            <div class="member-cation">
                <cation></cation>
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

    import navs   from '@/components/public/navs.vue'
    import welfare   from '@/components/MemberCenter/member-welfare.vue'
    import cation   from '@/components/MemberCenter/member-cation.vue'
    import tailHear    from '@/components/public/tail-hear.vue'
    import tailFoor    from '@/components/public/tail-foor.vue'

    import {Icon} from 'iview'

    export default {

        components : {

            navs,
            Icon,
            welfare,
            cation,
            tailHear,
            tailFoor,

        },

        data () {

            return {

                name : 'dd-晴天娃娃',

            }

        },

        computed : {

        },

        methods : {

   

        },

        created () {

               var mydate=new Date();
                this.year = mydate.getFullYear();
                this.month = mydate.getMonth()+1;
                this.date = mydate.getDate();
                var myddy=mydate.getDay();//获取存储当前日期
                var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
                this.week =  weekday[myddy];

            
        },

        mounted () {}

    }

</script>

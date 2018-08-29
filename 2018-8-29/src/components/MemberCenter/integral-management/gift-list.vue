


<style scoped>

    .manage-cont {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;      
    }
    .manage-live {
        width: 100%;
        overflow: hidden;
        margin-top: 70px;
    }
    .manage-cont h1 {
        margin-left: 100px;
        font-size: 40px;
        letter-spacing: 5px;
    }
    .change-purchase {
        height: 470px;
        width: 100%;
        margin-top: 10px;
        position: relative;
    }
    .change-purchase .imgs {
        width: 100%;
        height: 100%;
    }
    .purchase {
        width: 830px;
        height: 450px;
        background-color: #fff;
        position: absolute;
        top: 10px;
        left: 360px;
        box-shadow: 0 1px 7px #666;
    }
    .purchase-top {
        width: 100%;
        height: 55px;
        line-height: 55px;
    }
    .purchase-top p {
        float: right;
    }
    .purchase-top img {
        cursor: pointer;
        float: right;
        margin: 17px 20px 17px 10px;
    }
    .purchase-cent {
        width: 810px;
        margin:0 10px;
        height: 345px;
    }
    .cent-tes {
        float: left;
        height: 345px;
        width:200px;
        
    }
    .cent-tes:hover {
        border:1px solid #2BE0FB;
    }
    .cent-img {
        width: 200px;
        height: 192px;
    }
    .cent-img img {
        width: 50%;
        height: 100%;
        margin:0 54px; 
    }
    .cent-p {
        width: 160px;
        margin: 20px 20px 10px 20px;
        font-size: 12px;
    }
    .price {
        width: 160px;
        margin: 10px 20px;
        height: 30px;
        line-height: 30px;
    }
    .price span {
        color: #e60012;
    }
    .price .purces {
        float: left;
    }
    .price .member {
        float: right;
    }
    .addshopping {
        width: 128px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border:1px solid #ccc;
        border-radius: 5px;
        margin: 0 auto;
        font-size: 13px;
        cursor: pointer;
    }
    .quality-recom {
        width: 100%;
        overflow: hidden;
        margin-top: 70px;
    }
    .quality-purchase {
        height: 470px;
        width: 100%;
        margin-top: 10px;
        position: relative;
    }
    .quality-purchase .imgs {
        width: 100%;
        height: 100%;
    }
    .quality {
        width: 830px;
        height: 450px;
        background-color: #fff;
        position: absolute;
        top: 10px;
        left: 360px;
        box-shadow: 0 1px 7px #666;
    }
    .quality-top {
        width: 100%;
        height: 55px;
        line-height: 55px;
    }
    .quality-top p {
        float: right;
    }
    .quality-top img {
        cursor: pointer;
        float: right;
        margin: 17px 20px 17px 10px;
    }
    .quality-cent {
        width: 810px;
        margin:0 10px;
        height: 345px;
    }
    .quality-tes {
        float: left;
        height: 345px;
        width:200px;
        
    }
    .quality-tes:hover {
        border:1px solid #F39801;
    }
    .quality-img {
        width: 200px;
        height: 192px;
    }
    .quality-img img {
        width: 170px;
        margin: 20px 15px;
    }
    .quality-p {
        width: 160px;
        margin: 0px 20px 10px 20px;
        font-size: 12px;
        word-break:break-all;
        word-wrap:break-word;
    }

</style>

<template>
    
    <!--manage-cont 积分明细-->
    <div class="manage-cont">

        <!--manage-live 精品换购-->
        <div class="manage-live">
            <h1>会员生活，精品换购</h1>
            <div class="change-purchase">
                <img src="../../../../static/images/member/12.png" class="imgs">
                <div class="purchase">
                    <div class="purchase-top">
                        <img src="../../../../static/images/member/111.png">
                        <p>换一批</p>
                    </div>
                    <div class="purchase-cent">
                        <div class="cent-tes" v-for="item in cens">
                            <div class="cent-img">
                                <img :src="item.imgs">
                            </div>
                            <div class="cent-p">
                                <p>{{ item.fon }}</p>
                            </div>
                            <div class="price">
                                <p class="purces">换购价：<span>￥{{ item.purc}}</span></p>
                                <p class="member">积分：<span>￥{{ item.memb}}</span></p>
                            </div>
                            <div class="addshopping">
                                <p>加入租赁箱</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--quality-recom 精品推荐-->
        <div class="quality-recom">
            <h1>想你所想，精品推荐</h1>
            <div class="quality-purchase">
                <img src="../../../../static/images/member/13.png" class="imgs">
                <div class="quality">
                    <div class="quality-top">
                        <img src="../../../../static/images/member/111.png">
                        <p>换一批</p>
                    </div>
                    <div class="quality-cent">
                        <div class="quality-tes" v-for="item in rec">
                            <div class="quality-img">
                                <img :src="item.imgs">
                            </div>
                            <div class="quality-p">
                                <p>{{ item.fon }}</p>
                            </div>
                            <div class="price">
                                <p class="purces">换购价：<span>￥{{ item.purc}}</span></p>
                                <p class="member">积分：<span>￥{{ item.memb}}</span></p>
                            </div>
                            <div class="addshopping">
                                <p>加入租赁箱</p>
                            </div>
                        </div>
                    </div>
                </div>
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

                cens : [{
                    imgs : '../../../../static/images/member/14.png',

                    fon  : '金士顿(Kingston) 64GB U盘 USB3.0 DTSE9G2 金属迷',

                    memb : 1200,

                    purc : 50,
                },{
                    imgs : '../../../../static/images/member/14.png',

                    fon  : '金士顿(Kingston) 64GB U盘 USB3.0 DTSE9G2 金属迷',

                    memb : 1200,

                    purc : 50,
                },{
                    imgs : '../../../../static/images/member/14.png',

                    fon  : '金士顿(Kingston) 64GB U盘 USB3.0 DTSE9G2 金属迷',

                    memb : 1200,

                    purc : 50,
                },{
                    imgs : '../../../../static/images/member/14.png',

                    fon  : '金士顿(Kingston) 64GB U盘 USB3.0 DTSE9G2 金属迷',

                    memb : 1200,

                    purc : 50,
                }],

                rec : [{
                    imgs : '../../../../static/images/member/15.png',

                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                    memb : 1200,

                    purc : 50,
                },{
                    imgs : '../../../../static/images/member/15.png',

                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                    memb : 1200,

                    purc : 50,
                },{
                    imgs : '../../../../static/images/member/15.png',

                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                    memb : 1200,

                    purc : 50,
                },{
                    imgs : '../../../../static/images/member/15.png',

                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                    memb : 1200,

                    purc : 50,
                }]
            
            }

        },

        computed : {

        },

        methods : {

           

        },

        created () {

           
        },

        mounted () {}

    }

</script>

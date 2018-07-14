







<style scoped>

    .contacts {
        width: 100%;
        height: 575px;
        background: url('../../../../static/images/bj3.jpg') center center no-repeat;
        position: relative;
    }
    .contacts-so {
        width: 100%;
        overflow: hidden;
        padding-top: 50px;
    }
    .contacts .hean-top {
        color: #010101;
        text-align: center;
        font-size: 40px;
    }
    .hean-top span {
        color: #e60012;
    }
    .contacts .hean-cen {
        width: 210px;
        height: 2px;
        background: #ccc;
        margin: 10px auto 20px;
    }
    .hean-cen span {
        width: 80px;
        height: 3px;
        background: #fff;
        margin: 0 auto;
        display: block;
    }
    .contacts .hean-bottom {
        font-size: 19px;
        color: #fff;
        text-align: center;
    }
    .contacts-cen {
        width: 1084px;
        height: 143px;
        margin: 125px auto 0;
    }
    .contacts-cen .con {
        width: 226px;
        height: 143px;
        background: #fff;
        opacity: 0.6;
        float: left;
        margin-right: 60px;
    }
    .contacts-cen .con:last-child {
        margin-right: 0;
    }
    .con-img {
        text-align: center;
        margin: 35px 0 15px 0;
    }
    .con p {
        color: #000;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }

</style>

<template>

    <div class="contacts">
        <div class="contacts-so">
            <div class="hean-top">
                <p><span>联系</span>我们</p>
            </div>

            <div class="hean-cen">
                <span></span>
            </div>

            <div class="hean-bottom">一切良好工作的开始, 都需相互之间的沟通搭桥, 欢迎来到广租。</div>
        </div>

        <div class="contacts-cen">
            <div class="con" v-for='item in res'>
                <div class="con-img">
                    <img :src="item.img">
                </div>

                <p>{{item.num}}</p>
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

                res : [{
                    img : '../../../../static/images/tu16.png',
                    num : '400-881-9131'
                },{
                    img : '../../../../static/images/tu17.png',
                    num : 'DG@dg500.cn'
                },{
                    img : '../../../../static/images/tu18.png',
                    num : '在线咨询'
                },{
                    img : '../../../../static/images/tu19.png',
                    num : '广州天河区KB展望数码广场'
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

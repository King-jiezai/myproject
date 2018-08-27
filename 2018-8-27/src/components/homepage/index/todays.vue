../







<style scoped>

    .todays {
        width: 1100px;
        height: 513px;
        margin: 0 auto;
    }
    .todays-top {
        width: 1100px;
        color: #646262;
        font-size: 23px;
        line-height: 50px;
        border-bottom: 2px solid #999;
        margin-bottom: 45px;
        padding-bottom: 5px;
    }
    .todays-top span {
        color: #e60012;
        font-size: 40px;
        margin-right: 20px;
    }
    .todays-bottom {
        width: 1100px;
        height: 300px;
        margin: 0 auto;
    }
    .todays-oo {
        width: 254px;
        height: 350px;
        border: 1px solid #999;
        margin-right: 28px;
        float: left;
    }
    .todays-oo:last-child {
        margin-right: 0;
    }
    .todays-oo img {
        width: 252px;
        height: 194px;
    }
    .todays-fon {
        width: 187px;
        font-size: 16px;
        margin: 15px auto 0;
    }
    .todays-num {
        color: #e60012;
        font-size: 18px;
        text-align: center;
        margin-top: 35px;
    }

</style>

<template>

    <div class="todays">
        <div class="todays-top">
            <p><span>今日推荐</span>RECOMMEND</p>
        </div>

        <div class="todays-bottom">
            <div class="todays-oo" v-for='item in res' :title='item.fon'>
                <img :src="item.img">
                <div class="todays-fon">{{item.fon}}</div>
                <div class="todays-num">{{item.num}}</div>
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
                    img : '../../../../static/images/product/recommend/T420.jpg',
                    fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                    num : '￥2.8/天'
                },{
                    img : '../../../../static/images/product/recommend/T420.jpg',
                    fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                    num : '￥2.8/天'
                },{
                    img : '../../../../static/images/product/recommend/T420.jpg',
                    fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                    num : '￥2.8/天'
                },{
                    img : '../../../../static/images/product/recommend/T420.jpg',
                    fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                    num : '￥2.8/天'
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

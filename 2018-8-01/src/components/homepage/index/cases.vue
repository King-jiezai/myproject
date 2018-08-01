







<style scoped>

    .cases {
        width: 100%;
        overflow: hidden;
        background: #efefef;
    }
    .cases-top {
        position: relative;
        margin-bottom: 30px;
    }
    .cases-top img {
        width: 100%;
        height: 196px;
    }
    .cases-tp {
        width: 100%;
        height: 196px;
        position: absolute;
        top: 30px;
    }
    .cases .hean-top {
        color: #fff;
        text-align: center;
        font-size: 40px;
    }
    .hean-top span {
        color: #e60012;
    }
    .cases .hean-cen {
        font-size: 19px;
        color: #eee;
        text-align: center;
        margin-top: 10px;
    }
    .cases-bottom {
        width: 1152px;
        margin: 0 auto;
        position: relative;
    }
    .cases-zin {
        width: 1152px;
        height: 40px;
        margin-bottom: 45px;
        padding: 0 20px;
    }
    .cases-spn {
        padding: 0 15px;
        line-height: 40px;
        border: 1px solid #e60012;
        float: right;
    }
    .cases-spn p {
        color: #e60012;
        font-size: 21px;
        padding-right: 30px;
    }
    .cases-spn img {
        position: absolute;
        top: 10px;
        right: 30px;
    }
    .cases-eo {
        width: 1152px;
    }

</style>

<template>

    <div class="cases">
        <div class="cases-top">
            <img :src="imgo">

            <div class="cases-tp">
                <div class="hean-top">
                    <p>租赁<span>案例</span></p>
                </div>

                <div class="hean-cen">
                    感谢客户对我们的信任与认可，我们将更用心服务，超越您的期待！让我们一起携手未来！
                </div>
            </div>
        </div>

        <div class="cases-bottom">
            <div class="cases-zin">
                <div class="cases-spn">
                    <p>换一批</p>
                    <img :src="imgs">
                </div>
            </div>

            <div class="cases-eo">
                <cases-scene :res='res'></cases-scene>
            </div>
        </div>
    </div>

</template>

<script>

    import casesScene from './cases-scene.vue'


    export default {

        components : {

            casesScene,

        },

        data () {

            return {

                res : [{
                    img : '../../../../static/images/case.jpg',
                    fon : '楼盘开售活动租赁现场',
                    cen : '客户背景：',
                    mon : '恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团'
                },{
                    img : '../../../../static/images/case2.jpg',
                    fon : '楼盘开售活动租赁现场',
                    cen : '客户背景：',
                    mon : '恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团'
                },{
                    img : '../../../../static/images/case3.jpg',
                    fon : '楼盘开售活动租赁现场',
                    cen : '客户背景：',
                    mon : '恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团'
                },{
                    img : '../../../../static/images/case.jpg',
                    fon : '楼盘开售活动租赁现场',
                    cen : '客户背景：',
                    mon : '恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团'
                },{
                    img : '../../../../static/images/case2.jpg',
                    fon : '楼盘开售活动租赁现场',
                    cen : '客户背景：',
                    mon : '恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团'
                },{
                    img : '../../../../static/images/case3.jpg',
                    fon : '楼盘开售活动租赁现场',
                    cen : '客户背景：',
                    mon : '恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团恒大集团'
                }],

                imgo : '../../../../static/images/bj4.jpg',
                
                imgs : '../../../../static/images/tu15.png'

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

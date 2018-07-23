







<style scoped>

    .pages-rec {
        width: 1200px;
        height: 230px;
        border: 1px solid #eee;
    }
    .recom-top {
        height: 37px;
        font-size: 12px;
        color: #555;
        line-height: 37px;
        background: #f1f1f1;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding: 0 5px;
    }
    .recom-bottom {
        width: 1200px;
        height: 193px;
    }
    .fsl-left {
        width: 200px;
        height: 193px;
        font-size: 12px;
        color: #555;
        text-align: center;
        padding-top: 25px;
        float: left;
    }
    .fsl-left p {
        margin-top: 8px;
    }
    .fsl-left .p1 {
        color: #e60012;
    }
    .p1 input {
        position: relative;
        top: 2px;
    }
    .recom-bottom .sp {
        font-size: 56px;
        line-height: 192px;
        padding: 0 6px;
        float: left;
    }
    .fsl-right {
        float: right;
        width: 265px;
        height: 193px;
    }
    .fsl-right .ot {
        width: 220px;
        height: 193px;
        padding: 45px 25px;
        float: right;
    }
    .ot p {
        line-height: 25px;
    }
    .ots {
        width: 130px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        color: #fff;
        background: #e60012;
        margin-top: 5px;
    }
    .ots img {
        position: relative;
        top: 5px;
    }
    .ots span {
        font-size: 16px;
    }

</style>

<template>

    <div class="pages-rec">
        <div class="recom-top">
            <span>推荐搭配：</span>
        </div>

        <div class="recom-bottom">
            <div class="fsl-left">
                <img :src="tpo">
                <p>Thinkpad T440p 高端商务本</p>
                <p class="p1">￥4.1/天</p>
            </div>

            <span class="sp">+</span>

            <div class="fsl-left">
                <img :src="pac">
                <p>全新联想电脑包</p>
                
                <p class="p1">
                    <input type="checkbox">
                    <span>￥15元</span>
                </p>
            </div>

            <span class="sp">+</span>

            <div class="fsl-left">
                <img :src="pas">
                <p>全新联想电脑包</p>
                
                <p class="p1">
                    <input type="checkbox">
                    <span>￥15元</span>
                </p>
            </div>

            <div class="fsl-right">
                <span class="sp">=</span>

                <div class="ot">
                    <p>已选择一个配件</p>
                    <p>套餐价￥115</p>

                    <div class="ots">
                        <img :src="cas">
                        <span>加入租赁箱</span>
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

                tpo : '../../../static/images/comclass-3/rec/T440p.jpg',

                pac : '../../../static/images/comclass-3/rec/package.jpg',

                pas : '../../../static/images/comclass-3/rec/package.jpg',

                cas : '../../../static/images/case_3.png'

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {

        },

        created () {

            
        },

        mounted () {

        }

    }

</script>

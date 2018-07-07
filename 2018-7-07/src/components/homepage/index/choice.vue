







<style scoped>

    .choice {
        width: 100%;
        height: 100%;
        background: #efefef;
        overflow: hidden;
        padding: 130px 0 30px 0;
        margin: 0 auto;
    }
    .choice-top {
        width: 1200px;
        margin: 0 auto;
    }
    .choice .hean-top {
        color: #010101;
        text-align: center;
        font-size: 40px;
    }
    .hean-top span {
        color: #e60012;
    }
    .choice .hean-cen {
        font-size: 19px;
        color: #2f2f2f;
        text-align: center;
    }
    .choice .hean-bottom {
        width: 100px;
        height: 2px;
        background: #ccc;
        margin: 10px auto 20px;
    }
    .hean-bottom span {
        width: 50px;
        height: 3px;
        background: #e60012;
        margin: 0 auto;
        display: block;
    }
    .choice-bottom {
        width: 1200px;
        margin: 0 auto;
    }
    .choice-left {
        width: 257px;
        float: left;
    }
    .choice-cen {
        width: 686px;
        margin-top: 60px;
        float: left;
    }

</style>

<template>

    <div class="choice">
        <div class="choice-top">
            <div class="hean-top">
                <p>为什么<span>选择我们</span></p>
            </div>

            <div class="hean-cen">已为多家企业公司提供租赁以及定制服务</div>

            <div class="hean-bottom">
                <span></span>
            </div>
        </div>

        <div class="choice-bottom">
            <div class="choice-left">
                <choice-cus :res='res'></choice-cus>
            </div>

            <div class="choice-cen">
                <img src="../../../../static/images/bj2.jpg">
            </div>

            <div class="choice-left">
                <choice-cus :res='reo'></choice-cus>
            </div>
        </div>
    </div>

</template>

<script>

    import choiceCus from './choice-cus.vue'

    export default {

        components : {

            choiceCus,

        },

        data () {

            return {
                
                res : [{
                    img : '../../../../static/images/tu9.png',
                    cen : '快捷定制',
                    bot : '资深企划，为您量身定制专属方案，结合企业需求，研究模式，为您提供不同业务设备，满足您的使用请求。'
                },{
                    img : '../../../../static/images/tu14.png',
                    cen : '增值服务',
                    bot : '资深企划，为您量身定制专属方案，结合企业需求，研究模式，为您提供不同业务设备，满足您的使用请求。'
                },{
                    img : '../../../../static/images/tu13.png',
                    cen : '一站式服务',
                    bot : '资深企划，为您量身定制专属方案，结合企业需求，研究模式，为您提供不同业务设备，满足您的使用请求。'
                }],

                reo : [{
                    img : '../../../../static/images/tu10.png',
                    cen : '风控联盟',
                    bot : '资深企划，为您量身定制专属方案，结合企业需求，研究模式，为您提供不同业务设备，满足您的使用请求。'
                },{
                    img : '../../../../static/images/tu11.png',
                    cen : '专业机制',
                    bot : '资深企划，为您量身定制专属方案，结合企业需求，研究模式，为您提供不同业务设备，满足您的使用请求。'
                },{
                    img : '../../../../static/images/tu12.png',
                    cen : '丰富经验',
                    bot : '资深企划，为您量身定制专属方案，结合企业需求，研究模式，为您提供不同业务设备，满足您的使用请求。'
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

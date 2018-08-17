

<style scoped>

    .member-integral {
        width: 100%;
        overflow: hidden;
    }
    .navs {
        width: 100%;
        margin: 0 auto ;
    }
    .center-foor {
        margin-top: 70px;
        background: #fafafa;
        margin-bottom: 50px;
    }
    .center-foor .heas {
        border-bottom: 1px solid #666;
    }
    .integral-cent {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .integral-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 100px;
    }
    .line {
        float: left;
        width:480px;
        height:1px;
        padding:0px;
        background-color:#000;
        overflow:hidden;
        margin-top: 17px;
    }
    .lines {
        float: right;
        width:480px;
        height:1px;
        padding:0px;
        background-color:#000;
        overflow:hidden;
        margin-top: 17px;
    }
    .integral-cont {
        width: 240px;
        height: 30px;
        line-height: 30px;
        float: left;
    }
    .integral-cont img{
       margin-left: 2px;
    }
    .integral-cont span {
        margin: 0 10px;
        font-size: 30px;
        color: #CCB46A;
    }
    .promote {
        width: 100%;
        margin-top: 40px;
    }

</style>

<template>
    
    <!--member-integral 会员积分-->
    <div class="member-integral">
        <!--navs 广租头部-->
        <div class="navs">
            <navs></navs>
        </div>
        
        <div class="integral-img">
            <img src="../../../../static/images/member/562.png">
        </div>

        <div class="integral-cent">
            <div class="integral-top">
                <div class="line"></div>
                <div class="integral-cont">
                    <img src="../../../../static/images/member/11-1.png">
                    <span>提升会员权益</span>
                    <img src="../../../../static/images/member/11-1.png">
                </div>
                <div class="lines"></div>
            </div>
        </div>

        <div class="promote">
            <promote></promote>
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
    import tailHear    from '@/components/public/tail-hear.vue'
    import tailFoor    from '@/components/public/tail-foor.vue'
    import promote    from '@/components/MemberCenter/member-integral/member-promote.vue'         

    export default {

        components : {

            navs,
            tailHear,
            tailFoor,
            promote,

        },

        data () {

            return {

              
         
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




<style scoped>

    .person {
        width: 100%;
    }   
    .per_cent {
        width: 1200px;   
        margin: 0 auto;
        margin-top: 50px;
        overflow: hidden;
    }
    .per_left {
        float: left;
        width: 880px;
        margin-bottom: 39px;
    }
    .my_order {
        float: left;
    }
    .my_circle {

        float: left;
    }
    .my_like {
        float: left;
    }
    .per_right {
        float: right;
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
    
     <!--person 个人中心-->
    <div @click='testes' class="person">

        <!--order-to 头部-->
        <div class="order-top">
            <navs></navs>
        </div>
        
        <!--per_cent 个人中心内容-->
        <div class="per_cent">
            <div class="per_left">
                
                <!--per_cent 个人的基本信息-->
                <div class="my_top">
                    <pertop></pertop>
                </div>
                
                <!--my_order 我的订单信息-->
                <div class="my_order">
                    <perorder></perorder>
                </div>
                
                <!--my_circle 热门圈子-->
                <div class="my_circle">
                    <percircle></percircle>
                </div>
                
                <!--my_like 我的足迹-->
                <div class="my_like">
                    <perlike></perlike>
                </div>

            </div>
            
            <!--per_right 右边信息-->
            <div class="per_right">
                <perRight></perRight>
            </div>

        </div>

        <!--center-foor 底部-->
        <div class="center-foor">
            <div class="heas">
                <tail-hear></tail-hear>
            </div>
            <tail-foor></tail-foor>
        </div>
    </div>

</template>

<script>

    import perRight  from '@/components/percenter/per-right.vue'
    import pertop    from '@/components/percenter/per-top.vue'
    import perorder  from '@/components/percenter/index/per-order.vue'
    import percircle from '@/components/percenter/my-circle.vue'
    import perlike   from '@/components/percenter/my-like.vue'
    import navs      from '@/components/public/per-navs.vue'
    import tailHear  from '@/components/public/tail-hear.vue'
    import tailFoor  from '@/components/public/tail-foor.vue'

    export default {
        
        components : {

            navs,
            perRight,
            pertop,
            perorder,
            percircle,
            perlike,
            tailFoor,
            tailHear
               
        },

        data () {

            return {      

            }

        },               

        computed : {

        },

        watch : {

        },

        methods : {

            testes () {

                this.$store.commit('obos',false)

                setTimeout(() => {
                    this.$store.commit('obos',true)
                }, 10)

            }

        },

        created () {
           
        },

        mounted () {

        }
        
    }

</script>

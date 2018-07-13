


<style scoped>

    .body {
        width: 100%;
        overflow: hidden;
    }   
    .clear{
        clear: both;
    }
    .per_cent {
        width: 910px;
        overflow: hidden;
        margin: 0 auto;
    }
    .per_left {
        float: left;
        width: 700px;
        overflow: hidden;
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
   
</style>

<template>

    <div @click='testes' class="body">

        <div class="top">
            <orderNavs></orderNavs>
        </div>
            <div class="per_cent">
                <div class="per_left">

                    <div class="my_top">
                        <pertop></pertop>
                    </div>

                    <div class="my_order">
                        <perorder></perorder>
                    </div>

                    <div class="my_circle">
                           <percircle></percircle>
                    </div>

                    <div class="my_like">
                            <perlike></perlike>
                    </div>

                </div>

                 <div class="per_right">
                    <perRight></perRight>
                </div>

            </div>              
    </div>

</template>

<script>

    import orderNavs from '@/components/public/per-navs.vue';
    import perRight from '@/components/percenter/per-right.vue';
    import pertop   from '@/components/percenter/per-top.vue';
    import perorder   from '@/components/percenter/per-order.vue';
    import percircle   from '@/components/percenter/my-circle.vue';
    import perlike   from '@/components/percenter/my-like.vue';

    export default {
        
        components : {
            
            orderNavs,
            perRight,
            pertop,
            perorder,
            percircle,
            perlike
               
        },

        data () {

            return {
                          

            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {


            testes () {

                this.$store.commit('obos',false)

                setTimeout(() => {
                    this.$store.commit('obos',true)
                }, 10)

            },

        },

        created () {
            
     
           
        },

        mounted () {

        }
    }

</script>

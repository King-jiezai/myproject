


<style scoped>

    .my_order-cent {
        float: left;
        width: 100%;
        overflow: hidden;
        background:  #f0f8fe;
    }
    .my_order-null {
        float: left;
        width: 100%;
        height: 100px;
        overflow: hidden;
        background:  #f0f8fe;
        line-height: 100px;
        text-align: center;
    }
</style>

<template>

    <div class="my_order-cent">
        <div class="my_order-null">
             <p>你还没有订单记录，快<router-link to='/zlsp'>去逛逛</router-link>吧</p>
        </div>
    </div>          

</template>

<script>


    export default {
        
        components : {
            
       
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
            
  

        },

        created () {        
           
        },

        mounted () {

        }
    }

</script>

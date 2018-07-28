







<style scoped>

    .cases-ooo {
        width: 344px;
        height: 455px;
        background: #fff;
        margin: 0 20px 52px 20px;
        float: left;
    }
    .cases-ooo p {
        font-size: 22px;
        text-align: center;
        margin: 30px 0;
    }
    .cases-om {
        padding: 0 20px;
    }
    .cases-sp {
        font-weight: bold;
    }

</style>

<template>

    <div class="cases-scene">
        <div class="cases-ooo" v-for='item in res'>
            <img :src="item.img">
            <p>{{item.fon}}</p>

            <div class="cases-om">
                <span class="cases-sp">{{item.cen}}</span>
                <span>{{item.mon}}</span>
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

            }
            
        },

        computed : {

        },

        methods : {

        },

        created () {
            
        },

        mounted () {

        },

        props : [
            'res'
        ]

    }

</script>

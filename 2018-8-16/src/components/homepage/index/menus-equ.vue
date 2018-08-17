







<style scoped>

    .menus-equ .equ-oo {
        text-align: center;
        margin-right: 43px;
        float: left;
    }
    .equ-oo li {
        font-size: 14px;
        list-style: none;
        line-height: 30px;
        position: relative;
    }
    .equ-oo li:hover {
        color: #e60012;
        cursor: pointer;
    }
    .equ .img {
        position: absolute;
        top: 5px;
        left: 0;
    }
    .equ .oss {
        margin-left: 28px;
    }

</style>

<template>

    <div class="menus-equ">
        <ul class="equ-oo" v-for='item in res'>
            <li>
                <img class="img" :src="item.img">
                <span class="oss">{{item.eqs}}</span>
            </li>
            
            <li>{{item.day}}</li>
            <li>{{item.name}}</li>
        </ul>
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

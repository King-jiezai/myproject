







<style scoped>

    .hel-tran {
        width: 181px;
        height: 136px;
        background: #fff;
        opacity: 0.4;
    }
    .hel-lease .pop {
        width: 181px;
        color: #000;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        position: absolute;
        top: 70px;
    }
    .hel-lease .mos {
        width: 181px;
        height: 136px;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
    .hel-lease p {
        width: 181px;
        color: #000;
        font-size: 17px;
        text-align: center;
        position: absolute;
        top: 40px;
    }
    .hel-lease:hover .mos {
        background: #e20012;
        box-shadow:inset 0px 0px 10px 8px #f00;
        cursor: pointer;
        display: block;
    }
    .mos p {
        color: #fff;
    }
    .mos .pop {
        color: #fff;
    }
    .cos {
        background: #f00!important;
        box-shadow:inset 0px 0px 10px 8px #e20012!important;
    }

</style>

<template>

    <div class="hel-lease">
        <div class="hel-tran"></div>
        <p>{{item.pos}}</p>
        <div class="pop">{{item.blo}}</div>
        
        <div class="mos" :class='{cos: col}' @click='mos'>
            <p>{{item.pos}}</p>
            <div class="pop">{{item.blo}}</div>
        </div>
    </div>

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

                col : false

            }
            
        },

        computed : {

        },

        methods : {

            mos () {
                this.col = true
            }

        },

        created () {
            
        },

        mounted () {

        },

        props : [
            'item'
        ]

    }

</script>

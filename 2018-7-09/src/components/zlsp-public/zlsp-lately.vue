







<style scoped>

    .bros {
        width: 1200px;
        height: 200px;
        border: 1px solid #ccc;
        padding: 0 15px;
        margin: 0 auto;
    }
    .browse-top {
        height: 31px;
        line-height: 31px;
        font-size: 14px;
        color: #6a6a69;
    }
    .sso {
        width: 136px;
        float: left;
        margin-right: 70px;
        cursor: pointer;
    }
    .sso:last-child {
        margin-right: 0;
    }
    .sso-top {
        text-align: center;
    }
    .sso-cen {
        width: 136px;
        margin: 0 auto;
    }
    .sso-cen .p1 {
        color: #e60012;
        font-size: 13px;
        margin-bottom: 3px;
    }
    .sso-cen .p2 {
        height: 36px;
        overflow: hidden;
    }
    .sso-cen .p2:hover {
        color: #e60012;
        cursor: pointer;
    }

</style>

<template>

    <div class="ytj">
        <div class="bros">
            <div class="browse-top">最近浏览</div>

            <div class="browse-bottom">
                <div class="sso" v-for='item in bow'>
                    <div class="sso-top">
                        <img :src="item.img">
                    </div>

                    <div class="sso-cen">
                        <p class="p1">{{item.num}}</p>
                        <p class="p2">{{item.ino}}</p>
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

            }

        },

        methods : {

        },

        created () {

            
        },

        mounted () {

        },

        props : [
            'bow'
        ]

    }

</script>

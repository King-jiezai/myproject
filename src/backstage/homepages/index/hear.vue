






<style scoped>

    .hear {
        height: 80px;
        background: #fff;
        box-shadow: 1px 1px 8px 0 #999;
        position: relative;
    }
    .hear-left {
        float: left;
        margin: 20px 0 0 20px;
    }
    .hear-left img {
        position: relative;
        top: 7px;
    }
    .hear-left input {
        width: 300px;
        height: 35px;
        border: 0;
        outline: medium;
    }
    .hear-right {
        float: right;
        line-height: 80px;
        margin-right: 80px;
    }
    .imo {
        position: relative;
        top: 8px;
    }
    .bad {
        margin-left: 30px;
    }
    .oo-left {
        float: left;
        margin-right: 80px;
    }
    .oo-right {
        float: left;
        position: relative;
        top: 8px;
    }
    .oo-right img {
        float: left;
    }
    .oo-right .admins {
        float: left;
        line-height: 75px;
        color: #000;
        font-weight: bold;
        font-size: 13px;
        margin-left: 10px;
    }
    .oo-right .icon {
        position: relative;
        bottom: 2px;
        left: 6px;
    }

</style>

<template>

    <div class="hear">
        <div class="hear-left">
            <img src="../../../../static/images/page/search.png">
            <input type="text" placeholder="搜索内容...">
        </div>
    	
        <div class="hear-right">
            <div class="oo-left">
                <img class="imo" src="../../../../static/images/page/home_3.png">

                <Badge count="999" class='bad' class-name="demo-badge-alone">
                    <img src="../../../../static/images/page/mail.png">
                </Badge>

                <Badge count="3" class='bad'>
                    <img src="../../../../static/images/page/notice.png">
                </Badge>
            </div>

            <div class="oo-right">
                <img src="../../../../static/images/page/logo.png">
                <div class="admins">管理员</div>
                <Icon class='icon' type="arrow-down-b"></Icon>
            </div>
        </div>
    </div>

</template>

<script>

    import { Badge, Icon } from 'iview'

    export default {

        components : {

            Badge,
            Icon,

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

        }

    }

</script>

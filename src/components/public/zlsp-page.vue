







<style scoped>

    .pags-left {
        float: left;
    }
    .pags-left span {
        padding: 8px 12px;
        background: #eee;
    }
    .pags-left a {
        color: #000;
        font-size: 20px;
        padding: 0 6px;
    }
    .pags-cen {
        float: left;
        margin: 1px 0 0 10px;
    }
    .pags-cen .pos {
        width: 40px;
        height: 28px;
        text-align: center;
        border: 1px solid #ccc;
        margin: 4px 5px 0;
        outline: medium;
    }
    .pags-cen .os {
        padding: 8px 12px;
        background: #eee;
        margin-left: 10px;
    }

</style>

<template>

    <div class="zlsp-page">
        <div class="pags-left">
            <span>上一页</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <a>...</a>
            <span>10</span>
            <span>下一页</span>
        </div>

        <div class="pags-cen">
            <span>到</span>
            <input class="pos" type="text" value="1">
            <span>页</span>
            <span class="os">确定</span>
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

        }

    }

</script>

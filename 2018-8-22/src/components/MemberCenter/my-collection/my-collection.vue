

<style scoped>

    .collection {
        width: 910px;
        overflow: hidden;
        border:1px solid #ccc;
    }
    .coll-top {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #f1f1f1;
        padding-left: 20px;
    }
    .coll-top p {
        float: left;
    }
    .coll-class {
        width: 100%;
        height: 110px;
    }
    .class-nav {
        width: 870px;
        height: 40px;
        line-height: 40px;
        margin: 20px;
    }
    .class-nav .all {
        float: left;
    }
    .class-cont {
        float: left;
        width: 720px;
        text-align: center;
        background-color: #fff;
    }
    .class-cont span {
        color: #e60012;
    }
    .class-cont div {
        float: left;
        width: 120px;
    }
    .coll-more {
        float: left;
        width: 90px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
    }
    .collstyle:nth-child(n+7) {
        display: none;
    }
    .coll-show {
        width: 870px;
        margin: 0 20px;
        border-bottom: 1px solid #ccc;
        height: 40px;
        line-height: 40px;
        padding-left: 40px;
        position: absolute;
        z-index: 1;
    }
    .coll-show span {
        margin-left: 10px;
        color: #999;
    }

</style>

<template>
    
    <!--collection 我的收藏-->
    <div class="collection">
        <div class="coll-top">
            <p>商品</p>
        </div>

        <!--coll-class 全部分类-->
        <div class="coll-class">
            <div class="class-nav">
                <p class="all">全部分类：</p>
                <div class="class-cont">
                    <div v-for="item in allcla" :class="{'collstyle' : colls }">
                        <p>{{ item.fon }} (<span>{{ item.num }}</span>)</p>
                    </div>
                </div>

                <!--coll-more 显示更多-->
                <div class="coll-more" @click="mor">
                    <p>{{ more }} ></p>
                </div>
            </div>
            <div class="coll-show">
                <p>仅显示: <span>现货产品</span></p>
            </div>
        </div>
        
        <!--allShopping 收藏的全部商品-->
        <div>
            <allShopping></allShopping>
        </div>
    </div>

</template>

<script>

    import allShopping  from './all-shopping.vue'

    export default {

        components : {

            allShopping

        },

        data () {

            return {

                more : '显示更多',

                colls : true,

                allcla : [{
                    fon : '笔记本',
                    num : 2,
                },{
                    fon : '苹果',
                    num : 0,
                },{
                    fon : '打印机',
                    num : 0,
                },{
                    fon : '投影仪',
                    num : 0,
                },{
                    fon : '扫描仪',
                    num : 0,
                },{
                    fon : '一体机',
                    num : 0,
                },{
                    fon : '液晶电视',
                    num : 0,
                },{
                    fon : '网络设备',
                    num : 0,
                },{
                    fon : 'DV摄影机',
                    num : 0,
                },{
                    fon : '台式机',
                    num : 0,
                }]

            }

        },

        computed : {

        },

        methods : {

            //点击显示更多就显示更多的分类
            mor () {

                if (this.more == '显示更多') {

                    this.colls = false

                    this.more = '收起'

                } else {

                    this.colls = true

                    this.more = '显示更多'
                }

            }

        },

        created () {
            
        },

        mounted () {}

    }

</script>

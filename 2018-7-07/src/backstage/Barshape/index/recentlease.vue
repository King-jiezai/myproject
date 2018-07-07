



<style scoped>


   .memtimes {
        float: left;
        width: 500px;
        height: 350px;
        box-shadow:0px 2px  1px 1px #ccc;
        background: #fff;
        position: relative;
    }
    .access {
        float: left;
        width: 500px;
        height: 50px;
        line-height: 50px;
        color: #000;     
    }
    .access p {
        float: left;
        font-size: 16px;
        margin-left: 20px;
    }
    .chevs {
        float: right;
        margin-top: 20px;
        margin-right: 20px;
    }
    .cont {
        float: left;
        width: 100%;
        overflow: hidden;
        height: 250px;
    }
    .cont-nav {
        width: 100%;
        height: 35px;
        float: left;
        line-height: 35px;
    }
    .cont-nav p {
        width: 80px;
        float: left;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .cont-nav p:first-child {
        width: 100px;
    }
    .cont-nav p:nth-child(2) {
        width: 175px;
    }
    .cont-nav p:nth-child(3) {
        width: 120px;
    }
    .cont-cent {
        width: 100%;
        height: 250px;
        float: left;
        overflow-y:auto;
    }
    .cont-cent {
        height: 200px;
        float: left;
        background: #F9F9F9;
    }
    .cont-cent .oop {
        width: 100px;
        height: 40px;
        float: left;
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }
    .cont-cent .oop:first-child {
        width: 100px;
    }
    .cont-cent .oop:nth-child(2) {
        width: 175px;
    }
    .cont-cent .oop:nth-child(3) {
        width: 120px;
    }
    .cont-cent .oop:nth-child(4) {
        width: 80px;
    }
    .oos {
        width: 40px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 5px;
        margin: 7px 20px;
        color: #fff;
    }
    .cont-btom {
        float: left;
        width: 100%;
        height: 65px;
        line-height: 65px;
        position: absolute;
        bottom: 0px;
    }
    .btom-oos {
        float: left;
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin: 15px 0;

    }
    .btom-oos img {
        float: left;
        margin: 4px 5px 4px 10px;
    }
    .btom-oos p {
        float: left;
        color:#fff;
    }
    .btom-oos p:last-child {
        float: right;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        text-align: center;
        background: #3D9FFF;
        line-height: 30px;
        margin-right: 20px;
    }
    .oas {
        background: #5DB85C;
    } 
    .obs {
        background: #F1AC4D;
    }
    .ocs {
        background: #e60012;
    } 

</style>

<template>

     <div class="memtimes">
         <div class="access">
            <p>最近的租赁</p>
            <Icon type="chevron-right" class="chevs"></Icon>
        </div>

        <div class="cont">
            <div class="cont-nav">
                <p>订单号</p>
                <p>名称</p>
                <p>交易时间</p>
                <p>交易状态</p>
            </div>
            <div class="cont-cent">             
                <div v-for="(item, index) in res">
                    <div class="oop"><p>{{item.ors}}</p></div>
                    <div class="oop"><p>{{item.name}}</p></div>
                    <div class="oop"><p>{{item.time}}</p></div>
                    <div class="oop">
                        <p class="oos oas" v-show="item.fis == '完成' ">{{item.fis}}</p>
                        <p class="oos obs" v-show="item.fis == '待付款' ">{{item.fis}}</p>
                        <p class="oos ocs" v-show="item.fis == '失败' ">{{item.fis}}</p>
                    </div>                   
                </div>
            </div>
            <div class="cont-btom">
                <div class="btom-oos">
                    <img src="../../../../static/images/page/000.png">
                    <p>过去24小时</p>
                    <p>查看所有的租赁</p>
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

                res : [{
                    ors : '1554412266',
                    name: '二手联想电脑',
                    time: '2018-6-1',
                    fis : '完成'
                },{
                    ors : '1554412266',
                    name: '二手联想电脑',
                    time: '2018-6-1',
                    fis : '待付款'
                },{
                    ors : '1554412266',
                    name: '二手联想电脑',
                    time: '2018-6-1',
                    fis : '失败'
                },{
                    ors : '1554412266',
                    name: '二手联想电脑',
                    time: '2018-6-1',
                    fis : '完成'
                },{
                    ors : '1554412266',
                    name: '二手联想电脑',
                    time: '2018-6-1',
                    fis : '完成'
                },{
                    ors : '1554412266',
                    name: '二手联想电脑',
                    time: '2018-6-1',
                    fis : '完成'
                }],
                          
            }
            
        },

        computed : {

        },

        watch : {

        },

        methods : {
            

        },

        created () {
           
        },

        mounted () {


        }

    }

</script>

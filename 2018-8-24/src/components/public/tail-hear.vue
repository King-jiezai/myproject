







<style scoped>

    .pos {
        width: 1200px;
        height: 201px;
        margin: 0 auto;
        padding: 20px 5px;
    }
    .pos-left {
        border-right: 1px solid #666;
        padding: 15px 0 10px;
        float: left;
    }
    .pos-left ul {
        float: left;
        margin-right: 95px;
    }
    .pos-left ul li {
        color: #999;
        font-size: 14px;
        list-style: none;
        line-height: 25px;
        letter-spacing: 2px;
    }
    .pos-left ul li:hover {
        color: #e60012;
    }
    .pos-left ul li:first-child {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
        color: #666;
    }
    .pos-right {
        float: right;
    }
    .pos-right img {
        margin-right: 10px;
    }
    .pos-right span {
        color: #2f318b;
        font-size: 56px;
        position: relative;
        top: -6px;
    }
    .pos-right p {
        color: #666;
        text-align: center;
        font-size: 16px;
        letter-spacing: 2px;
    }
    .pos-right .op {
        font-size: 12px;
        margin-top: 10px;
    }

</style>

<template>

    <div class="pos">
        <div class="pos-left">
            <ul>
                <li v-for='item in res'>{{item.fon}}</li>
            </ul>
            <ul>
                <li v-for='item in reo'>{{item.fon}}</li>
            </ul>
            <ul>
                <li v-for='item in ren'>{{item.fon}}</li>
            </ul>
            <ul>
                <li v-for='item in rex'>{{item.fon}}</li>
            </ul>
            <ul>
                <li v-for='item in reu'>{{item.fon}}</li>
            </ul>
        </div>

        <div class="pos-right">
            <img :src="log">
            <span>广租</span>
            <p>服务热线：400-881-9131</p>
            <p class="op">周一至周日（9:30-18:30）</p>
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
                    fon : '平台介绍'
                },{
                    fon : '关于我们'
                },{
                    fon : '联系我们'
                },{
                    fon : '加入广租'
                },{
                    fon : '商务合作'
                }],

                reo : [{
                    fon : '售后服务'
                },{
                    fon : '故障保修'
                },{
                    fon : '售后政策'
                },{
                    fon : '常见问题'
                }],

                ren : [{
                    fon : '租赁说明'
                },{
                    fon : '租赁流程'
                },{
                    fon : '租赁方式'
                },{
                    fon : '租赁保障'
                }],

                rex : [{
                    fon : '广租特色'
                },{
                    fon : '外包服务'
                },{
                    fon : '免押金服务'
                },{
                    fon : '上门自提'
                }],

                reu : [{
                    fon : '费用与结算'
                },{
                    fon : '租金支付/退还'
                },{
                    fon : '租金说明'
                },{
                    fon : '租赁劵使用'
                },{
                    fon : '发票开取'
                }],

                log : '../../../static/images/logo_2.png'

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

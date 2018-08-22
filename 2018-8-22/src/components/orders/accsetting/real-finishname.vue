


<style scoped>
    
    .rel_top {
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
        background: #FEF4F3;
    }
    .rel_top p {
        font-size: 14px;
        margin-left: 20px;
    }
    .rel_cont {
        width: 700px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 40px;
    }
    .rel_img {
        width: 350px;
        overflow: hidden;
        margin: 0 auto;
        font-size: 14px;
    }
    .rel_img div {
        width: 85px;
        float: left;
        text-align: center;
    }
    .rel_img div:nth-child(2) {
        width: 120px;
        line-height: 90px;
        margin: 0 30px;
    }
    .rel_img p {
        text-align: center;
    }
    .rel_nav {
        width: 360px;
        margin: 30px 0 30px 175px;    
    }
    .rel_nav p:first-child {
        color: #018C19;
        font-weight: bold;
        font-size: 16px;
    }
    .rel_nav p:nth-child(2) {
        margin-top: 30px;
        font-size: 14px;
    }
    .rel_nav p:nth-child(3) {
        margin-top: 20px;
        font-size: 14px;
        margin-left: 30px;
    }
    .rel_nav p:nth-child(4) {
        margin-top: 20px;
        font-size: 14px;
        margin-left: 30px;
    }
    .rel_nav p:nth-child(5) {
        margin-top: 20px;
        font-size: 14px;
        margin-left: 44px;
    }
    .rel_nav span {
        margin-left: 20px;
    }

</style>

<template>
 
    <div class="rel_cont">
        <div class="rel_img">
            <div>
                <img src="../../../../static/images/real-names/111.png">
                <p>填写认证信息</p>
            </div>
            <div>
                <img src="../../../../static/images/real-names/666.png">
            </div>
            <div>
                <img src="../../../../static/images/real-names/222.png">
                <p>完成</p>
            </div>
        </div>

        <div class="rel_nav">
            <p>恭喜您，信息提交成功！</p>
            <p>账户安全等级：<span>{{safety}}</span></p>
            <p>真实姓名：<span>{{name}}</span></p>
            <p>身份证号：<span>{{ID}}</span></p>
            <p>手机号：<span>{{phone}}</span></p>
        </div>
    </div>
   
</template>

<script>
        
    export default {

        components : {

        },

        data () {

            return {

                safety : 'V2',

                name : "*某某" ,

                ID   : '441************0786',

                phone : "188******189"
           
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

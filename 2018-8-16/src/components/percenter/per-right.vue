


<style scoped>
   
    .per_right {
        float: left;
        width: 300px;
        overflow: hidden;    
    }
    .per_dynamic {
        width: 100%;
        height: 220px;
        border:1px solid #ccc;
        position: relative;
    }
    .imgs {
        width: 56px;
        height: 56px;
        position: absolute;
        top: -1px;
        right:-1px;
    }
    .image {
        width: 108px;
        height: 112px;
        border:1px solid #FDDBDA;
        position: absolute;
        top: 0px;
        right:0px;
    }
    .per_dynamic-nav {
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: #FDDBDA;
    }
    .per_dynamic-nav img {
        float: left;
        margin: 5px 10px;
    }
    .per_dynamic-nav p {
        color: #fff;
        margin:0 110px;
        font-size: 13px;
    }
    .customers {
        float: left;
        width: 100%;
        height: 128px;
        background: #FEFBF6;
    }
    .customers-img {
        width: 65px;
        height: 65px;
        overflow: hidden;
        border-radius: 50%;
        margin: 10px auto;
    }
    .manager {
        width: 100%;
        height: 20px;
        line-height: 20px;
        text-align: center;
        margin-bottom: 10px;
    }
    .manager span {
        color: #e60012;
    }
    .manager-cent {
        width: 158px;
        height: 20px;
        line-height: 20px;     
        float: left;
        margin-bottom: 10px;
    }
    .manager-cent:nth-child(3) {
        width: 140px;
        padding-left: 10px;
    }
    .manager-cent:nth-child(5) {
        width: 140px;
        padding-left: 10px;
    }
    .manager-cent img {
        width: 20px;
        height: 20px;
        float: left;
        margin-right: 5px;
    }
    .manager-cent p {
        float: left;
    }
    .per_nav {
        height: 30px;
        background: #6ec884;
        line-height: 30px;
        margin-top: 30px;
    }
    .per_nav img {
        margin: 5px;
    }
    .per_nav p {
        float: right;
        color: #fff;
        margin-right: 10px;
    }
    .per_calendar {
        height: 129px;
        background: #f8fffa;
        border:1px solid #6ec884;
    }
    .per_calendar p {
        text-align: center;
    }
    .per_calendar p:first-child {
        color: #0EB736;
        font-size: 40px;
    }
    .per_calendar p:nth-child(2) {
        color: #0DB834;
        font-size: 20px;
    }
    .per_calendar p:nth-child(3) {
        color: #0DB834;
        font-size: 16px;
    }
    .per_recommend {
       margin-top: 30px; 
        border:1px solid #ccc;
    }
    .per_recommend-nav {
         border-top: 3px solid #bfbfbf;
        height: 35px;
        line-height: 35px;
    }
    .per_recommend-nav p:first-child {
        font-size: 14px;
        float: left;
        margin-left: 10px;

    }
    .per_recommend-nav p:last-child {
        float: right;
        margin-right: 10px;
        color: #adadad;
    }
    .per_member img {
        width: 280px;
        margin: 0 10px; 
    }
    .per_member img:last-child {
        margin: 10px 10px 20px 10px;  
    }
    .per_footprint {
        margin-top: 30px;
        height: 150px;
        border:1px solid #ccc;
        border-top: 3px solid #ccc;
    }
    .per_footprint-nav {
        width: 280px;
        margin: 0 10px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }
    .per_footprint-nav p:first-child {
        font-size: 13px;
        float: left;
        margin-left: 10px;
    }
    .per_footprint-nav p:last-child {
        float: right;
        margin-right: 10px;
        color: #adadad;
    }
    .per_footprint-cont {
        height: 110px;
        width: 100%;        
        line-height: 20px;
    }
    .per_footprint-cont .nulls {
        text-align: center;
        margin:30px 0 10px 0; 
    }
    .per_butt {
        width: 80px;
        height: 25px;
        line-height: 25px;
        border-radius: 15px;
        background: #e60012;
        color: #fff;
        text-align: center;
        margin: 0 auto;
    }

</style>

<template>

    <div>
        
        <div class="per_right" @click='cls' >

            <div class="per_dynamic">
                <div class="per_dynamic-nav" >
                    <img src="../../../static/images/percent/11111.png">
                    <p>我的客户经理</p>
                </div> 
                <div class="imgs"  @mouseenter="mou">  
                    <img src="../../../static/images/percent/999.png">
                </div>
                <div class="image" v-show="ims" @mouseleave="lea">
                    <img src="../../../static/images/percent/58.png">
                </div>
                <div class="customers">
                    <div class="customers-img">
                        <img src="../../../static/images/percent/22222.png">
                    </div>
                    <div class="manager">
                        <p><span>客户经理：</span>{{this.mana}}</p>
                    </div>
                    <div class="manager-cent" v-for="item in res">
                        <img :src="item.img">
                        <p>{{item.fon}}</p>
                    </div>
                </div>    
            </div>

            <div class="per_nav">
                <img :src="Muimg" @click.stop="test">
                <p>我的日历</p>
            </div>
            <div class="per_calendar">
                <p>{{ date }}</p>
                <p>{{ week }}</p>
                <p>{{ year }}-{{ month }}</p>                            
            </div>
            
            <div class="per_recommend">
                <div class="per_recommend-nav">
                    <p>会员推荐</p>
                    <p>会员俱乐部 ></p>
                </div>
                <div class="per_member">
                    <img src="../../../static/images/percent/111.png">
                    <img src="../../../static/images/percent/222.png">
                </div>
            </div>
            
            <div class="per_footprint">
                <div class="per_footprint-nav">
                    <p>我的收藏</p>
                    <p>查看更多 ></p>
                </div>
                <div class="per_footprint-cont">
                    <p class="nulls">亲！你这里好空荡哟~~~</p>
                    <div class="per_butt">
                        <p>去逛逛</p>
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


                Muimg :  '../../../static/images/percent/9.png',

                year :  '',

                month : '',

                date  : '',

                week : '' ,

                pay  : '' ,

                ims : false,

                mana : '广租_立夏',

                res : [{
                    img : '../../../static/images/percent/33.png',
                    fon : '4008819131'
                },{
                    img : '../../../static/images/percent/44.png',
                    fon : '1103431086'
                },{
                    img : '../../../static/images/percent/77.png',
                    fon : '18816987123'
                },{
                    img : '../../../static/images/percent/88.png',
                    fon : '1103431086@qq.com'
                }]
           
            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {

            test () {

                this.Muimg = '../../../static/images/percent/22.png'
            
            },

            cls () {

                 this.Muimg = '../../../static/images/percent/9.png'

            },

            mou () {

                this.ims = true
            },

            lea () {

                this.ims = false
            }

        },

        created () {

                var mydate=new Date();
                this.year = mydate.getFullYear();
                this.month = mydate.getMonth()+1;
                this.date = mydate.getDate();
                var myddy=mydate.getDay();//获取存储当前日期
                var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
                this.week =  weekday[myddy];       
        },

        mounted () {

              
        }
    }

</script>

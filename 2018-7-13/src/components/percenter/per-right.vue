


<style scoped>
   
    .per_right {
        float: left;
        width: 200px;
        overflow: hidden;
        margin-top: 30px;
       
    }
    .per_nav {
        height: 30px;
        background: #6ec884;
        line-height: 30px;
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
    .per_dynamic {
        position: relative;
        height: 130px;
        overflow: hidden;
        border:1px solid #ccc;
        margin-top: 20px;
    }
    .per_dynamic-nav {
        height: 30px;
        line-height: 30px;

    }
    .per_dynamic-nav p:first-child {
        float: left;
        color: #adadad;
        font-size: 14px;
        margin-left: 5px;
    }
    .per_dynamic-nav p:last-child {
        text-align: center;
        color: #adadad;
        margin-right: 10px;
    }
    .per_dynamic-img {
        width: 100px;
        height: 70px;
        overflow: hidden;
        margin: 16px 50px;
    }
    .per_dynamic-img img {
        width: 100%;
        height: 100%;
        /*margin: 16px 65px;*/
    }
    .per_dynamic .prev, .per_dynamic .next {
        position: absolute;
        top: 65px;
        width: 30px;
        height: 30px;
        left: 5px;
    }
    .per_dynamic .next {
        left: auto;
        right: 5px;
    }
    .per_recommend {
       margin-top: 20px; 
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
        margin: 0 10px; 
    }
    .per_member img:last-child {
        margin: 10px 10px 20px 10px;  
    }
    .per_footprint {
        margin-top: 20px;
        height: 216px;
        border:1px solid #ccc;
    }
    .per_footprint-nav {
        height: 30px;
        line-height: 30px;
        border-top: 3px solid #ccc;
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
        float: left;
        height: 195px;
        width: 180px;
        margin: 0 10px;
        line-height: 195px;
        border-top: 1px solid #ccc;
        line-height: 20px;
    }
    .per_footprint-cont p {
        padding: 70px 25px 10px 25px;
    }
    .per_butt {
        float: left;
        width: 80px;
        height: 25px;
        line-height: 25px;
        border-radius: 15px;
        background: #e60012;
        color: #fff;
        text-align: center;
        margin: 0 50px;
    }
    .per_butt p {
        padding: 0px;
        
    } 

</style>

<template>

    <div>
        
        <div class="per_right" @click='cls'>
            <div class="per_nav">
                <img :src="Muimg" @click.stop="test">
                <p>我的日历</p>
            </div>
            <div class="per_calendar">
                <p>{{ date }}</p>
                <p>{{ week }}</p>
                <p>{{ year }}-{{ month }}</p>                            
            </div>
            <div class="per_dynamic" >
                <div class="per_dynamic-nav">
                    <p>今日上新</p>
                    <p>有<span>{{ pay }}</span>个宝贝上新</p>
                </div>   
                <div class="per_dynamic-img" >                 
                    <span v-for="item in dyimg">
                        <img :src="item.img">
                    </span>
                </div>
                <img src="../../../static/images/percent/20.png" class="prev">
                <img src="../../../static/images/percent/19.png" class="next">     
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
                    <p>我的足迹</p>
                    <p>查看更多 ></p>
                </div>
                <div class="per_footprint-cont">
                    <p>亲！你这里好空荡哟~~~</p>
                    <div class="per_butt">
                        <p>去逛逛</p>
                    </div>
                </div>
            </div>
            <div class="per_footprint">
                <div class="per_footprint-nav">
                    <p>我的收藏</p>
                    <p>查看更多 ></p>
                </div>
                <div class="per_footprint-cont">
                    <p>亲！你这里好空荡哟~~~</p>
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

                dyimg : [{

                    img :  '../../../static/images/percent/1-1.png' 
                },{

                    img :  '../../../static/images/percent/1-14.png' 
                },{

                    img :  '../../../static/images/percent/1-15.png' 
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



            

        },

        created () {

                var mydate=new Date();
                this.year = mydate.getFullYear();
                this.month = mydate.getMonth()+1;
                this.date = mydate.getDate();
                var myddy=mydate.getDay();//获取存储当前日期
                var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
                this.week =  weekday[myddy];

            if( this.dyimg == 0 ){

                this.pay = 0

            } else {

                this.pay = this.dyimg.length
            }
    
                
           
        },

        mounted () {

               $(".per_dynamic").slide({

                mainCell : ".per_dynamic-img",
                // autoPlay : true,
                // effect   : "leftLoop",
                // delayTime: 1000

            })
        }
    }

</script>

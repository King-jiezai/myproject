


<style scoped>

    .my_circle {
        width: 880px;
        height: 186px;
        margin: 30px 0 30px 0;
    }
    .my_circle-nav {
        height: 38px;
        background: #f1f1f1;
        font-size: 14px;
        line-height: 38px;
    }
    .my_circle-nav p {
        float: left;
        width: 100px;
        text-align: center;
        margin-left: 30px;
    }
    .my_circle-nav p:first-child {
        width: 70px;
        text-align: left;
        margin-left: 20px;
    }
    .my_circle-cont {      
        height: 148px;
        border: 1px solid #dddddd;
        border-top: 0px;
        padding: 27px 0;
    }
    .my_circle-cont ul li{
        width: 95px;
        height: 94px;
        border-radius: 50%;
        overflow: hidden;
        float: left;
        margin-left: 50px;
    }
    .my_circle-cont ul li img {
        width: 100%;
        height: 100%;
    }
    .staus {
        color: #e60012;
    }
    .more  {
        width: 78px;
        height: 78px;
        border-radius: 50%;
        border:2px solid #dddddd;
        float: left;
        line-height: 78px;
        text-align: center;
        color: #ccc;
        font-size: 17px;
        margin: 8px 0 8px 40px; 
    }

</style>

<template>

        <!--my_circle 热门圈子-->
        <div class="my_circle">
            <div class="my_circle-nav">
                <p  v-for='(item,index) in cir' :class="{'staus':oos==index}" @click='cls(index)'>{{item}}</p>
            </div>
            <div class="my_circle-cont" >
                <ul  v-for='(item,index) in img '>
                    <li><img :src="item.imgs"></li>
                </ul>
                <div class="more">
                    <p>查看更多</p>
                </div>
                <div class="clear"></div>
            </div>
        </div>
                

</template>

<script>


    export default {
        
        components : {
  
               
        },

        data () {

            return {

                oos   : false  ,

                cir : ['热门圈子','我创建的圈子','我加入的圈子'],

                img : [{

                    imgs : '../../../static/images/percent/aa-02.png'
                },{

                    imgs : '../../../static/images/percent/aa-03.png'
                },{

                    imgs : '../../../static/images/percent/aa-04.png'
                },{

                    imgs : '../../../static/images/percent/aa-05.png'
                },{

                    imgs : '../../../static/images/percent/aa-05.png'
                }]                        

            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {


            cls (index) {

                this.oos = index
            }
            
        },

        created () {
      
           
        },

        mounted () {

        }
    }

</script>

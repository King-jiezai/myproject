


<style scoped>

    .my_like {
        width: 880px;
        height: 302px;
    }
    .my_like-nav {
        height: 38px;
        line-height: 38px;
        background: #F1F1F1;
    }
    .my_like-nav p {
        float: left;
        margin: 0 15px;
        color: #000;
        font-size: 16px;
    }
    .my_like-nav p:last-child {
        float: right;
        color: #A6A6A6;
        font-size: 14px;
    }
    .my_like-cont {
        width:880px;
        height: 264px;
        border: 1px solid #ccc;
        border-top: 0px;
        overflow: hidden;
    }
    .my_like_left {
        float: left;
        width: 438px;
        height: 250px;
        margin: 10px 0 5px 0;
        border-right: 1px dashed #dddddd;
    }
    .my_like_left:last-child {
        border-right: 0px;
    }
    .my_like-left {
        float: left;
        width: 290px;
        height: 250px;
    }
    .my_like-left p {
        text-align: center;
        margin-top: 10px;
    }
    .my_like-img {
        width: 195px;
        height: 167px;
        margin: 10px 5px 0 45px;
    }
    .my_like-left img{
        width: 100%;
        height: 100%;        
    }
    .my_buttom {
        width: 97px;
        height: 29px;
        line-height: 29px;
        margin: 0 auto;
        background: #e60012;
        border-radius: 5px;
    }
    .my_buttom p {
        color: #fff;
        font-size: 14px;
    }
    .my_like-right {
        float: right;
        width: 144px;
        height: 250px;
    }
    .my_like-right-img {
        width: 117px;
        height: 87px;
        margin: 10px 0 0 5px;
    }
    .fabulous {
        float: left;
        width: 55px;
        height: 23px;
        margin: 25px 5px 0 3px;
        border: 1px solid #dddddd;
        border-radius: 5px;
        cursor: pointer;
    }
    .fabulous img {
        float: left;
        margin: 3px 0 0 8px;
    }
    .fabulous:last-child img {
        margin-top: 4px;
    }
    .fabulous span {
        float: left;
       margin:3px 0 0 8px;
    }
    .per_right {
        float: right;
    }
   

</style>

<template>

            <!--my_like 我的足迹-->
            <div class="my_like">
                <div class="my_like-nav">
                    <p>我的足迹</p>
                    <p>查看更是商品 ></p>
                </div>

                <!--my_like-cont 我的足迹内容-->
                <div class="my_like-cont">
                    <div class="my_like_left">
                        
                        <div class="my_like-left">
                            <div class="my_like-img">
                                <img :src="likeItem">
                            </div>
                            <p>{{ fooItem }}</p>
                            <div class="my_buttom">
                                <p>点击进入</p>
                            </div>
                        </div>
                        <div class="my_like-right">
                            <div class="my_like-right-img">
                                <img :src="imgItem">
                            </div>
                             <div class="my_like-right-img">
                                 <img :src="imgsItem">
                            </div>
                            <div class="fabulous" @click="test">
                                <img :src="MuImg">
                                <span>{{ fabulous }}</span>
                            </div>
                            <div class="fabulous" @click="tests">
                                <img :src="Likeimg">
                                <span>{{ like }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="my_like_left">
                        
                        <div class="my_like-left">
                            <div class="my_like-img">
                                <img :src="likeItem">
                            </div>
                            <p>{{ fooItem }}</p>
                            <div class="my_buttom">
                                <p>点击进入</p>
                            </div>
                        </div>
                        <div class="my_like-right">
                            <div class="my_like-right-img">
                                <img :src="imgItem">
                            </div>
                             <div class="my_like-right-img">
                                 <img :src="imgsItem">
                            </div>
                            <div class="fabulous" @click="right">
                                <img :src="MuImgs">
                                <span>{{ fabulouss }}</span>
                            </div>
                            <div class="fabulous" @click="rights">
                                <img :src="Likeimgs">
                                <span>{{ likes }}</span>
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

                fabulous : 0 ,

                like : 0 ,

                fabulouss : 0 ,

                likes : 0 ,


                likeItem  : '../../../static/images/percent/1-13.png',

                fooItem : 'Think pad X230 轻薄便携',

                imgItem : '../../../static/images/percent/1-14.png',

                imgsItem : '../../../static/images/percent/1-15.png',

                MuImg : '../../../static/images/percent/7.png' ,

                Likeimg : '../../../static/images/percent/8.png',

                MuImgs : '../../../static/images/percent/7.png' ,

                Likeimgs : '../../../static/images/percent/8.png',

                          

            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {

            test () {

                this.fabulous = this.fabulous+1

                this.MuImg = '../../../../static/images/percent/21.png'
            },

             tests () {

                this.like = this.like+1

                this.Likeimg = '../../../../static/images/percent/27.png'
            },

            right () {

                this.fabulouss = this.fabulouss+1

                this.MuImgs = '../../../../static/images/percent/21.png'
            },

            rights () {

                this.likes = this.likes+1

                this.Likeimgs= '../../../../static/images/percent/27.png'
            }
            

        },

        created () {
            
           
        },

        mounted () {

        }
    }

</script>

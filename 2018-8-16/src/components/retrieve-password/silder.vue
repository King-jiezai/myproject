

<style scoped>

    .account-name {
        width: 100%;
        margin: 0 auto;
    }
    .drag_verify{ 
        position: relative;
        background-color: #e8e8e8;
        text-align: center;
        overflow: hidden;
    }
    .drag_verify .dv_handler{
        position: absolute;
        top: 0px;
        left: 0px;
        cursor: move;
    }
    .dv_handler p {
        color: #fff;
        height: 35px;
    }
    
    .drag_verify .dv_handler i{
        color: #666;
        font-size: 1.5em;
    }
    .drag_verify .dv_progress_bar{
        position: absolute;
        height: 34px;
        width: 0px;
        transition: background 2s ease-in;
    }
    .drag_verify .dv_text{
        position: absolute;
        top: 0px;
        color:#999;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        -o-user-select:none;
        -ms-user-select:none;
    }
    
</style>

<template>

    <!--account-name 滑块验证-->
    <div class="account-name">           
        <div class="drag_verify" :style="dragVerifyStyle" @mousemove="dragMoving" @mouseup="dragFinish" @touchmove="dragMoving" @touchend="dragFinish">
            
            <div class="dv_progress_bar" ref="progressBar" :style="progressBarStyle">
                
            </div>
            <div class="dv_text" :style="textStyle" ref="message">{{message}}</div>
            
            <div class="dv_handler dv_handler_bg" @mousedown="dragStart"  ref="handler" :style="handlerStyle" @touchstart="dragStart">
                <i :class="handlerIcon"><p>>></p></i>
            </div>

         </div>
    </div>

</template>

<script>


    export default {

        name:'dragVerify',
    props:{
        width:{
            type:Number,
            default:300
        },
        height:{
            type:Number,
            default:37
        },
        text:{
            type:String,
            default:'请按住滑块拖到到最右边'
        },
        successText:{
            type:String,
            default:'验证成功'
        },
        background:{
            type:String,
            default:'#FCFCFC'
        },
        border:{
            type:String,
            default:'1px solid #999'
        },
        completedBg:{
            type:String,
            default:'#4EEE94'
        },
        circle:{
            type:Boolean,
            default: true
        },
        handlerIcon:{
            type:String

        },
        successIcon:{
            type:String
        },
        handlerBg:{
            type:String,
            default:'#999'
        },
        textSize:{
            type:String,
            default:'14px'
        }

    },

        data () {

            return {
               
                isMoving : false,
                x:0,
                isPassing : false

            }
            
        },

        watch : {

        },

        computed : {

            handlerStyle:function(){
            return {
                left: '0px',
                width : this.height-2+'px',
                height : this.height-2+'px',
                background: this.handlerBg
            }
        },
            message : function(){
                return this.isPassing?this.successText:this.text
            },
            dragVerifyStyle:function(){
                return {
                    width: this.width + 'px',
                    height : this.height+'px',
                    lineHeight: this.height+'px',
                    background:this.background,
                    border:this.border,
                    borderRadius: this.circle?this.height/10+'px':0
                }
            },
            progressBarStyle: function(){
                return {
                    height : this.height-2+'px',
                    borderRadius: this.circle?this.height/10+'px 0 0 ' + this.height/10+'px':0
                }
            },
            textStyle: function(){
                return {
                    height : this.height+'px',
                    width : this.width + 'px',
                    fontSize:this.textSize
                }
            },
            handlerIconClass: function(){
                return this.isPassing?this.handlerIcon:this.successIcon
            }
                
            },

            methods : {
                
                init: function(){
                
            },
            dragStart: function(e){
                if(!this.isPassing) {
                    this.isMoving = true;
                    var handler = this.$refs.handler;
                    this.x = (e.pageX||e.touches[0].pageX) - parseInt(handler.style.left.replace('px',''), 10);
                }
                
            },
            dragMoving: function(e){
                if(this.isMoving && !this.isPassing){
                    var _x = (e.pageX||e.touches[0].pageX) - this.x;
                    var handler = this.$refs.handler;
                    if(_x > 0 && _x <= (this.width-this.height)){
                        handler.style.left = _x + 'px';
                        this.$refs.progressBar.style.width = (_x+this.height/10)+'px';
                    }else if(_x > (this.width-this.height)){  
                        handler.style.left = (this.width - this.height)+ 'px';
                        this.$refs.progressBar.style.width = (this.width-this.height/1)+'px';
                         this.passVerify();
                    }
                }

            },
            dragFinish: function(e){
                if(this.isMoving && !this.isPassing){
                    var _x = (e.pageX || e.changedTouches[0].pageX)- this.x;
                    if(_x <(this.width - this.height)){
                        this.$refs.handler.style.left = '0';
                        this.$refs.progressBar.style.width = '0';
                    }
                    this.isMoving = false;
                }
                
            },
            passVerify: function(){
                this.isPassing = true;
                this.isMoving = false;
                var handler = this.$refs.handler;
                handler.className += ' dv_handler_ok_bg';
                handler.children[0].className = this.successIcon;
                this.$refs.progressBar.style.background = this.completedBg;
                this.$refs.message.style.color = '#000';
                this.$emit('passcallback');
            }
        },

        created () {
   
        },

        mounted () {

        }

    }

</script>

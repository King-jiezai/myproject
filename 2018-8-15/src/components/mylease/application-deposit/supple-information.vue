


<style scoped>

    .body {
        width: 910px;
        overflow: hidden;
    }
    .box-step {
        width: 100%;
        height: 85px;
        margin-bottom: 20px;
    }
    .step-cont {
        width: 440px;
        height: 85px;
        margin: 0 auto;
    }
    .step-img {
        float: left;
        width: 80px;
        height: 85px;
        overflow: hidden;
        text-align: center;
        margin: 0 4px;        
    }
    .step-img p {
        margin-top: 5px;
    }
    .step-img:nth-child(1) p{
        color: #469FFF;
    }
    .step-img:nth-child(2) img {
        margin: 12px 0;
    }
    .step-img:nth-child(4) img {
        margin: 12px 0;
    }
    .box-txt {
        width:910px;
        height: 46px;
        font-size: 12px;
        color: #333;
        margin-bottom: 51px;
        background: #fffdf0;
        border: 1px solid #ffdfbe;
        line-height: 46px;
        font-size: 14px;
    }
    .box-txt p:first-child {
        float: left;
        width: 20px;
        height: 20px;
        background: #F8AD36;
        line-height: 20px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        font-size: 12px;
        margin: 13px;
    }
    .supple-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
        border-bottom: 1px solid #ccc;
        font-size: 14px;
    }
    .supple-top span {
        font-size: 12px;
        color: #999;
        margin-left: 15px;
    }
    .supple-cent {
        width: 100%;
        margin-top: 50px;
        overflow: hidden;
    }
    .supple-ps {
        width: 100%;
        line-height: 32px;
        width: 120px;
        text-align: right;
        font-size: 14px;
        color: #333;
        position: relative;
        margin-left: 15px;
    }
    .supple-ps .sp1{
        color: #e60012;
        position: relative;
        top: 5px;
        right: 4px;
        font-size: 18px;
    }
    .supple-upimg {
        width: 100%;
        height: 140px;
        overflow: hidden;
    }
    .upload_warp_img_div_del {
        background: red;
        width: 10px;
        height: 10px;
        position: absolute;
        right: 0px;
        top: 2px;
        z-index: 998999;
    }
    .up_img {
        width: 88px;
        height: 88px;
        float: left;
        z-index: 999;
        position: absolute;
        left: 0px;
        background: #fff;
    }
    .upload_warp_left {
        width: 90px;
        height:90px;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        border: 1px solid #2595d3;
        line-height: 88px;
        position: relative;
    }
    .upload_warp_left p{
        font-size: 40px;
        color: #2595d3;
    }
    .upload_img {
        float: left;
        height:130px;
        width: 90px;
        margin-left:160px; 
        text-align: center;
        color: #999;
    }
    .upload_imgs {
        float: left;
        height:130px;
        width: 220px;
        margin-left:160px; 
        text-align: center;
        color: #999;
    }
    .upload_cent {
        float: left;
        width: 90px;
        height: 90px;
        margin: 10px 20px 10px 0;
    }
    .upload_img .presentation {
        margin-top: 10px;
    }
   
    .business_gai {
        float: left;
        line-height: 100px;
        margin:10px 0 0 20px ;
        color: #999;
    }
    .business_gai p {
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 50%;
        background: #999;
        color: #fff;
        text-align: center;
        float: left;
        margin: 42px 10px 0 0;
    }
    .business_up {
        float: left;
        line-height: 20px;
        margin: 48px 0 0 20px;
        color: #e60012;
    }
    .business_up p {
         width: 15px;
        height: 15px;
        line-height: 13px;
        border-radius: 50%;
        background: #e60012;
        color: #fff;
        text-align: center;
        float: left;
        margin: 3px;
    }
    .submission {
        width: 80px;
        height: 30px;
        background-color: #e60012;
        line-height: 30px;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        margin: 50px 160px;
        cursor: pointer;
    }
    .success {
        width: 500px;
        height: 250px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0 1px 10px #666;
        margin-top: 50px;
        margin-bottom: 50px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        border-radius: 5px;
    }
    .success-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        padding-left: 20px;
    }
    .success-cent {
        width: 100%;
        height: 170px;
        line-height: 170px;
        font-size:30px;
        color: #e60012;
    }
    .success-cent img {
        float: left;
        margin: 70px 10px 0 165px;
    }
    .success-bottom {
        width: 50px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        background-color: #e60012;
        border-radius: 5px;
        text-align: center;
        float: right;
        margin-right: 20px;
        cursor: pointer;
    }
    .model_pre {
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.5;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

</style>

<template>
 
        <div class="body">
                <div class="box-step">
                    <div class="step-cont">
                        <div class="step-img">
                            <img src="../../../../static/images/order/77.png">
                            <p>填写资料</p>
                        </div>
                        <div class="step-img">
                            <img src="../../../../static/images/order/55.png">
                        </div>
                        <div class="step-img">
                            <img src="../../../../static/images/order/44.png">
                            <p>补充资料</p>
                        </div>
                        <div class="step-img">
                            <img src="../../../../static/images/order/55.png">
                        </div>
                        <div class="step-img">
                            <img :src="imgs ">
                            <p>提交资料</p>
                        </div>                       
                    </div>
                </div>
                <div class="box-txt">
                    <p>!</p>
                    <p>温馨提示：补充资料填写的越完整，越有利于提高免押金额度。</p>
                </div>

                <div class="supple-top">
                    <p>补充资料<span>以下图片上传仅支持JPG,GIF,PNG,BMP,JPEG,TIFF格式，文件小于5M</span></p>
                </div>

                <div class="supple-cent">
                    <div>
                        <p class="supple-ps"><span class="sp1">*</span>法人征信报告</p>
                    </div>
                    <div class="supple-upimg">
                        <div class="upload_img">
                            <div  @mouseenter="mous" @mouseleave="moul">
                                <div class="upload_warp_left" >
                                  <div  v-for="(item,index) of imgList">
                                    <img src="../../../../static/images/paysuccess/del.png" class="upload_warp_img_div_del" @click="fileDel(index)" v-show="shows">
                                    <img :src="item.file.src" class="up_img" v-model="val">
                                  </div>
                                    <p @click.stop="fileClick">+</p>
                                </div>
                            </div>
                            <p class="presentation">(正面征信报告)</p>
                        </div>
                        <div class="business_gai"><p>！</p>原件拍照件或原件盖公章扫件或签字版原件复印件</div>
                        <div class="business_up" v-show="pos"><p>-</p>请上传正面征信报告</div>
                        <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
                    </div>
                </div>

                <div class="supple-cent">
                    <div>
                        <p class="supple-ps"><span class="sp1">*</span>公司银行流水</p>
                    </div>
                    <div class="supple-upimg">
                        <div class="upload_imgs">
                            <div class="upload_cent" @mouseenter="mouss" @mouseleave="mouls">
                                <div class="upload_warp_left" >
                                  <div  v-for="(items,index) of imgLists">
                                    <img src="../../../../static/images/paysuccess/del.png" class="upload_warp_img_div_del" @click="fileDels(index)" v-show="showss">
                                    <img :src="items.file.src" class="up_img" v-model="vals">
                                  </div>
                                    <p @click.stop="fileClicks">+</p>
                                </div>
                            </div>
                            <div class="upload_cent" @mouseenter="mouss" @mouseleave="mouls">
                                <div class="upload_warp_left" >
                                  <div  v-for="(items,index) of imgLists">
                                    <img src="../../../../static/images/paysuccess/del.png" class="upload_warp_img_div_del" @click="fileDels(index)" v-show="showss">
                                    <img :src="items.file.src" class="up_img" v-model="vals">
                                  </div>
                                    <p @click.stop="fileClicks">+</p>
                                </div>
                            </div>
                            <p class="presentation">(请上传近半年的公司银行流水)</p>
                        </div>
                        <div class="business_gai"><p>！</p>原件拍照件或原件盖公章扫件或签字版原件复印件</div>
                        <div class="business_up" v-show="poss"><p>-</p>请上传近半年的公司银行流水</div>
                        <input @change="fileChanges($event)" type="file" id="upload_files" multiple style="display: none"/>
                    </div>
                </div>

                <div class="submission" @click="clisub">
                    <p>提交</p>
                </div>

            <div v-show="two">
                <div class="success">
                    <div class="success-top">
                        <p>免押金资料</p>
                    </div>
                    <div class="success-cent">
                        <img src="../../../../static/images/order/5555.png">
                        <p>提交成功</p>
                    </div>
                    <div class="success-bottom" @click="sure">
                        <p>确定</p>
                    </div>
                </div>

            </div>
            <div class="model_pre" v-show="two"></div>    
             
        </div>  

   
</template>

<script>
        

    export default {

        components : {


        },

        data () {

            return {

                two : false,

                imgList: [],

                size: 0,

                oos : false,

                shows : false,

                val : '',

                pos : false,

                imgLists : [],

                size: 0,

                oos : false,

                showss : false,

                vals : '',

                poss : false, 

                imgs : '../../../../static/images/order/33.png'   

            }

            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {  


            clisub () {

                if (this.val == '' && this.vals == '') {

                    // this.pos = true

                    // this.poss = true
                }else {

                    this.pos = false

                    this.poss = false


                }

                this.two = true

                this.imgs = '../../../../static/images/order/222.png'
            
            },

            sure () {
                this.two = false
                this.imgs = '../../../../static/images/order/33.png'
            },

            mous () {
                this.shows = true
            },

            moul () {
                this.shows = false
            },

            fileClick() {

                const check = this.imgList.length < 1;
                if (!check) {

                    this.oos = true
                   
                }else {
                    document.getElementById('upload_file').click()
                }
       
            },

            fileChange(el) {

                if (!el.target.files[0].size) return;
                    this.fileList(el.target);
                    el.target.value = ''
            },

            fileList(fileList) {

                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                //判断是否为文件夹
                    if (files[i].type != '') {
                    this.fileAdd(files[i]);
                    } else {
                    //文件夹处理
                    this.folders(fileList.items[i]);
                    }
                }
            },

            //文件夹处理
            folders(files) {
                let _this = this;
            //判断是否为原生file
                if (files.kind) {
                    files = files.webkitGetAsEntry();
                }
                files.createReader().readEntries(function (file) {
                    for (let i = 0; i < file.length; i++) {
                        if (file[i].isFile) {
                            _this.foldersAdd(file[i]);
                        } else {
                            _this.folders(file[i]);
                        }
                    }
                })
            },

            foldersAdd(entry) {
                let _this = this;
                entry.file(function (file) {
                 _this.fileAdd(file)
                })
            },

            fileAdd(file) {
            
                //判断是否为图片文件
                if (file.type.indexOf('image') == -1) {
                    file.src = 'wenjian.png';
                    this.imgList.push({
                        file
                    });
                } else {
                    let reader = new FileReader();
                    let image = new Image();
                    let _this=this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        file.src = this.result;
                        image.onload=function(){
                        let width = image.width;
                        let height = image.height;
                        file.width=width;
                        file.height=height;
                        _this.imgList.push({
                            file
                        });
                        console.log( _this.imgList);
                    };
                        image.src= file.src;
                    }
                }
            },

            fileDel(index) {
                    this.imgList.splice(index, 1);
                if (this.limit !== undefined) this.limit = this.imgList.length;
            },

            bytesToSize(bytes) {
                if (bytes === 0) return '0 B';
                    let k = 1000, // or 1024
                    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                    i = Math.floor(Math.log(bytes) / Math.log(k));
                    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
            },

            dragenter(el) {
                el.stopPropagation();
                el.preventDefault();
            },

            dragover(el) {
                el.stopPropagation();
                el.preventDefault();
            },

            drop(el) {
                el.stopPropagation();
                el.preventDefault();
                this.fileList(el.dataTransfer);
            },

            mouss () {
                this.showss = true
            },

            mouls () {
                this.showss = false
            },

            fileClicks() {

                const check = this.imgLists.length < 1;
                if (!check) {

                    this.oos = true
                   
                }else {
                    document.getElementById('upload_files').click()
                }
       
            },

            fileChanges(el) {

                if (!el.target.files[0].size) return;
                    this.fileList(el.target);
                    el.target.value = ''
            },

            fileList(fileList) {

                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                //判断是否为文件夹
                    if (files[i].type != '') {
                    this.fileAdd(files[i]);
                    } else {
                    //文件夹处理
                    this.folders(fileList.items[i]);
                    }
                }
            },

            //文件夹处理
            folders(files) {
                let _this = this;
            //判断是否为原生file
                if (files.kind) {
                    files = files.webkitGetAsEntry();
                }
                files.createReader().readEntries(function (file) {
                    for (let i = 0; i < file.length; i++) {
                        if (file[i].isFile) {
                            _this.foldersAdd(file[i]);
                        } else {
                            _this.folders(file[i]);
                        }
                    }
                })
            },

            foldersAdd(entry) {
                let _this = this;
                entry.file(function (file) {
                 _this.fileAdd(file)
                })
            },

            fileAdd(file) {
            
                //判断是否为图片文件
                if (file.type.indexOf('image') == -1) {
                    file.src = 'wenjian.png';
                    this.imgLists.push({
                        file
                    });
                } else {
                    let reader = new FileReader();
                    let image = new Image();
                    let _this=this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        file.src = this.result;
                        image.onload=function(){
                        let width = image.width;
                        let height = image.height;
                        file.width=width;
                        file.height=height;
                        _this.imgLists.push({
                            file
                        });
                        console.log( _this.imgLists);
                    };
                        image.src= file.src;
                    }
                }
            },

            fileDels(index) {
                    this.imgLists.splice(index, 1);
                if (this.limit !== undefined) this.limit = this.imgLists.length;
            },

            bytesToSize(bytes) {
                if (bytes === 0) return '0 B';
                    let k = 1000, // or 1024
                    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                    i = Math.floor(Math.log(bytes) / Math.log(k));
                    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
            },

            dragenter(el) {
                el.stopPropagation();
                el.preventDefault();
            },

            dragover(el) {
                el.stopPropagation();
                el.preventDefault();
            },

            drop(el) {
                el.stopPropagation();
                el.preventDefault();
                this.fileList(el.dataTransfer);
            },
       
        },

        created () {

            

        },

        mounted () {

        }

    }

</script>

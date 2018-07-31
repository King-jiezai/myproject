

<style scoped>

  .upload_warp_img_div_del {
    background: red;
    position: absolute;
    width: 10px;
    height: 10px;
    right: 0px;
  }
  .up_img {
    width: 58px;
    height: 58px;
  }
  .upload_warp_img_div_text {
    white-space: nowrap;
    width: 30px;
    text-overflow: ellipsis;
  }
  .upload_warp_img_div {
    position: relative;
    height: 58px;
    width: 58px;
    border: 1px solid #ccc;
    margin: 15px 10px 10px 0px;
    float: left;
    line-height: 58px;
    display: table-cell;
    text-align: center;
    cursor: pointer;
  }
  .upload_warp_left {
    float: left;
    width: 58px;
    height:58px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #ccc;
    margin: 15px 10px 0 0;
  }
  .upload_warp_left img {
         margin:5px 12px 0px 12px;
  }
    .eva-push .eva-p {
        float: left;
        line-height:90px;
    }
    .eva-push span {
        color: #e60012;
    }
    .up_load {
        width: 540px;
        overflow: hidden;
        float: left;

    }
    .up_cont {
        overflow: hidden;
        width: 246px;
    }
    .up_inps {
        width: 300px;
        height: 40px;
        border:1px solid #ccc;
        line-height: 40px;
        font-size: 14px;
        border-radius: 5px;
        background: #F7F7F7;
        box-shadow: 1px 1px 7px #ccc;
        margin-bottom: 10px;
        position: fixed;
        top: 5%;
    }
    .up_inps span{
        float: left;
        padding:19px 2px;
        background: #FF9900;
        margin-right: 10px;
        border-top-left-radius: 5px;
    }
    .up_inps p {
        float: left;
        margin-right: 10px;
    }
    .push-img {
        float: left;
        width: 58px;
        height: 58px;
        text-align: center;
        border:1px solid #C3C8CC;
        margin: 15px 10px 0px 0; 
        border-radius: 5px;    
    }
    .push-img img {
      margin:5px 12px 0px 12px;
    }
    .up_code {
      width: 200px;
      height: 215px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border:1px #ccc solid;
      background: #fff;
      text-align: center;
      box-shadow: 2px 2px 8px #ccc; 
      font-size: 13px;
    }
    .up_code img {
      margin: 10px 10px 0 10px;
    }

</style>

<template>

  <div class="up_load">  
        <div class="upload_warp_img_div" v-for="(item,index) of imgList">
            <div class="upload_warp_img_div_top">
              <img src="../../../static/images/paysuccess/del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
            </div>
            <img :src="item.file.src" class="up_img">
        </div>
        <div class="up_cont">
            <div class="upload_warp_left" @click.stop="fileClick">
                <img src="../../../static/images/paysuccess/b.png">
                <p>电脑传图</p>
            </div>
            <div class="push-img" @click="pho">
                <img src="../../../static/images/paysuccess/c.png" class="phone">
                <p>手机传图</p>
            </div>
            <p class="eva-p">共<span>{{imgList.length}}</span>张，还能上传<span>{{this.num-imgList.length}}</span>张</p>  
        </div>
        <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>

        <div class="up_inps" v-show="oos">
            <span></span>
            <p>最多可上传五张图片，超出请删除再上传</p>
            <Icon type="close-circled" @click="cls"></Icon>
        </div>

        <div class="up_code" v-show="codes">
          <img src="../../../static/images/wechat-2.png">
          <p>请打开手机扫一扫上面的二维码</p>
        </div>

       
  </div>

</template>

<script>

    import {Icon} from 'iview'

    import { mapState } from 'vuex'

  export default {

    components : {
            
           Icon
               
        },

    data() {

      return {

        imgList: [],

        size: 0,

        num : 9,

        oos : false,

        codes : false

      }
    },

    computed : {

      ...mapState([

          'cliss'

      ])

    },

    watch : {

      cliss () {

        this.oos = false

      }

    },

    methods: {

      pho () {
        alert('该功能正在升级中。。。。。')
      },

      cls () {

        this.oos = false

      },

      fileClick() {
         const check = this.imgList.length < 9;
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
    }
  }
</script>



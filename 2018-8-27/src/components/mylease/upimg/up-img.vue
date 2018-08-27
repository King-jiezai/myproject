

<style scoped>

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
    float: left;
    width: 88px;
    height: 88px;
    float: left;
    z-index: 999;
    position: absolute;
    left: 0px;
    background: #fff;
  }
  .upload_warp_left {
    float: left;
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

</style>

<template>

  <div>  
 
        <div  @mouseenter="mous" @mouseleave="moul">
            <div class="upload_warp_left" >
              <div  v-for="(item,index) of imgList">
                <img src="../../../../static/images/paysuccess/del.png" class="upload_warp_img_div_del" @click="fileDel(index)" v-show="shows">
                <img :src="item.file.src" class="up_img" v-model="val">
              </div>
                <p @click.stop="fileClick">+</p>
            </div>
        </div>
        <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
       
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

        oos : false,

        shows : false,

        val : ''

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
    },

    created () {

            this.$store.commit('poo',this.val)
            
    },
  }

</script>



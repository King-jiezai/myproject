

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

</style>

<template>

  <div>  
        <div class="upload_warp_img_div" v-for="(item,index) of imgList">
            <div class="upload_warp_img_div_top">
              <img src="../../../static/images/paysuccess/del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
            </div>
            <img :src="item.file.src" class="up_img">
        </div>
  
        <div class="upload_warp_left" @click="fileClick">
            <img src="../../../static/images/paysuccess/b.png">
            <p>电脑传图</p>
        </div>

        <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
   
  </div>

</template>

<script>
  export default {

    name: 'hello',

    data() {

      return {

        imgList: [],

        size: 0,

      }
    },
    methods: {
      //设置

      fileClick() {
         const check = this.imgList.length < 5;
              if (!check) {
                  this.$Notice.warning({
                      title: '最多可上传五张图片，超出请删除再上传'
                  });
                   
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



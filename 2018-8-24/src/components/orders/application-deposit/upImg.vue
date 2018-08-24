


<style scoped>
    
    .rech_upload {
        overflow: hidden;
        width: 100%;
        margin-top: 30px;
    }
    .rech_upload .sp1{
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .upload-pss {
        width: 240px;
        float: left;
        text-align: right;
        font-size: 14px;
        color: #333;
        margin-left: 80px;
    }
    .upload-img {
        float: left;
        height: 140px;
        line-height: 115px;
    }
    .uploads {
        float: left;
        height: 140px;
    }
    .zimg {
        float: left;
        height: 140px;
        margin: 15px;
    } 
    .zimg p {
        line-height: 30px;
        text-align: center;
        color: #999;
        font-size: 12px;
    }
    .rech_gai {
        float: left;
        color: #999;
        height: 109px;
        margin-right: 140px;
    }
    .rech_gai p {
        float: left;
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 50%;
        background: #999;
        color: #fff;
        text-align: center;
        margin: 50px 5px;
    }
    .positive {
        height: 20px;
        line-height: 20px;
        float: left;
        color: #e60012;
    }
    .positive:last-child {
        margin-left: 50px;
    }
    .positive p {
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
    .upload_business {
        width: 100%;
        float: left;
        height: 140px;
        margin-top: 20px;
    }
    .business-pss {
        float: left;
        line-height: 115px;
        margin-left: 247px;
    }
    .business_gai {
        float: left;
        width: 480px;
        height:90px;
        line-height: 88px;
        margin:15px 0 0 0 ;
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
        margin: 36px 3px 0 0;
    }
    .business_up {
        float: left;
        line-height: 20px;
        margin-top: 3px;
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
    
</style>

<template>

    <div class="rech_upload">
        <div class="upload-img">
            <p class="upload-pss"><span class="sp1">*</span>法人代表或股东身份证正、反面照片</p>
            <div class="uploads">
                <div class="zimg">
                    <zupImg></zupImg>
                    <p>(身份证正面)</p>
                </div>
                <div class="zimg">
                    <zupImg></zupImg>
                    <p>(身份证反面)</p>
                </div>            
            </div>
            <div class="rech_gai"><p>！</p>原件拍照件或复印件盖公章扫描件</div>
            <div class="positive" v-show="pos"><p>-</p>请上传身份证正面照</div>
            <div class="positive" v-show="pos"><p>-</p>请上传身份证反面照</div>
        </div>

        <div class="upload-img">
            <p class="upload-pss"><span class="sp1">*</span>经办人身份证正、反面照片</p>
            <div class="uploads">
                <div class="zimg">
                    <zupImg></zupImg>
                    <p>(身份证正面)</p>
                </div>
                <div class="zimg">
                    <zupImg></zupImg>
                    <p>(身份证反面)</p>
                </div>            
            </div>
            <div class="rech_gai"><p>！</p>原件拍照件或复印件盖公章扫描件</div>
            <div class="positive" v-show="pos"><p>-</p>请上传身份证正面照</div>
            <div class="positive" v-show="pos"><p>-</p>请上传身份证反面照</div>
        </div>

        <div class="upload-img">
            <p class="upload-pss"><span class="sp1">*</span>营业执照</p>
            <div class="uploads">
                <div class="zimg">
                    <zupImg></zupImg>
                    <p>(正面营业执照)</p>
                </div>                                    
            </div>
            <div class="rech_gai"><p>！</p>原件拍照件或复印件盖公章扫描件</div>
            <div class="positive" v-show="pos"><p>-</p>请上传正面营业执照</div>
        </div>

        <div class="upload-img">
            <p class="upload-pss"><span class="sp1">*</span>法人授权书</p>
            <div class="uploads">
                <div class="zimg">
                    <zupImg></zupImg>
                    <p>(授权书正面照)</p>
                </div>                                    
            </div>
            <div class="rech_gai"><p>！</p>原件拍照件或原件扫描件或签字版原件复印件</div>
            <div class="positive" v-show="pos"><p>-</p>请上传法人授权书</div>
        </div>
    </div>

</template>

<script>

    import zupImg   from '@/components/orders/upimg/up-img.vue'

    import { Icon } from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
            zupImg
        },

        data () {

            return {

                pos : false ,
                
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

        mounted () {}

    }

</script>

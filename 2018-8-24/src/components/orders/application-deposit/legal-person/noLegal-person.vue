


<style scoped>
    
    .applicant_cont {
        margin-top: 60px;
    }
    .box-perinfo_top:first-child {
          margin-top: 0px;
    }
    .box-perinfo_top {
        width: 85%;
        height: 32px;
        margin: 0 auto;
        margin-top: 15px;
    }
    .box-perinfo_top img {
          float: left;
          margin: 10px 0 10px 10px;
          position: relative;
          left: 1px;
          z-index: 1;
    }
    .applicant-pss {
        float: left;
        line-height: 32px;
        width: 140px;
        text-align: right;
        font-size: 14px;
        color: #333;
        margin-left: 100px;
    }
    .box-perinfo .sp1{
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .applicant-bos {
        float: left;
        width: 250px;
        height: 32px;
        color: #333;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        padding-left: 10px;
        margin-left: 10px;
        outline:none;
    }
    .applicant-bs {
        width: 195px;
        float: left;
        height: 32px;
        padding-right: 10px;
        border: 1px solid #F9C3C3;
        line-height: 30px;
        color: #e60012;
        background: #ffE6D9;
        z-index: 0;
        border-radius: 5px;
    }
    .applicant-bs p {
        float: left;
        width: 15px;
        height: 15px;
        font-size: 12px;
        border-radius: 50%;
        background: #e60012;
        color: #fff;
        line-height: 15px;
        text-align: center;
        margin: 7px;
    }

</style>

<template>

    <div class="applicant_cont">
        
        <!-- 经办人姓名-->
        <div class="box-perinfo_top">
            <div>
                <p class="applicant-pss"><span class="sp1">*</span>经办人姓名：</p>
            </div>
            <input type="text" v-model="mAgent" @focus="fAgent" @blur="bAgent" class="applicant-bos">

            <div v-show="sAgent">
                <img src="../../../../../static/images/reg/sj2.png">

                <div class="applicant-bs">
                    <p>x</p>请填写经办人姓名
                </div>
            </div>
        </div>
        
        <!-- 经办人手机号-->
        <div class="box-perinfo_top">
            <div>
                <p class="applicant-pss"><span class="sp1">*</span>经办人手机号：</p>
            </div>
            <input type="text" v-model="agentPhone" @focus="fagentPhone" @blur="bagentPhone" class="applicant-bos">

            <div v-show="sagentPhone">
                <img src="../../../../../static/images/reg/sj2.png">

                <div class="applicant-bs">
                    <p>x</p>请填写经办人手机号
                </div>
            </div>
        </div>
        
        <!-- 经办人身份证号-->
        <div class="box-perinfo_top">
            <div>
                <p class="applicant-pss"><span class="sp1">*</span>经办人身份证号：</p>
            </div>
            <input type="text" v-model="agentIdentity " @focus="fagentIdentity" @blur="bagentIdentity" class="applicant-bos">

            <div v-show="sagentIdentity">
                <img src="../../../../../static/images/reg/sj2.png">

                <div class="applicant-bs">
                    <p>x</p>请填写经办人身份证号
                </div>
            </div>
        </div>
        
        <!-- 法人姓名-->
        <div class="box-perinfo_top">
            <div>
                <p class="applicant-pss"><span class="sp1">*</span>法人姓名：</p>
            </div>
            <input type="text" v-model="mname" @focus="fname" @blur="bname" class="applicant-bos">

            <div v-show="sname">
                <img src="../../../../../static/images/reg/sj2.png">

                <div class="applicant-bs">
                    <p>x</p>请填写法人姓名
                </div>
            </div>
        </div>

        <div class="box-perinfo_top">
            <div>
                <p class="applicant-pss"><span class="sp1">*</span>法人联系电话：</p>
            </div>
            <input type="text" v-model="mpone" @focus="fpone" @blur="bpone" class="applicant-bos">

            <div v-show="spone">
                <img src="../../../../../static/images/reg/sj2.png">

                <div class="applicant-bs">
                    <p>x</p>请填写法人联系电话
                </div>
            </div>
        </div>

        <div class="box-perinfo_top">
            <div>
                <p class="applicant-pss"><span class="sp1">*</span>法人身份号码：</p>
            </div>
            <input type="text" v-model="midentity" @focus="fidentity" @blur="bidentity" class="applicant-bos">

            <div v-show="sidentity">
                <img src="../../../../../static/images/reg/sj2.png">

                <div class="applicant-bs">
                    <p>x</p>请填写法人身份号码
                </div>
            </div>
        </div>

        <div class="box-perinfo_top">
            <div>
                <p class="applicant-pss"><span class="sp1">*</span>紧急联系人：</p>
            </div>
            <input type="text" v-model="murgent" @focus="furgent" @blur="burgent" class="applicant-bos">

            <div v-show="surgent">
                <img src="../../../../../static/images/reg/sj2.png">

                <div class="applicant-bs">
                    <p>x</p>请填写紧急联系人
                </div>
            </div>
        </div>

        <div class="box-perinfo_top">
            <div>
                <p class="applicant-pss"><span class="sp1">*</span>紧急联系人手机号：</p>
            </div>
            <input type="text" v-model="mcontact" @focus="fcontact" @blur="bcontact" class="applicant-bos">

            <div v-show="scontact">
                <img src="../../../../../static/images/reg/sj2.png">

                <div class="applicant-bs">
                    <p>x</p>请填写紧急联系人手机号
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import { Icon } from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
        },

        data () {

            return {

                mAgent: '',

                agentPhone: '',

                agentIdentity: '',

                mname : '',

                mpone : '',

                mcontact  : '',

                murgent   : '',

                midentity : '',

                sAgent    : false,

                sagentPhone: false,

                sagentIdentity: false,

                sname     : false,

                spone     : false,

                sidentity : false,

                scontact  : false,

                surgent   :  false,   

            }

        },

        computed : {

            

        },

        watch : {

           

        },

        methods : {    
         
            fAgent () {

                this.sAgent = false

            },

            bAgent () {

                if (this.mAgent == '') {
                    this.sAgent = true
                }

            },

            fagentPhone () {

                this.sagentPhone = false

            },

            bagentPhone () {

                if (this.agentPhone == '') {
                    this.sagentPhone = true
                }

            },

            fagentIdentity () {

                this.sagentIdentity = false

            },

            bagentIdentity () {

                if (this.agentIdentity == '') {
                    this.sagentIdentity = true
                }

            },

            fname () {

                this.sname = false

            },

            bname () {

                if (this.mname == '') {
                    this.sname = true
                }

            },

            fpone () {

                this.spone = false

            },

            bpone () {

                if (this.mpone == '') {
                    this.spone = true
                }

            },

            fidentity () {

                this.sidentity = false

            },

            bidentity () {

                if (this.midentity == '') {
                    this.sidentity = true
                }

            },

            furgent () {

                this.surgent = false

            },

            burgent () {

                if (this.murgent == '') {
                    this.surgent = true
                }

            },

            fcontact () {

                this.scontact = false

            },

            bcontact () {

                if (this.mcontact == '') {
                    this.scontact = true
                }
                
            }
        },

        created () {

            
        },

        mounted () {}

    }

</script>

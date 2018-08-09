







<style scoped>

    .pos-pic {
        float: left;
        margin-left: 5px;
    }
    .pos-poc {
        float: right;
        margin-right: 5px;
    }
    .ool {
        width: 23px;
        height: 23px;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-top: -100px;
        cursor: pointer;
    }

</style>

<template>

    <div class="os">

        <div v-for='(item, index) in fsl'>
            <div v-if='imge == index'>
                <img :src="item.img">
                <p class="p1">{{item.fon}}</p>

                <div class="pos-pic ool" @click='pic'><</div>
                <div class="pos-poc ool" @click='poc'>></div>
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

                imge : false

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {

            pic () {

                this.imge--
                if (this.imge < 0) {
                    this.imge = this.fsl.length-1
                }

            },

            poc () {

                this.imge++
                if (this.imge > this.fsl.length-1) {
                    this.imge = 0
                }

            }

        },

        created () {
            
        },

        mounted () {

        },

        props : [
            'fsl'
        ]

    }

</script>

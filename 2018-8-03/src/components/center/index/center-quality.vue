







<style scoped>

    .fs {
        width: 1200px;
        overflow: hidden;
    }
    .oop {
        width: 266px;
        text-align: center;
        float: left;
        margin-right: 45px;
    }
    .oop:last-child {
        margin-right: 0;
    }
    .oop div {
        width: 80px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        font-size: 50px;
        border-radius: 50%;
        border: 1px solid #ccc;
        margin: 0 auto 26px;
    }
    .oop span {
        font-size: 18px;
    }
    .oop p {
        font-size: 16px;
        margin-top: 3px;
    }

</style>

<template>

    <div class="fs">
        <div class="oop" v-for='item in oos'>
            <div>{{item.fon}}</div>
            <span>{{item.zin}}</span>
            <p>{{item.num}}</p>
        </div>
    </div>

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

                oos : [{
                    fon : '租',
                    zin : '超灵活',
                    num : '设备以租代购，续换买随心选'
                },{
                    fon : '省',
                    zin : '专业更省心',
                    num : '设备以租代购，续换买随心选'
                },{
                    fon : '邮',
                    zin : '全国包邮',
                    num : '设备以租代购，续换买随心选'
                },{
                    fon : '换',
                    zin : '无理由退换',
                    num : '设备以租代购，续换买随心选'
                }]

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

        mounted () {

        }

    }

</script>

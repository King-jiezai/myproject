






<style scoped>

    .max-box {
        background: #fff;
        box-shadow: 1px 2px 8px 0 #999;
    }

</style>

<template>

    <div class="max-box">
        <div>
            <realtime></realtime>
        </div>
    	

    </div>

</template>

<script>

    import realtime from '@/backstage/homepages/index/realtime.vue'

    export default {

        components : {

            realtime,

        },

        data () {

            return {

            }

        },

        methods : {

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>

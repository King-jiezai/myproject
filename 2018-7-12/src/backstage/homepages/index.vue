



<style scoped>

    .max-box {
        width: 100%;
        overflow: hidden;
        background: #F4F5F9;
    }
    .list-left {
        float: left;
        width: 16%;
        height: 1056px;
    }
    .list-right {
        /*float: right;*/
        float: left;
        width: 84%;
        padding-bottom: 35px;
    }
    .hear {
        margin-bottom: 35px;
    }
    .real {
        width: 98%;
        padding: 10px;
    }
    .list-bottoms {
        float: left;
        width: 82%;
        margin-bottom: 20px;
    }
    .pie {
        margin-left: 30px;
    }
    .barshape {
        margin-left: 30px;
    }
    .list-cent {
        float: left;
        margin-bottom: 35px;
    }


</style>

<template>

    <div class="max-box">

        <div class="list-left">
            <list></list>
        </div>

        <div class="list-right">
            <hear class='hear'></hear>
            <real class='real'></real>
        </div>

        <div class="list-cent">
            <reclease></reclease>
        </div>

        <div class="list-bottoms">
            <memreg class='memreg'></memreg>
            <pie class='pie'></pie>
            <barshape class='barshape'></barshape>
        </div>
    	
    </div>

</template>

<script>

    import list from '@/backstage/homepages/index/list.vue'
    import hear from '@/backstage/homepages/index/hear.vue'
    import real from '@/backstage/homepages/index/real.vue'
    import pie from '@/backstage/Barshape/index/pie.vue'
    import memreg from '@/backstage/Barshape/index/memreg.vue'
    import barshape from '@/backstage/Barshape/index/barshape.vue'
    import reclease from '@/backstage/Barshape/index/recentlease.vue'


    export default {

        components : {

            list,
            hear,
            real,
            barshape,
            pie,
            memreg,
            reclease

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

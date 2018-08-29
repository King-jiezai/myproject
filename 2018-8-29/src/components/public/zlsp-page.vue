







<style scoped>



</style>

<template>

    <div class="zlsp-page">
        <Page :total="total" :page-size='pageSize' :current='cuson' @on-change='chon' :transfer=true></Page>
    </div>

</template>

<script>

    import { Page } from 'iview'

    export default {

        components : {

            Page,

        },

        data () {

            return {

                pageSize : 16,

                total : 0,

                cuson : 1

            }

        },

        methods : {

            //商品分页
            async chon (index) {

                this.cuson = index

                this.$router.push('/bjb?pageNum=' + index + '&orderBy=' + this.$route.query.orderBy + '&navs_id=' + this.$route.query.navs_id + '&updown=' + this.$route.query.updown + '&sizes=' + this.$route.query.sizes + '&classification=' + this.$route.query.classification)

                var gets = localStorage.getItem("val")

                let res = await this.$api.list({
                    categoryId : this.$route.query.classification,
                    pageNum : index,
                    pageSize : this.pageSize,
                    orderBy : this.$route.query.orderBy,
                    keyword : gets
                })

                this.$store.commit('page', res)

                setTimeout(() => {
                    this.$store.commit('page', res)
                }, 10)

            },

            //商品查询列表
            async pop () {

                var gets = localStorage.getItem("val")

                let res = await this.$api.list({
                    categoryId : this.$route.query.classification,
                    pageNum : 1,
                    pageSize : this.pageSize,
                    keyword : gets
                })

                this.total = res.data.data.total

            }

        },

        created () {

            if (this.$route.query.orderBy == undefined) {

                this.$route.query.orderBy = ''

            }

            if (this.$route.query.updown == undefined) {

                this.$route.query.updown = [true, false]

            }

            if (this.$route.query.sizes == undefined) {

                this.$route.query.sizes = 4

            }

            this.pop()

            this.cuson = parseInt(this.$route.query.pageNum)
            
        },

        mounted () {

        }

    }

</script>

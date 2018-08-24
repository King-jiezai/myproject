<template>
	
	
	<div class="shopping">

		<!--order-to 头部-->
	    <div class="order-top">
	        <navs></navs>
	    </div>
		
		<div class="wrapper">
			<!-- 商品添加成功组件  Add success -->
			<div class="adSu">
				<add-success></add-success>
			</div>
			<recommend></recommend>
			<buy></buy>

		</div>
		<div class="center-foor">
            <div class="heas">
                <tail-hear></tail-hear>
            </div>

            <tail-foor></tail-foor>
        </div>
	</div>
</template>

<script>
	
	import navs        from '@/components/public/zlsp-hear.vue'
	import tailHear    from '@/components/public/tail-hear.vue'
	import tailFoor    from '@/components/public/tail-foor.vue'
	import AddSuccess  from '@/components/ShoppingCart/components/AddSuccess.vue'
	import Recommend   from '@/components/ShoppingCart/components/Recommend.vue'
	import Buy         from '@/components/ShoppingCart/components/Buy.vue'
	export default{


		components: {
			AddSuccess,
			Recommend,
			Buy,
			navs,
			tailHear,
			tailFoor

		}
	}
</script>

<style>
	
	.shopping {
		width: 100%;
		height: 100%；
	}
	.wrapper{
		margin: 0 auto;
		width: 100%;
		position: relative;
		z-index: 1;
		background-color: #fff;
	}
	.adSu{
		width: 100%;
		height: 174px;
		background: #f5f5f5;
		border-top: 2px solid #e60012;
	}
	.curpoi{
		cursor: pointer;
	}
	.clear{
		clear:both;
	}
	.center-foor {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .center-foor .heas {
        border-bottom: 1px solid #666;
        padding-top: 50px;
    }

</style>
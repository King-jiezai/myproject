<template>
	<div class="largeWrapper">
		<technological-process></technological-process>
		<index-recommend></index-recommend>
		<div class="wrapperIndex">
			<ground-floor></ground-floor>
			<second-floor></second-floor>
			<three-floor></three-floor>
		</div>
	</div>
</template>

<script>
	import TechnologicalProcess from './components/TechnologicalProcess.vue'
	import IndexRecommend from './components/IndexRecommend.vue'
	import GroundFloor from './components/GroundFloor.vue'
	import SecondFloor from './components/SecondFloor.vue'
	import ThreeFloor from './components/ThreeFloor.vue'
	export default {
		name: 'Index',
		components: {
			TechnologicalProcess,
			IndexRecommend,
			GroundFloor,
			SecondFloor,
			ThreeFloor
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.largeWrapper{
		width: 100%;
		padding-bottom: 5px;
		background: #f8f8f8;
	}
	.wrapperIndex{
		margin: 0 auto;
		width: 1200px;
	}
	.curpoi{
		cursor: pointer;
	}
</style>
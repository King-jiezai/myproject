layui.use(['laypage', 'layer'], function() {
	
	var laypage = layui.laypage,
		layer = layui.layer;
	
	
	
	//分页
	laypage.render({
		elem: 'pagingNav',
		count: 100,
		layout: ['count', 'prev', 'page', 'next', 'refresh', 'skip'],
		jump: function(obj) {
			console.log(obj)
		}
	})
	
})
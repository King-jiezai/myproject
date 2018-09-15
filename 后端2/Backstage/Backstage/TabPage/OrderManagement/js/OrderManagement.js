/* 日期选择框 */
layui.use('laydate', function(){
	var laydate = layui.laydate;
	//日期范围
	laydate.render({
		elem: '#time'
		,range: true
	});
});

layui.use('element', function(){
	var $ = layui.jquery
	,element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
  
});
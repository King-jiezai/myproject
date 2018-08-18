layui.use('element', function(){
		  var $ = layui.jquery
		  ,element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
		  
		  //触发事件
		  var active = {
		    tabAdd: function(){
		      //新增一个Tab项
		      element.tabAdd('demo', {
		        title: '新选项'+ (Math.random()*1000|0) //用于演示
		        ,content: '内容'+ (Math.random()*1000|0)
		        ,id: new Date().getTime() //实际使用一般是规定好的id，这里以时间戳模拟下
		      })
		    }
		    ,tabDelete: function(othis){
		      //删除指定Tab项
		      element.tabDelete('demo', '44'); //删除：“商品管理”
		      
		      
		      othis.addClass('layui-btn-disabled');
		    }
		    ,tabChange: function(){
		      //切换到指定Tab项
		      element.tabChange('demo', '22'); //切换到：用户管理
		    }
		  };
		  
		  $('.site-demo-active').on('click', function(){
		    var othis = $(this), type = othis.data('type');
		    active[type] ? active[type].call(this, othis) : '';
		  });
		  
		  //Hash地址的定位
		  var layid = location.hash.replace(/^#test=/, '');
		  element.tabChange('test', layid);
		  
		  element.on('tab(test)', function(elem){
		    location.hash = 'test='+ $(this).attr('lay-id');
		  });
		  
});

layui.use(['form', 'layedit', 'laydate'], function(){
  var form = layui.form
  ,layer = layui.layer
  ,layedit = layui.layedit
  ,laydate = layui.laydate;
});

function changetext(){
	 var imEv = document.getElementById("imEv")
	 var fiTi = document.getElementById("fiTi")
	 var evImg = document.getElementById("evImg")
	 var fiImg = document.getElementById("fiImg")
	 var imP = document.getElementById("imP")
	 var fiP = document.getElementById("fiP")
	 imEv.style.border='1px solid #e60012';
	 fiTi.style.border='1px solid #ccc';
	 evImg.style.display="block"
	 fiImg.style.display="none"
	 imP.style.color="#E60012"
	 fiP.style.color="#000"
}
function changetexts(){
	 var imEv = document.getElementById("imEv")
	 var fiTi = document.getElementById("fiTi")
	 var evImg = document.getElementById("evImg")
	 var fiImg = document.getElementById("fiImg")
	var imP = document.getElementById("imP")
	var fiP = document.getElementById("fiP")
	imEv.style.border='1px solid #ccc';
	fiTi.style.border='1px solid #e60012';
	fiImg.style.display="block"
	evImg.style.display="none"
	fiP.style.color="#E60012"
	imP.style.color="#000"
}

var test = 1;
function addElementDiv() {
	if( test >= 4){
		return
	} else {
		var parent = document.getElementById("evaTexta");
		//添加 div
		var div = document.createElement("div");
		//设置 div 属性，如 id
		div.setAttribute("id", "confInput");
		parent.appendChild(div);
		test = test+ 1;
		div.innerHTML = '<textarea placeholder="请输入内容" class="layui-textarea" style="resize:none;border:1px solid #01AAED"></textarea>';
	}
}


layui.use('table', function(){
  var table = layui.table;
  
  table.render({
    elem: '#test'
    ,url:'/demo/table/user/'
    ,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
      layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
      //,curr: 5 //设定初始在第 5 页
      ,groups: 1 //只显示 1 个连续页码
      ,first: false //不显示首页
      ,last: false //不显示尾页
      
    }
    ,cols: [[
      {field:'id', width:150, title: '评价结果'}
      ,{field:'username', width:500, title: '评价内容/卖家解释/追加评论'}
      ,{field:'sex', width:200, title: '评价人'}
      ,{field:'city', width:600, title: '商品信息'}
      ,{field:'sign', width:195, title: '操作'}
    ]]
    
  });
});
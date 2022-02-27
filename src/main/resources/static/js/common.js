/**
 * 读取分页面的HTML，加载到index.html的对应的id的块中
 */
var loadHtml = function(url,id){
	$.ajax({
		type:"get",
		url:"./" + url, //需要获取的页面
		async:true,
		success:function(data){
			$('#'+id).html(data) //将获取到的内容放到当前页面的.content-wrapper中
		}
	});
}
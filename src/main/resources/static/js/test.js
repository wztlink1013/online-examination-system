/*
function test1(){
  alert($("#d0 div:nth-child(2)  div:first-child").html());
}
function test2(){
 */
/* alert($("#d0 div:first-child").html());*//*

  var t1=$("#d0 div:first-child").html();
   $("div:first").append(t1);
}
function test3(){
  $("td,tr").dblclick(function(){
     */
/*$(this).html('<input type="file">');*//*

     alert("ok");
  })
}*/

$(function(){  //页面加载后自动运行
test2();
})
var test =function(){
var html= $("div:eq(1) > div:eq(1) >div:eq(1)").html();
alert(html);
}

var test2 =function(){
$("tr:gt(0) > td").dblclick(function(){
/*alert($(this).html());*/
changeText(this);
myOnBlur(this);
});
}
//参数是要改文本框的元素对象
var changeText = function(obj){
var oldVal = $(obj).html();
$(obj).attr("oldVal",oldVal);
$(obj).html('<input type="text" >');
$(obj).find("input").focus(); // 加载到文本框之后，使文本框获得焦点
}
//当前元素对象中的input失去焦点事件
var myOnBlur = function(obj){
$(obj).find("input").blur(function(){
/*alert($(this).val());*/
var tmpVal = $(this).val();
if(tmpVal == ""){//如果文本框没有输入值，就把原来数据填回去
$(obj).html($(obj).attr("oldVal"));
}else{
$(obj).html(tmpVal);//把文本框的值覆盖掉文本框

}
});
}
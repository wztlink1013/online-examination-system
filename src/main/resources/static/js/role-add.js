$(function(){
    //当是新增页面时，执行loadZNodes()
    if($("#roleId").val() == ""){
      loadZNodes();
    }

});

var createTree = function(zNodes){
    var  setting = {
      			check: {
      				enable: true
      			},
      			data: {
      				simpleData: {
      					enable: true,
      					idKey: "id",//menu对象中的id属性名对应的zNode的id
      					pIdKey: "parentId",//menu对象中的parentId属性名对应的zNode的pId
      					rootPId: 0//
      				},
      				key: {
      				    name: "menuName"//menu对象中的menuName属性名对应的zNode的name
      				}
      			}
      		};

    /*var zNodes = [
       {id :"a1",pId : "0", name : "测试一级节点-1" },
       {id :"b1",pId : "0", name : "测试一级节点-2" },
       {id :"a1-1",pId : "a1", name : "测试二级节点-1-1" },
       {id :"a1-2",pId : "a1", name : "测试二级节点-1-2" },
       {id :"b1-1",pId : "b1", name : "测试二级节点-2-1" }
    ];*/

    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
}

var loadZNodes = function(object){
    $.ajax({
              type : "post",
              url : "/menu/zNodes",
              data : {},
             //async : false,//同步ajax
              dataType : "json",
              success : function(data) {//
                 createTree(data);
                 //判断当前页是不是修改页
                 if($("#roleId").val() != ""){//是修改页
                    setNodeChecked(object); //设置节点的选中
                 }

              }
          });

}
var roleAdd = function(){
   var treeObj = $.fn.zTree.getZTreeObj("treeDemo");//根据id获取ztree对象
   var nodes = treeObj.getCheckedNodes(true);//获取当前ztree的当前所有选中节点
   var menuIds = "";
   $.each(nodes, function(index, node){
      menuIds += "," + node.id;
   });
   menuIds = menuIds.substring(1,menuIds.length);//截取字符串，去掉开头逗号
   $("#menuIds").val(menuIds);

   addOrUpdate({
       "hiddenId" : "roleId",//隐藏域id
       "url" : "/role/", //新增或修改的ajax的url的一级路径
        "ids" : ["roleCode","roleName","menuIds"]
   });
}
//设置菜单树节点的选中
var setNodeChecked = function(object){
    //遍历查询到的当前要修改的角色的下属菜单
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    $.each(object.menus,function(index, menu){
    //根据每次遍历的角色的下属菜单的id，找到菜单树中对应的节点
        var node = zTree.getNodeByParam("id",menu.id);
        //设置找到的node节点为选中状态
        zTree.checkNode(node, true, true);

    });

}
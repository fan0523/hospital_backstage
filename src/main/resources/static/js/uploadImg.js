var imgSrc = []; //图片路径
var imgFile = []; //文件流
var imgName = []; //图片名字
//选择图片
function imgUpload(obj) {
	var oInput = '#' + obj.inputId;//input框id
	var imgBox = '#' + obj.imgBox;//图片容器id
	var btn = '#' + obj.buttonId;//按钮id 
	$(oInput).on("change", function() {//input框的改变事件
		var fileImg = $(oInput)[0];//把input框的id选择器对象转化为dom对象
		var fileList = fileImg.files;//得到对象中的数组
		for(var i = 0; i < fileList.length; i++) {
			var imgSrcI = getObjectURL(fileList[i]);//获取图片预览的路径
			imgName.push(fileList[i].name);//将图片名字存入数组中
			imgSrc.push(imgSrcI);//将图片路径存入数组中
			imgFile.push(fileList[i]);//将文件流存入到数组中
		}
		addNewContent(imgBox);//根据图片id，将图片展示在容器中
	})
	$(btn).on('click', function() {//触发click的事件，校验图片是否超过大小限制
		if(!limitNum(obj.num)){
		  	alert("超过限制");
		  	return false;
		}
		//用formDate对象上传
		var fd = new FormData($('#'+obj.formId)[0]);//把jquery对象转化为一个新的dom对象
		console.log(imgFile.length);//日志打印
		fd.delete("files");//删除多余的文件
		for(var i=0;i<imgFile.length;i++){
			fd.append(obj.data,imgFile[i]);//把文件流以key value 形式添加到新的DOM对象中
		}
		submitPicture(fd);//获取form对象，上传调用submitPicture方法
	})
}
//图片展示
function addNewContent(obj) {
	$(imgBox).html("");//清空图片容器
	for(var a = 0; a < imgSrc.length; a++) {//把存储到数组中的值在图片容器中展示出来
		var oldBox = $(obj).html();
		$(obj).html(oldBox + '<div class="imgContainer"><img title=' + imgName[a] + ' alt=' + imgName[a] + ' src=' + imgSrc[a] + ' onclick="imgDisplay(this)"><p onclick="removeImg(this,' + a + ')" class="imgDelete">删除</p></div>');
	//每个图片上绑定一个删除事件当触发时带着对象和下标调用删除方法
	}
}
//删除
function removeImg(obj, index) {
	imgSrc.splice(index, 1);//在数组中删除选中的图片并返回新的数组
	imgFile.splice(index, 1);
	imgName.splice(index, 1);
	var boxId = "#" + $(obj).parent('.imgContainer').parent().attr("id");//拿到该对象的父的父的id即imgBox
	addNewContent(boxId);//删除之后重新调用图片展示方法展示
}
//限制图片个数
function limitNum(num){
	if(!num){//如果限制数不存在返回true
		return true;
	}else if(imgFile.length>num){//如果实际数量大于限制数返回false
		return false;
	}else{
		return true;
	}
}

//上传(将文件流数组传到后台)
function submitPicture(data) {
	if(data){
	    var qufenid=$("#qufenid").val();
        var a1=$("#a1").val();
        var a3=$("#a3").val();
        var a5=$("#a5").val();
        var houseNumber=a1+"-"+a3+"-"+a5;
        var shi=$("#shi").val();
        var ting=$("#ting").val();
        var wei=$("#wei").val();
        var apartment=shi+"室"+ting+"厅"+wei+"卫";
		$.ajax({
			type: "post",
			url:"/rent/adderrent?"+$("#fbform").serialize()+"&houseNumber="+houseNumber+"&apartment="+apartment,
			async: true,//默认设置为true，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为false
			data: data,
			processData: false,//如果要发送DOM树信息或者其他不希望转换的信息，设置为false
			contentType: false,//不解析该数据
			success: function(dat) {
				console.log(dat);//打印日志
				if(dat){
					alert("上传成功！");
                    alert(qufenid)
                    //window.location.reload();
					/*$("#imgBox").html("");*/
					if (qufenid==1){
                        window.location.href='/second/handhousku.jsp'
                    } else if (qufenid==2){
                        window.location.href='/rental/releasehousku.jsp'
                    }
                }else{
					alert("上传失败！");
				}
			},error:function(){
				alert("上传失败！");
			}
		});
	}else{
	  alert('请打开控制台查看传递参数！');
	}
}
//图片灯箱
function imgDisplay(obj) {
	var src = $(obj).attr("src");
	var imgHtml = '<div style="width: 100%;height: 100vh;overflow: auto;background: rgba(0,0,0,0.5);text-align: center;position: fixed;top: 0;left: 0;z-index: 1000;"><img src=' + src + ' style="margin-top: 100px;width: 70%;margin-bottom: 100px;"/><p style="font-size: 50px;position: fixed;top: 30px;right: 30px;color: white;cursor: pointer;" onclick="closePicture(this)">×</p></div>'
	$('body').append(imgHtml);
}
//关闭
function closePicture(obj) {
	$(obj).parent("div").remove();
}

//图片预览路径
function getObjectURL(file) {
	var url = null;
	if(window.createObjectURL != undefined) { // basic
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}
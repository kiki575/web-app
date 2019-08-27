//表单验证
// var form=document.getElementById("form");
var form = $("#form")[0];
// var inputs = form.getElementsByTagName("input");
var inputs=$("#form input");
var butto =document.getElementById("butto");
//var a=butto.getElementsByTagName("a");
var result = [true,false];
//a.disabled=butto.disabled;
//form.onsubmit = canSubmit;
		inputs[0].onblur=function () {
			var errInfo=this.getAttribute("errInfo");
			//var errInfo=this.querySelector("[errInfo]");
			result[0]=validate(this,/^\d{8,11}$/,errInfo);
			butto.disabled=result[0]||result[1];
		}
       inputs[1].onblur=function () {
		   var errInfo=this.getAttribute("errInfo");
		   result[1]=validate(this,/^\w{6,}$/gi,errInfo);
		   butto.disabled=result[0]||result[1];
	   }


	function validate(ele,regex,errInfo){
		var p=ele.nextSibling;
		//var p=form.getElementsByTagName("p");
		var result = true;
		if(regex.test(ele.value)===false){
			//为空
			ele.style.border="1px solid red";
			ele.style.backgroundColor="pink";
			result = true;
			//span ：显示错误信息
			p.innerHTML=errInfo;
			p.style.color="red";
		}else{
			ele.style.border="1px solid #cccccc";
			ele.style.backgroundColor="#f7f7f7";
			p.innerHTML="";
			//设置result标记
			result=false;
		}

		return result;
	}

function canSubmit(){
	var success = true;

	for(var i=0;i<result.length;i++){
		success = success || reuslt[i];
	}

	return result;
}

//点击登入效果

var enter2=document.getElementById("enter2");
var enter=document.getElementById("enter-a");
var close=document.getElementById("close");
var ul=document.getElementById("ul-enter-top");
var li=ul.getElementsByClassName("enter-way");
var div=ul.getElementsByClassName("greenbar");


		close.onclick=function () {
			enter2.className="dpenter hide2";
		}
		enter.onclick=function () {
			if (enter2.className.indexOf("hide2")>=0) {
				enter2.className="dpenter show2";
			}else {
				enter2.className="dpenter show2";
			}
		}
var fastenter=document.getElementById("fastenter");

li[0].onclick=function () {

		this.className="enter-way green-color";
		div[0].className="greenbar show2";
		div[1].className="greenbar hide2";
		fastenter.className="fast-enter hide2";
		li[1].className="enter-way";

}

li[1].onclick=function () {

		this.className="enter-way green-color";
		li[0].className="enter-way";
		div[0].className="greenbar hide2";
		div[1].className="greenbar show2";
		fastenter.className="fast-enter show2";

}


function fun() {
	myWindow=window.location.href='dpjy2.html';
}

//vip轮播效果
var vip_lb=document.getElementById("vip-lb");
var imgs=vip_lb.getElementsByClassName("tu");
var square=vip_lb.getElementsByTagName("li");
var startlb,sj=1000;

function showImgs() {
	for (var i = 0; i < square.length; i++) {

		if (square[i].className == "act") {
			var index = i;
			break;
		}
	}
		imgs[index].className ="tu hide2";
		square[index].className = "";

		index++;
		if (index>=square.length){
			index=0;
		}
		imgs[index].className = "tu";
		square[index].className = "act";
}
startlb=setInterval(showImgs,sj);
vip_lb.onmouseover=function () {
	clearInterval(startlb);
}
vip_lb.onmouseout=function () {
	startlb=setInterval(showImgs,sj);
}

for (var i=0;i<square.length;i++){
	var squ=square[i];
	squ.onclick=function () {
		for (var i=0;i<square.length;i++){
			imgs[i].className="tu hide2";
			square[i].className="";
		}
		this.className="act";
		// i=0;
		// while(!this.isSameNode(square[i])){
		// 	++i;
		// }
		i = parseInt(this.dataset.square);
		imgs[i].className="tu";
	}
}



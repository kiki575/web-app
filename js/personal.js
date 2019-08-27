//间隔变行背景色
var table=document.getElementById("shoppingcar");
var trs=table.getElementsByClassName("car-goods");

for (var i=0;i<trs.length;i++){
    var  tr=trs[i];
    if ((i+1)%2==0){
        tr.style.backgroundColor="#fff";
    }
}
//加减按钮
var buttonsOfSub = table.querySelectorAll("tbody tr button:nth-child(1)");
var buttonsOfAdd = table.querySelectorAll("tbody tr button:nth-child(3)");
var nums = table.querySelectorAll("tbody tr td input");
nums.forEach(function(e){
    e.onblur = function(){
        write();
    }
    e.onkeyup = function(event){
        if(event.keyCode==13){
            write();
        }
    }
});
for(let i =0;i<buttonsOfAdd.length;++i){

    buttonsOfAdd[i].onclick = function(){
        addNum(this);
              write();

    };
}
for(let i =0;i<buttonsOfSub.length;++i){

    buttonsOfSub[i].onclick = function(){
        var num = this.parentNode.querySelector("input");
        if (num.value==1){
            if(confirm("你确定要删除吗?")){
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                pricesNow = table.querySelectorAll(".car-goods prm");
                jifens=table.querySelectorAll(".car-goods p");

                write();
            }else {}
        }

        subNum(this);
        write();

    };
}


function addNum(i){
    console.log(i)
    var num=i.parentNode.querySelector("input");
    num.value = parseInt(num.value)  + 1;

}

function subNum(i){
    var num=i.parentNode.querySelector("input");
    var newNum = parseInt(num.value) - 1;
    if(newNum > 0) {
        num.value = newNum;
    }
    else{
        num.value = 1;
    }
}

//删除行
 var pricesNow=table.querySelectorAll(".car-goods prm");
var dele=table.querySelectorAll("tbody tr td:nth-child(4)");
for (var i=0;i<dele.length;i++) {

  dele[i].onclick=function () {

      this.parentNode.parentNode.removeChild(this.parentNode);
    pricesNow = table.querySelectorAll(".car-goods prm");
    jifens=table.querySelectorAll(".car-goods p");
     write();
  }

}
//计算价格

var jifens=table.querySelectorAll(".car-goods p");
function calcTotal(singles,nums){
    var totalSum=0;var sum=0;

    for (var i=0;i<singles.length;i++){
        var single = singles[i].innerText.replace(/\(原价:[0-9]+\)/gi,"");
        single = single.replace(/[^0-9]/gi,"");
        sum=parseInt(single)*parseInt((nums)?nums[i].value:0);
        totalSum+=sum;
    }
    return totalSum;
}
write();
var pricesPrime=table.querySelectorAll(".car-goods prm i");
function cutdown() {
    var sum =0;
    var cutdownsum=0;
    pricesPrime=table.querySelectorAll(".car-goods prm i");
    if(!pricesPrime){

    }
    for (var i=0;i<pricesPrime.length;i++){
        var price =pricesPrime[i].innerText.replace(/[^0-9]/gi,"");
        sum = parseInt(price)*parseInt(nums[i].value);
        cutdownsum += sum;
    }
    return cutdownsum - calcTotal(pricesNow,nums);
}
function write(val) {
    nums = table.querySelectorAll("tbody tr input");
    document.querySelector("#payfor p").innerHTML = `<span>为您优惠金额：${val||cutdown()}</span>
							<span>可获得学员积分：${calcTotal(jifens,nums)}</span>`;
    document.getElementById("total").innerHTML=`总计：${calcTotal(pricesNow,nums)}`;


}
//清空购物车
var  clean=document.querySelector("#clean-car");
var  img=clean.querySelector("#clean-car img");
clean.onmouseover=function () {
    clean.style.color="#fc7e22";
    img.src="../img/shouzhi2.png";
    }
clean.onmouseout=function () {
    clean.style.color="";
    img.src="../img/shouzhi.png";
}
clean.onclick=function () {

    for(var i = trs.length-1; i>=0;--i){
        console.log(trs)
        trs[0].parentNode.removeChild(trs[i]);
    }
    document.querySelector("#payfor p").innerHTML = `<span>为您优惠金额：0</span>
							<span>可获得学员积分：0</span>`;
    document.getElementById("total").innerHTML=`总计：0`;


}
var table=document.getElementById("shoppingcar");
var trs=table.getElementsByClassName("car-goods");

for (var i=0;i<trs.length;i++){
    var  tr=trs[i];
    console.log(trs);
    if ((i+1)%2==0){
        tr.style.backgroundColor="#fff";
    }
}
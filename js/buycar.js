
document.addEventListener("DOMContentLoaded", function(){

var maile=document.querySelector("#maile");
var denglu=document.querySelector("#denglu");


maile.onmouseover=function(){
   maile.style.color="#CB351A";
}
maile.onmouseout=function(){
    maile.style.color="#999999";
}


denglu.onmouseover=function(){
   denglu.style.color="#CB351A";
}
denglu.onmouseout=function(){
    denglu.style.color="#999999";
}


var bottom_r2=document.querySelector("#header .bottom_r2");
var collect=document.querySelector("#collect");


bottom_r2.onmouseover=function(){
   bottom_r2.style.color="#CB351A";
   collect.style.position="-42px -26px;" 
}
bottom_r2.onmouseout=function(){
    bottom_r2.style.color="#999999";
}

var bottom_r4=document.querySelector("#header .bottom_r4");
var phone=document.querySelector("#phone");


bottom_r4.onmouseover=function(){
   bottom_r4.style.color="#CB351A";
   phone.style.position="-42px -26px;" 
}
bottom_r4.onmouseout=function(){
    bottom_r4.style.color="#999999";
}




var bottom_r1=document.querySelector("#header .bottom_r1");
var bottom_r1ul=document.querySelector("#header .bottom_r1 ul");
var jiantou=document.querySelector("#jiantou")




bottom_r1.onmouseover=function(){
   bottom_r1.style.color="#CB351A";
    bottom_r1ul.style.display="block";
    jiantou.src="../src/img/indexImg/jiantou2.png"
}
bottom_r1.onmouseout=function(){
    bottom_r1.style.color="#999999";
        bottom_r1ul.style.display="none";
         jiantou.src="../src/img/indexImg/jiantou.png"
}




//购物车数据交互
//
//
// var cart=document.querySelector("#cart");

// var id=Cookie.get('id');
// var num=Cookie.get('num');
// console.log(id,num);//  能拿到
 


// function creat(arr){
//           //数据渲染函数封装
//           var res=arr.map(function(item){
//             return ` <li data-id=${item.id}>
//                 <p class="good_check"><input type="checkbox" name="good" value="" /></p>
//                 <p class="good_name">
//                         <img src="${item.buycarimg}"  alt="" />
//                      <span>${item.title}</span></p>   
             
//                 <p class="good_price">￥&nbsp;${item.price}</p>
//                 <p class="num">
//                     <span class="cutnum">-</span>
//                     <input class="nownum" type="text" value="1" />
//                     <span class="addnum">+</span>
//                 </p>
//                 <p class="good_total">￥&nbsp;${item.price}</p>
//                 <p class="good_del">
//                     <a href="javascript:;">删除</a>
//                 </p>
//             </li> `;
//         }).join('');
          
//         cart.innerHTML=res;
    

//          } 









// var url="../src/api/Myajax/car/buylist.php";
// var data=``;
// ajax("GET",url,data,function(str){
// // 去做一个订单表的数据库  开始只需要三条数据  进行数据渲染
// var arr=JSON.parse(str);
//  console.log(arr);//进行渲染  封装函数

// creat(arr);

// })//接下来的接口是到cart.js去做







//把用户名加到上面去
var denglu=document.querySelector("#denglu");
var registered=document.querySelector("#registered");
var cookie= Cookie.get("name");
if(cookie){
 registered.innerHTML="退出";
  denglu.innerHTML="欢迎用户"+cookie;
  denglu.style.color="#E02200";
}else{
   registered.innerHTML="免费注册";
  denglu.innerHTML="请登录" ;
  denglu.style.color="#999999";
}








   })//最终的结尾，箭头






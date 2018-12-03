document.addEventListener("DOMContentLoaded", function(){


// $(function(){ 


//   $("#header .bottom_r3").click(function(){
//     $("#header .bottom_r3").css('color','blue');
//  // })


// $("#header").find(".bottom_r3").mouseover(function() {
// //    "color","#CB351A";
  
// });
// })



var bottom_r3=document.querySelector("#header .bottom_r3");
bottom_r3.onmouseover=function(){
    bottom_r3.style.color="#CB351A";
}
bottom_r3.onmouseout=function(){
    bottom_r3.style.color="#999999";

}


//
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
// var bottom_rp=document.querySelector("#header .bottom_r1 p");



bottom_r1.onmouseover=function(){
   bottom_r1.style.color="#CB351A";
    bottom_r1ul.style.display="block";
    jiantou.src="src/img/indexImg/jiantou2.png"
}
bottom_r1.onmouseout=function(){
    bottom_r1.style.color="#999999";
        bottom_r1ul.style.display="none";
         jiantou.src="src/img/indexImg/jiantou.png"
}









    $('#banner_lul').find('li').mouseover(function(){
    
      $('#banner_lul li').attr('class','');//清空样式
      $(this).attr('class','bannermenu');//点击高亮
      $('#twomenu .milk').css('display','none');//清空
      $('#twomenu .milk').eq($(this).index()).css('display','block');
    });
    

   $('#banner_lul').mouseout(function(){
    
      $('#banner_lul li').attr('class','');//清空样式
      
      $('#twomenu .milk').css('display','none');//清空
    
    });



//墨迹回到顶部

slowBacktotop("backtop");


//滑过背景颜色改变
//console.log($("#Shoppingcartbar i"));
$("#Shoppingcartbar i").hover(function(){


  $(this).css("backgroundColor","#EC1E06");
},function(){
  $(this).css("backgroundColor","#444851")
  
})



//console.log($("#Shoppingcartbar .custom"))


$("#Shoppingcartbar .custom").hover(function(){


  $("#Shoppingcartbar .custom").css("backgroundColor","#EC1E06");


},function(){
  $("#Shoppingcartbar .custom").css("backgroundColor","#444851")
  
})



$("#Shoppingcartbar .custom2").hover(function(){


  $("#Shoppingcartbar .custom2").css("backgroundColor","#EC1E06");
$("#Shoppingcartbar .dog").css({
  "background-position":" -3px -426px",
  "backgroundColor": 'rgb(236, 30, 6)'
})

},function(){
  $("#Shoppingcartbar .custom2").css("backgroundColor","#444851")
  $("#Shoppingcartbar .dog").css({
"background-position":" -2px -192px","backgroundColor": "rgb(68, 72, 81)"});
  
})







//楼层跳跃
//
//
var Floorjump=document.querySelector("#Floorjump .Floorjump");
//console.log(Floorjump);

var apsFloorjump=Floorjump.querySelectorAll("#Floorjump .Floorjump p");

//console.log(apsFloorjump);



var aisFloorjump=Floorjump.querySelectorAll("#Floorjump .Floorjump p i" );//图标

var aspansFloorjump=Floorjump.querySelectorAll("#Floorjump .Floorjump p span" );//文字

//console.log(aisFloorjump);
//console.log(aspansFloorjump);//楼层小图标
 


var aDivsFloorhigh=document.querySelectorAll("#Floorhigh .Floorhigh");
//console.log(aDivsFloorhigh);//每一层楼

//console.log(aDivsFloorhigh.length);

//滑过的时候，变成文字 i消失 span 出现
for(var j=0;j<apsFloorjump.length;j++){
   apsFloorjump[j].index=j;
   
   apsFloorjump[j].onmouseover=function(){
   // console.log(this);
          aisFloorjump[this.index].style.display="none";
          aspansFloorjump[this.index].style.display="block";
      //消失了找不到节点，用p的话用this来指向
}
apsFloorjump[j].onmouseout=function(){
    
          aisFloorjump[this.index].style.display="block";
          aspansFloorjump[this.index].style.display="none";


   }
}

 // 需求： 要求点击哪个楼层，哪个楼层出现高亮的状态；
 //                点击哪个楼层；出现哪个楼层；
 //                当滑过属于这个楼层，出现这个楼层的高亮的状态； 


    


         for(var i=0;i<apsFloorjump.length;i++){
                 apsFloorjump[i].index=i;
//              // 点击哪个楼层出现哪个楼层，则追加一个索引值           
                apsFloorjump[i].onclick=function(){

                     window.scrollTo(0,aDivsFloorhigh[this.index].offsetTop);//第二步已经完成；执行第三步
                 }
         }

  window.onscroll=function(){
 //            // 先获取当前的Y轴的坐标；
           var scrollY=window.scrollY;  
           console.log(scrollY) ;
            var arrTop=[];

       for(var i=0;i<aDivsFloorhigh.length;i++){
           var aDivsFloorTop=aDivsFloorhigh[i].offsetTop;

           arrTop.push(aDivsFloorTop);
                     
  }
            // console.log(arrTop);

 
           for(var i=0;i<arrTop.length;i++){
              if(scrollY>=arrTop[i]){
                  for(var j=0;j<arrTop.length;j++){
                    aisFloorjump[j].style.display="block";
                     aspansFloorjump[j].style.display="none";
                  }

                aisFloorjump[i].style.display="none";         
              aspansFloorjump[i].style.display="block"
               }else{
                  aisFloorjump[i].style.display="block";         
               aspansFloorjump[i].style.display="none";
               }




           }

  
 }
      
   //拿到cookie里面的用户名
     
         console.log(  Cookie.get("name"));


var denglu=document.querySelector("#denglu");
var registered=document.querySelector("#registered");
var cookie= Cookie.get("name");


// 其他的登录方式消失
var elselogin=document.querySelectorAll("#header .qita");
//console.log(elselogin);

if(cookie){
  registered.innerHTML="退出";
  registered.className="out";
  denglu.innerHTML="欢迎用户"+cookie;
  denglu.style.color="#E02200";
      for(var i=0;i<elselogin.length;i++){
            elselogin[i].style.display="none";
      }
}else{
  registered.innerHTML="免费注册";
  denglu.innerHTML="请登录" ;
  denglu.style.color="#999999";
   registered.className="";
    for(var i=0;i<elselogin.length;i++){
            elselogin[i].style.display="inline-block";
      }
}






denglu.onclick=function(){
    location.href="html/login.html";
}
registered.onclick=function(){
  if(registered.className=="out"){
   console.log(123);
    var now = new Date();
    now.setDate(now.getDate() - 1);
    Cookie.set("name",cookie,{
      expires: now,path:"/zhangxunhua/"});
       location.href="indey.html";
       // console.log(123)
  }else{
    location.href="html/reg.html";
  }
}





  //吸顶菜单
  var logo=document.querySelector("#logo");
  //console.log(logo);
  var top=logo.offsetTop;
  //console.log(top);
  //盒子距离顶部的距离
        //因为这个也是变量  如果不给变量固定高度的话一直在变不好比较

        
        window.onscroll=function(){
          //获取滚动距离
          var scrollTop=window.scrollY;
         // console.log(scrollTop)
          if(scrollTop>=top){

            logo.className='menu';
          }else{
            logo.className='';
          }
        }





//倒计时活动
var countdown=document.querySelectorAll("#SaleEveryday .countdown");

console.log(countdown);
for(let i=0;i<countdown.length;i++){

   
var endTime='2019-01-30 00:00:00';
      
      var end=new Date(endTime);
  
       //var j=i;
      var timer=setInterval(showTime,1000);
      
      showTime();
      function showTime(){
        
        var nowtime=new Date();
        var diffTime=parseInt((end-nowtime)/1000);
        
        if(diffTime<=0){  
          countdown[i].innerHTML='';//
          clearInterval(timer);
        }
        
        var num=setTime(diffTime);
        countdown[i].innerHTML="剩余"+num.day+'天'+num.hour+'时'+num.min+'分'+num.sec+"秒";
      }


}




//点击宝宝奶粉  可以跳转到list列表页
var milkpowder=document.querySelector("#milkpowder");
milkpowder.onclick=function(){
  location.href="html/list.html";
   Cookie.set("name",cookie,{"path":"/zhangxunhua/"});
}


});

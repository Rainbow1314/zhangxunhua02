
document.addEventListener("DOMContentLoaded",function(){

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


//滑过之后变成箭头向上，二级菜单菜单出来
$("#banner .banner_l").hover(function(){
  $("#banner_lul").css("display","block")},function(){
    $("#banner_lul").css("display","none")
  });



$("#banner .banner_l").hover(function(){
  $("#banner .banner_l h3 img").attr("src","../src/img/indexImg/listimg/bannerjiantou22.png")},function(){
    $("#banner .banner_l h3 img").attr("src","../src/img/indexImg/listimg/bannerjiantou.png")
  });



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



//列表页数据库渲染，并生成页码
// * ajax连接接口，获取数据库的数据，进行渲染
//           * 根据数据的长度计算，创建翻页节点
//           * 点击翻页可以跳转到对应数据
//           * 增加上一页下一页
//           */
          var list=document.querySelector('#list');
          var page=document.querySelector('#page');
          var prev=document.querySelector('#prev');
          var next=document.querySelector('#next');



          var rows=0;

          function creat(arr){
          //数据渲染函数封装
          var res=arr.datalist.map(function(item){
            return `<li data-id="${item.id}">
            <img src="${item.listimg}" height="206" width="240" alt="" />
            <p>
              <span>¥${item.price}</span>
              <i></i>
              <span>单件 : ¥${item.retailprice}</span>
            </p>

             <p><span>8件装</span><i></i><span>${item.title} </span></p>

            <p class="burcarhidden"><span>销量${item.salesvolume}</span><span>评价${item.Evaluation}</span></p>

            <p class="buycarshow"><span><i></i>加入购物车</span><span><i></i>收藏</span></p>
        </li>`;
        }).join('');
          
          list.innerHTML=res;



var oLis=list.children;

for(var i=0;i<oLis.length;i++){

 oLis[i].index = i;
    oLis[i].onclick = function(){
    
      var id = arr.datalist[this.index].id;
          console.log(id);

      location.href = '../html/goodlist.html?id=' + id
    }
  }


         } //渲染结束





var url="../src/api/Myajax/list/01goodlist.php";

  var data=`page=1&qty=8&time=${new Date()}`     

ajax("GET",url,data,function(str){
  
    var arr=JSON.parse(str);
   
    creat(arr);

    var num=Math.ceil(arr.total/arr.qty);
            rows=num;//总页数
            
            for(var i=0;i<num;i++){
              page.innerHTML+=`<span>${i+1}</span>`;
            }
            
            page.children[0].className='active';

   });//

//5.利用事件委托绑定事件
        var now=1;
        
   page.onclick=function(ev){
        var ev = ev || window.event;
          //点哪个是哪个
        if(ev.target.tagName.toLowerCase() == 'span'){
            //ev.target  等同  this
            now=ev.target.innerText;//获取页码
//            console.log(num);
            //设置参数
            var str=ev.target.parentNode.parentNode.parentNode.previousElementSibling.children[0].children[2].getAttribute("data-price");//获取类名
            console.log('获取属性：'+str);
//如果有类名，则走价格查询的分支，有up或者down发送不同的请求；
//如果没有则走最下面的分支
            //  str == "up" || "down"
            if(str== "up" || str == "down"){
                console.log(12345);
                var url="../src/api/Myajax/list/02sortGoodlist.php";
                if(str=="up"){
                    console.log(234);
                    var data=`inf=price&page=${now}&qty=8&time=new Date()`;

  }else{var data=`inf=price&desc=desc&page=${now}&qty=8&time=new Date()`}

}else{ var url="../src/api/Myajax/list/01goodlist.php";

  var data=`page=${now}&qty=8&time=new Date()` }

console.log(data);
            ajax("GET",url,data,function(str){
                var arr=JSON.parse(str);
                console.log(arr);
                creat(arr);//渲染数据

                    //清空
                    for(var i=0;i<page.children.length;i++){
                      page.children[i].className='';
                    }
                    page.children[now-1].className='active';
                  });
                  
              }

            }


// 点击前一页
prev.onclick=function(){
          now--;
          if(now<=1){
            now=1;//最小第一页
          }
var url="../src/api/Myajax/list/01goodlist.php";

  var data=`page=${now}&qty=8&time=new Date()` 
           
            ajax("GET",url,data,function(str){
              var arr=JSON.parse(str);
                creat(arr);//渲染数据
                
                //清空
                for(var i=0;i<page.children.length;i++){
                  page.children[i].className='';
                }
                page.children[now-1].className='active';
              });
          }




          next.onclick=function(){
            now++;
            if(now>=rows){
            now=rows;//最大就是最后一页
          }
              
var url="../src/api/Myajax/list/01goodlist.php";

  var data=`page=${now}&qty=8&time=new Date()` ;
           
            ajax("GET",url,data,function(str){


  var arr=JSON.parse(str);
                creat(arr);//渲染数据
                
                //清空
                for(var i=0;i<page.children.length;i++){
                  page.children[i].className='';
                }
                page.children[now-1].className='active';
              });
            
          }


//点击每一个li获取它的id名字



//点击升序降序可以进行排序
// console.log($("#priceup"));
$("#priceup").click(function() {
  $("#priceup").css("backgroud,#CC1D00");
  $("#priceup").css("color,#fff");
});

var price=document.querySelector("#price");
var ok1=true;

price.onclick=function(){

//添加类名
if(ok1){//点击一次默认升序；如果升序则默认，降序则添加desc传过去
    price.removeAttribute("data-price");
     price.setAttribute("data-price","up");
   
  var data=`inf=price&page=${now}&qty=8&time=new Date()`;

  }else{
       price.removeAttribute("data-price");
    price.setAttribute("data-price","down");
    
    var data=`desc=desc&inf=price&page=${now}&qty=8&time=new Date()`;
   // xuanran('desc','price',1)
  }
ok1=!ok1;




    var url="../src/api/Myajax/list/02sortGoodlist.php";

  
           
   ajax("GET",url,data,function(str){

      var arr=JSON.parse(str);
      //console.log(arr);
      creat(arr);
});

}


function xuanran(desc,inf,page){
  var data = `desc=${desc}&inf=${inf}&page=${page}&qty=8&time=new Date()`;
  var url = "../src/api/Myajax/list/02sortGoodlist.php";
  ajax("GET",url,data,function(str){

      var arr=JSON.parse(str);
      //console.log(arr);
      creat(arr);
});
}






//点击综合，消除属性名，发送正常第一页的请求
var comprehensive=document.querySelector("#comprehensive");
comprehensive.onclick=function(){
  
   price.removeAttribute("data-price");
   var url="../src/api/Myajax/list/01goodlist.php";
   var data=`page=${now}&qty=8&time=new Date()`;
        ajax("GET",url,data,function(str){
                var arr=JSON.parse(str);
                console.log(arr);
                creat(arr);//渲染数据
                    //清空
                    for(var i=0;i<page.children.length;i++){
                      page.children[i].className='';
                    }
                    page.children[now-1].className='active';
                  });
}





});//最终的结尾





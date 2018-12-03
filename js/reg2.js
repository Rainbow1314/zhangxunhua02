/* 
* @Author: Marte
* @Date:   2018-11-28 14:16:07
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-28 20:00:41
*/

document.addEventListener("DOMContentLoaded",function(){

var uname=document.querySelector("#uname");
var password=document.querySelector("#password");
var inf1=document.querySelector("#inf1");
var inf2=document.querySelector("#inf2");
var inf3=document.querySelector("#inf3");
var inf4=document.querySelector("#inf4");
var inf5=document.querySelector("#inf5");


var ok1=false;
        uname.onblur=function(){
                    
            var val=uname.value;
            var str=checkReg.trim(val);
            if(str && checkReg.name(str)){
                //给一个检查名字的接口
        var url="../src/api/Myajax/reg/checkname.php";
 var data=`username=${val}&time=${new Date()}`;

         ajax("GET",url,data,function(str){
            if(str==1){
            inf1.innerHTML='正确,可以使用';
                ok1=true;
            }else{
                inf1.innerHTML='不正确,用户名已存在';
                ok1=false;
            }
         });


               
           
        }

}
        var ok2=false;
                password.onblur=function(){
                    var val=password.value;
                    var str=checkReg.trim(val);
                    if(str && checkReg.psweasy(str)){
                        inf2.innerHTML='正确';
                        ok2=true;
                    }else{
                        inf2.innerHTML='不正确';
                        ok2=false;
                    }
                }
console.log(inf3);

var ok3=false;
var random=document.querySelector("#randomNum");
var num=document.querySelector("#num");
var str="";
    for(var i=0;i<4;i++){
        var res=randomNum(0,9);
        str+=res;
    }
    random.innerHTML=str;
   
num.onblur=function(){
   
    var val=num.value;
    if(val==random.innerHTML){
      inf3.innerHTML="正确";
       ok3=true;
    }else{
        inf3.innerHTML="请重新输入";
        ok3=false;
    }
}


var ok4=false;
var check=document.querySelector("#check");
check.onclick=function(){
if(check.checked==true){
         ok4=true;
 }else{
    ok4=false;
 }
}
    var login=document.querySelector("#login");
    login.onclick=function(){
        if(ok1&&ok2&&ok3&&ok4){
            
            //加入一个接口；
            var tex=uname.value;
            var psw=password.value;
            var url="../src/api/Myajax/reg/reg.php";
 var data=`username=${tex}&password=${psw}&time=${new Date()}`;

         ajax("POST",url,data,function(str){
            console.log(str);
            if(str==1){
            location.href ='login.html';
            }
        })





        }else{
            inf5.innerHTML="服务器繁忙,请稍后再试";
        }
    }
    

});
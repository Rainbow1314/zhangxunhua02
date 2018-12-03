/* 
* @Author: Marte
* @Date:   2018-11-22 21:20:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-01 13:15:45
*/

$(function(){
    // 先把第一个图片放在最高层
    $('#imglist .bannerimg').eq(0).css({'zIndex':1,"width":"850px","height":"520px"});
    var timer=null;
    clearInterval(timer);
    var now=0;
    
   timer=setInterval(next,4000);//每隔2秒钟切换一个图
    $('#imglist .bannerimg').css({
        "width":"850px",
        "height":"520px"
    })
    function next(){
        //旧的放到底层
        // console.log(now)
        $('#imglist  .bannerimg').eq(now).animate({'zIndex':-1,"width":"850px","height":"520px"},0);
        now=++now>=$('#imglist .bannerimg').size()?0:now;
// now++;
        //新的放到高层 宽度高度进行变化
        $('#imglist .bannerimg').eq(now).css('zIndex',1)
         $('#imglist .bannerimg').eq(now).animate({"width":"810px","height":"480px"},2000);

        light();
    }
    
    //小图片进行跟随
    function light(){
        $('#light span').removeClass('active');
        $('#light span').eq(now).addClass('active');
    }
//滑过的时候静止，
    $('#box').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer=setInterval(next,2000);
    });
  
    $('#light span').mouseover(function(){
        //旧 ：now
        //新：index() 新的
         clearInterval(timer);
        var index=$(this).index();
       // console.log(index);
        if(index>now){
            //从右边切入
            //旧：放到底层
            $('#imglist .bannerimg').eq(now).stop().css({'zIndex':0,"width":"810px","height":"480px"});
            //新的
            
            $('#imglist .bannerimg').eq(index).stop().animate({'zIndex':1,"width":"850px","height":"520px"},2000);
            now=index;//最新的一张变成index
            
        }
        if(index<now){
            //从左边切入
            //旧 now：挪到左边
            $('#imglist .bannerimg').eq(now).stop().css({'zIndex':0,"width":"850px","height":"520px"});
            //新的
            $('#imglist  .bannerimg').eq(index).stop().animate({'zIndex':1,"width":"810px","height":"480px"},2000);
            now=index;//最新的一张变成index
        }
        
        light();
    });
    
});

window.onload=function(){
	//顶导航动效
	var caidan=$(".caidan");
	var daohang=$(".daohang");
	for(var i=0;i<caidan.length;i++){
		caidan[i].index=i;
		caidan[i].onmouseover=function(){
			for(var j=0;j<daohang.length;j++){
				daohang[j].style.display="none";
			}
			daohang[this.index].style.display="block";
		}
		caidan[i].onmouseout=function(){
			daohang[this.index].style.display="none";
		}
	}
	//文本框动效
	var sousuocentertop1input=$(".sousuo-center-top-1-input")[0];
	sousuocentertop1input.onfocus=function(){
		if(sousuocentertop1input.value=="请输入关键词"){
			sousuocentertop1input.value="";
		}
	}
	sousuocentertop1input.onblur=function(){
		if(sousuocentertop1input.value){
		}else{
			sousuocentertop1input.value="请输入关键词";
		}
	}
	//banner动效
	var imgbox=$(".imgbox")[0];
	var imgs=$("img",imgbox);
	var btns=$(".anniu");
	var bannercenter=$(".banner-center")[0];
	var zuojiantou=$(".zuojiantou")[0];
	var youjiantou=$(".youjiantou")[0];
	var num=0;
	function move(type){
		if(type=="r"){
			num++;
			if(num>=imgs.length){
				num=0;
			}
		}
		if(type=="l"){
			num--;
			if(num<0){
				num=imgs.length-1;
			}
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=1;
       		btns[i].style.background="#ccc";
		}
       imgs[num].style.zIndex=2;
       btns[num].style.background="#FF3C3C";
	}
	var t=setInterval(function(){move("r")},1500);
	for(var i=0;i<btns.length;i++){
		btns[i].index=i;
		btns[i].onmouseover=function(){
			for(var j=0;j<btns.length;j++){
				btns[j].style.background="#ccc";
				imgs[j].style.zIndex="1";
			}
			this.style.background="#FF3C3C";
			imgs[this.index].style.zIndex="2";
			num=this.index;
		}
	}
	bannercenter.onmouseover=function(){
		clearInterval(t);
		zuojiantou.style.display="block";
		youjiantou.style.display="block";
	}
	bannercenter.onmouseout=function(){
		t=setInterval(function(){move("r")},1500);
		zuojiantou.style.display="none";
		youjiantou.style.display="none";
	}
	zuojiantou.onmouseover=function(){
         zuojiantou.style.backgroundColor="rgba(0,0,0,0.3)";
	}
	youjiantou.onmouseover=function(){
         youjiantou.style.backgroundColor="rgba(0,0,0,0.3)";
	}
	zuojiantou.onmouseout=function(){
		zuojiantou.style.backgroundColor="rgba(0,0,0,0)";
	}
	youjiantou.onmouseout=function(){
		youjiantou.style.backgroundColor="rgba(0,0,0,0)";
	}
	zuojiantou.onclick=function(){
        move("l");
	}
	youjiantou.onclick=function(){
		move("r");
	}
	//推荐图片滑动
	var tuijiandiv1=$(".tuijian-div1")[0];
	var tuijiandiv2=$(".tuijian-div2")[0];
	var img1=$("img",tuijiandiv1);
	var img2=$("img",tuijiandiv2);
	for(var i=0;i<img1.length;i++){
		img1[i].index=i;
		img1[i].style.cssText="position:relative;top:0;left:0";
		img1[i].onmouseover=function(){
			this.style.left=-5+"px";
		}
		img1[i].onmouseout=function(){
			this.style.left=0+"px";
		}
	}
	for(var i=0;i<img2.length;i++){
		img2[i].index=i;
		img2[i].style.cssText="position:relative;top:0;left:0";
		img2[i].onmouseover=function(){
			this.style.left=-5+"px";
		}
		img2[i].onmouseout=function(){
			this.style.left=0+"px";
		}
	}
	//每层楼图片滑动
	function lunbo(num){
		var box=$(".f1-bottom-center-img")[num];
		var f1bottomcenteranniu=$(".f1-bottom-center-anniu")[num];
		var btn=$("li",f1bottomcenteranniu);
		var num1=1;
	          function aa(){
	               if(num1==3){
	                   animate(box,{left:-329*num1},600,Tween.Linear,function(){
	                    box.style.left=0;
	                   });
	                    num1=0;
	               }else{
	               animate(box,{left:-329*num1},600,Tween.Linear);
	               }
	               for(var i=0;i<btn.length;i++){
	                    btn[i].style.background="#ddd";
	               }
	               btn[num1].style.background="#FF3C3C";
	               num1++; 
	          }
	          var t1=setInterval(aa,2000);
	          for(var i=0;i<btn.length;i++){
	          	btn[i].index=i;
	          	btn[i].onmouseover=function(){
	          		clearInterval(t1);
	          		for(var j=0;j<btn.length;j++){
	          			btn[j].style.background="#ddd";
	          		}
	          		this.style.background="#FF3C3C";
	          		animate(box,{left:-329*this.index},600,Tween.Linear);
	          	}
	          	btn[i].onmouseout=function(){
	          		t1=setInterval(aa,2000);
	          		num=this.index+1;
	          	}
	          }
	}
	for(var i=0;i<8;i++){
		lunbo(i);
	}
	//楼层跳转
	var floors=$(".floor");
	var btn=$(".lou");
	var louimg1=$(".lou-img1");
	var louimg2=$(".lou-img2");
	var loubox=$(".loubox")[0];
	var lou11=$(".lou")[10];
	for(var i=0;i<btn.length;i++){
            btn[i].index=i;
            btn[i].onmouseover=function(){
                louimg1[this.index].style.display="none";
                louimg2[this.index].style.display="block";
                this.style.border="1px solid #E60012";
            }
            btn[i].onmouseout=function(){
                louimg1[this.index].style.display="block";
                louimg2[this.index].style.display="none";
                this.style.border="1px solid #E6E6E6";
            }
            btn[i].onclick=function(){
              var obj=document.documentElement.scrollTop?document.documentElement:document.body;
              animate(obj,{scrollTop:floors[this.index].t-100})
            }
          }
          window.onscroll=function(){
          	var scrollT=getScrollT();
          	//document.title=scrollT;
          	if(scrollT>=858){
          		loubox.style.display="block";
        	}else{
          		loubox.style.display="none";
        	}
          for(var i=0;i<floors.length;i++){
          floors[i].t=floors[i].offsetTop;
          if((floors[i].t-207)<scrollT){
	            for(var j=0;j<btn.length;j++){
	              	louimg1[j].style.display="block";
                	louimg2[j].style.display="none";
                	btn[j].style.border="1px solid #E6E6E6";
	            }
             	louimg1[i].style.display="none";
                louimg2[i].style.display="block";
                btn[i].style.border="1px solid #E60012";
          }
        }
       }
       lou11.onclick=function(){
       	location.reload("http://freedom-a.github.io/yihaodian");
       }
       //10楼选项卡
       var f10topcenterli=$(".f10-top-center-li");
       var f10bottomtu=$(".f10-bottom-tu");
       for(var i=0;i<f10topcenterli.length;i++){
       	 f10topcenterli[i].index=i;
       	 f10topcenterli[i].onmouseover=function(){
       	 	for(var j=0;j<f10topcenterli.length;j++){
       	 		f10topcenterli[j].style.color="#666";
       	 		f10bottomtu[j].style.display="none";
       	 	}
       	 	this.style.color="#CEA145";
       	 	f10bottomtu[this.index].style.display="block";
       	 	this.style.cursor="pointer";
       	 }
       }
       //7楼小轮播动效
       var f7zhongdiv=$(".f7-zhong-div")[0];
       function moveleft(){
	     		animate(f7zhongdiv,{left:-100},600,Tween.Linear,function(){
		     		var first=getFirst(f7zhongdiv);
		     		f7zhongdiv.appendChild(first);
		     		f7zhongdiv.style.left=0;
	     		});
     		}
     		function moveright(){
     			var first=getFirst(f7zhongdiv);
     			var last=getLast(f7zhongdiv);
     			f7zhongdiv.style.left=-100+"px";
     			f7zhongdiv.insertBefore(last,first);
     			animate(f7zhongdiv,{left:0},600,Tween.Linear);
     		}
     	var t3=setInterval(moveleft,2000);
     	var zuo=$(".f7-zuo")[0];
     	var you=$(".f7-you")[0];
     	you.onmouseover=function(){
     		clearInterval(t3);
     	}
     	zuo.onmouseover=function(){
     		clearInterval(t3);
     	}
     	you.onmouseout=function(){
     		t3=setInterval(moveleft,2000);
     	}
     	zuo.onmouseout=function(){
     		t3=setInterval(moveright,2000);
     	}
     	zuo.onclick=function(){
            moveright();
     	}
     	you.onclick=function(){
     		moveleft();
	    }
	    //banner左边动效
	    var bannerleftli=$(".banner-left-li");
	    var cc=$(".cc");
	    for(var i=0;i<bannerleftli.length;i++){
	    	bannerleftli[i].index=i;
	    	bannerleftli[i].onmouseover=function(){
	    		for(var j=0;j<cc.length;j++){
	    			bannerleftli[j].style.background="#c23131";
	    			cc[j].display="none";
	    		}
	    		this.style.background="#872222";
	    		cc[this.index].style.display="block";
	    	}
	    	bannerleftli[i].onmouseout=function(){
	    		this.style.background="#c23131";
	    		cc[this.index].style.display="none";
	    	}
	    }
}
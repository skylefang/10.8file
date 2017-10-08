window.onload=function(){
	let bannertu = getClass('bannertu')[0];
	let lis = bannertu.getElementsByTagName('li');
	let imgW = parseInt(getComputedStyle(bannertu,null).width);
	let banner = getClass('banner')[0];
	 let lefts = document.querySelector('.bl')
    let rights = document.querySelector('.br')
	console.log(lefts);
	let now = 0;
    let next = 0;
    let flag=true;
	let t;
    t=setInterval(move,2000);
    // 自动轮播
	function move(){
	   next++;
       if(next==lis.length){
        next=0;
       }      
       lis[next].style.left = `${imgW}px`;
       animate(lis[now],{left:-imgW});
       animate(lis[next],{left:0},function(){
        flag=true;
       });
       now=next;
	}
	function movel(){
       next--;
       if(next<0){
        next=lis.length-1;
       }      
       lis[next].style.left = `${-imgW}px`;
       animate(lis[now],{left:imgW});
       animate(lis[next],{left:0},function(){
        flag=true;
       });
       now=next;
    }
	 // 鼠标移入自动轮播停止
    banner.onmouseover=function(){
        clearInterval(t);
        rights.style.opacity = 1;
        lefts.style.opacity = 1;
    }
    banner.onmouseout=function(){
        t=setInterval(move,2000);
        rights.style.opacity = 0;
        lefts.style.opacity = 0;
    }
     // 左右按钮
    rights.onclick=function(){
        if(!flag){
            return;
        }
        move();
        flag=false;
    }
    lefts.onclick=function(){
        if(!flag){
            return;
        }
        movel();
        flag=false;
    }
}
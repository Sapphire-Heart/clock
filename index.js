var canvas=document.querySelector("#canvas");
ctx=canvas.getContext("2d"); 

//js调用
// var i=0;
// var x;
// setInterval(function(){
// 	x=Math.PI/30*i;
// 	i++;
// 	drawClock();
// },1000);

var drawClock=function(){
	var now=new Date();
	var s=now.getSeconds();
	var m=now.getMinutes();
	var h=now.getHours();
	// var x=Math.PI/30*s;
	ctx.clearRect(0,0,1000,600);  //保存一个干净的画布
	ctx.save();
	ctx.translate(300,300);  //移动画布圆点到中心
	ctx.rotate(-Math.PI/2);

	//画外层的表盘
	ctx.save();
	ctx.strokeStyle="rgba(0,0,0,0)";
	ctx.lineWidth=15;
	ctx.beginPath();
	ctx.arc(0,0,280,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();

	//投影
	ctx.shadowOffsetX=0;
	ctx.shadowOffsetY=0;
	ctx.shadowBlur=10;
	ctx.shadowColor="#00ff00";
	ctx.strokeStyle = "#00ff66";
	ctx.fillStyle = "#00ff66";

	// 画时间刻度
	ctx.save();
	ctx.lineCap = "round";
	for(var i=1;i<61;i++){
		ctx.beginPath();
		ctx.rotate(Math.PI/30);
		if(i%5!=0){
			ctx.lineWidth = 3;
			ctx.moveTo(240,0);
		}else{
			ctx.lineWidth = 5;
			ctx.moveTo(230,0);
		}
		ctx.lineTo(245,0);	
		ctx.stroke();
	}
	ctx.restore();

	// 画时针
	ctx.save();
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.rotate((h*3600+m*60+s)/(12*3600)*2*Math.PI);
	ctx.lineWidth = 8;
	ctx.moveTo(0,0);
	ctx.lineTo(140,0);
	ctx.stroke();
	ctx.restore();

	//	分针
	ctx.save();
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.rotate((m*60+s)/(3600)*2*Math.PI);
 	// ctx.rotate(Math.PI/30*m);;
	ctx.lineWidth = 5;
	ctx.moveTo(0,0);
	ctx.lineTo(180,0);
	ctx.stroke();
	ctx.restore();

	// 秒针
	ctx.save();
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.rotate(Math.PI/30*s);
	// ctx.rotate(x);
	ctx.lineWidth = 5;
	ctx.moveTo(0,0);
	ctx.lineTo(220,0);
	ctx.stroke();
	// ctx.beginPath();
	// ctx.arc(230,0,10,0,Math.PI*2,true);
	// ctx.stroke();
	
	
	// 圆点
	ctx.beginPath();
	ctx.arc(0,0,10,0,Math.PI*2,true);
	ctx.fill();ctx.restore();

	//复原一开始保存的干净画布 
	ctx.restore();
	window.requestAnimationFrame(drawClock);

}
window.requestAnimationFrame(drawClock);


// //这种动画方式 当当前窗口处于未激活状态时，
// //动画帧数会明显降低
// var aa=function(){
// 	console.log(1);
// 	requestAnimationFrame(aa);
// }
// requestAnimationFrame(aa);

//下载图片
// document.onclick=function(){
// 	location.href=(canvas1.toDataURL().replace("data:image/png","data:stream/octet"));  //保存图片属性
// }

//下载透明图片
// var link = document.createElement('a');
// link.innerHTML = 'download image';

// link.addEventListener('click', function(ev) {
//     link.href = canvas1.toDataURL();
//     link.download = "mypainting.png";  //给link设置登录属性
// }, false);

// document.body.appendChild(link);
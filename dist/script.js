console.clear();
//init canvas element
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

// //練習畫三角形
// //設定畫布尺寸(像素)
// //可以指定數值大小，也可以直接=window，撐滿整個視窗
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// //開始繪製
// ctx.beginPath();
// //畫筆的頭
// ctx.moveTo(50,50);
// //連到要畫的位置
// ctx.lineTo(100,100);
// ctx.lineTo(250,20);
// //自動將開始與最後的點連接
// ctx.closePath();
// //指定顏色
// ctx.fillStyle="#f26248";
// //填上顏色
// ctx.fill()
// //填上外框線
// ctx.stroke()

//正方形畫布
canvas.width = 400;
canvas.height = 400;


//畫正方形，預設為黑色，改為紅色，未跟動，之後都會沿用該顏色
// ctx.fillStyle="#f26248";
// ctx.fillRect(100,100,200,200);
// ctx.fillRect(300,300,100,100);

// 紅色線框版本
// ctx.strokeStyle="#f26248";
// ctx.strokeRect(100,100,200,200);
// ctx.strokeRect(300,300,100,100);


//用線條畫正方形
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(300,100);
// ctx.lineTo(300,300);
// ctx.lineTo(100,300);
// ctx.closePath();  //可以手動，也可以用close閉合
// // ctx.stroke() //畫框線
// ctx.rect(300,300,50,50) //直接畫正方形
// ctx.fill() //填色


//畫圓形
// ctx.beginPath();
// //      座標一   座標二 角度(PI=180度，逆時鐘運算)  
// ctx.arc(200,200,50,0, Math.PI);
// // ctx.fill() //填色
// ctx.stroke() //畫框線




var time= 0; //assign to car' position

//mouse position
var mouse = {
  x: 0,
  y: 0
}

//record mouse position
canvas.addEventListener("mousemove",function(event){
  mouse.x = event.offsetX
  mouse.y = event.offsetY
})


function draw(){
  time++;
  
  //init and clear canvas 
  ctx.clearRect(0,0,400,400);
  
  //not clear, if you want to show Shadow
  // ctx.fillStyle="rgba(255,255,255,0.2)";
  // ctx.clearRect(0,0,400,400);

  ctx.beginPath();
  for(var i=0; i<10 ; i++){
    let pos = i*50;
    ctx.moveTo(pos,0);
    ctx.lineTo(pos,400);
    //x  Coordinate
    ctx.fillText(pos,pos,10);
    
    ctx.moveTo(0,pos);
    ctx.lineTo(400,pos);
    //y  Coordinate
    ctx.fillText(pos,10,pos);
    
  }
  ctx.strokeStyle="rgba(0,0,0,0.1)";
  ctx.stroke(); 
  
  //ground
  ctx.beginPath()
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth=2
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //red Square block
  ctx.fillStyle="#f26248"
  ctx.fillRect(300,300,50,50)
  ctx.strokeRect(300,300,50,50)
  
  //2 yellow Square block
  ctx.beginPath()
  ctx.rect(250,250,50,100)
  ctx.rect(50,300,50,50)
  //assign new color 
  ctx.fillStyle="#ffe14f"
  ctx.fill()
  ctx.stroke()
  
  //2 orange Square block
  ctx.beginPath()
    ctx.rect(100,250,50,100)
    ctx.rect(200,250,50,100)
  ctx.fillStyle="#ff9f51"
  ctx.fill()
  ctx.stroke()
  
  //arch
  ctx.beginPath()
  ctx.moveTo(100,200)
  ctx.lineTo(250,200)
  ctx.lineTo(250,250)
  ctx.lineTo(200,250)
  //helf circle
  //true: change to clockwise
  ctx.arc(175,250,25,Math.PI*2,Math.PI,true)
  // ctx.lineTo(200,250)
  ctx.lineTo(100,250)
  ctx.closePath()
  ctx.fillStyle="#fff"
  ctx.fill()
  ctx.stroke()
  
  //roof
  ctx.beginPath()
  ctx.moveTo(100,200)
  ctx.lineTo(175,150)
  ctx.lineTo(250,200)
  ctx.closePath()
  ctx.fillStyle="#f26248"
  ctx.fill()
  ctx.stroke()

  //flag
  ctx.beginPath();
  ctx.moveTo(175,150);
    //flag raising and lowering  -(mouse.y/5)
  ctx.lineTo(175,100-(mouse.y/5))
  //wigwag the flag (time%5)
  // ctx.lineTo(200,110);
  // ctx.lineTo(200,110-(time%5))
  ctx.lineTo(200,110-((time%5)+(mouse.y/5)));
   ctx.lineTo(175,120-mouse.y/5);
  ctx.closePath();
   //change flag color
  // ctx.fillStyle="#ed5a2x";
  ctx.fillStyle="hsl("+(mouse.x%360)+",50%,50%)"
  ctx.fill();
  ctx.stroke();
  
  //car
  //assign time to car' position
  // not to disappear in canvas and repeat
  // car can appearance from 0 (-40)
  let carx= time % 440 -40;
  ctx.fillStyle="#ffffff"
  // ctx.fillRect(300,325,40,25)
  // ctx.strokeRect(300,325,40,25)
  ctx.fillRect(carx,325,40,25)
  ctx.strokeRect(carx,325,40,25)
  ctx.beginPath()
  //Wheel
  // ctx.arc(300+10,350,5,0,Math.PI*2)
  // ctx.arc(300+30,350,5,0,Math.PI*2)
  ctx.arc(carx+10,350,5,0,Math.PI*2)
  ctx.arc(carx+30,350,5,0,Math.PI*2)
  ctx.fillStyle="#222";
  ctx.fill();
  ctx.stroke();
  
  //mouse
  ctx.beginPath()
  ctx.arc(mouse.x ,mouse.y,5,0,Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
}

draw()

//會變得粗，因為沒有清掉之前的畫
setInterval(draw,30)
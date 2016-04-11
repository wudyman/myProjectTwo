/**
 * downCount: Simple Countdown clock with offset
 * Author: Wudy
 */
function getRTime(){ 
var StartTime=new Date('2016/4/1 00:00:00'); //开始时间 
var EndTime= new Date('2026/4/1 00:00:00'); //截止时间 
var NowTime = new Date(); 
var totalT =EndTime.getTime() - StartTime.getTime(); 
var t =EndTime.getTime() - NowTime.getTime(); 
/*var d=Math.floor(t/1000/60/60/24); 
t-=d*(1000*60*60*24); 
var h=Math.floor(t/1000/60/60); 
t-=h*60*60*1000; 
var m=Math.floor(t/1000/60); 
t-=m*60*1000; 
var s=Math.floor(t/1000);*/ 
var totalDays=Math.floor(totalT/1000/60/60/24); 

var d=Math.floor(t/1000/60/60/24); 
var h=Math.floor(t/1000/60/60%24); 
var m=Math.floor(t/1000/60%60); 
var s=Math.floor(t/1000%60); 

document.getElementById("days").innerHTML = d; 
document.getElementById("hours").innerHTML = h; 
document.getElementById("minutes").innerHTML = m; 
document.getElementById("seconds").innerHTML = s; 

document.getElementById("passdays").innerHTML = totalDays-d-1; 

} 
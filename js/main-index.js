var bb=1;
var cc,yj,su,sup;
yj=0;
su=0;
sup=0;/*
function changeImage(){
    element=document.getElementById('imgg');
    bb=bb+1
    if (bb >= 4) {
        bb=1;
        element.src="/images/logo"+String(bb)+".png";
    }else{
        element.src="/images/logo"+String(bb)+".png";
    }
}*/
function hehe(){
        var sn=[42,41],dz=43,fx=1,n,ctx=document.getElementById("can").getContext("2d");
    function draw(t,c){
        ctx.fillStyle=c;
        ctx.fillRect(t%20*20+1,~~(t/20)*20+1,18,18);
    }
    document.onkeydown=function(e){fx=sn[1]-sn[0]==(n=[-1,-20,1,20][(e||event).keyCode-37]||fx)?fx:n};
    !function(){
        sn.unshift(n=sn[0]+fx);
        if(sn.indexOf(n,1)>0 || n<0||n>399||fx==1&&n%20==0||fx==-1&&n%20==19){
            return alert("GAME OVER");
            refesh(); 
        } 
        draw(n,"Lime");
        if(n==dz){
            while(sn.indexOf(dz=~~(Math.random()*400))>=0);
            draw(dz,"Red");
        }else{
            draw(sn.pop(),"black");
        }
        setTimeout(arguments.callee,130);
    }();
    function refesh(){
          location.reload();
    }
}
function button() {
    var ee=document.getElementById("inp").value;
    if (ee=="dsyisverycool"){
        su=1;
        alert("矮油,夸的人家都不好意思了");
    }
    if (ee=="阴乐"){
        document.getElementById("boddy").style.background="url(../images/tyunfile.71360.jpg)";
        var mus=new Audio("../sounds/music.mp3");
        mus.play();
    }
    if (ee=="印尼宽带"){
        document.getElementById("boddy").style.background="url(../images/inews.gtimg.jpg)";
        var mus=new Audio("../sounds/yyy.mp3");
        mus.play();
    }
    if (ee=="压迫感"){
        document.getElementById("boddy").style.background="url(../images/img1.jiemian.jpg)";
    }
    if (ee=="手机清灰"){
        var mus=new Audio("../sounds/手机清灰.mp3")
        mus.play()
    }
}
var a=1
function xxxx() {
    while(1){
        alert('从前有座山');
        alert('山里有座庙');
        alert('庙里有两个和尚');
        alert('大和尚对小和尚说');
    }
}
function hhh() {
    if (a==10){
        alert('都说了别在那点了,你™是不是无聊');
        alert('那我给你讲个故事吧');
        xxxx();
    }
    a=a+1
}
function abc(){
    if (yj == 0){
        document.getElementById("theme").href="../css/light.css";
    }
    if (yj == 1){
        document.getElementById("theme").href="../css/dark.css";
    }
}
function cba(){
    if (yj == 0){
        yj=1;
    }else{
        if (yj == 1){
            yj=0;
        }
    }
}
function suprise(){
    if (su==1){
        sup=sup+1;
        if (sup>=10){
            alert("行了,别敲敲敲了");
            // document.getElementById("sup").style.display="";
            // document.getElementById("su").href="css/suprise.css";
        }
    }
}
var w;
function startWorker(){
    if(typeof(Worker)!=="undefined"){
        if(typeof(w)=="undefined"){
            w=new Worker("worker.js");
        }
        w.onmessage = function (event) {
            document.getElementById("result").innerHTML=event.data;
        };
    }
}
function stopWorker(){ 
    w.terminate();
}

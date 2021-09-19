var bb=1;
var cc,yj,su,sup;
var texts
yj=0;
su=0;
sup=0;
texts=["如果李白没死的话，那么他现在还活着","子曰:三人行，必有三人","1.你正在看这些文字\n2.人不能在伸出舌头时呼吸\n3.你在尝试第二条\n4.你在笑\n6.没有第五条\n7.没有第零条\n9.没有第八条\n10.你看完了这些废话","吃面不吃蒜，等于没吃蒜","千万别买爱疯13,用这些省下来的钱买一个爱疯13他不香吗?","你知道吗?人每呼吸60秒,就会减少一分钟的寿命","为什么我听说过冬瓜南瓜西瓜却没有听说过北瓜?","听说发芽的土豆是最好的安眠药,要不吃一个逝一世"]
/*
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
function button() {
    var ee=document.getElementById("inp").value;
    switch (ee) {
        case "dsyisverycool":
            su=1;
            alert("矮油,夸的人家都不好意思了");
            break;
        case "阴乐":
            document.getElementById('bg').style.display='none'
            document.getElementById("boddy").style.background="url(/images/tyunfile.71360.jpg)";
            var mus=new Audio("../sounds/music.mp3");
            mus.play();
            break;
        case "印尼宽带":
            document.getElementById('bg').style.display='none'
            document.getElementById("boddy").style.background="url(/images/inews.gtimg.jpg)";
            var mus=new Audio("../sounds/yyy.mp3");
            mus.play();
            break;
        case "压迫感":
            document.getElementById('bg').style.display='none'
            document.getElementById("boddy").style.background="url(/images/img1.jiemian.jpg)";
            break;
        case "手机清灰":
            document.getElementById('bg').style.display='none'
            document.getElementById("boddy").style.background="url(/images/erji.jpg)";
            var mus=new Audio("/sounds/手机清灰.mp3")
            mus.play()
            break;
        case "最炫穷哈风":
            var mus=new Audio("/sounds/最炫穷哈风.mp3")
            mus.play()
            break;
        default:
            window.open('https://www.baidu.com/s?wd='+String(ee))
            break;
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
        alert(texts[Math.floor(Math.random()*8)]);
        a=0
    }
    a=a+1
}
function abc(){
    if (yj == 0){
        document.getElementById("theme").href="/css/light.css";
    }
    if (yj == 1){
        document.getElementById("theme").href="/css/dark.css";
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

// function mymenu(){

// }
window.onload =function(){
    document.getElementById("hea").style.height=String(document.getElementById("ul11").clientHeight)+"px" 
}
window.onresize = function(){
    document.getElementById("hea").style.height=String(document.getElementById("ul11").clientHeight)+"px" 
}
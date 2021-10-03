var bb = 1;
var cc, yj, su, sup;
var texts;
var sUserAgent = navigator.userAgent.toLowerCase();   //浏览器的用户代理设置为小写，再进行匹配
var isIpad = sUserAgent.match(/ipad/i) == "ipad";   //或者利用indexOf方法来匹配
var isIphoneOs = sUserAgent.match(/iphone os/i) == "iphone";
var isMidp = sUserAgent.match(/midp/i) == "midp";  //移动信息设备描述MIDP是一套Java应用编程接口，多适用于塞班系统
var isUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  //CVS标签
var isUc = sUserAgent.match(/ucweb/i) == "ucweb";
var isAndroid = sUserAgent.match(/android/i) == "android";
var isCe = sUserAgent.match(/windows ce/i) == "windows ce";
var isWM = sUserAgent.match(/windows mobil/i) == "windows mobil";
yj = 0;
su = 0;
sup = 0;
texts = ["如果李白没死的话，那么他现在还活着", "子曰:三人行，必有三人", "1.你正在看这些文字\n2.人不能在伸出舌头时呼吸\n3.你在尝试第二条\n4.你在笑\n6.没有第五条\n7.没有第零条\n9.没有第八条\n10.你看完了这些废话", "吃面不吃蒜，等于没吃蒜", "千万别买爱疯13,用这些省下来的钱买一个爱疯13他不香吗?", "你知道吗?人每呼吸60秒,就会减少一分钟的寿命", "为什么我听说过冬瓜南瓜西瓜却没有听说过北瓜?", "听说吃发芽的土豆有助于睡眠,要不逝一世"];
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
console.log("在下面输入 egg() 有惊喜")
console.log(texts[Math.floor(Math.random() * 8)])
console.log(
    `%c `,
    `padding:25px; 
    background-image: url('https://sf3-cdn-tos.douyinstatic.com/obj/ies-douyin-opencn/emoji/kan-3x.png');
    background-size: cover; 
    background-position: center center;`
);
function egg() {
    console.log("在网页上方搜索框搜这些有惊喜:\n阴乐\n印尼宽带\n手机清灰\n压迫感\n最炫穷哈风\n什么歌最好听")
}
function goback() {
    document.getElementById("hea").style.display = "block";
    document.getElementById("ul11").style.position = "fixed";
    document.getElementById("ayh").src = "";
    document.getElementById("ayhgame").style.display = "none";
    document.getElementById("a").style.display = "initial";
    document.getElementById("back").style.display = "none";
    document.getElementById("imgg").style.display = "initial";
    document.getElementById("tcs").style.display = "none";
    document.getElementById("about").style.display = "none";
    // document.getElementById("mininb666").src="";
}
function showtcs() {
    if (isIpad || isIphoneOs || isMidp || isUc7 || isUc || isAndroid || isCe || isWM) {
        alert('该游戏不支持移动设备');
    } else {
        document.getElementById("hea").style.display = "none";
        document.getElementById("ul11").style.position = "initial";
        document.getElementById("a").style.display = "none";
        document.getElementById("back").style.display = "initial";
        document.getElementById("imgg").style.display = "none";
        document.getElementById("tcs").style.display = "flex";
    }
}
function showayhgame() {
    document.getElementById("hea").style.display = "none"
    document.getElementById("ul11").style.position = "initial";
    document.getElementById("a").style.display = "none";
    document.getElementById("back").style.display = "initial";
    document.getElementById("imgg").style.display = "none";
    document.getElementById("ayhgame").style.display = "flex";
    document.getElementById("ayh").src = "https://gugeaoyunhuiyouxi.github.io/logos/2020/kitsune/rc6/kitsune20.html?hl=zh-CN"

}
function showabout() {
    document.getElementById("a").style.display = "none";
    document.getElementById("back").style.display = "initial";
    document.getElementById("imgg").style.display = "none";
    document.getElementById("mininb666").src = "https://www.kugou.com/song/#hash=33878EA2226F27BCEB205BAB3EDD579C&album_id=46942452";
    document.getElementById("about").style.display = "flex";
}
function button() {
    var ee = document.getElementById("inp").value;
    switch (ee) {
        case "dsyisverycool":
            su = 1;
            alert("矮油,夸的人家都不好意思了");
            break;
        case "什么歌最好听":
            window.open("https://www.kugou.com/song/#hash=33878EA2226F27BCEB205BAB3EDD579C&album_id=46942452")
            break;
        case "阴乐":
            window.open("https://www.kugou.com/song/#hash=28A245B62ACB69862B4FE96630AAA66D&album_id=596259")
            break;
        case "印尼宽带":
            document.getElementById('bg').style.display = 'none';
            document.getElementById("boddy").style.background = "url(/images/inews.gtimg.jpg)";
            var mus = new Audio("../sounds/yyy.mp3");
            mus.play();
            break;
        case "压迫感":
            document.getElementById('bg').style.display = 'none';
            document.getElementById("boddy").style.background = "url(/images/img1.jiemian.jpg)";
            break;
        case "手机清灰":
            document.getElementById('bg').style.display = 'none';
            document.getElementById("boddy").style.background = "url(/images/erji.jpg)";
            var mus = new Audio("/sounds/手机清灰.mp3");
            mus.play();
            break;
        case "最炫穷哈风":
            var mus = new Audio("/sounds/最炫穷哈风.mp3");
            mus.play();
            break;
        default:
            window.open('https://www.baidu.com/s?wd=' + String(ee));
            break;
    }
}
var a = 1
function xxxx() {
    while (1) {
        alert('从前有座山');
        alert('山里有座庙');
        alert('庙里有两个和尚');
        alert('大和尚对小和尚说');
    }
}
function hhh() {
    if (a == 5) {
        alert(texts[Math.floor(Math.random() * 8)]);
        a = 0;
    }
    a = a + 1
}
function abc() {
    if (yj == 0) {
        document.getElementById("theme").href = "/css/light.css";
    }
    if (yj == 1) {
        document.getElementById("theme").href = "/css/dark.css";
    }
}
function cba() {
    if (yj == 0) {
        yj = 1;
    } else {
        if (yj == 1) {
            yj = 0;
        }
    }
}
function suprise() {
    hhh();
}
var w;
window.onload = function () {
    document.querySelector(".loa").style.display = "none"
    document.getElementById("hea").style.height = String(document.getElementById("ul11").clientHeight) + "px"
}
window.onresize = function () {
    document.getElementById("hea").style.height = String(document.getElementById("ul11").clientHeight) + "px"
}
function hehe() {
    var sn = [42, 41], dz = 43, fx = 1, n, ctx = document.getElementById("can").getContext("2d");
    function draw(t, c) {
        ctx.fillStyle = c;
        ctx.fillRect(t % 20 * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18);
    }
    document.onkeydown = function (e) { fx = sn[1] - sn[0] == (n = [-1, -20, 1, 20][(e || event).keyCode - 37] || fx) ? fx : n };
    !function () {
        sn.unshift(n = sn[0] + fx);
        if (sn.indexOf(n, 1) > 0 || n < 0 || n > 399 || fx == 1 && n % 20 == 0 || fx == -1 && n % 20 == 19) {
            return alert("GAME OVER");
            refesh();
        }
        draw(n, "Lime");
        if (n == dz) {
            while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);
            draw(dz, "Red");
        } else {
            draw(sn.pop(), "black");
        }
        setTimeout(arguments.callee, 130);
    }();
    function refesh() {
        location.reload();
    }
}
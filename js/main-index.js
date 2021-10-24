var bb = 1;
var cc, yj, su, sup;
var texts;
yj = 0;
su = 0;
sup = 0;
texts = [
    "如果李白没死的话，那么他现在还活着",
    "子曰:三人行，必有三人",
    "1.你正在看这些文字\n2.人不能在伸出舌头时呼吸\n3.你在尝试第二条\n4.你在笑\n6.没有第五条\n7.没有第零条\n9.没有第八条\n10.你看完了这些废话",
    "吃面不吃蒜，等于没吃蒜",
    "千万别买爱疯13,用这些省下来的钱买一个爱疯13他不香吗?",
    "你知道吗?人每呼吸60秒,就会减少一分钟的寿命",
    "为什么我听说过冬瓜南瓜西瓜却没有听说过北瓜?",
    "听说吃发芽的土豆有助于睡眠,要不逝一世",
];
console.log("在下面输入 egg() 有惊喜");
console.log(texts[Math.floor(Math.random() * 8)]);
console.log(
    `%c `,
    `padding:25px; 
    background-image: url('https://sf3-cdn-tos.douyinstatic.com/obj/ies-douyin-opencn/emoji/kan-3x.png');
    background-size: cover; 
    background-position: center center;`
);
function egg() {
    console.log(
        "在网页上方搜索框搜这些有惊喜:\n阴乐\n印尼宽带\n手机清灰\n压迫感\n最炫穷哈风\n什么歌最好听"
    );
}
function button() {
    var ee = document.getElementById("inp").value;
    switch (ee) {
        case "dsyisverycool":
            su = 1;
            sendmsg("矮油,夸的人家都不好意思了");
            break;
        case "什么歌最好听":
            window.open(
                "https://www.kugou.com/song/#hash=33878EA2226F27BCEB205BAB3EDD579C&album_id=46942452"
            );
            break;
        case "阴乐":
            window.open(
                "https://www.kugou.com/song/#hash=28A245B62ACB69862B4FE96630AAA66D&album_id=596259"
            );
            break;
        case "印尼宽带":
            document.getElementById("bg").src = "/images/inews.gtimg.jpg";
            var mus = new Audio("../sounds/yyy.mp3");
            mus.play();
            break;
        case "压迫感":
            document.getElementById("bg").src = "/images/img1.jiemian.jpg";
            break;
        case "手机清灰":
            document.getElementById("bg").src = "/images/erji.jpg";
            var mus = new Audio("/sounds/手机清灰.mp3");
            mus.play();
            break;
        case "最炫穷哈风":
            var mus = new Audio("/sounds/最炫穷哈风.mp3");
            mus.play();
            break;
        default:
            window.open("https://www.baidu.com/s?wd=" + String(ee));
            break;
    }
}
var a = 1;
function hhh() {
    if (a == 5) {
        sendmsg(texts[Math.floor(Math.random() * 8)]);
        a = 0;
    }
    a = a + 1;
}
function suprise() {
    hhh();
}
window.onload = function () {
    switch (GetQueryString("page")) {
        case "tcs":
            showtcs();
            break;
        case "ayh":
            showayhgame();
            break;
        case "about":
            showabout();
            break;
        default:
            break;
    }
    loa.style.display = "none";
    // $("#page").width($(window).width());
    // $("#page").height($(window).height());
};
document.onresize = function () {
    // $("#page").width($(window).width());
    // $("#page").height($(window).height());
};
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null) context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined"
        ? ""
        : context;
}
document.oncopy = function () {
    sendmsg("你复制这玩意干甚");
};
function sendmsg(msg) {
    document.querySelector(".ms").style.display = "flex";
    if (!document.querySelector(".msg").offsetTop) {
        // setTimeout(sendmsg, 500, msg);
    } else {
        document.querySelector(".text").innerHTML = msg;
        var to = setTimeout(() => {
            document.querySelector(".msg").style.animation = undefined;
            document.querySelector(".ms").style.display = "none";
            clearInterval(to);
        }, 6000);
        document.querySelector(".msg").style.animation = "mymsg 6s";
    }
}
var sUserAgent = navigator.userAgent.toLowerCase(); //浏览器的用户代理设置为小写，再进行匹配
var isIpad = sUserAgent.match(/ipad/i) == "ipad"; //或者利用indexOf方法来匹配
var isIphoneOs = sUserAgent.match(/iphone os/i) == "iphone";
var isMidp = sUserAgent.match(/midp/i) == "midp"; //移动信息设备描述MIDP是一套Java应用编程接口，多适用于塞班系统
var isUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; //CVS标签
var isUc = sUserAgent.match(/ucweb/i) == "ucweb";
var isAndroid = sUserAgent.match(/android/i) == "android";
var isCe = sUserAgent.match(/windows ce/i) == "windows ce";
var isWM = sUserAgent.match(/windows mobil/i) == "windows mobil";
var loa = document.querySelector(".loa");
var scra = document.getElementById("a");
var back = document.getElementById("back");
function showpage(url) {
    loa.style.display = "initial";
    scra.style.display = "none";
    back.style.display = "initial";
    document.getElementById("imgg").style.display = "none";
    document.getElementById("page").src = url;
    document.getElementById("page").style.display = "initial";
    document.getElementById("fullscr").style.display = "flex";
    document.getElementById("page").onload = function () {
        loa.style.display = "none";
    };
    document.querySelector("#page").width = "100%";
    document.querySelector("#page").height =
        window.innerHeight - document.querySelector("#header").offsetHeight - 16;
}
function goback() {
    scra.style.display = "initial";
    back.style.display = "none";
    document.getElementById("fullscr").style.display = "none";
    document.getElementById("imgg").style.display = "initial";
    document.getElementById("page").src = "";
    document.getElementById("page").style.display = "none";
}
function showtcs() {
    if (
        isIpad ||
        isIphoneOs ||
        isMidp ||
        isUc7 ||
        isUc ||
        isAndroid ||
        isCe ||
        isWM
    ) {
        sendmsg("该游戏不支持移动设备");
    } else {
        showpage("/page-tcs.html");
    }
}
function showayhgame() {
    showpage("/page-ayh.html");
}
function showabout() {
    showpage("/page-about.html");
}
var ful = 0;
function fullscr() {
    switch (ful) {
        case 0:
            document.getElementById("header").style.display = "none";
            document.querySelector("#page").height = window.innerHeight - 16;
            ful = 1;
            break;
        case 1:
            document.getElementById("header").style.display = "flex";
            document.querySelector("#page").height =
                window.innerHeight -
                document.querySelector("#header").offsetHeight -
                16;
            ful = 0;
        default:
            break;
    }
    return ful;
}

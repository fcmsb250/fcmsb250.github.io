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
            document.getElementById("bg").style.display = "none";
            document.getElementById("bgpc").src = "/images/inews.gtimg.jpg";
            document.getElementById("bgmob").src = "/images/inews.gtimg.jpg";
            var mus = new Audio("../sounds/yyy.mp3");
            mus.play();
            break;
        case "压迫感":
            document.getElementById("bg").style.display = "none";
            document.getElementById("bgpc").src = "/images/img1.jiemian.jpg";
            document.getElementById("bgmob").src = "/images/img1.jiemian.jpg";
            break;
        case "手机清灰":
            document.getElementById("bg").style.display = "none";
            document.getElementById("bgpc").src = "/images/erji.jpg";
            document.getElementById("bgmob").src = "/images/erji.jpg";
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
function hhh() {
    sendmsg(texts[Math.floor(Math.random() * 8)]);
}
function suprise() {
    hhh();
}
window.onload = function () {
    loa.style.display = "none";
};
window.onerror = function () {
    loa.style.display = "none";
};
window.onscroll = function () {
    if ($(window).scrollTop() >= $(".start").width()) {
        $(".start").hide();
    }
};
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
var loa = document.querySelector(".loa");
var scra = document.getElementById("a");
var back = document.getElementById("back");
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
                window.innerHeight - document.querySelector("#header").offsetHeight - 16;
            ful = 0;
        default:
            break;
    }
    return ful;
}
function aa(i) {
    var tm = setInterval(function () {
        var t = $(window).scrollTop();
        var d = i < t ? Math.min((i - t) / 10, -1) : Math.max((i - t) / 10, 1);
        $(window).scrollTop(t + d);
        if ($(window).scrollTop() == i) {
            clearInterval(tm);
            $(".start").hide();
        }
    }, 30);
}

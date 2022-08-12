/*
这个文件决定了什么时候或哪些访客能不能访问网站, 并尽可能兼容 ie11 浏览器

Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
此代码在 GPL-3.0 下获得许可
*/

/*
        再傻逼的防沉迷也抵不住一个程序猿对快乐傻逼似的追求
  ________ ___  ___  ________  ___  __            ___  _________
 |\  _____\\  \|\  \|\   ____\|\  \|\  \         |\  \|\___   ___\     |
 \ \  \__/\ \  \\\  \ \  \___|\ \  \/  /|_       \ \  \|___ \  \_|     |
  \ \   __\\ \  \\\  \ \  \    \ \   ___  \       \ \  \   \ \  \      |
   \ \  \_| \ \  \\\  \ \  \____\ \  \\ \  \       \ \  \   \ \  \     |
    \ \__\   \ \_______\ \_______\ \__\\ \__\       \ \__\   \ \__\   \|/
     \|__|    \|_______|\|_______|\|__| \|__|        \|__|    \|__|    v

 ________________________________________________________________
 |                                                              |
 |                       未成年限制登录提醒                     |
 |                                                              |
 |您使用的是未成年账号，仅周五、周六、周日及法定节假日晚上8:00- |
 |9:00可以游戏！当前已被限制！                                  |
 |                                                              |
 |            --------------------------------------            |
 |            |           下次可玩游戏时段         |            |
 |            |                                    |            |
 |            |         本周五晚上8:00-9:00        |            |
 |            |____________________________________|            |
 |                                                              |
 |温馨提示：                                                    |
 |1.如果身份信息有误，请点击》》申请修改《《                    |
 |2.如果您身份信息已经变动，可点击》》刷新身份《《              |
 |                ____________    ____________                  |
 |                |          |    |          |                  |
 |                | 更换账号 |    |   确定   |                  |
 |                |__________|    |__________|                  |
 |______________________________________________________________|
*/

var 网站被hx = false;
var ua = navigator.userAgent.toLowerCase();
var 用户用了鹅厂家的垃圾 = false;
var 位于根目录 = false;
var 正常显示网页 = true;

if (
    ua.indexOf("qq") !== -1 ||
    ua.indexOf("wechat") !== -1 ||
    ua.indexOf("tencent") !== -1
) {
    用户用了鹅厂家的垃圾 = true;
}
if (
    location.pathname === "/" ||
    location.pathname === "/index.html" ||
    location.pathname === "/index"
) {
    位于根目录 = true;
}

if (location.href.indexOf("dnt=1") !== -1 || 用户用了鹅厂家的垃圾 || 网站被hx) {
    正常显示网页 = false;
}
if (location.href.indexOf("jump=1") !== -1) {
    正常显示网页 = true;
}

try {
    eval("() => {}");
} catch (e) {
    if (位于根目录) {
        location.href = "/i.html";
    }
    window.onload = function () {
        try {
            document.getElementById("加载界面").removeNode();
        } catch (e) {
            document.getElementById("加载界面").remove();
        }
    };
    // eslint-disable-next-line no-undef
    drthetgjkpejmhiorjmpe4ijgp;
}

if (位于根目录 && !正常显示网页) {
    window.addEventListener("load", function () {
        document.body.innerHTML = "你好, 世界!";
        document.title = "我的第一个网页";
    });
} else if (!位于根目录 && !正常显示网页) {
    location.href = "/";
} else if (位于根目录 && 正常显示网页) {
    window.addEventListener("load", function () {
        fetch("/i.html")
            .then(function (res) {
                return res.text();
            })
            // eslint-disable-next-line no-unused-vars
            .then(function (html) {
                var m = html
                    .replaceAll("\r", "")
                    .replaceAll("\n", "")
                    .match(/<body>.+<\/body>/);
                if (!m) {
                    document.body.innerHTML = "你好, 世界!";
                    document.title = "我的第一个网页";
                    return;
                }
                // eslint-disable-next-line no-undef
                document.body.innerHTML = m[0];
                var s = document.createElement("script");
                s.src = "/js/index.js";
                s.onload = function () {
                    setTimeout(function () {
                        window.onload();
                    });
                };
                document.head.appendChild(s);
                document.title = "防沉迷终结者";
            })
            .catch(function () {
                document.writeln("你好, 世界!");
                document.title = "我的第一个网页";
            });
    });
}

/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
此代码在 GPL-3.0 下获得许可
*/

const 网站被hx = 0;
const ua = navigator.userAgent.toLowerCase();
var 用户正在使用ie浏览器 = false;
var Es6是可用的 = false;

try {
    eval("() => { es6IsAvailable=true; }");
} catch (e) {}
if (window.ActiveXObject || "ActiveXObject" in window) {
    用户正在使用ie浏览器 = true;
}

if (用户正在使用ie浏览器) {
    location.href = "/ie.html";
}
if (!Es6是可用的) {
    try {
        加载界面.remove();
    } catch (e) {}
}

if (
    location.pathname !== "/" &&
    location.pathname !== "/index.html" &&
    location.pathname !== "/index" &&
    (网站被hx ||
        // 强制屏蔽
        location.href.includes("dnt=1") ||
        // 屏蔽鹅厂家的东西
        ua.includes("qq") ||
        ua.includes("wechat") ||
        ua.includes("tencent")) &&
    // 没让强制跳转
    !location.href.includes("jump=1")
) {
    location.href = "/?dnt=1";
} else if (
    (location.pathname === "/" ||
        location.pathname === "/index.html" ||
        location.pathname === "/index") &&
    // 强制跳转
    (location.href.includes("jump=1") || !网站被hx) &&
    // 没有强制屏蔽
    !location.href.includes("dnt=1") &&
    // 屏蔽鹅厂家的东西
    !(ua.includes("qq") || ua.includes("wechat") || ua.includes("tencent"))
) {
    if (location.href.includes("jump=1")) {
        window[atob("bG9jYXRpb24=")][atob("aHJlZg==")] =
            atob("aS5odG1s") + "?jump=1";
    } else {
        window[atob("bG9jYXRpb24=")][atob("aHJlZg==")] = atob("aS5odG1s");
    }
}

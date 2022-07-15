/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
此代码在 GPL-3.0 下获得许可
*/

const 网站被hx = 0;
const ua = navigator.userAgent.toLowerCase();

if (
    location.pathname != "/" &&
    location.pathname != "/index.html" &&
    (网站被hx ||
        location.href.includes("dnt=1") ||
        ua.includes("qq") ||
        ua.includes("wechat") ||
        ua.includes("tencent")) &&
    !location.href.includes("jump=1")
)
    location.href = "/?dnt=1";
else if (
    (location.pathname == "/" || location.pathname == "/index.html") &&
    (location.href.includes("jump=1") || !网站被hx) &&
    !location.href.includes("dnt=1")
)
    if (location.href.includes("jump=1"))
        window[atob("bG9jYXRpb24=")][atob("aHJlZg==")] = atob("aS5odG1s") + "?jump=1";
    else window[atob("bG9jYXRpb24=")][atob("aHJlZg==")] = atob("aS5odG1s");
else document.title = document.getElementsByTagName("title")[0].getAttribute("t");

/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
此代码在 GPL-3.0 下获得许可
*/
const 截图 = document.querySelector("#截图 div");
window.onerror = async () => {
    try {
        加载界面.hide();
    } catch (e) {
        window.onerror = null;
    }
};
window.onload = async () => {
    导航栏.style.backgroundColor = "var(--theme-color1)";
    导航栏.style.boxShadow = "none";
    加载界面.style.animationName = "加载界面";
    setTimeout(() => {
        加载界面.remove();
    }, 500);
    window.onresize();
};
window.onresize = async () => {
    截图.style.height = (((document.body.offsetWidth / 4) * 3) / 512) * 300 + "px";
};
document.body.onscroll = async () => {
    if (document.documentElement.scrollTop == 0) {
        导航栏.style.backgroundColor = "var(--theme-color1)";
        导航栏.style.boxShadow = "none";
    } else {
        导航栏.style.backgroundColor = "var(--theme-color3)";
        导航栏.style.boxShadow = "0 12px 16px 0 var(--theme-color3)";
    }
};

async () => {
    document.querySelectorAll("a.外链").forEach((e) => {
        e.setAttribute("target", "_blank");
    });
};

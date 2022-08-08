/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
此代码在 GPL-3.0 下获得许可
*/

var 动态加载完毕 = true;
var 事件监听器 = [];
var 进度条第一次动 = false;
var 进度条进度 = 0;
var 进度条定时器 = null;
var 进度条超时 = null;

window.onerror = () => {
    try {
        加载界面.hide();
    } catch (e) {
        window.onerror = null;
    }
};

window.onload = () => {
    导航栏.style.backgroundColor = "var(--theme-color1)";
    导航栏.style.boxShadow = "none";
    加载界面.style.animationName = "加载界面";
    setTimeout(() => {
        加载界面.remove();
    }, 500);

    window.onresize();

    完成加载();

    document.body.onscroll = () => {
        if (document.documentElement.scrollTop === 0) {
            导航栏.style.backgroundColor = "var(--theme-color1)";
            导航栏.style.boxShadow = "none";
        } else {
            导航栏.style.backgroundColor = "var(--theme-color3)";
            导航栏.style.boxShadow = "0 12px 16px 0 var(--theme-color3)";
        }
    };

    let t = document.getElementsByTagName("title")[0].getAttribute("t");
    if (t) {
        document.title = t;
    }
};

window.onresize = () => {
    try {
        截图.style.height =
            (((document.body.offsetWidth / 4) * 3) / 512) * 300 + "px";
    } catch (e) {}
};

function 完成加载() {
    document.querySelectorAll("a").forEach((e) => {
        if (e.host !== location.host) {
            e.className = "外链";
            e.setAttribute("target", "_blank");
        } else {
            if (e.href.includes("#")) {
                return;
            }
            事件监听器.forEach((fn) => {
                try {
                    e.removeEventListener("click", fn);
                } catch (e) {}
            });
            /** @param {MouseEvent} ev */
            let fn = (ev) => {
                if (动态加载完毕) {
                    动态加载完毕 = false;
                    动态加载(e);
                    ev.preventDefault();
                    return false;
                }
            };
            事件监听器.push(fn);
            e.addEventListener("click", fn);
        }
    });
    document.querySelectorAll("h1,h2").forEach((e) => {
        if (e.id) {
            e.outerHTML = `<a href="#${e.id}">${e.outerHTML}</a>`;
        }
    });
    window.onresize();

    设置进度条进度(100);
}

/** @param {HTMLAnchorElement} e  */
function 动态加载(e) {
    try {
        设置进度条进度(0);
        fetch(e.pathname)
            .then((res) => res.text())
            .then((html) => {
                try {
                    let m = html.match(
                        /<!-- START MAIN -->.+<!-- END MAIN -->/s
                    );
                    let mt = html.match(/<title>.+<\/title>/s);
                    let 主要部分 = document.querySelector("div.主要部分");
                    let 临时主要部分 =
                        document.querySelector("div.临时主要部分");
                    let 标题 = "防沉迷终结者";
                    if (!m || !e) {
                        return e.click();
                    }
                    if (mt) {
                        标题 = mt[0].replace(/<\/?title>/g, "");
                    }
                    临时主要部分.innerHTML = m[0];
                    临时主要部分.className = "主要部分";
                    主要部分.className = "临时主要部分";
                    主要部分.innerHTML = "";
                    动态加载完毕 = true;
                    document.title = 标题;
                    事件监听器 = [];
                    完成加载();
                    history.replaceState(null, null, e.pathname);
                } catch (err) {
                    e.click();
                    设置进度条进度(-1);
                }
            })
            .catch(() => {
                e.click();
                设置进度条进度(-1);
            });
    } catch (err) {
        e.click();
        设置进度条进度(-1);
    }
}

function 设置进度条进度(进度) {
    if (进度 === 100) {
        进度条进度 = 0;
        进度条.style.width = "100%";
        进度条超时 = setTimeout(() => {
            进度条.style.opacity = "0";
            setTimeout(() => {
                进度条.style.width = "0%";
            }, 200);
        }, 500);
        clearInterval(进度条定时器);
        return;
    }
    if (进度 === -1) {
        进度条进度 = 100;
        进度条.style.backgroundColor = "rgb(255, 0, 0)";
        进度条.style.width = "100%";
        进度条超时 = setTimeout(() => {
            进度条.style.opacity = "0";
            setTimeout(() => {
                进度条.style.backgroundColor = "rgb(0, 255, 255)";
                进度条.style.width = "0%";
            }, 200);
        }, 500);
        clearInterval(进度条定时器);
        return;
    }
    clearTimeout(进度条超时);
    进度条.style.width = "5%";
    进度条.style.opacity = "1";
    进度条定时器 = setInterval(() => {
        if (!(进度条进度 >= 100)) {
            进度条进度 += 5;
        }
        进度条.style.width = 进度条进度 + "%";
    }, 500);
}

console.log(
    "%c    ",
    "font-size:512px;background-size:100% 100%;background-repeat:no-repeat;background-image:url(https://fcmsb250.github.io/fuck-anti.webp);"
);

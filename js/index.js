/*
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

var 网页加载完毕 = false;
var 动态加载完毕 = true;
var 事件监听器 = [];
// eslint-disable-next-line no-unused-vars
var 进度条第一次动 = false;
var 进度条进度 = 0;
var 进度条定时器 = null;
var 进度条超时 = null;
var 加载界面, 截图, 进度条;

window.onerror = () => {
    try {
        document.getElementById("加载界面").remove();
    } catch (e) {
        window.onerror = null;
    }
};

window.onload = () => {
    网页加载完毕 = true;
    /** @type {HTMLDivElement} */
    let 导航栏 = document.querySelector("#导航栏");
    /** @type {HTMLButtonElement} */
    let 回到顶部 = document.querySelector("#回到顶部");
    加载界面 = document.querySelector("#加载界面");

    导航栏.style.backgroundColor = "var(--theme-color1)";
    导航栏.style.boxShadow = "none";
    加载界面.style.animationName = "加载界面";
    setTimeout(() => {
        加载界面.remove();
    }, 500);

    window.onresize();

    document.body.onscroll = () => {
        if (document.documentElement.scrollTop === 0) {
            导航栏.style.backgroundColor = "var(--theme-color1)";
            导航栏.style.boxShadow = "none";
            回到顶部.style.cssText = "transform: translateX(64px);";
        } else {
            导航栏.style.backgroundColor = "var(--theme-color3)";
            导航栏.style.boxShadow = "0 12px 16px 0 var(--theme-color3)";
            回到顶部.style.cssText = "transform: translateX(0px);";
        }
    };

    完成加载();

    let t = document.getElementsByTagName("title")[0].getAttribute("t");
    if (t) {
        document.title = t;
    }
    setTimeout(() => {
        // 开发环境禁用统计
        if (location.host === "fcmsb250.github.io") {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                // eslint-disable-next-line no-undef
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-9FFX6MHBWX");

            document.querySelector("img#visitor-badge").src =
                document.querySelector("img#visitor-badge").dataset.src;
        }
    }, 0);
};

window.onabort = window.onload;

window.onresize = () => {
    try {
        if (!截图) {
            截图 = document.querySelector("#截图");
        }

        截图.style.height =
            (((document.body.offsetWidth / 4) * 3) / 512) * 300 + "px";
    } catch (e) {}
};

function 完成加载() {
    try {
        加载界面.remove();
    } catch (e) {}

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
    document.body.onscroll();

    设置进度条进度(100);
}

/** @param {HTMLAnchorElement} e  */
function 动态加载(el) {
    try {
        if (el.href.endsWith(".zip")) {
            设置进度条进度(0);
            设置进度条进度(100);
            动态加载完毕 = true;
            return window.open(el.href, "_self");
        }
        设置进度条进度(0);
        fetch(el.pathname)
            .then((res) => res.text())
            .then((html) => {
                try {
                    let m = html.match(
                        /<!-- START MAIN -->.+<!-- END MAIN -->/s
                    );
                    let mt = html.match(/ t=".+"/s);
                    let 主要部分 = document.querySelector("div.主要部分");
                    let 临时主要部分 =
                        document.querySelector("div.临时主要部分");
                    let 标题 = "防沉迷终结者";
                    if (!m) {
                        return el.click();
                    }
                    if (mt) {
                        标题 = mt[0].split('"')[1];
                    }
                    临时主要部分.innerHTML = m[0];
                    临时主要部分.className = "主要部分";
                    主要部分.className = "临时主要部分";
                    主要部分.innerHTML = "";
                    document.title = 标题;
                    事件监听器 = [];
                    完成加载();
                    history.replaceState(null, null, el.pathname);
                    动态加载完毕 = true;
                } catch (err) {
                    el.click();
                    设置进度条进度(-1);
                }
            })
            .catch(() => {
                el.click();
                设置进度条进度(-1);
            });
    } catch (err) {
        el.click();
        设置进度条进度(-1);
    }
}

function 设置进度条进度(进度) {
    if (!进度条) {
        进度条 = document.querySelector("#进度条");
    }

    if (进度 === 100) {
        进度条.style.opacity = "1";
        进度条进度 = 0;
        进度条.style.width = "100%";
        进度条超时 = setTimeout(() => {
            进度条.style.opacity = "0";
            setTimeout(() => {
                进度条.style.width = "0%";
            }, 200);
        }, 500);
        clearInterval(进度条定时器);
        回到顶部();
        return;
    }
    if (进度 === -1) {
        进度条.style.opacity = "1";
        进度条进度 = 0;
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

function 回到顶部() {
    document.body.scrollIntoView({ behavior: "smooth" });
}

console.log(
    "%c    ",
    "font-size:512px;background-size:100% 100%;background-repeat:no-repeat;background-image:url(https://fcmsb250.github.io/fuck-anti.webp);"
);

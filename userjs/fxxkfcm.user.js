// ==UserScript==
// @name         43xx防沉迷破解
// @namespace    https://fcmsb250.github.io/
// @version      3.6.4
// @description  原脚本已封杀,不得已绕个弯,轻松破解防沉迷,让您尽情欢乐
// @author       dsy
// @match        http://*.4399.com/*
// @match        http://*.aiwan4399.com/*
// @match        http://*.iwan4399.com/*
// @icon         https://fcmsb250.github.io/favicon.ico
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM_getValue
// @grant        GM_setValue
// @updateURL    https://gitee.com/dsy4567/sofast/raw/master/fxxkfcm.user.js
// @license      MIT
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

// I DO NOT LIKE CTRL+C OR CTRL+V !
// I DO NOT LIKE CTRL+C OR CTRL+V !!
// I DO NOT LIKE CTRL+C OR CTRL+V !!!
// I DO NOT LIKE CTRL+C OR CTRL+V !!!!
// I DO NOT LIKE CTRL+C OR CTRL+V !!!!!
//        ^        ^
//       / \      / \
//    /----------------\
//   |       \   /      |
//   |         |        | DO NOT USE CTRL+C OR CTRL+V !
//   |         3        |
//    \----------------/
// I DO NOT LIKE CTRL+C OR CTRL+V !!!!!
// I DO NOT LIKE CTRL+C OR CTRL+V !!!!
// I DO NOT LIKE CTRL+C OR CTRL+V !!!
// I DO NOT LIKE CTRL+C OR CTRL+V !!
// I DO NOT LIKE CTRL+C OR CTRL+V !
(function () {
    "use strict";
    var errs = [];
    function showErrs() {
        console.error(errs);
    }
    function fxxkfcmYYDS() {
        window.open(
            "https://greasyfork.org/zh-CN/scripts/433257-%E7%A0%B4%E8%A7%A34399%E9%98%B2%E6%B2%89%E8%BF%B7%E5%92%8C%E5%B1%8F%E8%94%BD%E5%B9%BF%E5%91%8A/feedback",
            "_blank"
        );
    }
    function upd() {
        window.open("https://gitee.com/dsy4567/sofast/raw/master/fxxkfcm.user.js", "_blank");
    }
    var xxfcm = {
        whoIs: [
            "#addiv",
            "#Anti_open",
            "#fcmIframe",
            ".sdkDialog",
            "#anti-indulge",
            "#pusher",
            "#anti-indulge-prompt",
            "#Anti_mask",
        ],
        gunDog: function () {
            // 尝试使fcm无法正常运作
            // (a)iwan4399.com ifs-web_sdk
            try {
                PageWebApiSdk.closeDialog();
            } catch (e) {
                errs.push(e);
            }
            try {
                tId = "fuckFcm";
            } catch (e) {
                errs.push(e);
            }
            try {
                PageWebApiSdk.closeDialog(1);
            } catch (e) {
                errs.push(e);
            }
            try {
                PageWebApiSdkStyle = null;
                PageWebApiSdk = null;
                CountDown = null;
                Tools = null;
                PageWebApiSdkConf = null;
            } catch (e) {
                errs.push(e);
            }
            // web.4399.com fcmv2.js
            try {
                closePop();
                immedToWeb = null;
                flashpop = null;
                poplist = null;
                news_handle = null;
                heartbeat = null;
                a1101824 = null;
                popwebtips = null;
                playGameCountdown = null;
                countdown = null;
                window.smevent = null;
                popup = null;
            } catch (e) {
                errs.push(e);
            }
            // 4399.com/flash/* Antiindulgence.js
            try {
                $("script[src*='Antiindulgence.js").remove();
                Anti_close();
            } catch (e) {
                errs.push(e);
            }
        },
        gun: function () {
            xxfcm.gunDog();
            try {
                xxfcm.whoIs.forEach((element) => {
                    // 简单暴力的破解方式
                    if (document.querySelector(element) != null) {
                        document.querySelector(element).remove();
                        console.log("---破解成功--- " + element);
                    }
                });
            } catch (e) {
                errs.push(e);
            }
        },
        gunQuickly: function () {
            window.open(
                "https://www.douyin.com/search/%E9%80%9A%E7%BC%89%E7%8A%AF?publish_time=1&sort_type=0&source=search_history&type=video",
                "_blank"
            );
        },
    };
    setTimeout(function () {
        // 防止fcm破解在少数状态下不凑效
        xxfcm.gun();
        if (document.querySelector(".fl") != null && document.querySelector("#flash22") != null) {
            document.querySelector(".fl").innerHTML =
                "<a href='" +
                String(document.querySelector("#flash22").src) +
                "'>提高破解成功率</a>";
            GM_registerMenuCommand("点击左上角文字或logo提高破解成功率");
        }
    }, 3000);
    GM_registerMenuCommand("🟡菜单: 再次破解fcm", xxfcm.gun);
    GM_registerMenuCommand("🟡菜单: 破解fcm(更强力模式)", xxfcm.gunQuickly);
    GM_registerMenuCommand("🟡菜单: 反馈问题或给个好评", fxxkfcmYYDS);
    GM_registerMenuCommand("🟡菜单: 检查更新", upd);
    GM_registerMenuCommand("🟡菜单: 仅限开发者-在控制台输出所有捕获的错误", showErrs);
    var D = new Date();
    if (GM_getValue("insday", "ohno") == "ohno") {
        GM_setValue("insday", String(Math.floor(D.getTime()/1000/60/60/24)));
    }
    var happyDays = Math.ceil(D.getTime()/1000/60/60/24) - Number(GM_getValue("insday"));
    GM_registerMenuCommand("♥Fxxk43xx防沉迷已让您尽情欢乐" + String(happyDays) + "天");
})();

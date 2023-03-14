var tpj = jQuery;

var revapi1;

if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
        once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined,
        init: function() {
            window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
            if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) { window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1; if (window.revapi1initTry < 20) requestAnimationFrame(function() { RS_MODULES.modules["revslider11"].init() }); return; }
            window.revapi1 = jQuery(window.revapi1);
            if (window.revapi1.revolution == undefined) { revslider_showDoubleJqueryError("rev_slider_1_1"); return; }
            revapi1.revolutionInit({
                revapi: "revapi1",
                DPR: "dpr",
                sliderLayout: "fullscreen",
                duration: "3000ms",
                visibilityLevels: "1920,1710,1205,700",
                gridwidth: "1400,1180,700,480",
                gridheight: "1100,768,960,720",
                lazyType: "smart",
                perspective: 600,
                perspectiveType: "global",
                editorheight: "1100,768,960,720",
                responsiveLevels: "1920,1710,1205,700",
                progressBar: { disableProgressBar: true },
                navigation: {
                    wheelCallDelay: 1000,
                    onHoverStop: false,
                    arrows: {
                        enable: true,
                        tmp: "<span class=\"nav-number\" data-num=\"{{param1}}\"></span><span class=\"qodef-text-label\"></span><span class=\"qodef-arrow-icon\"></span>",
                        style: "qodef-arrows",
                        hide_onmobile: true,
                        hide_under: 778,
                        left: {
                            h_offset: 30
                        },
                        right: {
                            h_offset: 30
                        }
                    },
                    bullets: {
                        enable: true,
                        tmp: "",
                        style: "qode-bullets",
                        hide_over: "1024px",
                        space: 20
                    }
                },
                viewPort: {
                    global: true,
                    globalDist: "-200px",
                    enable: false
                },
                fallbacks: {
                    allowHTML5AutoPlayOnAndroid: true
                },
            });

        }
    } // End of RevInitScript

if (window.RS_MODULES.checkMinimal !== undefined) { window.RS_MODULES.checkMinimal(); };
!(function () {
    "use strict";
    var api = window.document.currentScript.getAttribute("data-api") || new URL(window.document.currentScript.src).origin + "/api/event";
    function logger(m) {
        console.warn("Ignoring Event: " + m);
    }
    function t(event) {
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(window.location.hostname) || "file:" === window.location.protocol) return logger("localhost");
        if (
            !window._phantom ||
            !window.__nightmare ||
            !window.navigator.webdriver ||
            !window.Cypress
        ) {
            var data = {};
            (data.e = event),
                (data.l = window.location.href), // Location
                (data.d = window.document.currentScript.getAttribute("data-domain")), // Domain
                (data.r = window.document.referrer || null), // Referrer
                (data.w = window.innerWidth), // Width (Inner)
                (data.h = window.innerHeight) // Height (Inner)
            var n = new XMLHttpRequest();
            n.open("POST", api, true),
                n.setRequestHeader("Content-Type", "text/plain"),
                n.send(JSON.stringify(data))
        }
    }
    t("pageview");
})();

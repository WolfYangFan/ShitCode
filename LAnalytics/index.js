!(function () {
    "use strict";
    var api = window.document.currentScript.getAttribute("data-api") ||
        new URL(window.document.currentScript.src).origin + "/_api/collect";
    function logger(m) {
        console.warn("Ignoring Event: " + m);
    }
    function track(event) {
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(window.location.hostname) || "file:" === window.location.protocol) return logger("localhost");
        if (
            !window._phantom ||
            !window.__nightmare ||
            !window.navigator.webdriver ||
            !window.Cypress
        ) {
            var data = {};
            (data.e = event),
            (data.d = window.document.currentScript.getAttribute("data-domain")), // Domain
            (data.iw = window.innerWidth), // Width (Inner)
            (data.ih = window.innerHeight), // Height (Inner)
            (data.l = window.location.href), // Location
            (data.rd = new URL(window.document.referrer).host || null) //Referrer domain
            var n = new XMLHttpRequest();
            n.open("POST", api, true),
                n.setRequestHeader("Content-Type", "text/plain"),
                n.send(JSON.stringify(data))
        } else {
            return logger("Automation");
        }
    }
    window._la = track;
    track("pageview");
})();
// Test Env. Usage: 
// <script defer data-api="https://hc-ping.com/3855e1be-d3da-4af3-8cdf-ce95e8178a38" data-domain="my.domain.com" src="https://xiaozhu2007.github.io/ShitCode/LAnalytics/index.js"></script>

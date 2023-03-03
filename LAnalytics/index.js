(function() {
    'use strict';
    var endpoint = window.document.currentScript.getAttribute('data-api') ||
        new URL(window.document.currentScript.src)
        .origin + '/_api/collect';
    var data_domain = window.document.currentScript.getAttribute('data-domain')

    function warn(reason) {
        console.warn('Ignoring Event: ' + reason);
    }

    function trigger(eventName, options) {
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(window.location.hostname) || 'file:' ===
            window.location.protocol) return warn('localhost or file');
        if (
            !window._phantom ||
            !window.__nightmare ||
            !window.navigator.webdriver ||
            !window.Cypress
        ) {
            var data = {};
            data.d = data_domain // Domain
            data.e = eventName // Event name
            data.l = window.location.href // Location
            data.rd = new URL(window.document.referrer)
                .host || null //Referrer domain
            data.ua = navigator.userAgent || null // User-Agent
            if (options && options.meta) {
                data.m = JSON.stringify(options.meta)
            }
            var xhr = new XMLHttpRequest();
            xhr.open('POST', endpoint, true)
            xhr.setRequestHeader('Content-Type', 'text/plain')
            xhr.send(JSON.stringify(data))
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    options && options.callback && options.callback()
                }
            }
        }
    }
    window._la = trigger

    let lastPage;

    function page() {
        lastPage = location.pathname
        trigger('pageview')
    }
    window.addEventListener('load', page)
})();
// Test Env. Usage: 
// <script defer data-api="https://hc-ping.com/3855e1be-d3da-4af3-8cdf-ce95e8178a38" data-domain="my.domain.com" src="https://xiaozhu2007.github.io/ShitCode/LAnalytics/index.js"></script>

// ==UserScript==
// @name         Divera - entfernt Navigation
// @namespace    https://github.com/TheKenny2303/kh-divera-scripts
// @version      0.1.0
// @description  Entfernt die obere Navigation.
// @author       TheKenny2303
// @match        https://www.divera247.com/monitor/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    removeTopBar();

    function removeTopBar(){
        setTimeout(function() {
            document.getElementById("navTop").style.display = "none";
            document.getElementById("main").style.top = "0px";

            var logoElement = document.getElementById("logo");
            logoElement.style.position = "fixed";
            logoElement.style.left = "50vw";
            logoElement.style.top = "5px";

            removeTopBar();
        }, 1000);
    }
})();
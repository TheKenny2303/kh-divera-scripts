// ==UserScript==
// @name         Divera Regenradar
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Fügt einem Element mit der Klasse "kh-divera-radar" das Bild des Regenradars vom DWD hinzu.
// @author       TheKenny2303
// @match        https://www.divera247.com/monitor/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function() {
        placeRainRadar();
    }, 1000);

    function placeRainRadar(){
        var e = findElementWithInnerText("kh-divera-radar");
        e.innerHTML = '<img width="100%" src="https://www.dwd.de/DWD/wetter/radar/rad_thu_akt.jpg" alt=" Niederschlagsradar für das Gebiet Sachsen">';
    }

    function findElementWithInnerText(searchText) {
        var elements = document.getElementsByTagName("div");

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].className == searchText) {
                return elements[i];
            }
        }
    }
})();
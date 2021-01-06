// ==UserScript==
// @name         Streamyard Keyboard Shortcuts
// @namespace    http://streamyard.com
// @downloadUrl  https://raw.githubusercontent.com/sethjuarez/syauto/main/streamyard_hotkeys.js
// @updateUrl    https://raw.githubusercontent.com/sethjuarez/syauto/main/streamyard_hotkeys.js
// @website      https://github.com/sethjuarez/syauto
// @version      0.17
// @description  Keyboard shortcuts for streamyard
// @author       seth@juarez.io
// @match        https://streamyard.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

/**
 * Alt      !
 * Ctrl     ^
 * Shift    +
 */

//<
const buttons = [
    {
        "name": "Mute/Unmuted",
        "element": "button[class*=\"ControlButton__WrapButton\"][aria-label$=\"microphone\"]",
        "keys": "^!b"
    },
    {
        "name": "Camera Mute/Unmute",
        "element": "button[class*=\"ControlButton__WrapButton\"][aria-label$=\"camera\"]",
        "keys": "^!v"
    },
    {
        "name": "Solo layout",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 0,
        "keys": "!1"
    },
    {
        "name": "Thin layout",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 1,
        "keys": "!2"
    },
    {
        "name": "Group layout",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 2,
        "keys": "!3"
    },
    {
        "name": "Leader layout",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 3,
        "keys": "!4"
    },
    {
        "name": "Small screen layout",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 4,
        "keys": "!5"
    },
    {
        "name": "Large screen layout",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 5,
        "keys": "!6"
    },
    {
        "name": "Full screen layout",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 6,
        "keys": "!7"
    },
    {
        "name": "Play Video",
        "path": [
            "#broadcast-aside-tab-brand"
        ],
        "element": "[aria-label=\"Countdown overlay\"]",
        "keys": "^!p"
    },
    {
        "name": "Show 1st banner",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 0,
        "keys": "^!q"
    },
    {
        "name": "Show 2nd banner",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 1,
        "keys": "^!w"
    },
    {
        "name": "Show 3rd banner",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 2,
        "keys": "^!e"
    },
    {
        "name": "Show 4th banner",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 3,
        "keys": "^!r"
    },
    {
        "name": "Show 5th banner",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 4,
        "keys": "^!t"
    }
];
//>

(function (events) {
    'use strict';

    const click = function(element, index) {
        if(element && element.length > 0) {
            console.log(element);
            const e = document.querySelectorAll(element);
            if(e !== null) {
                if(index < e.length) {
                    e[index].click();
                }
            }
            return e !== null;
        } else return false;
    }

    document.addEventListener('keydown', function(e) {
        for(let evt of events){
            const key = evt.keys.replace('^', '').replace('!', '').replace('+', '');
            if(e.key ==key && e.shiftKey == evt.keys.includes('+') && e.ctrlKey == evt.keys.includes('^') && e.altKey == evt.keys.includes('!')) {

                // setup clicks if there's a path
                if ('path' in evt) {
                    const path = Array.isArray(evt.path) ? evt.path : [evt.path];
                    for(let i = 0; i < path.length; i++) {
                        click(path[i], 0);
                    }
                }

                const idx = 'index' in evt ? evt.index : 0;
                click(evt.element, idx);
            }
        }
    });
})(buttons);
// ==UserScript==
// @name         Streamyard Keyboard Shortcuts
// @namespace    http://streamyard.com
// @downloadUrl  https://raw.githubusercontent.com/sethjuarez/syauto/main/streamyard_hotkeys.js
// @updateUrl    https://raw.githubusercontent.com/sethjuarez/syauto/main/streamyard_hotkeys.js
// @website      https://github.com/sethjuarez/syauto
// @version      0.19
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
        "name": "Solo",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 0,
        "keys": "^!1"
    },
    {
        "name": "Thin",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 1,
        "keys": "^!2"
    },
    {
        "name": "Group",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 2,
        "keys": "^!3"
    },
    {
        "name": "Leader",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 3,
        "keys": "^!4"
    },
    {
        "name": "Small",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 4,
        "keys": "^!5"
    },
    {
        "name": "Large",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 5,
        "keys": "^!6"
    },
    {
        "name": "Full",
        "element": "button[class*=\" LayoutButton__WrapButton\"]",
        "index": 6,
        "keys": "^!7"
    },
    {
        "name": "Names",
        "path": "#broadcast-aside-tab-brand",
        "element": "input[class^=\"Switch__Input\"]",
        "keys": "^!8"
    },
    {
        "name": "Solo 1",
        "element": "button[aria-label$=\"layout\"][class*=\"CardLayoutButton__WrapButton\"]",
        "index": 0,
        "keys": "^!q"
    },
    {
        "name": "Solo 2",
        "element": "button[aria-label$=\"layout\"][class*=\"CardLayoutButton__WrapButton\"]",
        "index": 1,
        "keys": "^!w"
    },
    {
        "name": "Solo 3",
        "element": "button[aria-label$=\"layout\"][class*=\"CardLayoutButton__WrapButton\"]",
        "index": 2,
        "keys": "^!e"
    },
    {
        "name": "Solo 4",
        "element": "button[aria-label$=\"layout\"][class*=\"CardLayoutButton__WrapButton\"]",
        "index": 3,
        "keys": "^!r"
    },
    {
        "name": "Solo 5",
        "element": "button[aria-label$=\"layout\"][class*=\"CardLayoutButton__WrapButton\"]",
        "index": 4,
        "keys": "^!t"
    },
    {
        "name": "Chat",
        "element": "#broadcast-aside-tab-chat",
        "keys": "^!y"
    },
    {
        "name": "Camera",
        "element": "button[class*=\"ControlButton__WrapButton\"][aria-label$=\"camera\"]",
        "keys": "^!0"
    },
    {
        "name": "Audio",
        "element": "button[class*=\"ControlButton__WrapButton\"][aria-label$=\"microphone\"]",
        "keys": "^!9"
    },
    {
        "name": "Banners",
        "element": "#broadcast-aside-tab-banners",
        "keys": "^!u"
    },
    {
        "name": "Banner 1",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 0,
        "keys": "^!i"
    },
    {
        "name": "Banner 2",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 1,
        "keys": "^!o"
    },
    {
        "name": "Banner 3",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 2,
        "keys": "^!p"
    },
    {
        "name": "Banner 4",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 3,
        "keys": "^!a"
    },
    {
        "name": "Banner 5",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 4,
        "keys": "^!s"
    },
    {
        "name": "Banner 6",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 5,
        "keys": "^!d"
    },
    {
        "name": "Banner 7",
        "path": "#broadcast-aside-tab-banners",
        "element": "button[class*=\"Banner__CoverButton\"]",
        "index": 6,
        "keys": "^!f"
    },
    {
        "name": "Brand",
        "element": "#broadcast-aside-tab-brand",
        "keys": "^!g"
    },
    {
        "name": "Overlay 1",
        "path": "#broadcast-aside-tab-brand",
        "element": "button[class*=\"BrandAsset__WrapButton\"][aria-label$=\"overlay\"]",
        "index": 0,
        "keys": "^!m"
    },
    {
        "name": "Overlay 2",
        "path": "#broadcast-aside-tab-brand",
        "element": "button[class*=\"BrandAsset__WrapButton\"][aria-label$=\"overlay\"]",
        "index": 1,
        "keys": "^!j"
    },
    {
        "name": "Overlay 3",
        "path": "#broadcast-aside-tab-brand",
        "element": "button[class*=\"BrandAsset__WrapButton\"][aria-label$=\"overlay\"]",
        "index": 2,
        "keys": "^!k"
    },
    {
        "name": "Overlay 4",
        "path": "#broadcast-aside-tab-brand",
        "element": "button[class*=\"BrandAsset__WrapButton\"][aria-label$=\"overlay\"]",
        "index": 3,
        "keys": "^!l"
    },
    {
        "name": "Overlay 5",
        "path": "#broadcast-aside-tab-brand",
        "element": "button[class*=\"BrandAsset__WrapButton\"][aria-label$=\"overlay\"]",
        "index": 4,
        "keys": "^!z"
    },
    {
        "name": "Overlay 6",
        "path": "#broadcast-aside-tab-brand",
        "element": "button[class*=\"BrandAsset__WrapButton\"][aria-label$=\"overlay\"]",
        "index": 5,
        "keys": "^!x"
    },
    {
        "name": "Overlay 7",
        "path": "#broadcast-aside-tab-brand",
        "element": "button[class*=\"BrandAsset__WrapButton\"][aria-label$=\"overlay\"]",
        "index": 6,
        "keys": "^!c"
    }
];
//>

(function (events) {
    'use strict';

    const click = function(element, index) {
        if(element && element.length > 0) {
            const e = document.querySelectorAll(element);
            if(e !== null&& index < e.length) {
                e[index].click();
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
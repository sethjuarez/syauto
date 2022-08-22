// ==UserScript==
// @name         restream hotkeys
// @namespace    https://studio.restream.io/
// @version      0.1
// @description  restream automation
// @author       Seth Juarez
// @match        https://studio.restream.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=restream.io
// @grant        none
// ==/UserScript==

//<
const buttons = [
  {
    "name": "Graphics",
    "element": "#GRAPHICSButton",
    "keys": "^!a",
  },
  {
    "name": "Current",
    "path": "#GRAPHICSButton",
    "element": 'button[class*="ImageOption_button"]',
    "index": 0,
    "keys": "^!1",
  },
  {
    "name": "Next",
    "path": "#GRAPHICSButton",
    "element": 'button[class*="ImageOption_button"]',
    "index": 1,
    "keys": "^!2",
  },
  {
    "name": "Bumper",
    "path": "#GRAPHICSButton",
    "element": 'button[class*="ImageOption_button"]',
    "index": 2,
    "keys": "^!3",
  },
  {
    "name": "Library",
    "path": "#GRAPHICSButton",
    "element": 'button[class*="ImageOption_button"]',
    "index": 3,
    "keys": "^!4",
  },
  {
    "name": "Projects",
    "path": "#GRAPHICSButton",
    "element": 'button[class*="ImageOption_button"]',
    "index": 4,
    "keys": "^!5",
  },
  {
    "name": "Work",
    "path": "#GRAPHICSButton",
    "element": 'button[class*="ImageOption_button"]',
    "index": 5,
    "keys": "^!6",
  },
  {
    "name": "Captions",
    "element": "#CAPTIONSButton",
    "keys": "^!s",
  },
  {
    "name": "Title",
    "path": "#CAPTIONSButton",
    "element": 'button[class*="CaptionOption_button"]',
    "index": 0,
    "keys": "^!q",
  },
  {
    "name": "CTA 1",
    "path": "#CAPTIONSButton",
    "element": 'button[class*="CaptionOption_button"]',
    "index": 1,
    "keys": "^!w",
  },
  {
    "name": "CTA 2",
    "path": "#CAPTIONSButton",
    "element": 'button[class*="CaptionOption_button"]',
    "index": 2,
    "keys": "^!e",
  },
  {
    "name": "CTA 3",
    "path": "#CAPTIONSButton",
    "element": 'button[class*="CaptionOption_button"]',
    "index": 3,
    "keys": "^!t",
  },
  {
    "name": "Starting",
    "path": "#CAPTIONSButton",
    "element": 'button[class*="CaptionOption_button"]',
    "index": -1,
    "keys": "^!y",
  },
];
//>

(function (events) {
    'use strict';

    const click = function(element, index) {
        if(element && element.length > 0) {
            const e = document.querySelectorAll(element);
            if(e !== null && index < e.length) {
                e[index == -1 ? e.length - 1 : index].click();
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
                console.log(evt);
                click(evt.element, idx);
            }
        }
    });
})(buttons);
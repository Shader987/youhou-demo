// ==UserScript==
// @name         hello world
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  new ss
// @author       You
// @match        *://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.1
// @license           Apache-2.0
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log("hello world");
    let a = {
        'a': 1,
        "b": 2
    }
    let b = [{
        'a': 1,
        "b": 2
    }, { "c": 212 }]
    b.foreach((x) => {
        console.log(x);
    })
    confirm("我帅不帅")
    // Your code here...
})();
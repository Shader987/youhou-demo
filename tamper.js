// ==UserScript==
// @name         hello world
// @namespace    http://tampermonkey.net/
// @version      0.1.1
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
    // 创造一个按钮
    let btn = document.createElement('button')
    // 获取body
    // let body = document.getElementsByTagName('body')[0]
    let body = document.querySelector('.width-constraint')
    btn.style.position = 'fixed'; // 设置按钮的位置为固定，可以根据需要调整样式
    btn.style.top = '10px'; // 距离顶部的距离
    btn.style.left = '10px'; // 距离左侧的距离
    btnstyle.zIndex = 9999; // 确保按钮在最上层

    btn.textContent = "点一下我"
    btn.onclick = () => {
        alert('hhhh')
    }
    // body.insertBefore(btn, body.children[0])
    document.body.appendChild(button);
    confirm("我帅不帅")
    // Your code here...
})();
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

    // 创建一个新的按钮元素
    var button = document.createElement('button');
    button.innerHTML = '点击我！'; // 设置按钮上的文本
    button.style.position = 'fixed'; // 设置按钮的位置为固定，可以根据需要调整样式
    button.style.top = '10px'; // 距离顶部的距离
    button.style.left = '10px'; // 距离左侧的距离
    button.style.zIndex = 9999; // 确保按钮在最上层

    // 为按钮添加点击事件监听器
    button.addEventListener('click', function () {
        console.log('按钮被点击了！');
        // 在这里添加你想在点击按钮时执行的其他操作
    });

    // 将按钮添加到页面的body中
    document.body.appendChild(button);
    // Your code here...
})();
// ==UserScript==
// @name         hello world
// @namespace    http://tampermonkey.net/
// @version      0.1.5
// @description  new ss
// @author       You
// @match         *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.1
// @license           Apache-2.0
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log("创建按钮前");
    document.addEventListener('DOMContentLoaded', function () {
        console.log('1111');
    });
    let my_body = document.querySelector('body')
    // 创建一个新的按钮元素
    var button = document.createElement('button');
    button.innerHTML = '点击我！';
    button.style.position = 'fixed';
    button.style.display = 'block'
    button.style.top = '10px';
    button.style.left = '10px';
    button.style.zIndex = 9999;
    button.style.backgroundColor = '#007bff'; // 添加背景色以便观察
    button.style.color = '#ffffff'; // 文字颜色
    button.style.padding = '10px 20px'; // 内边距
    button.style.border = 'none'; // 移除边框
    button.style.cursor = 'pointer'; // 鼠标悬停时变为手型

    // 为按钮添加点击事件监听器
    button.addEventListener('click', function () {
        console.log('按钮被点击了！');
        // 在这里添加你想在点击按钮时执行的其他操作

        // 将按钮添加到页面的body中
        document.body.appendChild(button);
        console.log(button);
        console.log("创建按钮后");
    });
    // document.body.appendChild(button)
    my_body.insertBefore(button, my_body.children[0])

})();
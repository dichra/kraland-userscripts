// ==UserScript==
// @name         Kraland Ordre Sans Image
// @namespace    https://www.dichra.net/
// @version      0.1
// @description  Masque les images dans la description des ordres
// @author       dichra
// @match        http://www.kraland.org/order.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kraland.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const imgs = document.querySelectorAll(".op img");
    imgs.forEach(img => { img.style.display = "none"});

})();
// ==UserScript==
// @name         Kraland Téléphone par ID
// @namespace    https://github.com/dichra
// @version      0.2
// @description  Appeler n'importe qui avec son ID
// @author       dichra
// @match        http://www.kraland.org/order.php?p1=2211*
// @match        http://www.kraland.org/order.php?p1=1100*
// @downloadURL  https://github.com/dichra/kraland-userscripts/raw/main/src/phone-anyone.user.js
// @homepageURL  https://github.com/dichra/kraland-userscripts
// @supportURL   https://github.com/dichra/kraland-userscripts/issues
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kraland.org
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    const targetForm = document.querySelector('form[id^="order221149"], form[id^="order110003"]');
    
    if (!targetForm) {
        console.log('Phone Anyone: No matching form found');
        return;
    }

    const correspondantSelect = targetForm.querySelector("select[name='p3']");
    
    if (!correspondantSelect) {
        return;
    }

    const container = document.createElement('span');
    container.style.marginLeft = '5px';
    
    
    const idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.style.display = 'none';
    idInput.placeholder = 'ID du destinataire';
    idInput.style.width = '100px';
    idInput.style.marginRight = '5px';
    idInput.size = 32;
    
    const toggleLink = document.createElement('a');
    toggleLink.href = '#';
    toggleLink.textContent = 'Par ID';
    
    let isIdMode = false;
    toggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        isIdMode = !isIdMode;
        
        if (isIdMode) {
            correspondantSelect.style.display = 'none';
            idInput.style.display = 'inline';
            toggleLink.textContent = 'Par Liste';
        } else {
            correspondantSelect.style.display = '';
            idInput.style.display = 'none';
            toggleLink.textContent = 'Par ID';
        }
    });

    targetForm.addEventListener('submit', function(e) {
        if (isIdMode && idInput.value) {
            correspondantSelect.value = idInput.value;
        }
    });
    
    container.appendChild(idInput);
    container.appendChild(toggleLink);
    
    const parentNode = correspondantSelect.parentNode;
    parentNode.appendChild(container);
})();
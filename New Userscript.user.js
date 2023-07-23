// ==UserScript==
// @name         Kai
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://place.army/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=place.army
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to show a notification popup
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '10px';
        notification.style.left = '10px';
        notification.style.padding = '10px';
        notification.style.backgroundColor = 'white'; // Changed background color to white
        notification.style.color = 'black'; // Changed text color to black
        notification.style.border = '1px solid #ccc';
        notification.style.zIndex = '9999';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove the notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Your code here...
    // Example: Show a welcome message
    showNotification('Welcome to place.army!');
})();

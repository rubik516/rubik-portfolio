"use strict";

let typing = document.querySelector(".typing");
let typing_text = typing.textContent;

let i = 0
let typingTimer = setInterval(function() {
    if (i >= typing_text.length) {
        typing.innerHTML = typing_text;
        clearInterval(typingTimer);
    } else {
        typing.innerHTML = typing_text.substring(0, i) + "|";
    }
    i++;
}, 125);
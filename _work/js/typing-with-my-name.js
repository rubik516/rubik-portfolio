"use strict";

let typing = document.querySelector(".typing");
let typing_format_text = typing.innerHTML; // innerHTML contains inline HTML tag (in this case, <span>, for styling purpose)
let typing_text = typing.textContent;

let i = 0
let typingTimer = setInterval(function() {
    if (i > typing_text.length) {
        typing.innerHTML = typing_format_text;
        clearInterval(typingTimer);
    } else if (7 <= i && i <= typing_text.length-1) {
        typing.innerHTML = typing_text.substring(0, 7) + "<span class='my-name'>" + typing_text.substring(7, i) + "</span>|";
    } else if (i > typing_text.length-1) {
        typing.innerHTML = typing_text.substring(0, 7) + "<span class='my-name'>" + typing_text.substring(7, 13) + "</span>" + typing_text.substring(13, i) + "|";
    } else {
        typing.innerHTML = typing_text.substring(0, i) + "|";
    }
    i++;
}, 250);
"use strict";

let typing = document.querySelector(".typing");
let typing_text_before = "Hello World!Wide Web!";
let typing_text_after = "Hello World Wide Web!";

let i = 0
let typingTimer = setInterval(function() {
    typing.innerHTML = typing_text_before.substring(0, i) + "|";
    if (i == "Hello World!".length) {
        clearInterval(typingTimer);
        setTimeout(function() {
            let typingTimer2 = setInterval(() => {
                console.log("hey");
                if (i > typing_text_after.length+1) {
                    console.log("YOOOOO!");
                    console.log(typing_text_after);
                    typing.innerHTML = typing_text_after;
                    clearInterval(typingTimer2);
                } else if (i == "Hello World!".length) {
                typing.innerHTML = typing_text_after.substring(0, i-1) + "|";
               } else {
                typing.innerHTML = typing_text_after.substring(0, i-2) + "|";
               }
                console.log(i);
                console.log(typing.innerHTML);
                i++;
           }, 250);
        }, 400);
    }
    i++;
}, 250);
// ==UserScript==
// @name         Downvote weeb emotes
// @namespace    http://tampermonkey.net/
// @version      4
// @description  GACHI THE WEEBS AWAY
// @author       NevMan
// @match        https://www.reddit.com/*
// @updateURL    https://github.com/nev-mann/Reddit-forsen-script/raw/refs/heads/main/script.user.js
// @downloadURL  https://github.com/nev-mann/Reddit-forsen-script/raw/refs/heads/main/script.user.js
// ==/UserScript==
const emoteToDownvote = "https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_33td5/neRMhyZ4QN.png";
const guyToDownvote = "Vocaloid-Guy";

function main() {
    if (!window.location.toString().startsWith("https://www.reddit.com/r/forsen/comments/")) return;
    let comments = document.getElementsByTagName("shreddit-comment");
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].children[2].innerHTML.toString().includes(emoteToDownvote) || comments[i].__author == guyToDownvote) {
            let button = comments[i].getElementsByTagName("shreddit-comment-action-row")[0].shadowRoot.firstElementChild.getElementsByTagName("button")[2];
            if (button.ariaPressed == 'false') {
                button.click();
            }
        }
    }
}

(function () {
    'use strict';
    setInterval(main, 2000);
})();
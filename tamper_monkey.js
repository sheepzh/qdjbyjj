// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // The min threshold to vote down
    var THRESHOLD = 3;

    // Process the container of vote buttons
    function processZhihuContainer(container) {
        var upVoteText = container.getElementsByClassName('VoteButton--up')?.[0]?.innerText?.replaceAll('\n', '')
        if(!upVoteText){
            return;
        }
        var upVoteCountTxt = /^.*?(\d+)$/.exec(upVoteText)?.[1]
        if(!upVoteCountTxt){
            return;
        }
        var upVoteCountVal = parseInt(upVoteCountTxt)
        if(!upVoteCountVal || upVoteCountVal < THRESHOLD){
            return;
        }
        // need vote down
        var voteDownButton = container.getElementsByClassName('VoteButton--down')?.[0]
        // Click
        console.log('Try to click', voteDownButton)
        voteDownButton && voteDownButton?.click?.()
    }

    function processZhihu(){
        console.log(123)
        var allContainers = document.getElementsByClassName('ContentItem-actions');
        Array.from(allContainers).forEach(processZhihuContainer)
    }

    processZhihu();
})();

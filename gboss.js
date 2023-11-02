// ==UserScript==
// @name         gboss
// @namespace    http://tampermonkey.net/
// @version      1
// @description  abcde
// @author       dierandomdie
// @match        https://lyrania.co.uk/game.php
// @match        https://dev.lyrania.co.uk/game.php
// @icon         https://lyrania.co.uk/favicon.ico
// @grant        none
// ==/UserScript==

let url = 'https://script.google.com/macros/s/AKfycbzGCYWD48XW1uYdWG5FcF5sEGy64AMkb1mgCDAqutseCp12Sk245YkyKJnTyMmY8NhCuQ/exec'
let fetchform = new FormData()
let hp = 0
let minutes = 0
let seconds = 0
fetchform.append('Remaining',hp)
fetchform.set('Minutes',minutes)
fetchform.set('Seconds',seconds)

//The Dragon has 9,294,186,003,896,530,370,560 health points remaining and will continue to be vulnerable for another 1 minutes and 19 seconds.

function newgboss(x) {
    $.post("gboss.php", {
        x: x
    }, function(result) {
        var xyz = result.split("[BREAK]");
        try {
            hp = xyz[0].split('The Dragon has ')[1].split(' ')[0]
            minutes = xyz[0].split('another ')[1].split(' ')[0]
            seconds = xyz[0].split('minutes and ')[1].split(' ')[0]
            console.log(minutes)
            console.log(seconds)
            console.log(hp)
            fetchform.set('Remaining',hp)
            fetchform.set('Minutes',minutes)
            fetchform.set('Seconds',seconds)
            fetch(url, {
                method: 'POST',
                body: fetchform
            })
        } catch (e) {
            console.log("boss prob ded")
}
        for (document.getElementById("content").innerHTML = xyz[0],
        i = 1; i < xyz.length; i++)
            eval(xyz[i])
    }).always(function() {
        1 == x && (0 == stopboss ? (timer2(4500),
        setTimeout(function() {
            gboss(1)
        }, 4600)) : 1 == stopboss && (stopboss = 0,
        document.getElementById("stop") && (timer2(4500),
        guildpage(11))))
    })
}

$( document ).ready(function() {
    gboss = newgboss
})

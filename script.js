
var gunPng = document.querySelector('.gun-png');
var ammodiv = document.querySelector('.ammo');
var main = document.querySelector('.main');
var h1 = document.querySelector('.gameOver')
var fenceup = document.querySelector('.fenceup')
var fencedown = document.querySelector('.fencedown')
var rocket = document.querySelector('.rocket');
var rocket_png = document.querySelector('.rocket-png')
var point = document.querySelector('.point')
var blast_img = document.createElement('img');
main.appendChild(blast_img);
var move = 15;
var ammo_move = 22;
var speed = 4;
var num = 1;
window.addEventListener('load', () => {
    gunPng.style.position = "absolute";
    gunPng.style.left = 0;
    gunPng.style.top = "30px";
    ammodiv.style.left = 0;
    ammodiv.style.top = "30px";

})
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 38) {
        gunPng_top = parseInt(window.getComputedStyle(gunPng, null).getPropertyValue('top'));
        GuY = Math.abs(gunPng_top)
        ammodiv.style.top = 10;
        gunPng.style.top = parseInt(gunPng.style.top) - move + "px";
        ammodiv.style.top = parseInt(ammodiv.style.top) - move + "px";
        if (GuY <= 50) {
            h1.innerHTML = "Game Over";
            gunPng.style.display = "none";
            ammodiv.style.display = "none";
            fenceup.style.display = "none";
            fencedown.style.display = "none";
            rocket.style.display = "none";
            point.innerHTML = ""
            blast_img.style.display = "none";
            var over_audio = new Audio('img/mixkit-musical-game-over-959.wav')
            over_audio.play();


        }
    }
    else if (e.keyCode == 40) {
        gunPng_top = parseInt(window.getComputedStyle(gunPng, null).getPropertyValue('top'));
        GuY = Math.abs(gunPng_top)
        console.log(GuY)
        ammodiv.style.top = 10;
        gunPng.style.top = parseInt(gunPng.style.top) + ammo_move + "px";
        ammodiv.style.top = parseInt(ammodiv.style.top) + ammo_move + "px";
        if (GuY >= 445) {
            h1.innerHTML = "Game Over";
            gunPng.style.display = "none";
            ammodiv.style.display = "none";
            fenceup.style.display = "none";
            fencedown.style.display = "none";
            rocket.style.display = "none"
            point.innerHTML = "";
            blast_img.style.display = "none";
            var over_audio = new Audio('img/mixkit-musical-game-over-959.wav')
            over_audio.play();

        }
    }
})
setInterval(() => {
    var y = Math.floor((Math.random() * 80) - 15);
    if (y <= 10) {
        y = y + 10;
    }
    else {
        rocket.style.top = y + "vh";
    }
    ammodiv.style.animationName = "ammo";
    rocket.style.animationName = "rocket"
}, 4000);
setInterval(() => {
    rocket_left = parseInt(window.getComputedStyle(rocket, null).getPropertyValue('left'));
    rocket_top = parseInt(window.getComputedStyle(rocket, null).getPropertyValue('top'));
    gunPng_left = parseInt(window.getComputedStyle(gunPng, null).getPropertyValue('left'));
    gunPng_top = parseInt(window.getComputedStyle(gunPng, null).getPropertyValue('top'));
    ammo_left = parseInt(window.getComputedStyle(ammodiv, null).getPropertyValue('left'));
    ammo_top = parseInt(window.getComputedStyle(ammodiv, null).getPropertyValue('top'));
    RoX = Math.abs(rocket_left)
    AmX = Math.abs(ammo_left)
    RoY = Math.abs(rocket_top)
    AmY = Math.abs(ammo_top)
    GuY = Math.abs(gunPng_top)
    GuX = Math.abs(gunPng_left)
    if (((AmY + 25) >= RoY) && (AmY <= (RoY + 150))
        && ((AmX + 25) >= RoX) && (AmX <= (RoX + 150))) {
        point.innerHTML = "Point:" + num++;
        rocket.style.animationName = "";
        var audio = new Audio('img/mixkit-sci-fi-plasma-gun-power-up-1679.wav');
        audio.play();
        blast_img.className = "blast-png";
        blast_img.src = "img/blast.png";
        blast_img.style.top = RoY + "px";
        blast_img.style.left = RoX + "px";

    }
    else if (RoX <= 5) {
        h1.innerHTML = "Game Over";
        gunPng.style.display = "none";
        ammodiv.style.display = "none";
        fenceup.style.display = "none";
        fencedown.style.display = "none";
        rocket.style.display = "none"
        point.innerHTML = "";
        blast_img.style.display = "none";
        var over_audio = new Audio('img/mixkit-musical-game-over-959.wav')
        over_audio.play();
    }
}, 1);
setInterval(() => {

    if (speed == 1) {
        rocket.style.animationDuration = speed-- + "s";
    }
}, 10000);


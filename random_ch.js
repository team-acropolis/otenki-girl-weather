$(document).ready(() => {
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    $('.chImg').addClass('ch' + randomNumber);
    console.log(randomNumber)
});
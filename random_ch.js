$(document).ready(() => {
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    $('.chImg').addClass('bg' + randomNumber);
    console.log(randomNumber)
});
$(document).ready(() => {
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    $('.chImg').addClass('ch' + randomNumber);

    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 2) + 1;
        $('.chImg').addClass('ch' + randomNumber);
        console.log('ch' + randomNumber)
        setTimeout(() => {
            $('chImg').removeClass('ch' + randomNumber);
        }, 30000);
    }, 30000);
});
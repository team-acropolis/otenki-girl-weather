$(document).ready(() => {
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    $('body').addClass('bg' + randomNumber)

    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 12) + 1;
        $('body').addClass('bg' + randomNumber)
        console.log(randomNumber)
        setTimeout(() => {
            $('body').removeClass('bg' + randomNumber);
        }, 30000);
    }, 30000);
});


// $("a#test").click(function () {
//     $("div#test1").fadeIn(3000, function () {
//         $("div#test2").fadeIn(3000);
//     });
//     return false;
// });
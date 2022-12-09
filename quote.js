let quotes = [
    '“지금부터 하늘이 맑아질거야”',
    '“신이 있다면 우리에게 어떠한 것도 주지마시고, 가져가지도 말아주세요.”',
    '“왜 방해하는 거야! 다들 아무것도 모르면서 모르는 척하면서! 나는 그저 한 번만 더 그 사람을 만나고 싶은거야!”',
    '“괜찮아 이 세계는 원래 미쳐 있으니까”'
]

const quote = document.getElementById("quote")

$(document).ready(() => {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    quote.innerText(quotes[randomNumber])
    console.log(quotes[randomNumber])
});

const apiURI = "https://api.openweathermap.org/data/2.5/group?id=1835847,1841610,1843125,1845106,1845105,1845789,1845788,1841597,1902028,1846265&appid=8b527b12bfe6407eb95c9af9f5436455&lang=en&units=metric";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function (resp) {
        console.log(resp);
        console.log("현재온도 : " + resp.list[0].main.temp);
        console.log("현재습도 : " + resp.list[0].main.humidity);
        console.log("날씨 : " + resp.list[0].weather[0].main);
        console.log("상세날씨설명 4: " + resp.list[0].weather[0].description);
        console.log("날씨 이미지 : " + resp.list[0].weather[0].icon);
        console.log("바람   : " + resp.list[0].wind.speed);
        console.log("나라   : " + resp.list[0].sys.country);
        console.log("도시이름  : " + resp.list[0].name);
        console.log("구름  : " + (resp.list[0].clouds.all) + "%");
    }
})

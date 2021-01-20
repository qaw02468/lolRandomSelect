let heroInfoJson;
heroInfoInit()

function heroInfoInit() {
    getHeroInfo();
}

function getHeroInfo() {
    var xmlHttpRequest = new XMLHttpRequest()
    xmlHttpRequest.open("get", "http://ddragon.leagueoflegends.com/cdn/11.1.1/data/zh_TW/champion.json");
    xmlHttpRequest.send();

    xmlHttpRequest.onload = function () {
        heroInfoJson = JSON.parse(xmlHttpRequest.responseText);
        console.log(heroInfoJson);
    }

}


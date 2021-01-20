document.write("<script type=“text/javascript” src='heroInfo.js'></script>");
let originLinesInfo = document.getElementById("result").innerHTML;

function playerInfoInit() {
    players = {};
    lines = ["top", "jg", "mid", "ad", "sup"];
    document.getElementById("result").innerHTML = originLinesInfo;
}

function randomSelect() {
    playerInfoInit()
    getAllPlayers();
    randomSelectLine();
    randomSelectHero();
    showResult();
}

function getAllPlayers() {
    let index = 0;
    for (let i = 1; i < 6; i++) {
        let player = document.getElementById("player" + i);
        if (player.value !== "") {
            index++;
            players["player" + i] = {"name": player.value};
        }
    }
    players.length = index;

    console.log("獲取玩家", players);
}

function randomSelectLine() {
    lines.sort(function () {
        return (0.5 - Math.random());
    });
    for (let i = 1; i < players.length + 1; i++) {
        players["player" + i].line = lines.pop();
    }
}

function randomSelectHero() {
    for (let i = 1; i < players.length + 1; i++) {
        var index = 0;
        let randomMath = Math.floor(Math.random() * Object.getOwnPropertyNames(heroInfoJson.data).length);
        for (let hero in heroInfoJson.data) {
            if (index === randomMath) {
                players["player" + i].hero = heroInfoJson.data[hero].name;
                players["player" + i].image = heroInfoJson.data[hero].id + "_0";
            }
            index++;
        }
    }
}

function showResult() {
    var resultDiv = document.getElementById("result");
    var result = resultDiv.getElementsByTagName("result");


    for (let i = 1; i < players.length + 1; i++) {
        for (let index = 0; index < result.length; index++) {
            if (result.item(index).id === players["player" + i].line) {
                result.item(index).innerHTML += "是" + players["player" + i].name + "，英雄是" +
                    players["player" + i].hero;
            }
        }
    }

    console.log("獲取玩家", result.length);
}


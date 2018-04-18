var messages_enabled = true

var randomMessages = [
    { type: "info", bool: false, message: "Looking for Lua at the Moon" },
    { type: "error", bool: false, message: "[ERROR] player:27: FUN value to low" },
    { type: "info", bool: false, message: "Waking up Server" },
    { type: "info", bool: false, message: "GMAN was here" },
    { type: "info", bool: false, message: "Mapping map" },
    { type: "info", bool: false, message: "Taking a short Nap" },
    { type: "info", bool: false, message: "Crashing Cars" },
    { type: "info", bool: false, message: "Proppush trash out of the way" },
    { type: "error", bool: false, message: "DO YOU KNO DE WAE?" },
    { type: "message", bool: false, message: "Not sure if this is a meme, or just a Loadingscreen." },
    { type: "info", bool: false, message: "Respawning monsters near: Spawn" },
    { type: "error", bool: false, message: "Server Crash... Wait no, your client is just slow" },
    { type: "message", bool: false, message: "ADVERT: Have you drunk a Nuka Cola recently? You should! It tastes Nukatastic! Also you might want to keep the bottle caps." },
    { type: "info", bool: false, message: "GTA is way be- WASTED!" },
    { type: "error", bool: false, message: "[ERROR] hidden.js:27: This takes to long" },
    { type: "error", bool: false, message: "Can't keep up. Did the system time change or is the client just to slow?" }
]
var appearingBoxes = [
    { box: "download" },
    { box: "youtube" },
    { box: "gameinfo" }
]

function randomMessage() {

    var randMsg = Math.floor(Math.random() * randomMessages.length);
    var randBox = Math.floor(Math.random() * appearingBoxes.length);

    if (randomMessages[randMsg].bool == false) {
        addEntry(appearingBoxes[randBox].box, randomMessages[randMsg].message, randomMessages[randMsg].type);
        randomMessages[randMsg].bool = true;
        return true
    } else {
        return false
    }

    
}

if (messages_enabled == true) {
    window.setInterval(function () {
        randomMessage();
    }, 10000);
}
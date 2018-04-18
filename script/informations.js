function addEntry(obj, text, type) {
    $("#" + obj + " .console ul").append('<li class="'+type+'">'+text+'</li>');
    $("#" + obj + " .console").animate({ scrollTop: $(document).height() }, "slow");
    return true;
}

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    addEntry("download", "Connecting to: " + servername, "info");
    addEntry("gameinfo", "Server Name: " + servername, "info");
    addEntry("gameinfo", "Loading URL: " + serverurl, "info");
    addEntry("gameinfo", "Map: " + mapname, "info");
    addEntry("gameinfo", "Slots: " + maxplayers, "info");
    addEntry("gameinfo", "Gamemode: " + gamemode, "info");
    addEntry("gameinfo", "Your Steam ID: " + steamid, "info");

}

function SetFilesTotal(total) {
    addEntry("download", "Files to Download: " + total, "error");
}

function DownloadingFile(fileName) {
    addEntry("download", "Downloading " + fileName + "...", "download");
}

function SetStatusChanged(status) {
    addEntry("download", status, "info");
}

function replaceCalc() {
    $("#download .console").height($("#download").height() * 0.98 - 60);
    $("#youtube .console").height($("#youtube").height() * 0.98 - 60);
    $("#gameinfo .console").height($("#gameinfo").height() * 0.98 - 60);
}

replaceCalc();
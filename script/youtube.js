var videos = [
    { id: "N2qEwsHrQjA", title:"Can't Stop Won't Stop - Mighty & High" },
    { id: "dr4zHExNKcg", title:"TeknoAXE - I'm Everywhere" },
    { id: "_sCudWr-a60", title:"Johan Glossner - Turn It Up" },
    { id: "3X5hfX9K1xU", title:"Dr. Dre - The Next Episode (San Holo Remix)" },
    { id: "n7toAGSpF6k", title:"Jamie Berry ft. Octavia Rose - Delight" },
    { id: "7SzlKLeBBzY", title:"Zaza - Be Together" }
]

var prevId = "";

var vidTitle = document.getElementById("video_title");

function randomVideo() {

    var rand = 0;
    var newId = "";

    do {
        rand = Math.floor(Math.random() * videos.length);
        newId = videos[rand].id
    }while (newId==prevId);

    addEntry("youtube", "Now playing: " + videos[rand].title, "error");
    addEntry("youtube", "Link: https://www.youtube.com/watch?v=" + videos[rand].id, "error");

    prevId = newId;

    return newId;
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: randomVideo(),
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(3);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.loadVideoById(randomVideo(), 0, "small");
        player.playVideo();
    }
}

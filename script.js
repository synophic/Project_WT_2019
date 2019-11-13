let requestURL = 'info/info.json';
let request = new XMLHttpRequest();
var myJSON;
function load(pagee) {
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            myJSON = JSON.parse(request.responseText);
            changePage(pagee);
        }
    };
    request.open("GET", requestURL, true);
    request.send();
}
function changePage(page) {
    var elements = document.getElementsByTagName('table');
    while (elements[0]) elements[0].parentNode.removeChild(elements[0]);

    var table = document.createElement("table");
    var row = document.createElement("tr");
    var column = document.createElement("td");
    table.classList.add("table");
    table.classList.add("text-center");
    //document.write(myJSON.page1.topic + '<br><br>');
    for (let i = 0; i < myJSON[page].info.length; i++) {
        //document.write(myJSON.page1.info[ i].title + '<br>');
        var row = document.createElement("tr");
        if (i == 0) {
            var column = document.createElement("th");
            column.innerHTML += '<div class="video-warpper">' +
                '<div class="video-foreground embed-responsive-16by9">' +
                '<iframe src="https://www.youtube.com/embed/0blgmlUY1Qc?controls=0&autoplay=1&mute=1&autohide=1&rel=0&loop=1&playlist=0blgmlUY1Qc" frameborder="0" allowfullscreen></iframe>' +
                '</div>' +
                '</div>';
            column.innerHTML += '<div class="vid-info">' + myJSON[page].info[i].title + '</div>';
        }
        else {
            var column = document.createElement("td");
            column.innerText = myJSON[page].info[i].title;
        }
        row.appendChild(column);
        table.appendChild(row);
        if (myJSON[page].info[i].type == "multiple") {
            var mini_table = document.createElement("table");
            mini_table.classList.add("table-borderless");

            for (let j = 0; j < myJSON[page].info[i].data.length; j++) {
                var mini_row = document.createElement("tr");
                var row = document.createElement("tr");
                var column = document.createElement("td");
                //document.write(myJSON.page1.info[i].data[j] + '<br><br>');
                column.innerText = myJSON[page].info[i].data[j];
                mini_row.appendChild(column);
                mini_table.appendChild(mini_row);
            }
            row.appendChild(mini_table);
            table.appendChild(row);
        } else {
            //document.write(myJSON.page1.info[i].data + '<br><br>');
            var row = document.createElement("tr");
            var column = document.createElement("td");
            column.innerText = myJSON[page].info[i].data;
            row.appendChild(column);
            table.appendChild(row);
        }
    }
    let box = document.querySelector("#boxbox");
    box.appendChild(table);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("box").style.opacity = "0.3";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("box").style.opacity = "1";
}


//Youtube zone 
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videoId = 'M7lc1UVf-VE';
var startSeconds = 36;
var endSeconds = 45;

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

var playerConfig = {
    height: '360',
    width: '640',
    videoId: videoId,
    playerVars: {
        autoplay: 1, // Auto-play the video on load
        controls: 0, // Show pause/play buttons in player
        showinfo: 0, // Hide the video title
        modestbranding: 1, // Hide the Youtube Logo
        fs: 1, // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3, // Hide the Video Annotations
        start: startSeconds,
        end: endSeconds,
        autohide: 0, // Hide video controls when playing
    },
    events: {
        'onStateChange': onStateChange
    }
};

function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', playerConfig);
}

function onStateChange(state) {
    if (state.data === YT.PlayerState.ENDED) {
        player.loadVideoById({
            videoId: videoId,
            startSeconds: startSeconds,
            endSeconds: endSeconds
        });
    }
}

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
    var elements = document.querySelector("#box");
    //while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
    elements.innerHTML = "";

    var container = document.createElement("div");
    container.classList.add("container-fluid");
    //container.classList.add("text-center");
    var row = document.createElement("div");
    row.classList.add("row");
    var column = document.createElement("div");
    column.classList.add("col");
    //document.write(myJSON.page1.topic + '<br><br>');
    for (let i = 0; i < myJSON[page].info.length; i++) {
        //document.write(myJSON.page1.info[ i].title + '<br>');
        var row = document.createElement("div");
        row.classList.add("row");
        if (i == 0) {
            var column = document.createElement("div");
            column.classList.add("col");
            column.innerHTML += '<div class="video-warpper">' +
                '<div class="video-foreground embed-responsive-16by9">' +
                '<iframe src="https://www.youtube.com/embed/' +
                myJSON[page].info[i].video +
                '?controls=0&autoplay=1&mute=1&start=3&autohide=1&rel=0&loop=1&playlist=' +
                myJSON[page].info[i].video +
                '" frameborder="0" allowfullscreen></iframe>' +
                '</div>' +
                '</div>';
            column.innerHTML += '<div class="vid-info">' + myJSON[page].info[i].title + '</div>';
        }
        else {
            var column = document.createElement("div");
            column.classList.add("col", "lead");
            column.innerText = myJSON[page].info[i].title;
        }
        row.appendChild(column);
        container.appendChild(row);
        if (myJSON[page].info[i].type == "multiple") {
            var mini_container = document.createElement("row");

            for (let j = 0; j < myJSON[page].info[i].data.length; j++) {
                var mini_row = document.createElement("div");
                mini_row.classList.add("row");
                var column = document.createElement("div");

                //document.write(myJSON.page1.info[i].data[j] + '<br><br>');
                console.log(typeof (myJSON[page].info[i].data[j][0]));
                if (typeof (myJSON[page].info[i].data[j][0]) == 'object') {
                    var column2 = document.createElement("div");
                    var image = document.createElement("img");

                    column.classList.add("col-6");
                    column2.classList.add("col-5","text-center");
                    column.innerText = myJSON[page].info[i].data[j][0];
                    image.src = "pic/" + myJSON[page].info[i].data[j][1];
                    column2.appendChild(image);
                    mini_row.appendChild(column2);

                } else {
                    column.innerText = myJSON[page].info[i].data[j];
                    column.classList.add("col");
                }
                mini_row.appendChild(column);
                mini_container.appendChild(mini_row);

            }
            row.appendChild(mini_container);
            container.appendChild(row);
        } else {
            //document.write(myJSON.page1.info[i].data + '<br><br>');
            var row = document.createElement("div");
            row.classList.add("row");
            var column = document.createElement("div");
            column.classList.add("col");
            column.innerText = myJSON[page].info[i].data;
            row.appendChild(column);
            container.appendChild(row);
            container.appendChild(document.createElement("br"));
        }
    }
    elements.appendChild(container);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.marginLeft = "0";
}


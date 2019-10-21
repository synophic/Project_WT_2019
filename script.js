function changePage(pagee) {
    let requestURL = 'info/info.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var myJSON = JSON.parse(request.responseText);
            myFunction(myJSON, pagee);
        }
    };
    request.open("GET", requestURL, true);
    request.send();
}
function myFunction(myObj, page) {
    var elements = document.getElementsByTagName('table');
    while (elements[0]) elements[0].parentNode.removeChild(elements[0]);

    var table = document.createElement("table");
    var row = document.createElement("tr");
    var column = document.createElement("td");
    table.classList.add("table");
    table.classList.add("text-center");
    //document.write(myObj.page1.topic + '<br><br>');
    for (let i = 0; i < myObj[page].info.length; i++) {
        //document.write(myObj.page1.info[i].title + '<br>');
        var row = document.createElement("tr");
        var hcolumn = document.createElement("th");
        var column = document.createElement("td");
        column.innerText = myObj[page].info[i].title;
        row.appendChild(column);
        table.appendChild(row);
        if (myObj[page].info[i].type == "multiple") {
            var mini_table = document.createElement("table");
            mini_table.classList.add("table-borderless");
            mini_table.classList.add("text-center");

            for (let j = 0; j < myObj[page].info[i].data.length; j++) {
                var mini_row = document.createElement("tr");
                var row = document.createElement("tr");
                var column = document.createElement("td");
                //document.write(myObj.page1.info[i].data[j] + '<br><br>');
                column.innerText = myObj[page].info[i].data[j];
                mini_row.appendChild(column);
                mini_table.appendChild(mini_row);
            }
            row.appendChild(mini_table);
            table.appendChild(row);
        } else {
            //document.write(myObj.page1.info[i].data + '<br><br>');
            var row = document.createElement("tr");
            var column = document.createElement("td");
            column.innerText = myObj[page].info[i].data;
            row.appendChild(column);
            table.appendChild(row);
        }
    }
    document.body.appendChild(table);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

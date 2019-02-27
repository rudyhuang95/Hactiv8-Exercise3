var dataJson = null;
var data = null;

function loadData() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            // document.getElementById("demo").innerHTML = myObj.results;
            dataJson = myObj.results;

            var dataSearch = document.getElementById("textSearch").value;
            console.log(dataSearch);
            if (dataSearch == null || dataSearch == "") {
                data = dataJson;
            } else {
                data = dataJson.filter(e =>
                    e.name.toUpperCase().includes(dataSearch.toUpperCase()) > 0 ||
                    e.rotation_period.toUpperCase().includes(dataSearch.toUpperCase()) > 0 ||
                    e.orbital_period.toUpperCase().includes(dataSearch.toUpperCase()) > 0 ||
                    e.diameter.toUpperCase().includes(dataSearch.toUpperCase()) > 0 ||
                    e.climate.toUpperCase().includes(dataSearch.toUpperCase()) > 0 ||
                    e.gravity.toUpperCase().includes(dataSearch.toUpperCase()) > 0 ||
                    e.surface_water.toUpperCase().includes(dataSearch.toUpperCase()) > 0||
                    e.population.toUpperCase().includes(dataSearch.toUpperCase()) > 0
                );
            }
            getTableData(data);
        }
    };
    xmlhttp.open("GET", "https://swapi.co/api/planets/?format=json", true);
    xmlhttp.send();
}

function getTableData(objJson) {
    var table = document.getElementById("tableBody");
    console.log(table.rows.length);
    
    for (i=0; i< table.rows.length; i++){
        table.deleteRow(i);
        table.rows.length--;
        i--
    }
    
    for (i = 0; i < objJson.length; i++) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        cell1.innerHTML = objJson[i].name;
        cell2.innerHTML = objJson[i].rotation_period;
        cell3.innerHTML = objJson[i].orbital_period;
        cell4.innerHTML = objJson[i].diameter;
        cell5.innerHTML = objJson[i].climate;
        cell6.innerHTML = objJson[i].gravity;
        cell7.innerHTML = objJson[i].surface_water;
        cell8.innerHTML = objJson[i].population;
    }
}

// function filterSearchData(objJson) {
//     var dataSearch = document.getElementById("textSearch").value;
//     const javascriptFilter = objJson.filter(e => e.name.includes(dataSearch));
//     console.log(javascriptFilter);
// }
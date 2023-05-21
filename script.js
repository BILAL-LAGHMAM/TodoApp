// var array = [];
function add() {
    var firsName = document.getElementById("firsName");
    var lastName = document.getElementById("lastName");
    var age = document.getElementById("age");
    var notes = document.getElementById("notes");
    if (firsName.value.trim() !== "" && lastName.value.trim() !== "" && age.value.trim() !== "" && notes.value.trim() !== "") {
        var tbody = document.getElementById("tbody");
        var createRow = document.createElement("tr");
        var createTdOne = document.createElement("td");
        var createTdTwo = document.createElement("td");
        var createTdThree = document.createElement("td");
        var createTdfoor = document.createElement("td");
        var createTdfive = document.createElement("td");
        createTdfive.setAttribute("class", "d-flex justify-content-center gap-1")
        var createInputOne = document.createElement("input");
        createInputOne.setAttribute("disabled", "disabled")
        var createInputTwo = document.createElement("input");
        createInputTwo.setAttribute("disabled", "disabled")
        var createInputThree = document.createElement("input");
        createInputThree.setAttribute("disabled", "disabled")
        var createInputFoor = document.createElement("input");
        createInputFoor.setAttribute("disabled", "disabled");
        var createDelete = document.createElement("input");
        var createUpdate = document.createElement("input");
        createUpdate.setAttribute("class", "btn btn-primary w-50");
        createUpdate.setAttribute("value", "Update");
        createUpdate.setAttribute("type", "button");
        createUpdate.setAttribute("id", "btnUpdate");
        createDelete.setAttribute("class", "btn btn-danger w-50");
        createDelete.setAttribute("value", "Delete");
        createDelete.setAttribute("type", "button");
        createDelete.setAttribute("id", "btnDelete");
        createTdOne.appendChild(createInputOne);
        createTdTwo.appendChild(createInputTwo);
        createTdThree.appendChild(createInputThree);
        createTdfoor.appendChild(createInputFoor);
        createTdfive.appendChild(createUpdate);
        createTdfive.appendChild(createDelete);
        createRow.appendChild(createTdOne);
        createRow.appendChild(createTdTwo);
        createRow.appendChild(createTdThree);
        createRow.appendChild(createTdfoor);
        createRow.appendChild(createTdfive);
        tbody.prepend(createRow);
        var firsName = document.getElementById("firsName");
        createInputOne.value = firsName.value
        var lastName = document.getElementById("lastName");
        createInputTwo.value = lastName.value
        var age = document.getElementById("age");
        createInputThree.value = age.value
        var notes = document.getElementById("notes");
        createInputFoor.value = notes.value
        document.getElementById("firsName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("age").value = "";
        document.getElementById("notes").value = "";
    } else {
        alert("can't add empty value!")
    }
    createDelete.onclick = function () {
        createRow.remove()
    }
    createUpdate.onclick = function () {
        document.getElementById("firsName").value = createRow.children[0].firstChild.value;
        document.getElementById("lastName").value = createRow.children[1].firstChild.value;
        document.getElementById("age").value = createRow.children[2].firstChild.value;
        document.getElementById("notes").value = createRow.children[3].firstChild.value;
        var updateConfirm = document.getElementById("updateConfirm")
        updateConfirm.innerHTML = "Update"
        updateConfirm.onclick = function () {
            createRow.children[0].firstChild.value = document.getElementById("firsName").value;
            createRow.children[1].firstChild.value = document.getElementById("lastName").value;
            createRow.children[2].firstChild.value = document.getElementById("age").value;
            createRow.children[3].firstChild.value = document.getElementById("notes").value;
            document.getElementById("firsName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("age").value = "";
            document.getElementById("notes").value = "";
            updateConfirm.innerHTML = "Add";
            updateConfirm.setAttribute("onclick", "add()");
        }
    }

}
var btn_search = document.getElementById("btn_search");
btn_search.onclick = function () {
    var search = document.getElementById("search").value;
    var tbody = document.getElementById("tbody").children;
    for (var i = 0; i < tbody.length; i++) {
        if (tbody[i].firstChild.firstChild.value === search) {
            tbody[i].style.display = "table-row";
        } else {
            tbody[i].style.display = "none";
        }
    }
}
document.getElementById("search").onblur = function () {
    var tbody = document.getElementById("tbody").children;
    var search = document.getElementById("search").value
    for (var i = 0; i < tbody.length; i++) {
        if (search === "") {
            tbody[i].style.display = "table-row";
        }
    }
}
var acceptedTemp = [];
var accepted = [];
function tableAccepted() {
    var tbody = document.getElementById("tbody").children;
    for (var i = 0; i < tbody.length; i++) {
        acceptedTemp.push(Number(tbody[i].children[3].firstChild.value));
        tbody[i].style.display = "none";
    }
    acceptedTemp.sort(function (a, b) {
        return a - b;
    });
    acceptedTemp.reverse();
    for (var i = 0; i < 3; i++) {
        accepted.push(acceptedTemp[i])
    }
    for (var i = 0; i < accepted.length; i++) {
        for (var j = 0; j < tbody.length; j++) {
            if (Number(tbody[j].children[3].firstChild.value) == accepted[i]) {
                tbody[j].style.display = "table-row";
            }
        }
    }
}
function resetTable() {
    var tbody = document.getElementById("tbody").children;
    for (var j = 0; j < tbody.length; j++) {
        tbody[j].style.display = "table-row";
    }
}
var tableSort = [];
function sortNotes() {
    var tbody = document.getElementById("tbody").children;
    for (var i = 0; i < tbody.length; i++) {
        tableSort.push(Number(tbody[i].children[3].firstChild.value));
    }
    tableSort.sort(function (a, b) { return a - b });
    tableSort.reverse();
    for (let i = 0; i < tbody.length - 1; i++) {
        for (let j = 0; j < tbody.length - 1 - i; j++) {
            if (Number(tbody[j].children[3].firstChild.value) < Number(tbody[j + 1].children[3].firstChild.value)) {
                const temp = tbody[j];
                tbody[j] = tbody[j + 1];
                tbody[j + 1] = temp;
                tbody[i].parentNode.insertBefore(tbody[j + 1], tbody[j]);
            }
        }
    }
}
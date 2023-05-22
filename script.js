// var array = [];
function add() {
    var card = document.getElementById("card");
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var notes = document.getElementById("notes");
    if (card.value.trim() !== "" && name.value.trim() !== "" && age.value.trim() !== "" && notes.value.trim() !== "") {
        if (!Number(name.value)) {
            if (Number(age.value) > 0 && Number.isInteger(Number(age.value))) {
                if (notes.value <= 20 && notes.value >= 0) {
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
                    var card = document.getElementById("card");
                    createInputOne.value = card.value
                    var name = document.getElementById("name");
                    createInputTwo.value = name.value
                    var age = document.getElementById("age");
                    createInputThree.value = age.value
                    var notes = document.getElementById("notes");
                    createInputFoor.value = notes.value
                    document.getElementById("card").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("age").value = "";
                    document.getElementById("notes").value = "";
                } else {
                    swal("Invalid Note!", "Please Enter Note between 0 and 20!", "error");
                }
            } else {
                swal("Invalid Age!", "Please Enter Age greater than 0 and not float!", "error");
            }
        } else {
            swal("Invalid Name!", "Please Enter just caracter!", "error");
        }
        swal("Successfully!", "You added all information by successfully!", "success");
    }
    else {
        swal("Empty Value!", "Please Enter a Value!", "error");
    }
    createDelete.onclick = function () {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    createRow.remove();
                    swal("successfully deleted!", "you delete this student!", "success");
                } else {
                    swal("Cancel delete!", "The deletion has been cancelled!", "warning");
                }
            });
    }
    createUpdate.onclick = function () {
        document.getElementById("card").value = createRow.children[0].firstChild.value;
        document.getElementById("name").value = createRow.children[1].firstChild.value;
        document.getElementById("age").value = createRow.children[2].firstChild.value;
        document.getElementById("notes").value = createRow.children[3].firstChild.value;
        var updateConfirm = document.getElementById("updateConfirm")
        updateConfirm.innerHTML = "Update"
        updateConfirm.onclick = function () {
            createRow.children[0].firstChild.value = document.getElementById("card").value;
            createRow.children[1].firstChild.value = document.getElementById("name").value;
            createRow.children[2].firstChild.value = document.getElementById("age").value;
            createRow.children[3].firstChild.value = document.getElementById("notes").value;
            document.getElementById("card").value = "";
            document.getElementById("name").value = "";
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
    if (search !== "") {
        for (var i = 0; i < tbody.length; i++) {
            if (tbody[i].firstChild.firstChild.value === search) {
                tbody[i].style.display = "table-row";
            }
            else {
                swal("Card Not Found!", "Please Enter Another Card!", "error");
            }
        }
    } else if (search == "") {
        swal("Empty Value!", "Please Enter a Value!", "error");
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
var sortingStatus = true;
function sortNotes() {
    var tbody = document.getElementById("tbody").children;
    for (var i = 0; i < tbody.length; i++) {
        tableSort.push(Number(tbody[i].children[3].firstChild.value));
    }
    tableSort.sort(function (a, b) { return a - b });
    tableSort.reverse();
    if (sortingStatus) {
        sortingStatus = false;
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
    } else {
        sortingStatus = true;
        for (let i = 0; i < tbody.length - 1; i++) {
            for (let j = 0; j < tbody.length - 1 - i; j++) {
                if (Number(tbody[j].children[3].firstChild.value) > Number(tbody[j + 1].children[3].firstChild.value)) {
                    const temp = tbody[j];
                    tbody[j] = tbody[j + 1];
                    tbody[j + 1] = temp;
                    tbody[i].parentNode.insertBefore(tbody[j + 1], tbody[j]);
                }
            }
        }
    }
}
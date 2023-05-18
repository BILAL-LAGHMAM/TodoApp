function add() {
    var firsName = document.getElementById("firsName");
    var lastName = document.getElementById("lastName");
    var age = document.getElementById("age");
    if (firsName.value.trim() !== "" && lastName.value.trim() !== "" && age.value.trim() !== "") {
        var tbody = document.getElementById("tbody");
        var createRow = document.createElement("tr");
        var createTdOne = document.createElement("td");
        var createTdTwo = document.createElement("td");
        var createTdThree = document.createElement("td");
        var createTdFoor = document.createElement("td");
        createTdFoor.setAttribute("class", "d-flex justify-content-center gap-1")
        var createInputOne = document.createElement("input");
        createInputOne.setAttribute("disabled", "disabled")
        var createInputTwo = document.createElement("input");
        createInputTwo.setAttribute("disabled", "disabled")
        var createInputThree = document.createElement("input");
        createInputThree.setAttribute("disabled", "disabled")
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
        createTdFoor.appendChild(createUpdate);
        createTdFoor.appendChild(createDelete);
        createRow.appendChild(createTdOne);
        createRow.appendChild(createTdTwo);
        createRow.appendChild(createTdThree);
        createRow.appendChild(createTdFoor);
        tbody.appendChild(createRow);
        var firsName = document.getElementById("firsName");
        createInputOne.value = firsName.value
        var lastName = document.getElementById("lastName");
        createInputTwo.value = lastName.value
        var age = document.getElementById("age");
        createInputThree.value = age.value
        document.getElementById("firsName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("age").value = "";
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
        var updateConfirm = document.getElementById("updateConfirm")
        updateConfirm.innerHTML = "Update"
        updateConfirm.onclick = function () {
            createRow.children[0].firstChild.value = document.getElementById("firsName").value;
            createRow.children[1].firstChild.value = document.getElementById("lastName").value;
            createRow.children[2].firstChild.value = document.getElementById("age").value;
            document.getElementById("firsName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("age").value = "";
            updateConfirm.innerHTML = "Add";
            updateConfirm.setAttribute("onclick","add()");
        }
    }
}

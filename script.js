function add() {
    var firsName = document.getElementById("firsName");
    var lastName = document.getElementById("lastName");
    var age = document.getElementById("age");
    if (firsName.value.trim() !== "" && lastName.value.trim() !== "" && age.value.trim() !== "") {
        var tbody = document.getElementById("tbody");
        createRow = document.createElement("tr");
        createTdOne = document.createElement("td");
        createTdTwo = document.createElement("td");
        createTdThree = document.createElement("td");
        createTdFoor = document.createElement("td");
        createTdFoor.setAttribute("class", "d-flex justify-content-center gap-1")
        createInputOne = document.createElement("input");
        createInputOne.setAttribute("disabled","disabled")
        createInputTwo = document.createElement("input");
        createInputTwo.setAttribute("disabled","disabled")
        createInputThree = document.createElement("input");
        createInputThree.setAttribute("disabled","disabled")
        createDelete = document.createElement("input");
        createUpdate = document.createElement("input");
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
        var firsName = document.getElementById("firsName").value = "";
        var lastName = document.getElementById("lastName").value = "";
        var age = document.getElementById("age").value = "";
    } else {
        alert("can't add empty value!")
    }
}

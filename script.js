function add(){
    var tbody = document.getElementById("tbody");
    createRow = document.createElement("tr");
    createTdOne = document.createElement("td");
    createTdTwo = document.createElement("td");
    createTdThree = document.createElement("td");
    createTdFoor = document.createElement("td");
    createTdFoor.setAttribute("class","d-flex justify-content-center gap-1")
    createInputOne = document.createElement("input");
    createInputTwo = document.createElement("input");
    createInputThree = document.createElement("input");
    createDelete = document.createElement("input");
    createUpdate = document.createElement("input");
    createUpdate.setAttribute("class","btn btn-primary w-25");
    createUpdate.setAttribute("value","Update");
    createUpdate.setAttribute("type","button");
    createUpdate.setAttribute("id","btnUpdate");
    createDelete.setAttribute("class","btn btn-danger w-25");
    createDelete.setAttribute("value","Delete");
    createDelete.setAttribute("type","button");
    createDelete.setAttribute("id","btnDelete");
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
    document.getElementById("btnUpdate").onclick = function(){
        alert("ok")
    }
}

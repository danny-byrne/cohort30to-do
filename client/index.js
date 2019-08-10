// let id = 1;

function removeSpecItem (ourInput){
    //capture list item specific ID
    // console.log(`ourInput.target.id is ${ourInput.target.id}`);
    console.log('deleting something');
    fetch('/delete', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: ourInput.target.id
        })
    }).then(data => data.json())
    .then(data =>{

        document.getElementById(ourInput.target.id).remove()
    })
    .catch(err => console.log("Error removing from db. ", err))
}


function addAnItem (){ 
    
    const ourInput = document.getElementById("input").value; 

    fetch('/add', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            item: ourInput
        })
    }).then(data => data.json())
    .then(data => {
     
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", data);
    deleteButton.addEventListener("click", removeSpecItem);
    deleteButton.innerHTML = "remove";

    const newElement = document.createElement("li");
    newElement.setAttribute("id", data);
    newElement.innerHTML = ourInput;
    newElement.prepend(deleteButton);

    //append 
    document.getElementById("cohortList").append(newElement);  
    // console.log(document.getElementsByClassName("to-do-list"));
    // clear input text after submit
    document.getElementById("input").value="";
    })
    .catch(err => console.log("Error posting to db. ", err))
    //increment id
    // id++;
}

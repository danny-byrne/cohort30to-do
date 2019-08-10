
/**remove item is triggered from the DOM element tha was created when we added the todo item.  still not sure how ourItem is dfeined t this runtime */
function removeItem (ourInput){
    console.log('deleting item');
/**the body of the fetch request is the id that was created when the item was created.  the server routes the request to dbController.delete */
    fetch('/delete', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: ourInput.target.id
        })
    }).then(data => data.json())
    .then(data => {
        document.getElementById(ourInput.target.id).remove()
    })
    .catch(err => console.log("Error removing from db. ", err))
}

//addAnItem is triggered from the DOM, button click with input assigned to ourInput
function addAnItem (){ 
    //input is from input the input box in DOM
    const ourInput = document.getElementById("input").value; 
    //fetch request to /add is triggered, which is routed through the middleware function dbController.add
    fetch('/add', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            item: ourInput
        })
        //data comes back and is parsed
    }).then(data => data.json())
    .then(data => {
    
    /**
     * a delete button with an attribute of the id returned from the database entry is created, and an event listener is attached which calls a function to remove the item
     */
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", data);
    deleteButton.addEventListener("click", removeItem);
    deleteButton.innerHTML = "remove";

    /** new list item created attribute is id and data returned from fetch request.  ourInput is passed in to innerhtml, and the delete button is prepended to the left */
    const newElement = document.createElement("li");
    newElement.setAttribute("id", data);
    newElement.innerHTML = ourInput;
    newElement.prepend(deleteButton);

    //append newElement to the DOM
    document.getElementById("cohortList").append(newElement);  
    
    // clear input text after submit
    document.getElementById("input").value="";
    })
    .catch(err => console.log("Error posting to db. ", err))
}

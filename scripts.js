function newItem(){
//jquery code
//1. adding a new item to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === ''){
    alert("you must enter something");
    
}else {
    $('#list').append(li);
}

//2. crossing out an item from the list
function crossOut(){
    li.toggleClass("strike");
}
li.on("dblclick", function crossOut(){
    li.toggleClass("strike");
});

// adding a delete button
let crossOutButton = $
('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem(){
    li.addClass("delete")
}
$('#list').sortable();

//add update function for list item?    
// if ($('#list').val())

}


// //vanillia javascript code
// //1. adding a new item to the list of items
// function newItem(){
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("input").value; //what ever the value is here
//     let text = document.createTextNode(inputValue); //will be stored as variable 'text' here
//     li.appendChild(text)// and then added as a child to the li
    
//     if (inputValue === ''){
//         alert("you must write something first");
//     } else{
//         let list = document.querySelector('#list');
//         list.appendChild(li);
//     }
    
//     //crossing out an item from the list of items
    
//     function crossOut(){
//         li.classList.toggle("strike"); //toggles the css for rule for this
//     }
    
//     li.addEventListener("dblclick", crossOut); //function gets called when the li is double clicked
    
//     // 3.1 adds the X-button for the delete list item
//     let crossOutButton = document.createElement("crossOutButton");
//     crossOutButton.appendChild(document.createTextNode("X"));
//     li.appendChild(crossOutButton);
    
//     crossOutButton.addEventListener("click", deleteListItem);

//     //3.2 adds the css class of delete for use with the crossOutButton upon click
//     function deleteListItem(){
//         li.classList.add("delete")   
//     }
    
//     //4. allows for the reordering of items
//     $('#list').sortable();  
    
//     //5 adds an E button for editing list item
//     let editButton = document.createElement("editButton");
//     editButton.appendChild(document.createTextNode("E"));
//     li.appendChild(editButton);
    
//     editButton.addEventListener("click", editListItem);

//     function editListItem(){
//         let edit_name = document.getElementById(inputValue)
//         document.getElementById(list)
//     }

// }

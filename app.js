function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoForm = document.getElementById('newToDoForm');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    //create a new li
    let newLi = document.createElement('li');
    //create a new input
    let checkbox = document.createElement('input');
    //set the input type to checkbox
    checkbox.type = "checkbox";
    //set the title
    newLi.textContent = title;
    //atach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach the li to the ul;
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value='';
    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerText ='delete';
    //attach delete button to Li
    newLi.appendChild(deleteButton);
    deleteButton.addEventListener('click', event =>{
      toDoList.removeChild(newLi);
    })
  });


}
window.onload = function(){
  onReady();
};

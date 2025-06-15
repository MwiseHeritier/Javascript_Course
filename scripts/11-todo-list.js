/* Steps(Algorithm) 
  -----------------
  1.Create array to store to todos
  2.when we click "Add",
  3.Get text from textbox,
  4.Add it to Array,
  5.Console.log the array

*/

const toDoList = [{
  name:'make dinner',
  dueDate: '2022-12-22',
 }, {
  name: 'wash dishes',
  dueDate: '2022-12-2'
  }
];
renderTodoList();

function renderTodoList(){
  let toDoListHtml = ''; // this is a variable used to combine all html codes of todp list.

  for (let i = 0; i < toDoList.length; i++){
    const todoObject = toDoList[i];
    //const name =todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate }  = todoObject; // destruction shortcut
    const html = `
    <div>${name} </div>
    <div>${dueDate}</div>
    <button onclick= "
      toDoList.splice(${i}, 1);
      renderTodoList();
      
    " class= "delete-todo-button">Delete</button>
    
    `;// we created html codes for each object.
    toDoListHtml += html;
  }

  
document.querySelector('.js-todo-list').innerHTML = toDoListHtml;


}

function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');

 const dueDate = dateInputElement.value;
 
 toDoList.push({
  //name: name,
  //dueDate: dueDate
  name, // shorthand property syntax
  dueDate
 });
 

 inputElement.value= '';


 renderTodoList();
}

/*
  Main idea of Javascript
  -----------------------
  1. Save the data
  2. Generate HTML
  3,Make it interactive.
*/
//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//filterOption.addEventListener('click', filterTodo);

//functions

function addTodo(event) {
    //console.log("Its working ...");
    //prevent from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add todo to local storage
    saveLocalTodos(todoInput.value);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashdButton = document.createElement('button');
    trashdButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashdButton.classList.add('trash-btn');
    todoDiv.appendChild(trashdButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = '';

}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn') {

        const todo = item.parentElement;
        todo.classList.add('fall');
        setTimeout(() => {
            todo.remove();
        }, 500);
    }
    //check todo
    if (item.classList[0] == 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

/*function filterTodo(e) {
    const todos = todoList.childNodes;

    //console.log(todos);
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}*/


function saveLocalTodos(todo) {
    //check... do I have variables there
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
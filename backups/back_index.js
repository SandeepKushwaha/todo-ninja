'use strict'

class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }

    generateUniqueId() {
        return (Date.now() + this.nextId++).toString(36);
    }

    addTodo(todo, completed = false) {
        const todoItem = {
            id: this.generateUniqueId(),
            todo,
            completed,
        };
        this.todos.push(todoItem);
        return todoItem;
    }

    editTodo(id, updatedTodo) {
        const todo = this.getTodo(id);
        if (todo) {
            todo.todo = updatedTodo;
        }
    }

    deleteTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }

    markTodoAsCompleted(id) {
        const todo = this.getTodo(id);
        if (todo) {
            todo.completed = true;
        }
    }

    markTodoAsNotCompleted(id) {
        const todo = this.getTodo(id);
        if (todo) {
            todo.completed = false;
        }
    }

    getAllChecked() {
        return this.todos.filter((todo) => todo.completed);
    }

    getAllUnchecked() {
        return this.todos.filter((todo) => !todo.completed);
    }

    getTodoByTodoValue(todoValue) {
        return this.todos.find((todo) => todo.todo === todoValue) || null;
    }

    getAllTodos() {
        return this.todos;
    }

    getTodo(id) {
        return this.todos.find((todo) => todo.id === id) || null;
    }
}

/* ========================================================= */

// let todos = [];

// function generateUniqueId() {
//     return Date.now().toString(36);
// }

// // Add the new todo in the todos
// function addTodo(todoId, task, completed = false) {
//     const todoItem = {
//         id: todoId,
//         task: task,
//         completed: completed
//     }
//     todos.push(todoItem);
//     return todoItem;
// }

// // Function to get all todos
// function getAllTodos() {
//     return todos;
// }

// // Function to get completed todos
// function getImcompletedTodos() {
//     return todos.filter((todo) => todo.completed === false);
// }

// // Function to get completed todos
// function getCompletedTodos() {
//     return todos.filter((todo) => todo.completed);
// }
// // Function to find the todo from todos
// function getTodo(id) {
//     return todos.find((todo) => todo.id === id);
// }

// // Function to edit todo
// function editTodo(id, editedTask) {
//     const index = todos.findIndex((todo) => todo.id === id);
//     var todoToEdit = todos.find((todo) => todo.id === id);
//     // var editedTodo = {
//     //     id: todoToEdit.id,
//     //     task: editedTask,
//     //     completed: todoToEdit.completed
//     // };

//     if (index !== -1) {
//         todos[index].task = editedTask;
//         console.log('index: = ', index);
//         console.log('todo to edit: =', todoToEdit);
//         console.log('index at todos: =', todos[index].id);
//         console.log('todo at todos: =', todos[index]);
//         // todos = todos.filter(todo => todo.id !== id);
//         // todos.splice(index, 0, editTodo);
//         // todos[index] = editedTodo;

//     } else {
//         console.log('todo not found');
//     }
// }

// function removeTodoById(id) {
//     todos = todos.filter(todo => todo.id !== id);
//     updateTodoIndexing();
// }

/* ========================================================= */
const myTodoList = new TodoList();

// Add a new Todo and append on list
document.getElementById("addTodoButton").addEventListener("click", function () {
    var inputTextValue = document.getElementById("addTodoInput").value;

    const toastContainer = document.getElementById("toast-container");

    if (inputTextValue) {
        // Generate a unique ID for each checkbox
        // const checkboxId = generateUniqueId();

        // Create a new todo object and add it to the todos array
        // const todoItem = addTodo(checkboxId, inputTextValue);        
        const todoItem = myTodoList.addTodo(inputTextValue.toString());        

        // Create a new list item
        // const listItem = document.createElement("li");
        // listItem.className = "list-group-item";

        // Create the inner elements
        // listItem.innerHTML = `
        //     <div class="d-flex w-100 justify-content-between">
        //         <div class="list-item-padding w-100 d-flex justify-content-between">
        //             <span>
        //                 <input class="form-check-input me-1" onchange="showToastOnChangeTaskCheckbox(this)" type="checkbox" value="" id="${checkboxId}" data-task="${inputTextValue}">
        //                 <label class="form-check-label" onclick="showToastOnChangeTaskCheckbox(this)" for="${checkboxId}" title="Check task to mark as completed">${inputTextValue}</label>
        //             </span>
        //             <small>
        //                 <button type="button" class="btn btn-danger btn-sm" title="Delete" onclick="confirmTaskDeletion(this)">
        //                     <i class="fa-regular fa-trash-can"></i>
        //                 </button>
        //                 &nbsp;
        //                 <button type="button" class="btn btn-primary btn-sm" title="Edit" onclick="openEditModal(this)">
        //                     <i class="fa-regular fa-pen-to-square"></i>
        //                 </button>
        //             </small>
        //         </div>
        //     </div>
        // `;

        // Create a new list item
        const listItem = createTodoListItem(todoItem);

        // Append the new list item to the existing list
        const list = document.querySelector(".list-group");
        list.appendChild(listItem);

        showToast(toastContainer, `Task "${inputTextValue}" added.`, "bg-success");

        // Clear the input field after adding the task
        document.getElementById("addTodoInput").value = "";
    } else {
        showToast(toastContainer, "Please enter a task before adding.", "bg-warning");
    }
});

// Function to create a list item for a todo
function createTodoListItem(todo) {
    console.log('create todo: =', todo);
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";

    // Create the inner elements
    listItem.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
            <div class="list-item-padding w-100 d-flex justify-content-between">
                <span>
                    <input class="form-check-input me-1" onclick="changeCheckbox(this, null)" type="checkbox" value="" id="${todo.id}" data-task="${todo.todo}">
                    <label class="form-check-label" onclick="showToastOnChangeTaskCheckbox(this)" for="${todo.id}" title="Check task to mark as completed">${todo.todo}</label>
                </span>
                <small>
                    <button type="button" class="btn btn-danger btn-sm" title="Delete" onclick="confirmTaskDeletion(this)">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                    &nbsp;
                    <button type="button" class="btn btn-primary btn-sm" title="Edit" onclick="openEditModal(this)">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                </small>
            </div>
        </div>
    `;

    return listItem;
}

// Get all the completed todos
document.getElementById('completed-tab').addEventListener("click", function () {

    // Create a new <ul> for displaying completed todos
    const completedList = document.createElement("ul");
    completedList.className = "list-group all-todo-list-group";
    
    // Iterate through the todos and add completed ones to the new list
    // todos.forEach((todo) => {
    myTodoList.getAllTodos().forEach((todo) => {
        if (todo.completed) {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.innerHTML = `
                <div class="d-flex w-100 justify-content-between">
                    <div class="list-item-padding w-100 d-flex justify-content-between">
                        <span>
                            <input class="form-check-input me-1" disabled type="checkbox" checked value="" id="${todo.id}" data-task="${todo.todo}">
                            <label class="form-check-label" for="${todo.id}" title="This task is completed">${todo.todo}</label>
                        </span>
                        <small>
                            <button type="button" class="btn btn-danger btn-sm" title="Delete" onclick="confirmTaskDeletion(this)">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                            &nbsp;
                            <button type="button" class="btn btn-primary btn-sm" title="Edit" onclick="openEditModal(this)">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                        </small>
                    </div>
                </div>
            `;
            completedList.appendChild(listItem);
        }
    });

    // Replace the existing completed list with the new one
    const existingCompletedList = document.querySelector("#completed-tab-pane");
    existingCompletedList.innerHTML = "";
    existingCompletedList.appendChild(completedList);
});

// Function to create and show a toast message
function showToast(container, message, bgColor) {
    const toast = document.createElement("div");
    toast.className = `toast position-absolute bottom-0 end-0 m-5 bg-${bgColor}`;
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");
    toast.style.minWidth = "240px";
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">Todo App</strong>
            <small>Just now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;

    container.appendChild(toast);

    // update list index
    updateTodoIndexing();

    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

// Function to show a toast message on change the task as complete or pending.
function showToastOnChangeTaskCheckbox(element) {
    console.log('element::', element.textContent);

    var checkboxId = element.getAttribute("for");

    var checkbox = null;

    if (checkboxId) {
        checkbox = document.getElementById(checkboxId);
    }
    
    console.log('element', checkbox);

    changeCheckbox(checkbox, checkboxId);
}

// Toggle checkbox
function changeCheckbox(checkbox, checkboxId) {

    if (!checkboxId) checkboxId = checkbox.getAttribute("id");

    // Add an event listener for the checkbox
    checkbox.addEventListener("change", function () {
        var isChecked = checkbox.checked;
        const taskMessage = myTodoList.getTodo(checkboxId).todo;
        // const taskMessage = checkbox.getAttribute("value") === "" ? checkbox.getAttribute("data-task") : checkbox.getAttribute("value");

        // var todo = todos.find((todo) => todo.id === checkboxId);
        // var todo = myTodoList.getTodo(checkboxId);
        // const todoIndex = todos.findIndex((todo) => todo.id === checkboxId);

        // console.log('changing completed or not todo :=', todo);
        // console.log('index::', todoIndex);

        const toastContainer = document.getElementById("toast-container");

        if (isChecked) {
            // Show a "task completed" toast
            showToast(toastContainer, `Task "${taskMessage}" completed.`, "bg-success");
            // todo.completed = true;
            myTodoList.markTodoAsCompleted(checkboxId);
        } else {
            // Show a "mark as pending" toast
            showToast(toastContainer, `Task "${taskMessage}" marked as pending.`, "bg-warning");
            // todo.completed = false;
            myTodoList.markTodoAsNotCompleted(checkboxId);
        }
        // console.log('is completed::', todo.completed);
        // todos[todoIndex] = todo;
        updateTodoIndexing();
    });
}

// var allTodos = getAllTodos();
// var completedTodos = getCompletedTodos();

// console.log('All todo: ', allTodos);
// console.log('Completed todo: ', allTodos);


// Function to open the edit task modal
function openEditModal(button) {
    const listItem = button.closest("li");
    const label = listItem.querySelector(".form-check-label");
    const newValue = label.textContent;
    document.getElementById("editedTaskValue").value = newValue;
    let editedValue = newValue;

    const saveButton = document.getElementById("saveEditedTask");
    const modal = new bootstrap.Modal(document.getElementById("editTaskModal"));

    saveButton.addEventListener("click", function () {
        editedValue = document.getElementById("editedTaskValue").value;
        label.textContent = editedValue;
        const checkbox = listItem.querySelector("input");
        checkbox.value = editedValue;

        // array before update
        // console.log('before update all todos::', todos)
        // Update the todos array
        // const todoIndex = todos.findIndex((todo) => todo.id === checkbox.id);
        // console.log('working id=', checkbox.id);
        // console.log('todo to update=', getTodo(checkbox.id));
        // editTodo(checkbox.id, editedValue);
        myTodoList.editTodo(checkbox.id, editedValue);
        
        // console.log('after update all todos::', todos);
        // editTodo(todo.id, todo);

        modal.hide();

        updateTodoIndexing();
    });

    modal.show();
}

// Function to open the confirmation modal for task deletion
function confirmTaskDeletion(button) {
    const listItem = button.closest("li");
    const checkbox = listItem.querySelector("input");

    const confirmButton = document.getElementById("confirmDelete");
    const modal = new bootstrap.Modal(document.getElementById("confirmDeleteModal"));

    confirmButton.addEventListener("click", function () {
        const checkboxId = document.getElementById("confirmDelete").getAttribute("data-checkbox-id");
        // removeTodoById(checkboxId);
        myTodoList.deleteTodo(checkboxId);

        const listItem = document.getElementById(checkboxId).closest("li");

        // Remove or delete the todo from the todos array
        // todos = todos.filter((todo) => todo.id !== checkboxId);
        // myTodoList.deleteTodo(checkboxId);

        listItem.remove();

        modal.hide();
    });

    // Set the checkbox ID and value to the modal buttons for reference
    document.getElementById("confirmDelete").setAttribute("data-checkbox-id", checkbox.id);
    document.getElementById("confirmDelete").setAttribute("data-checkbox-value", checkbox.value);

    modal.show();
}

// Function to delete a task after confirmation
document.getElementById("confirmDelete").addEventListener("click", function() {
    const checkboxId = document.getElementById("confirmDelete").getAttribute("data-checkbox-id");
    const listItem = document.getElementById(checkboxId).closest("li");
    listItem.remove();
    $("#confirmDeleteModal").modal("hide");
});

document.getElementById("editTaskCancelBtn").addEventListener("click", function () { 
    $("#editTaskModal").modal("hide");
});

document.getElementById("editTaskCancel").addEventListener("click", function () { 
    $("#editTaskModal").modal("hide");
});

document.getElementById("confirmDeleteCancelBtn").addEventListener("click", function () { 
    $("#confirmDeleteModal").modal("hide");
});

document.getElementById("confirmDeleteCancel").addEventListener("click", function () { 
    $("#confirmDeleteModal").modal("hide");
});

function updateTodoIndexing() {
    // console.log('updating index');
    // Update Counts of Todos in Indeing spans
    const totalTodosTaskSpan = document.getElementById('all-todo-tasks');
    const pendingTodosTaskSpan = document.getElementById('pending-tasks');
    const completedTodosTaskSpan = document.getElementById('completed-tasks');

    if (totalTodosTaskSpan) {
        // totalTodosTaskSpan.textContent = getAllTodos().length;
        totalTodosTaskSpan.textContent = myTodoList.getAllTodos().length;
    }

    if (pendingTodosTaskSpan) {
        // pendingTodosTaskSpan.textContent = getImcompletedTodos().length;
        pendingTodosTaskSpan.textContent = myTodoList.getAllUnchecked().length;
    }

    if (completedTodosTaskSpan) {
        // completedTodosTaskSpan.textContent = getCompletedTodos().length;
        completedTodosTaskSpan.textContent = myTodoList.getAllChecked().length;
    }
}
updateTodoIndexing();
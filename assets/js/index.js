// delete past data/clear database to fresh start.
localStorage.clear();

// ================== library functions =================
// ======================================================

// Libary Fuction for String
String.prototype.hashCode = function () {
    console.log('creatring hash for:', this.toString());
    var hash = 0, i, chr;
    
    if (this.length === 0)
        return hash;
    
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    
    return hash;
}

String.prototype.md5 = function () {
    var a = this.toString();
    var r = 0,
        c = "";
    return h(a);

    function h(t) {
        return u(l(m(t)))
    }

    function l(t) {
        return p(g(f(t), 8 * t.length))
    }

    function u(t) {
        for (var e, i = r ? "0123456789ABCDEF" : "0123456789abcdef", n = "", o = 0; o < t.length; o++)
            e = t.charCodeAt(o),
            n += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
        return n
    }

    function m(t) {
        for (var e, i, n = "", o = -1; ++o < t.length;)
            e = t.charCodeAt(o),
            i = o + 1 < t.length ? t.charCodeAt(o + 1) : 0,
            55296 <= e && e <= 56319 && 56320 <= i && i <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & i),
                o++),
            e <= 127 ? n += String.fromCharCode(e) : e <= 2047 ? n += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? n += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (n += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
        return n
    }

    function f(t) {
        for (var e = Array(t.length >> 2), i = 0; i < e.length; i++)
            e[i] = 0;
        for (i = 0; i < 8 * t.length; i += 8)
            e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
        return e
    }

    function p(t) {
        for (var e = "", i = 0; i < 32 * t.length; i += 8)
            e += String.fromCharCode(t[i >> 5] >>> i % 32 & 255);
        return e
    }

    function g(t, e) {
        t[e >> 5] |= 128 << e % 32,
            t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var i = 1732584193, n = -271733879, o = -1732584194, s = 271733878, a = 0; a < t.length; a += 16) {
            var r = i,
                c = n,
                h = o,
                l = s;
            n = E(n = E(n = E(n = E(n = N(n = N(n = N(n = N(n = C(n = C(n = C(n = C(n = S(n = S(n = S(n = S(n, o = S(o, s = S(s, i = S(i, n, o, s, t[a + 0], 7, -680876936), n, o, t[a + 1], 12, -389564586), i, n, t[a + 2], 17, 606105819), s, i, t[a + 3], 22, -1044525330), o = S(o, s = S(s, i = S(i, n, o, s, t[a + 4], 7, -176418897), n, o, t[a + 5], 12, 1200080426), i, n, t[a + 6], 17, -1473231341), s, i, t[a + 7], 22, -45705983), o = S(o, s = S(s, i = S(i, n, o, s, t[a + 8], 7, 1770035416), n, o, t[a + 9], 12, -1958414417), i, n, t[a + 10], 17, -42063), s, i, t[a + 11], 22, -1990404162), o = S(o, s = S(s, i = S(i, n, o, s, t[a + 12], 7, 1804603682), n, o, t[a + 13], 12, -40341101), i, n, t[a + 14], 17, -1502002290), s, i, t[a + 15], 22, 1236535329), o = C(o, s = C(s, i = C(i, n, o, s, t[a + 1], 5, -165796510), n, o, t[a + 6], 9, -1069501632), i, n, t[a + 11], 14, 643717713), s, i, t[a + 0], 20, -373897302), o = C(o, s = C(s, i = C(i, n, o, s, t[a + 5], 5, -701558691), n, o, t[a + 10], 9, 38016083), i, n, t[a + 15], 14, -660478335), s, i, t[a + 4], 20, -405537848), o = C(o, s = C(s, i = C(i, n, o, s, t[a + 9], 5, 568446438), n, o, t[a + 14], 9, -1019803690), i, n, t[a + 3], 14, -187363961), s, i, t[a + 8], 20, 1163531501), o = C(o, s = C(s, i = C(i, n, o, s, t[a + 13], 5, -1444681467), n, o, t[a + 2], 9, -51403784), i, n, t[a + 7], 14, 1735328473), s, i, t[a + 12], 20, -1926607734), o = N(o, s = N(s, i = N(i, n, o, s, t[a + 5], 4, -378558), n, o, t[a + 8], 11, -2022574463), i, n, t[a + 11], 16, 1839030562), s, i, t[a + 14], 23, -35309556), o = N(o, s = N(s, i = N(i, n, o, s, t[a + 1], 4, -1530992060), n, o, t[a + 4], 11, 1272893353), i, n, t[a + 7], 16, -155497632), s, i, t[a + 10], 23, -1094730640), o = N(o, s = N(s, i = N(i, n, o, s, t[a + 13], 4, 681279174), n, o, t[a + 0], 11, -358537222), i, n, t[a + 3], 16, -722521979), s, i, t[a + 6], 23, 76029189), o = N(o, s = N(s, i = N(i, n, o, s, t[a + 9], 4, -640364487), n, o, t[a + 12], 11, -421815835), i, n, t[a + 15], 16, 530742520), s, i, t[a + 2], 23, -995338651), o = E(o, s = E(s, i = E(i, n, o, s, t[a + 0], 6, -198630844), n, o, t[a + 7], 10, 1126891415), i, n, t[a + 14], 15, -1416354905), s, i, t[a + 5], 21, -57434055), o = E(o, s = E(s, i = E(i, n, o, s, t[a + 12], 6, 1700485571), n, o, t[a + 3], 10, -1894986606), i, n, t[a + 10], 15, -1051523), s, i, t[a + 1], 21, -2054922799), o = E(o, s = E(s, i = E(i, n, o, s, t[a + 8], 6, 1873313359), n, o, t[a + 15], 10, -30611744), i, n, t[a + 6], 15, -1560198380), s, i, t[a + 13], 21, 1309151649), o = E(o, s = E(s, i = E(i, n, o, s, t[a + 4], 6, -145523070), n, o, t[a + 11], 10, -1120210379), i, n, t[a + 2], 15, 718787259), s, i, t[a + 9], 21, -343485551),
                i = v(i, r),
                n = v(n, c),
                o = v(o, h),
                s = v(s, l)
        }
        return [i, n, o, s]
    }

    function _(t, e, i, n, o, s) {
        return v((a = v(v(e, t), v(n, s))) << (r = o) | a >>> 32 - r, i);
        var a, r
    }

    function S(t, e, i, n, o, s, a) {
        return _(e & i | ~e & n, t, e, o, s, a)
    }

    function C(t, e, i, n, o, s, a) {
        return _(e & n | i & ~n, t, e, o, s, a)
    }

    function N(t, e, i, n, o, s, a) {
        return _(e ^ i ^ n, t, e, o, s, a)
    }

    function E(t, e, i, n, o, s, a) {
        return _(i ^ (e | ~n), t, e, o, s, a)
    }

    function v(t, e) {
        var i = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
    }
}


// ================== core functions ====================
// ======================================================

// Function to retrieve todos from localStorage
function getTodos(completed = false) {
    const todosString = localStorage.getItem("todos");
    let todos = JSON.parse(todosString || "[]");
  
    if (completed) {
        todos = todos.filter((todo) => todo.completed);
    }
  
    return todos;
}

// Function to save todos to localStorage
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to create a new todo
function createTodo(task) {
    const todos = getTodos();
  
    // Check for duplicate tasks
    if (todos.some((todo) => todo.task === task)) {
        return false; // Indicate duplicate task
    }
  
    todos.push({ task, completed: false });
    saveTodos(todos);
    return true; // Indicate successful creation
}

// Function to get a todo by index
function getTodo(index) {
    return getTodos()[index];
}

// Function to get a todo by task string
function getTodoByTask(task) {
    const todos = getTodos();
    return todos.find((todo) => todo.task === task);
}

// Function to update a todo
function updateTodo(index, updates) {
    const todos = getTodos();
    todos[index] = { ...todos[index], ...updates };
    saveTodos(todos);
}

// Function to delete a todo
function deleteTodo(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
}

// Function to delete a todo based on its task
function deleteTodoByTask(task) {
    const todoIndex = getTodoIndex(task);
    if (todoIndex !== -1) {
        deleteTodo(todoIndex);
    } else {
        console.error("Todo not found");
    }
}

// Function to get the index of a todo by task string
function getTodoIndex(task) {
    const todos = getTodos();
    const index = todos.findIndex((todo) => todo.task === task);
    return index;
}  

// Function to Marks a todo as completed by its index.
function completeTodo(index) {
    const todos = getTodos();
    if (index >= 0 && index < todos.length) {
        todos[index].completed = true;
        saveTodos(todos);
    } else {
        console.error("Invalid todo index");
    }
}

// Function to Marks a todo as completed by its task string.
function completeTodoByTask(task) {
    const todoIndex = getTodoIndex(task);
    if (todoIndex !== -1) {
        completeTodo(todoIndex);
    } else {
        console.error("Todo not found");
    }
}  

// function marks all todos as completed.
function completeAllTodos() {
    const todos = getTodos();
    todos.forEach((todo) => {
        todo.completed = true;
    });
    saveTodos(todos);
}

// Function Marks a todo as incomplete by its index.
function incompleteTodo(index) {
    const todos = getTodos();
    if (index >= 0 && index < todos.length) {
        todos[index].completed = false;
        saveTodos(todos);
    } else {
        console.error("Invalid todo index");
    }
}

// Function Marks a todo as incomplete by its task string.
function incompleteTodoByTask(task) {
    const todoIndex = getTodoIndex(task);
    if (todoIndex !== -1) {
        incompleteTodo(todoIndex);
    } else {
        console.error("Todo not found");
    }
}

// Function to clear all completed tasks.
function clearCompletedTodos() {
    const todos = getTodos();
    const incompleteTodos = todos.filter((todo) => !todo.completed);
    saveTodos(incompleteTodos);
}

// Function removes all todos from the list.
function clearAllTodos() {
    saveTodos([]);
}


// ================== UI/UX functions ===================
// ======================================================


// ====================== application Constants ======================

const createTodoButtonElement = document.getElementById('createTodoButton');
const createTodoInputElement = document.getElementById('createTodoInput');

const allTodosTasksListElement = document.getElementById('allTodosTasksList'); 
const completedTodosTaskListElement = document.getElementById('completedTodosTaskList');

const modalSectionElement = document.getElementById('modalSection');

const completeAllTasksElement = document.getElementById('completeAllTasks');
const clearCompletedTaskElement = document.getElementById('clearCompletedTask');

const totalTodoTasksElement = document.getElementById('totalTodoTasks');
const totalPendingTasksElement = document.getElementById('totalPendingTasks');
const totalCompletedTasksElement = document.getElementById('totalCompletedTasks');

// ================== application global variables ===================

let totalTodoTasks = 0;
let totalPendingTodoTasks = 0;
let totalCompletedTodoTasks = 0;

// ====================== application listeners ======================


// listener for the `createTodoButtonElement`(id of Add button UI element)
createTodoButtonElement.addEventListener('click', (e) => { 

    let inputText = createTodoInputElement.value.toString().trim().toLowerCase();

    if (inputText !== '') {
        e.preventDefault();
        console.info('input text for todo creation:', inputText);

        // creating the new Todo on the localStorage as database.
        let isTodoCreated = createTodo(inputText);

        if (isTodoCreated) {
            // object of todo created
            // making UI changes i.e. create list item
            var todoTask = getTodoByTask(inputText.toString());
            let listItemElement = createTodoTaskListItemElement(todoTask);

            if (listItemElement) {
                allTodosTasksListElement.appendChild(listItemElement);
                // updating the index
                refreshTaskIndexing();

                let listItemCheckbox = document.querySelector(`#allTasklistItemCheck-${todoTask.task.md5()}`);
                // let listItemLabel = document.querySelector(`label[for="allTasklistItemCheck-${todoTask.task.md5()}"]`);
                let listItemDelBtn = document.querySelector(`#allTaskListItemDelBtn-${todoTask.task.md5()}`);
                // let listItemEditBtn = document.querySelector(`#allTaskListItemEditBtn-${todoTask.task.md5()}`);

                
                listItemCheckbox.addEventListener('click', (e) => { 
                    
                    // NOTE:: Nn creatation/deletion of the list item for the current todotask object
                    //        must follow the all<-> to completed<-> elements ids 
                    if (listItemCheckbox.checked) {
                        // update todoTask is completed to true
                        // then add the list item to completed todo task pane
                        console.log('i got true.');
                        let completedListItemElement = createCompletedTodoListItemElement(todoTask);

                        // core functionality to complete task
                        completeTodoByTask(todoTask.task);

                        if (completedListItemElement) {
                            completedTodosTaskListElement.appendChild(completedListItemElement);

                            // update the indexing
                            refreshTaskIndexing();

                            // create completed todo task event listeners.
                            let completedListItemCheckbox = document.querySelector(`#completedTasklistItemCheck-${todoTask.task.md5()}`);
                            let completedListItemDelBtn = document.querySelector(`#completedTaskListItemDelBtn-${todoTask.task.md5()}`);
                            // Note:: Todo can't edit task if the task is marked as completed. 
                            // let completedListItemEditBtn = document.querySelector(`#completedTaskListItemEditBtn-${todoTask.task.md5()}`);

                            completedListItemCheckbox.addEventListener('click', (completedEvent) => { 
                                
                                if (!completedListItemCheckbox.checked) {
                                    // update todoTask is not completed to false
                                    // then remove the list item to completed todo task pane
                                    console.log('i got false on completed todo pane.');
                                    listItemCheckbox.checked = !listItemCheckbox.checked;
                                    completedListItemElement.remove();

                                    // core functionality to incomplete task in completed task pane
                                    incompleteTodoByTask(todoTask.task);

                                    // update indexing
                                    refreshTaskIndexing();
                                } else {
                                    console.log('i got true on completed todo pane.');
                                    // i think do nothing for now.
                                }
                            });

                            completedListItemDelBtn.addEventListener('click', (completedEvent) => { 
                                // delete the todo from the storage and then delete from
                                // list item form completed todo pane and 
                                // list item from all todo pane.
                                console.log('deleting the list item form both panes completed todo pane and all todo pane.');
                                // open confirmation first then remove the item
                                modalSectionElement.innerHTML = ``;
                                if (modalSectionElement.classList.contains('display-none')) {
                                    modalSectionElement.classList.remove('display-none');
                                }
                                let deleteTaskModalElement = createDeleteTaskModalElement(todoTask);

                                modalSectionElement.appendChild(deleteTaskModalElement);

                                // update indexing
                                refreshTaskIndexing();

                                if (deleteTaskModalElement) { 
                                    let deleteModalCloseBtn = document.querySelector(`#deleteModalCloseBtn-${todoTask.task.md5()}`);
                                    let deleteModalCancelBtn = document.querySelector(`#deleteModalCancelBtn-${todoTask.task.md5()}`);
                                    let deleteModalConfirmBtn = document.querySelector(`#deleteModalConfirmBtn-${todoTask.task.md5()}`);

                                    deleteModalConfirmBtn.addEventListener('click', (e) => { 
                                        // delete the list item from both pane
                                        // delete todoTask from storage
                                        completedListItemElement.remove();
                                        listItemElement.remove();
                                        
                                        // delete confirm Delete Model Element
                                        deleteTaskModalElement.remove();

                                        // core functionality to delete task in completed todo pane
                                        // let index = getTodoByTask(todoTask.task);
                                        // deleteTodo(index);
                                        deleteTodoByTask(todoTask.task);

                                        // update indexing
                                        refreshTaskIndexing();

                                        modalSectionElement.classList.add('display-none');
                                    });
                                    deleteModalCancelBtn.addEventListener('click', (e) => { 
                                        deleteTaskModalElement.remove();
                                        modalSectionElement.classList.add('display-none');
                                    });
                                    deleteModalCloseBtn.addEventListener('click', (e) => { 
                                        deleteTaskModalElement.remove();
                                        modalSectionElement.classList.add('display-none');
                                    });
                                }
                            });

                            // Note:: Todo can't edit task if the task is marked as completed. 
                            // completedListItemEditBtn.addEventListener('click', (completedEvent) => {
                            //     /=/ update the todo task from storage and then
                            //     /=/ update UI text from all todo list item pane
                            // });
                        }
                    } else {
                        // update todoTask is completed to false
                        // then remove the list item to completed todo task pane
                        console.log('i got false');
                        let completedListItemElement = document.querySelector(`#completedTasklistItem-${todoTask.task.md5()}`);

                        if (completedListItemElement) {
                            completedListItemElement.remove();
                        }
                        // core funcationality to incomplete Task
                        incompleteTodoByTask(todoTask.task);

                        // update indexing
                        refreshTaskIndexing();
                    }
                });

                listItemDelBtn.addEventListener('click', (e) => { 
                    // delete the list item and also delete from list item from completed pane if task is contains on that pane
                    // then remove the todo from the storage
                    console.log(`try to delete ${todoTask.task}`);

                    // create new modal to ask for delete task.
                    modalSectionElement.innerHTML = ``;
                    if (modalSectionElement.classList.contains('display-none')) {
                        modalSectionElement.classList.remove('display-none');
                    }
                    let deleteTaskModalElement = createDeleteTaskModalElement(todoTask);

                    modalSectionElement.appendChild(deleteTaskModalElement);

                    // update indexing
                    refreshTaskIndexing();

                    if (deleteTaskModalElement) { 
                        let deleteModalCloseBtn = document.querySelector(`#deleteModalCloseBtn-${todoTask.task.md5()}`);
                        let deleteModalCancelBtn = document.querySelector(`#deleteModalCancelBtn-${todoTask.task.md5()}`);
                        let deleteModalConfirmBtn = document.querySelector(`#deleteModalConfirmBtn-${todoTask.task.md5()}`);

                        deleteModalConfirmBtn.addEventListener('click', (e) => { 
                            // delete the list item from both pane
                            // delete todoTask from storage
                            listItemElement.remove();
                            let citem = document.querySelector(`#completedTasklistItem-${todoTask.task.md5()}`);
                            if (citem != null) {
                                citem.remove();
                            }
                            // delete confirm Delete Model Element
                            deleteTaskModalElement.remove();

                            // core functionality to delete task
                            // let index = getTodoByTask(todoTask.task);
                            // deleteTodo(index);
                            deleteTodoByTask(todoTask.task);

                            // update indexing
                            refreshTaskIndexing();

                            modalSectionElement.classList.add('display-none');
                        });
                        deleteModalCancelBtn.addEventListener('click', (e) => { 
                            deleteTaskModalElement.remove();
                            modalSectionElement.classList.add('display-none');
                        });
                        deleteModalCloseBtn.addEventListener('click', (e) => { 
                            deleteTaskModalElement.remove();
                            modalSectionElement.classList.add('display-none');
                        });
                    }

                });

                // listItemEditBtn.addEventListener('click', (e) => { 
                    // update the list item and also update from list item from completed pane if task is contains on that pane
                    // then update the todo from the storage.
                    // console.log(`try to edit ${todoTask.task}`);
                    // let labelElement = document.querySelector(`label[for="allTasklistItemCheck-${todoTask.task.md5()}"]`);
                    // console.log('labelElement:', labelElement);

                    // create new Modal to ask for edit task
                // });
            }

            createTodoInputElement.value = "";
        } else {
            console.error(`Task is already exist, so can't create object for the given task.`);
            // make UI alert for todo is already exist.
            modalSectionElement.innerHTML = ``;
            if (modalSectionElement.classList.contains('display-none')) {
                modalSectionElement.classList.remove('display-none');
            }

            let duplicateModalElement = createDuplicateNotificationTaskModalElement(inputText);
            modalSectionElement.appendChild(duplicateModalElement);

            let duplicateOkayBtn = document.getElementById(`duplicateEntry-${inputText.md5()}`);
            if (duplicateOkayBtn) {
                duplicateOkayBtn.addEventListener('click', (btnEvent) => { 
                    modalSectionElement.innerHTML = ``;
                    modalSectionElement.classList.add('display-none');
                });
            }
        }
    } else {
        console.warn('Please fill out the Text field to create new Todo.');
    }
});

// listener for the `completeAllTasksElement` (id of span button UI Element)
completeAllTasksElement.addEventListener('click', (e) => { 
    
    // core functionality to mark all task as completed
    completeAllTodos();
    
    let todoTasks = getTodos();
    let taskListItemElements = [];
    completedTodosTaskListElement.innerHTML = ``;
    todoTasks.forEach((todoTask) => { 
        let tempElement = document.getElementById(`allTasklistItemCheck-${todoTask.task.md5()}`);
        taskListItemElements.push(tempElement);
        
        tempElement.checked = true;

        let listItemElement = document.getElementById(`allTasklistItem-${todoTask.task.md5()}`);

        let listItemCheckbox = document.querySelector(`#allTasklistItemCheck-${todoTask.task.md5()}`);

        // let checkItemIsCompleted = document.getElementById(`completedTasklistItem-${todoTask.task.md5()}`);

        let completedTempElement = createCompletedTodoListItemElement(todoTask);
        // completedTodosTaskListElement.appendChild(completedTempElement);
        if (completedTempElement) {
            completedTodosTaskListElement.appendChild(completedTempElement);

            // update indexing
            refreshTaskIndexing();

            // create completed todo task event listeners.
            let completedListItemCheckbox = document.querySelector(`#completedTasklistItemCheck-${todoTask.task.md5()}`);
            let completedListItemDelBtn = document.querySelector(`#completedTaskListItemDelBtn-${todoTask.task.md5()}`);

            completedListItemCheckbox.addEventListener('click', (completedEvent) => { 
                
                if (!completedListItemCheckbox.checked) {
                    // update todoTask is not completed to false
                    // then remove the list item to completed todo task pane
                    console.log('i got false on completed todo pane.');
                    listItemCheckbox.checked = !listItemCheckbox.checked;
                    completedTempElement.remove();

                    // core functionality to incomplete task in completed task pane
                    incompleteTodoByTask(todoTask.task);

                    // update indexing
                    refreshTaskIndexing();

                } else {
                    console.log('i got true on completed todo pane.');
                    // i think do nothing for now.
                }
            });

            completedListItemDelBtn.addEventListener('click', (completedEvent) => {
                // delete the todo from the storage and then delete from
                // list item form completed todo pane and 
                // list item from all todo pane.
                console.log('deleting the list item form both panes completed todo pane and all todo pane.');
                // open confirmation first then remove the item
                modalSectionElement.innerHTML = ``;
                if (modalSectionElement.classList.contains('display-none')) {
                    modalSectionElement.classList.remove('display-none');
                }
                let deleteTaskModalElement = createDeleteTaskModalElement(todoTask);

                modalSectionElement.appendChild(deleteTaskModalElement);

                // update indexing
                refreshTaskIndexing();

                if (deleteTaskModalElement) {
                    let deleteModalCloseBtn = document.querySelector(`#deleteModalCloseBtn-${todoTask.task.md5()}`);
                    let deleteModalCancelBtn = document.querySelector(`#deleteModalCancelBtn-${todoTask.task.md5()}`);
                    let deleteModalConfirmBtn = document.querySelector(`#deleteModalConfirmBtn-${todoTask.task.md5()}`);

                    deleteModalConfirmBtn.addEventListener('click', (e) => {
                        // delete the list item from both pane
                        // delete todoTask from storage
                        completedTempElement.remove();
                        listItemElement.remove();
                        
                        // delete confirm Delete Model Element
                        deleteTaskModalElement.remove();

                        // core functionality to delete task in completed todo pane
                        // let index = getTodoByTask(todoTask.task);
                        // deleteTodo(index);
                        deleteTodoByTask(todoTask.task);

                        // update indexing
                        refreshTaskIndexing();

                        modalSectionElement.classList.add('display-none');
                    });
                    deleteModalCancelBtn.addEventListener('click', (e) => {
                        deleteTaskModalElement.remove();
                        modalSectionElement.classList.add('display-none');
                    });
                    deleteModalCloseBtn.addEventListener('click', (e) => {
                        deleteTaskModalElement.remove();
                        modalSectionElement.classList.add('display-none');
                    });
                }
            });
        }
    });

    console.info(`taskListItemElements::`, taskListItemElements);

});

// listener for the `clearCompletedTaskElement` (id of span button UI Element) 
clearCompletedTaskElement.addEventListener('click', (e) => { 
    console.info(`clearing all completed task.`);
    let completedTodoTasks = getTodos(true);
    console.log('completed todo::', completedTodoTasks);
    completedTodoTasks.forEach(todoTask => {
        let allTodoListItem = document.getElementById(`allTasklistItem-${todoTask.task.md5()}`);

        let completedTodoListItem = document.getElementById(`completedTasklistItem-${todoTask.task.md5()}`);

        allTodoListItem.remove();
        completedTodoListItem.remove();
    });

    // core functionality to clear completed todo task.
    clearCompletedTodos();

    // update indexing
    refreshTaskIndexing();
});

// ====================== application functions ======================

// function to create new Todo List inside `allTodosTasksList`(id of ul element) Item on UI
// as given following below example
/*
    <li class="list-group-item" id="allTasklistItem-${todoHash}">
        <div class="d-flex w-100 justify-content-between">
            <div class="list-item-padding w-100 d-flex justify-content-between">
                <span>
                    <input class="form-check-input me-1"type="checkbox" value="todoTask.completed"
                        id="allTasklistItemCheck-${todoHash}">
                    <label class="form-check-label" for="allTasklistItemCheck-${todoHash}"
                        title="Check task to mark as completed.">${todoTask.task}</label>
                </span>
                <small>
                    <button type="button" id="allTaskListItemDelBtn-${todoHash}" class="btn btn-danger btn-sm" title="Delete"><i
                            class="fa-regular fa-trash-can"></i></button>
                    &nbsp;
                    <button type="button" id="allTaskListItemEditBtn-${todoHash}" class="btn btn-primary btn-sm" title="Edit"><i class="fa-regular fa-pen-to-square"></i></button>
                </small>
            </div>
        </div>
    </li>
*/
// function takes one argument that is `todoTask` task List object
//      returns the listItem HTML element or null
function createTodoTaskListItemElement(todoTask) {
    if (todoTask != null) {
        console.log('creating All pane List li for', todoTask);
        let task = todoTask.task;
        let isTodoCompleted = todoTask.completed;
        // let toHashString = todoTask.task + Date.now().toString();
        let todoHash = todoTask.task.md5();

        // creating li
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.id = `allTasklistItem-${todoHash}`;
        console.log('list item li id:', listItem.id);

        listItem.innerHTML =
            `<div class="d-flex w-100 justify-content-between">
                <div class="list-item-padding w-100 d-flex justify-content-between align-items-center">
                    <span class="d-flex align-items-center">
                        <input class="form-check-input me-1" type="checkbox" value="${isTodoCompleted}"
                            id="allTasklistItemCheck-${todoHash}">
                        <label class="form-check-label text-capitalize list-item-label" for="allTasklistItemCheck-${todoHash}"
                            title="Check task to mark as completed.">${task}</label>
                    </span>
                    <small>
                        <button type="button" id="allTaskListItemDelBtn-${todoHash}" class="btn btn-danger btn-sm" title="Delete"><i
                                class="fa-regular fa-trash-can"></i></button>
                        <!-- &nbsp;
                        <button type="button" id="allTaskListItemEditBtn-${todoHash}" class="btn btn-primary btn-sm" title="Edit"><i class="fa-regular fa-pen-to-square"></i></button> -->
                    </small>
                </div>
            </div>`;
        
        return listItem;

    } else {
        console.error(`All List item for ${todoTask} can't be created.`);

        return null;
    }
}


// function to create new Todo List inside `completedTodosTasksList`(id of ul element) Item on UI
// as given following below example
/*
    <li class="list-group-item" id="completedTasklistItem-${todoHash}">
        <div class="d-flex w-100 justify-content-between">
            <div class="list-item-padding w-100 d-flex justify-content-between">
                <span>
                    <input class="form-check-input me-1"type="checkbox" checked value="todoTask.completed"
                        id="completedTasklistItemCheck-${todoHash}">
                    <label class="form-check-label" for="completedTasklistItemCheck-${todoHash}"
                        title="Check task to mark as completed.">${todoTask.task}</label>
                </span>
                <small>
                    <button type="button" id="completedTaskListItemDelBtn-${todoHash}" class="btn btn-danger btn-sm" title="Delete"><i
                            class="fa-regular fa-trash-can"></i></button>
                    &nbsp;
                    <button type="button" id="completedTaskListItemEditBtn-${todoHash}" class="btn btn-primary btn-sm" title="Edit"><i
                            class="fa-regular fa-pen-to-square"></i></button>
                </small>
            </div>
        </div>
    </li>
*/
// function takes one argument that is `todoTask` task List object
//      returns the Completed ListItem HTML Element or null
function createCompletedTodoListItemElement(todoTask) {
    if (todoTask != null) { 
        console.log('creating Completed pane List li for', todoTask);
        let task = todoTask.task;
        let isTodoCompleted = todoTask.completed;
        // let toHashString = todoTask.task + Date.now().toString();
        let todoHash = todoTask.task.md5();

        // creating li
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.id = `completedTasklistItem-${todoHash}`;
        console.log('list item li id:', listItem.id);

        listItem.innerHTML =
            `<div class="d-flex w-100 justify-content-between">
                <div class="list-item-padding w-100 d-flex justify-content-between align-items-center">
                    <span class="d-flex align-items-center">
                        <input class="form-check-input me-1" type="checkbox" checked value="${isTodoCompleted}"
                            id="completedTasklistItemCheck-${todoHash}">
                        <label class="form-check-label text-capitalize list-item-label" for="completedTasklistItemCheck-${todoHash}"
                            title="Uncheck task to mark as incompleted.">${task}</label>
                    </span>
                    <small>
                        <button type="button" id="completedTaskListItemDelBtn-${todoHash}" class="btn btn-danger btn-sm" title="Delete"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </small>
                </div>
            </div>`;
        
        return listItem;
    } else { 
        console.error(`Completed List item for ${todoTask} can't be created.`);
        return null;
    }
}


// function to create Model to delete todo Task inside `modalSection` (div element) on UI
// as given following below example
/*
    <div id="deleteModalConatainer">
        <div class="todo-model">
            <div class="model-header">
                <h2>Delete Task</h2>
                <div class="close-btn btn-danger"><i class="fa fa-close"></i></div>
            </div>
            <div class="model-container">
                <form action="#" method="GET">
                    <div class="row">
                        <span>Are You sure to Delete Task?</span>
                    </div>
                    <div class="model-action-buttons">
                        <button type="button" class="btn btn-secondary">Cancel</button>
                        <button type="submit" class="btn btn-danger" id="confirmDeleteTaskBtn">Yes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
*/
// function takes one argument that `todoTask` task list Object
//      returns Confirm Model HTML Element or null
function createDeleteTaskModalElement(todoTask) {
    if (todoTask != null) {
        console.log('creating Confirm Delete Modal for', todoTask);
        let task = todoTask.task;
        let todoHash = todoTask.task.md5();

        // creating Modal div
        let deleteModal = document.createElement('div');
        deleteModal.id = `deleteModalContainer-${todoHash}`;
        console.log(`deleteModalContainer id:: ${todoHash}`);

        deleteModal.innerHTML =
            `<div class="todo-model">
                <div class="model-header">
                    <h2>Delete Task</h2>
                    <div id="deleteModalCloseBtn-${todoHash}" class="close-btn btn-danger"><i class="fa fa-close"></i></div>
                </div>
                <div class="model-container">
                    <div class="row">
                        <span>Are You sure to Delete Task?</span>
                    </div>
                    <div class="task-row">
                        <span class="text-capitalize"><strong>${task}</strong></span>
                    </div>
                    <div class="model-action-buttons">
                        <button type="button" class="btn btn-secondary" id="deleteModalCancelBtn-${todoHash}">Cancel</button>
                        <button type="submit" class="btn btn-danger" id="deleteModalConfirmBtn-${todoHash}">Yes</button>
                    </div>
                </div>
            </div>`;
        
        return deleteModal;

    } else {
        console.error(`Confirm DeleteModal ${todoTask} can't be created.`);
        return null;
    }
}

// function to create Modal to Notify todo Task inside `modalSection` (div element) on UI
// as given following below example
/*
    <div id="duplicateModalContainer">
        <div class="todo-model">
            <div class="model-header-center">
                <h2 class="text-center">Duplicate Entry</h2>
            </div>
            <div class="model-container">
                <form action="#" method="GET">
                    <div class="row">
                        <span>The Task is already exist. please complete the existing Task first.</span>
                    </div>
                    <div class="model-action-buttons">
                        <button type="button" class="btn btn-warning">Okay</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
*/

function createDuplicateNotificationTaskModalElement(todoTaskString) {
    if (todoTaskString != null) {
        console.log(`creating duplicate notify for ${todoTaskString}`);
        let todoHash = todoTaskString.md5();

        let duplicateNotifyModal = document.createElement('div');
        duplicateNotifyModal.id = `duplicateModalContainer-${todoHash}`;

        duplicateNotifyModal.innerHTML =
            `<div class="todo-model">
                <div class="model-header-center">
                    <h2 class="text-center">Duplicate Entry</h2>
                </div>
                <div class="model-container">
                    <form action="#" method="GET">
                        <div class="row">
                            <span>The Task is already exist. please complete the existing Task first.</span>
                        </div>
                        <div class="model-action-buttons">
                            <button id="duplicateEntry-${todoHash}" type="button" class="btn btn-warning">Okay</button>
                        </div>
                    </form>
                </div>
            </div>`;
        
        return duplicateNotifyModal;
    } else {
        console.error(`Duplicate Notification for ${todoTaskString} can't be created.`);
        return null;
    }
}

// Function to update or refresh the indexing
function refreshTaskIndexing() {
    totalTodoTasks = getTodos().length;
    totalCompletedTodoTasks = getTodos(true).length;
    totalPendingTodoTasks = totalTodoTasks - totalCompletedTodoTasks > 0 ? totalTodoTasks - totalCompletedTodoTasks : 0;

    totalTodoTasksElement.textContent = totalTodoTasks;
    totalPendingTasksElement.textContent = totalPendingTodoTasks;
    totalCompletedTasksElement.textContent = totalCompletedTodoTasks;
}

// ==================== intial function calls ====================
refreshTaskIndexing();


// IF you want to manage previous data then update/complete and optimize the following code.
/*
window.onload = (e) => { 
    let todoTasks = getTodos();
    console.info(`stored data:`, todoTasks);

    todoTasks.forEach((todoTask) => {
        let listItemElement = createTodoTaskListItemElement(todoTask);

        // if (listItemElement) {
        //     allTodosTasksListElement.appendChild(listItemElement);
        // }

        if (listItemElement) {
            allTodosTasksListElement.appendChild(listItemElement);
            // updating the index
            refreshTaskIndexing();

            let listItemCheckbox = document.querySelector(`#allTasklistItemCheck-${todoTask.task.md5()}`);
            // let listItemLabel = document.querySelector(`label[for="allTasklistItemCheck-${todoTask.task.md5()}"]`);
            let listItemDelBtn = document.querySelector(`#allTaskListItemDelBtn-${todoTask.task.md5()}`);
            // let listItemEditBtn = document.querySelector(`#allTaskListItemEditBtn-${todoTask.task.md5()}`);

            
            listItemCheckbox.addEventListener('click', (e) => { 
                
                // NOTE:: Nn creatation/deletion of the list item for the current todotask object
                //        must follow the all<-> to completed<-> elements ids 
                if (listItemCheckbox.checked) {
                    // update todoTask is completed to true
                    // then add the list item to completed todo task pane
                    console.log('i got true.');
                    let completedListItemElement = createCompletedTodoListItemElement(todoTask);

                    // core functionality to complete task
                    completeTodoByTask(todoTask.task);

                    if (completedListItemElement) {
                        completedTodosTaskListElement.appendChild(completedListItemElement);

                        // update the indexing
                        refreshTaskIndexing();

                        // create completed todo task event listeners.
                        let completedListItemCheckbox = document.querySelector(`#completedTasklistItemCheck-${todoTask.task.md5()}`);
                        let completedListItemDelBtn = document.querySelector(`#completedTaskListItemDelBtn-${todoTask.task.md5()}`);
                        // Note:: Todo can't edit task if the task is marked as completed. 
                        // let completedListItemEditBtn = document.querySelector(`#completedTaskListItemEditBtn-${todoTask.task.md5()}`);

                        completedListItemCheckbox.addEventListener('click', (completedEvent) => { 
                            
                            if (!completedListItemCheckbox.checked) {
                                // update todoTask is not completed to false
                                // then remove the list item to completed todo task pane
                                console.log('i got false on completed todo pane.');
                                listItemCheckbox.checked = !listItemCheckbox.checked;
                                completedListItemElement.remove();

                                // core functionality to incomplete task in completed task pane
                                incompleteTodoByTask(todoTask.task);

                                // update indexing
                                refreshTaskIndexing();
                            } else {
                                console.log('i got true on completed todo pane.');
                                // i think do nothing for now.
                            }
                        });

                        completedListItemDelBtn.addEventListener('click', (completedEvent) => { 
                            // delete the todo from the storage and then delete from
                            // list item form completed todo pane and 
                            // list item from all todo pane.
                            console.log('deleting the list item form both panes completed todo pane and all todo pane.');
                            // open confirmation first then remove the item
                            modalSectionElement.innerHTML = ``;
                            if (modalSectionElement.classList.contains('display-none')) {
                                modalSectionElement.classList.remove('display-none');
                            }
                            let deleteTaskModalElement = createDeleteTaskModalElement(todoTask);

                            modalSectionElement.appendChild(deleteTaskModalElement);

                            // update indexing
                            refreshTaskIndexing();

                            if (deleteTaskModalElement) { 
                                let deleteModalCloseBtn = document.querySelector(`#deleteModalCloseBtn-${todoTask.task.md5()}`);
                                let deleteModalCancelBtn = document.querySelector(`#deleteModalCancelBtn-${todoTask.task.md5()}`);
                                let deleteModalConfirmBtn = document.querySelector(`#deleteModalConfirmBtn-${todoTask.task.md5()}`);

                                deleteModalConfirmBtn.addEventListener('click', (e) => { 
                                    // delete the list item from both pane
                                    // delete todoTask from storage
                                    completedListItemElement.remove();
                                    listItemElement.remove();
                                    
                                    // delete confirm Delete Model Element
                                    deleteTaskModalElement.remove();

                                    // core functionality to delete task in completed todo pane
                                    // let index = getTodoByTask(todoTask.task);
                                    // deleteTodo(index);
                                    deleteTodoByTask(todoTask.task);

                                    // update indexing
                                    refreshTaskIndexing();

                                    modalSectionElement.classList.add('display-none');
                                });
                                deleteModalCancelBtn.addEventListener('click', (e) => { 
                                    deleteTaskModalElement.remove();
                                    modalSectionElement.classList.add('display-none');
                                });
                                deleteModalCloseBtn.addEventListener('click', (e) => { 
                                    deleteTaskModalElement.remove();
                                    modalSectionElement.classList.add('display-none');
                                });
                            }
                        });

                        // Note:: Todo can't edit task if the task is marked as completed. 
                        // completedListItemEditBtn.addEventListener('click', (completedEvent) => {
                        //     /=/ update the todo task from storage and then
                        //     /=/ update UI text from all todo list item pane
                        // });
                    }
                } else {
                    // update todoTask is completed to false
                    // then remove the list item to completed todo task pane
                    console.log('i got false');
                    let completedListItemElement = document.querySelector(`#completedTasklistItem-${todoTask.task.md5()}`);

                    if (completedListItemElement) {
                        completedListItemElement.remove();
                    }
                    // core funcationality to incomplete Task
                    incompleteTodoByTask(todoTask.task);

                    // update indexing
                    refreshTaskIndexing();
                }
            });

            listItemDelBtn.addEventListener('click', (e) => { 
                // delete the list item and also delete from list item from completed pane if task is contains on that pane
                // then remove the todo from the storage
                console.log(`try to delete ${todoTask.task}`);

                // create new modal to ask for delete task.
                modalSectionElement.innerHTML = ``;
                if (modalSectionElement.classList.contains('display-none')) {
                    modalSectionElement.classList.remove('display-none');
                }
                let deleteTaskModalElement = createDeleteTaskModalElement(todoTask);

                modalSectionElement.appendChild(deleteTaskModalElement);

                // update indexing
                refreshTaskIndexing();

                if (deleteTaskModalElement) { 
                    let deleteModalCloseBtn = document.querySelector(`#deleteModalCloseBtn-${todoTask.task.md5()}`);
                    let deleteModalCancelBtn = document.querySelector(`#deleteModalCancelBtn-${todoTask.task.md5()}`);
                    let deleteModalConfirmBtn = document.querySelector(`#deleteModalConfirmBtn-${todoTask.task.md5()}`);

                    deleteModalConfirmBtn.addEventListener('click', (e) => { 
                        // delete the list item from both pane
                        // delete todoTask from storage
                        listItemElement.remove();
                        let citem = document.querySelector(`#completedTasklistItem-${todoTask.task.md5()}`);
                        if (citem != null) {
                            citem.remove();
                        }
                        // delete confirm Delete Model Element
                        deleteTaskModalElement.remove();

                        // core functionality to delete task
                        // let index = getTodoByTask(todoTask.task);
                        // deleteTodo(index);
                        deleteTodoByTask(todoTask.task);

                        // update indexing
                        refreshTaskIndexing();

                        modalSectionElement.classList.add('display-none');
                    });
                    deleteModalCancelBtn.addEventListener('click', (e) => { 
                        deleteTaskModalElement.remove();
                        modalSectionElement.classList.add('display-none');
                    });
                    deleteModalCloseBtn.addEventListener('click', (e) => { 
                        deleteTaskModalElement.remove();
                        modalSectionElement.classList.add('display-none');
                    });
                }

            });

            // listItemEditBtn.addEventListener('click', (e) => { 
                // update the list item and also update from list item from completed pane if task is contains on that pane
                // then update the todo from the storage.
                // console.log(`try to edit ${todoTask.task}`);
                // let labelElement = document.querySelector(`label[for="allTasklistItemCheck-${todoTask.task.md5()}"]`);
                // console.log('labelElement:', labelElement);

                // create new Modal to ask for edit task
            // });
        }
    });
} 
*/


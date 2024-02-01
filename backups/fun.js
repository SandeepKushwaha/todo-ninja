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

function execute() {
    const myTodoList = new TodoList();

    // Add some initial todos
    myTodoList.addTodo('Task 1');
    myTodoList.addTodo('Task 2');
    myTodoList.addTodo('Task 3');

    // Print all todos
    console.log('All Todos:');
    console.log(myTodoList.getAllTodos());

    // Edit two todos simultaneously
    myTodoList.editTodo(myTodoList.getTodoByTodoValue('Task 1').id, 'Updated Task 1');
    myTodoList.editTodo(myTodoList.getTodoByTodoValue('Task 2').id, 'Updated Task 2');

    // Print all todos after editing
    console.log('All Todos after Editing:');
    console.log(myTodoList.getAllTodos());

    // Edit one more todo
    myTodoList.editTodo(myTodoList.getTodoByTodoValue('Task 3').id, 'Updated Task 3');

    // Print all todos again
    console.log('All Todos after More Editing:');
    console.log(myTodoList.getAllTodos());
}

execute()
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
        let todoItem = {
            id: this.generateUniqueId(),
            todo,
            completed,
        };
        this.todos.push(todoItem);
        return todoItem;
    }

    editTodo(id, updatedTodoStr) {
        const index = this.todos.findIndex((todo) => todo.id === id)
        let tempTodo = this.getTodo(id);

        if (tempTodo) {
            tempTodo.todo = updatedTodoStr;
            this.todos[index] = tempTodo;
            console.log('updated todo:: ', tempTodo);
        } else {
            console.log(`Todo String:: ${updatedTodoStr} can't be update on id ${id}`);
        }
        
        // let todoToUpdate = this.getTodo(id);
        // let newUpdatedTodo = todoToUpdate;
        // console.log('try to update todo core::');
        // console.log('existing todo: ', todoToUpdate);
        // console.log('updatedTodo by UI: ', updatedTodoStr);

        // if (todoToUpdate) {
        //     if ()
                
        //     else
        //         console.log(`can't update the todo because of same string`);
        //     console.log('updated existing todo: ', todoToUpdate);
        // } else {
        //     console.log(`Todo String:: ${updatedTodoStr} can't be update on id ${id}`);
        // }
    }

    deleteTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        let deletedItem;
        if (this.todos.length >= index) {
            deletedItem = this.todos[index];
            this.todos.splice(index, 1);
        } else {
            deletedItem = null;
        }

        return deletedItem;
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
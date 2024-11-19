import TodoModel from "../models/todo.model";//taskitem
import TodoService from "../services/todo.service";//tasklist

export default class TodoController {
    // this.service = service;
    // this.view = view;

    private _todoList: TodoService = new TodoService();

    constructor() {
        this.loadTodo();
    }

    getTodoList(): TodoModel[] {
        return this._todoList.todos;
    }

    addTodo(newTask: TodoModel): void {
        this._todoList.addTodo(newTask);
    }

    deleteTodo(taskId: string): void {
        this._todoList.deleteTodo(taskId);
    }

    editTodo(taskId: string, updatedTaskText: string): void {
        this._todoList.editTodo(taskId, updatedTaskText);
    }

    clearTodo(): void {
        this._todoList.clearTodos();
    }

    loadTodo(): void {
        // this._todoList.load();
        this._todoList;
    }

    saveTodo(): void {
        this._todoList._commit();
    }

    toggleTodoChange(taskId: string): void {
        this._todoList.toggleTodo(taskId);
    }
}
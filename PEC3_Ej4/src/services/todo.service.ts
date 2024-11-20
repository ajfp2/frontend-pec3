/**
 * @class Service
 *
 * Manages the data of the application.
 */

import TodoModel from "../models/todo.model";

export default class TodoService {

    private _todos: TodoModel[] = [];

    constructor() {
        const storedTasks: string|null = localStorage.getItem("todos");
        if (!storedTasks) return;
     
        const parsedTaskList = JSON.parse(storedTasks);

        parsedTaskList.forEach((taskObj: TodoModel) => {
          const newTaskList = new TodoModel(
            taskObj.id,
            taskObj.text,
            taskObj.complete
          );

          this.addTodo(newTaskList);
        });
    }

    get todos(): TodoModel[] {
        return this._todos;
    }
    
    _commit() {
    //   this.onTodoListChanged(todos);
      localStorage.setItem("todos", JSON.stringify(this._todos));
    }

    clearTodos(): void {
        this._todos = [];
        localStorage.removeItem("todos");
    }

    addTodo(todo: TodoModel) {
        this._todos.push(todo);
        this._commit();
    }
  
    editTodo(id: string, updatedText: string) {
        if (updatedText.trim() === "") return;
        const taskToUpdate = this._todos.find((task) => task.id === id);
        if (!taskToUpdate) return;
        taskToUpdate.text = updatedText;
        // this.save();
        this._commit();
    }
  
    deleteTodo(_id: string) {
        this._todos = this.todos.filter(({ id }) => id !== _id);  
        this._commit();
    }
  
    toggleTodo(_id: string) {
        const taskToUpdateChange = this._todos.find((task) => task.id === _id);
        if (!taskToUpdateChange) return;
        taskToUpdateChange.complete = !taskToUpdateChange.complete;
        this._commit();
    }
  }
  
/**
 * @class Service
 *
 * Manages the data of the application.
 */

import TodoModel from "../models/todo.model";

export default class TodoService {

    private _todos: TodoModel[] = [];

    constructor() {
      const storedTasks: string | null = localStorage.getItem("todos");
        if (!storedTasks) return;
     
        const parsedTaskList: {
          _id: string;
          _text: string;
          _complete: boolean;
        }[] = JSON.parse(storedTasks);

        parsedTaskList.forEach((taskObj) => {
          const newTaskList = new TodoModel(
            taskObj._id,
            taskObj._text,
            taskObj._complete
          );
     
          this.addTodo(newTaskList);
        });
    }

    get todos(): TodoModel[] {
        return this._todos;
      }
  
    bindTodoListChanged(callback) {
    //   this.onTodoListChanged = callback;
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
  
    editTodo(id, updatedText) {
        if (updatedText.trim() === "") return;
        const taskToUpdate = this._todos.find((task) => task.id === id);
        if (!taskToUpdate) return;
        taskToUpdate.text = updatedText;
        // this.save();
        this._commit();
    }
  
    deleteTodo(_id) {
        this._todos = this.todos.filter(({ id }) => id !== _id);  
        this._commit();
    }
  
    toggleTodo(_id) {
        const taskToUpdateChange = this._todos.find((task) => task.id === _id);
        if (!taskToUpdateChange) return;
        taskToUpdateChange.complete = !taskToUpdateChange.complete;
        this._commit();
    }
  }
  
import TodoModel from "./models/todo.model";
import TodoController from "./controllers/todo.controller";
import TodoView from "./views/todo.view";

//npm install uuid
//import { v4 as uuid } from "uuid";
// https://p-blog.online/668d291bc61f9d5a320a0622? -- ok
// https://medium.com/@sixtocode/to-do-list-with-vanilla-typescript-1ec25d4af9a0
// https://medium.com/analytics-vidhya/todolist-typescript-67a324604cb5
// https://learning.oreilly.com/videos/understanding-typescript/9781789951905/9781789951905-video11_1/

// const app = new TodoController(new TodoService(), new TodoView());
console.log("TS POR AQUII");

const taskListController = new TodoController();
const taskListView = new TodoView(taskListController);

const initApp = () => {
    const allTask = taskListController.getTodoList();
    taskListView.displayTodos(allTask);
  };
  
  initApp();
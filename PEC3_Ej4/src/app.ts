import TodoModel from "./models/todo.model";
import TodoController from "./controllers/todo.controller";
import TodoView from "./views/todo.view";


const taskListController = new TodoController();
const taskListView = new TodoView(taskListController);

const initApp = () => {
    const allTask = taskListController.getTodoList();
    taskListView.displayTodos(allTask);
};

initApp();
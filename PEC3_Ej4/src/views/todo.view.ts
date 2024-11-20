import TodoController from '../controllers/todo.controller';
import TodoModel from '../models/todo.model';


interface DOMList {
  clear(): void;
  displayTodos(allTask: TodoModel[]): void;
}


/**
 * @class View
 *
 * Visual representation of the view.
 */


export default class TodoView implements DOMList {

	private app: HTMLElement;
	private todoList: HTMLElement;
	private form: HTMLElement;
	private input: HTMLInputElement;
	private submitButton: HTMLButtonElement;
	private title: HTMLElement;
	private _temporaryTodoText = "";
	private todoListController: TodoController;

	constructor(_todoListController: TodoController) {
		this.todoListController = _todoListController;
		this.app = this.getElement("#root");
		this.form = this.createElement("form");
		this.input = this.createInput("Añadir Tarea", "todo", "todo", "input");
      	this.input.name = "todo";

		this.submitButton = this.createButton("Añadir", "btnAdd");
		this.form.append(this.input, this.submitButton);

		this.title = this.createElement("h1", "titleID");
		this.title.textContent = "Lista Tareas";
		this.todoList = this.createElement("ul", "todo-list");
		this.app.append(this.title, this.form, this.todoList);

	  	
	  this._initLocalListeners();

		if (!this.todoList)
			throw new Error("Error- No se ha podido encontrar el elemento ul en el html.");
	}
		
  
    get _todoText() {
      return this.input.value;
    }

	private getElement(selector: string): HTMLElement {
		const element: HTMLElement = document.querySelector(selector) as HTMLElement;
		return element;
    }

	private createElement(tag: string, id = "", className = ""): HTMLElement {
		const element: HTMLElement = document.createElement(tag);
		if (className) element.classList.add(className);
		if (id) element.id = id;
		return element;
    }

	private createInput(txt: string, id = "", className = "", type = ""): HTMLInputElement {
        const inputBox = document.createElement("input") as HTMLInputElement;
		if (className) inputBox.classList.add(className);
		if (id) inputBox.id = id;
		if (type) inputBox.type = type;
		inputBox.placeholder = txt;
        return inputBox;
    }

	private createButton(text: string, id = "", className = ""): HTMLButtonElement {
        const btnButton = document.createElement("button") as HTMLButtonElement;
		if (className) btnButton.classList.add(className);
		if (id) btnButton.id = id;
		btnButton.textContent = text;
        return btnButton;
    }

	private createSpan(className: string, editable: string): HTMLSpanElement {
		const span = document.createElement("span") as HTMLSpanElement;
		if (className) span.classList.add(className);
		span.contentEditable = editable;
        return span;
	}
  
    private _resetInput() {
      this.input.value = "";
    }    

	private _initLocalListeners() {
		this.todoList.addEventListener("input", (event: any) => {
		  if (event.target.className === "editable") {
			this._temporaryTodoText = event.target.innerText;
		  }
		});

		//Eventos
		this.addTodo();
		this.deleteTodo();
		this.editTodo();
		this.toggleTodo();

	}

	displayTodos(todos: TodoModel[]):void {
		// Delete all nodes
		this.clear();
  
		// Show default message
		if (todos.length === 0) {
			const p = this.createElement("p");
			p.textContent = "Nada que hacer! Quieres Añadir una Tarea?";
			this.todoList.append(p);
		} else {
			// Create nodes
			todos.forEach(todo => {
				const li = this.createElement("li");
				li.id = todo.id;
		
				const checkbox = this.createInput("", "", "", "checkbox");//(txt: string, id = "", className = "", type = "")
				checkbox.checked = todo.complete;
		
				const span = this.createSpan("editable", "true");
		
				if (todo.complete) {
					const strike = this.createElement("s");
					strike.textContent = todo.text;
					span.append(strike);
				} else {
					span.textContent = todo.text;
				}
		
				const deleteButton = this.createButton("Eliminar", "btn-"+todo.id, "delete");
				li.append(checkbox, span, deleteButton);
		
				// Append nodes
				this.todoList.append(li);
			});
      	}
  
		// Debugging
		// console.log("TS TODOS", todos);
		// console.log("veces" , TodoView.i);
    }

	addTodo() {
		this.form.addEventListener("submit", event => {
			event.preventDefault();	
			if (this._todoText) {
				this.todoListController.addTodo(new TodoModel("", this._todoText, false));
				this.displayTodos(this.todoListController.getTodoList());
				this._resetInput();
			}
		});
	}
  
    deleteTodo() {
      	this.todoList.addEventListener("click", (event: any) => {
			if (event.target.className === "delete") {
				const id = event.target.parentElement.id;
				if(id) {
					this.todoListController.deleteTodo(id);
					this.displayTodos(this.todoListController.getTodoList());
				}
			}
      	});
    }
  
    editTodo() {
      this.todoList.addEventListener("focusout", (event: any) => {
        if (this._temporaryTodoText) {
          const id = event.target.parentElement.id;
  
          this.todoListController.editTodo(id, this._temporaryTodoText);
          this._temporaryTodoText = "";
		  this.displayTodos(this.todoListController.getTodoList());
        }
      });
    }
  
    toggleTodo() {
		this.todoList.addEventListener("change", (event: any) => {
			if (event.target.type === "checkbox") {
				const id = event.target.parentElement.id;
				this.todoListController.toggleTodoChange(id);
				this.displayTodos(this.todoListController.getTodoList());
			}
		});
    }

	clear(): void {
        this.todoList.innerHTML = "";
    }
}
  
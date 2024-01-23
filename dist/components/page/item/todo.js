import { BaseComponent } from "../../component.js";
export class TodoComponent extends BaseComponent {
    constructor(title, todos) {
        super(`<section class="todo">
            <h2 class="page-item__title todo__title"></h2>  
        </section>`);
        const titleElement = this.element.querySelector(".todo__title");
        titleElement.textContent = title;
        todos.forEach((todo, index) => {
            const checkboxId = `todo-checkbox-${index}`;
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = checkboxId;
            const label = document.createElement("label");
            label.htmlFor = checkboxId;
            label.textContent = todo;
            const todoElement = document.createElement("div");
            todoElement.appendChild(checkbox);
            todoElement.appendChild(label);
            this.element.appendChild(todoElement);
        });
    }
}

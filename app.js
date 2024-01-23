import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { InputDialog, } from "./components/dialog/dialog.js";
import { VideoComponent } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog("#new-image", MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog("#new-video", MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog("#new-note", TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog("#new-todo", TextSectionInput, (input) => {
            const todos = input.body.split("\n");
            return new TodoComponent(input.title, todos);
        });
        this.page.addChild(new NoteComponent("Notice", `I have applied object-oriented programming (OOP) principles and leveraged TypeScript in this frontend projects`));
        this.page.addChild(new NoteComponent("Memo", `Henry- 02040156199, lvsy91@gmail.com`));
        this.page.addChild(new NoteComponent("Important", `Prepare client meeting about adding website functionality - Tuseday(23th) at 11am \n `));
        this.page.addChild(new VideoComponent("2023 World Champions - SKT T1", "https://www.youtube.com/watch?v=yUWjUX78SzI"));
        this.page.addChild(new ImageComponent("Put your favourite picture", "https://picsum.photos/800/400"));
        this.page.addChild(new TodoComponent("Today Task List", [
            "Stay Calm😎",
            "Drink Enough water",
        ]));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
        element.addEventListener("click", () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListenr(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector(".document"), document.body);

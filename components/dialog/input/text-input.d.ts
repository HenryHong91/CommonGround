import { TextData } from './../dialog.js';
import { BaseComponent } from './../../component.js';
export declare class TextSectionInput extends BaseComponent<HTMLElement> implements TextData {
    constructor();
    get title(): string;
    get body(): string;
}

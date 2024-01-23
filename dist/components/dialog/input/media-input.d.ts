import { MediaData } from './../dialog.js';
import { BaseComponent } from './../../component.js';
export declare class MediaSectionInput extends BaseComponent<HTMLElement> implements MediaData {
    constructor();
    get title(): string;
    get url(): string;
}

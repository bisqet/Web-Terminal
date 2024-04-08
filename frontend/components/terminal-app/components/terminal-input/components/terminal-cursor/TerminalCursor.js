import {html, LitElement} from "lit";
import {terminalCursorStyles} from "./terminalCursorStyles.css.js";

export class TerminalCursor extends LitElement {
    static styles = terminalCursorStyles;
    static properties = {
        typing: {type: Boolean},
        focused: {type: Boolean}
    };

    constructor() {
        super();
        this.typing = false;
        this.focused = false;
    }

    render() {
        return html`
            <input disabled class="${this.#getCursorClass()}">
        `;
    }
    #getCursorClass() {
        if(this.typing) {
return 'typing';
}
        if(this.focused) {
return 'focused';
}
        return '';
    }
}

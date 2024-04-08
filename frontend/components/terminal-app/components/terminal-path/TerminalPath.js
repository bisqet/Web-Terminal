import {html, LitElement} from "lit";
import {terminalPathStyles} from "./terminalPathStyles.css.js";

export class TerminalPath extends LitElement {
    static styles = terminalPathStyles;
    static properties = {
        path: {type: String}
    };

    constructor() {
        super();
        this.path = "";
    }

    render() {
        return html`
            <span>${this.path}</span><span class="spanWithDivider">$</span>
        `;
    }

}

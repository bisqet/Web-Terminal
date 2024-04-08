import {html, LitElement} from "lit";
import './components/terminal-cursor/terminal-cursor.js';
import "../terminal-path/terminal-path.js";
import {styleMap} from 'lit/directives/style-map.js';
import {terminalInputStyles} from "./terminalInputStyles.css.js";

export class TerminalInput extends LitElement {
    #input;
    #inputFontComputedStyle;
    #textWidthMeasureContext;

    static properties = {
        value: {type: String},
        inputWidth: {type: String},
        focused: {type: Boolean},
        typing: {type: Boolean},
        path: {type: String},
        cursorOffset: {type: String},
        history: {type: Array}
    };

    // noinspection CssInvalidPropertyValue
    static styles = terminalInputStyles;

    constructor() {
        super();
        this.value = '';
        this.inputWidth = '0px';
        this.cursorOffset = "0ch";
        this.focused = false;
        this.typing = false;
        this.path = "";
        this.history = [];
    }



    render() {
        console.log('render TerminalInput');
        return html`
            <label for="input">
                <terminal-path .path="${this.path}"></terminal-path>
                <input tabindex="1" id="input" type="text" .value="${this.value}"
                       style=${styleMap({width: this.inputWidth})}
                       @input="${this.#handleInput}" @keydown="${this.#handleKeyDown}">
                <terminal-cursor .typing=${this.typing} .focused=${this.focused} style=${styleMap({right: this.cursorOffset})}></terminal-cursor>
            </label>
        `;
    }

    #handleInput() {
        this.value = this.#input.value;
        this.#setTyping();
        this.#recalculateCursorOffset();
    }

    #subscribeOnInputChange() {
        document.addEventListener("selectionchange", this.#recalculateCursorOffset.bind(this));
    }
    #recalculateCursorOffset() {
        const inputLength = this.value.length;
        if(inputLength === 0) {
            this.cursorOffset = 0;
            return;
        }
        if(this.#input.selectionDirection === 'forward') {
            this.cursorOffset = `${inputLength - this.#input?.selectionEnd}ch`;
        }
        if(this.#input.selectionDirection === 'backward') {
            this.cursorOffset = `${inputLength - this.#input?.selectionStart}ch`;
        }
    }


    #handleKeyDown(keyboardEvent) {
        if(keyboardEvent.key === "Enter") {
            console.log('Enter pressed');
            const command = {path: this.path, input: this.value};
            this.executeCommand(command);
            // TODO: change this.#recalculateCursorOffset(); here and inside ArrowUp and ArrowDown cases
            // recalculateCursorOffset when input changes and selectionchange not fired so cursor offset is the same as before
            // Steps to reproduce: type qweqweqweqweqweqwe then select few positions left and press enter
            this.#recalculateCursorOffset();
        }
        if(keyboardEvent.ctrlKey === true && keyboardEvent.code === "KeyC") {
            // TODO: not execute when user use ctrl+c to copy selected value
            console.log('Ctrl+C');
            const command = {path: this.path, input: this.value, abort: true};

            this.executeCommand(command);
        }
        if(keyboardEvent.code === "ArrowUp") {
            this.value = this.history.at(-1).input || "";
            // TODO: proper history with save working draft
            this.#recalculateCursorOffset();
        }
        if(keyboardEvent.code === "ArrowDown") {
            //this.value = Array.at(-1, this.history)
            this.#recalculateCursorOffset();
        }
    }
    executeCommand(command) {
        const executeCommandEvent = new CustomEvent("executeCommand", {detail: command});
        console.log(executeCommandEvent);
        this.dispatchEvent(executeCommandEvent);
        this.value = "";
    }

    #setTyping() {
        if(this.typing === true) {
return;
}
        this.typing = true;
        setTimeout(() => {
            this.typing = false;
        }, 1000);
    }

    resizeInput() {
        // Get the width of the text inside the input
        if(this.#textWidthMeasureContext === undefined) {
return;
}
        const textWidth = TerminalInput.#getTextWidth(this.value, this.#inputFontComputedStyle, this.#textWidthMeasureContext);
        // Set the input width to the width of the text plus some padding
        this.inputWidth = `${textWidth  }px`;
        //console.log('resizeInput', this.inputWidth )
    }

    static#getTextWidth(value = "", font = "", context) {
        // Set the font for the canvas
        context.font = font;
        // Measure the width of the text using the canvas
        const metrics = context.measureText(value);
        // Return the width of the text
        return metrics.width;
    }


    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.#input = this.shadowRoot.getElementById('input');
        this.#inputFontComputedStyle = getComputedStyle(this.#input).font;
        this.#textWidthMeasureContext = TerminalInput.#createTextWidthMeasureContext();
        this.resizeInput();
        this.#subscribeOnInputChange();
    }

    willUpdate(_changedProperties) {
        console.log('willUpdate', _changedProperties);
        if(_changedProperties.has('value')) {
            this.resizeInput();
        }
    }
    shouldUpdate(_changedProperties) {
        return super.shouldUpdate(_changedProperties);
        if(_changedProperties.has('history')) {
return false;
}
        return true;
    }

    updated(_changedProperties) {
        console.log(_changedProperties);
        super.updated(_changedProperties);
        if(_changedProperties.has('focused')) {
            if(this.focused === true) {
this.#input.focus();
}
        }
    }

    static#createTextWidthMeasureContext() {
        const canvas = new OffscreenCanvas(0, 0);
        return canvas.getContext('2d');
    }

}

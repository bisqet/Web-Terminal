import {html, LitElement} from "lit";

import {when} from 'lit/directives/when.js';
import {historyRecordStyles} from "./historyRecordStyles.css.js";
import '../../terminal-path/terminal-path.js';

export class HistoryRecord extends LitElement {
  static properties = {
    path: {type: String},
    input: {type: String},
    result: {type: String},
  };

  // noinspection CssInvalidPropertyValue
  static styles = historyRecordStyles;

  constructor() {
    super();
    this.path = '';
    this.input = '';
    this.result = '';
  }

  render() {
    console.log('render TerminalHistory');
    return html`
            ${when(this.path != undefined, this.renderPathAndInput.bind(this))}
            ${when(this.result != undefined, this.renderResult.bind(this))}`;
  }

  renderPathAndInput() {
    return html`
            <div class="pathAndInput">
                <terminal-path .path="${this.path}"></terminal-path>
                <span>${this.input}</span>
            </div>`;
  }

  renderResult() {
    return html`
            <div>${this.result}</div>`;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);
    console.log(_changedProperties);
  }
}

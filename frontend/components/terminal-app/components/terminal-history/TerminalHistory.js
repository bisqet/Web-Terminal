import {html, LitElement} from "lit";
import {terminalHistoryStyles} from "./terminalHistoryStyles.css.js";
import './history-record/history-record.js';
import {map} from 'lit/directives/map.js';

export class TerminalHistory extends LitElement {
  static properties = {
    history: {type: Array}
  };

  // noinspection CssInvalidPropertyValue
  static styles = terminalHistoryStyles;

  constructor() {
    super();
    this.history = [];
  }

  render() {
    console.log('render TerminalHistory');
    return html`${map(this.history, (command) => html`<history-record .path="${command.path}" .input="${command.input}" .result="${command.result}"></history-record>`)}`;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
  }

  updated(_changedProperties) {
    console.log(_changedProperties);
    super.updated(_changedProperties);
  }
}

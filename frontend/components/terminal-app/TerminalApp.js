import {LitElement, html} from 'lit';
import "./components/terminal-input/terminal-input.js";
import "./components/terminal-history/terminal-history.js";
import {terminalAppStyles} from "./terminalAppStyles.js";
import {executeCommand} from "./components/commands/executeCommand.js";
import {UserCommand} from "./components/commands/UserCommand.js";
import {SuperRootDir} from "./components/FileSystem/FileSystem.js";

export class TerminalApp extends LitElement {
  static styles = terminalAppStyles;

  static properties = {
    path: {type: String},
    focused: {type: Boolean},
    history: {type: Array},
    superRootDir: {type: SuperRootDir}
  };

  constructor() {
    super();
    this.focused = false;
    this.history = [];
    this.superRootDir = new SuperRootDir();
    this.path = this.superRootDir.path;
  }

  render() {
    console.warn(this.superRootDir);
    console.log('render TerminalApp');

    return html`
      <div class="main scrollbar" @focusin="${() => {
        this.setFocused(true);
      }}" @focusout="${() => {
        this.setFocused(false);
      }}" tabindex="-1">

        <terminal-history .history="${this.history}"></terminal-history>
        <terminal-input @executeCommand="${this.executeCommand}" value="${this.randomValue}"
                        .focused="${this.focused}" .path="${this.path}" .history="${this.history}"></terminal-input>
      </div>
    `;
  }

  async executeCommand({detail}) {
    const {input, path} = {...detail};
    console.log(detail);
    const userCommand = new UserCommand({input, path});
    const commandResult = await executeCommand(userCommand);
    this.history = [...this.history, commandResult];
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);
    console.log(_changedProperties);
  }

  setFocused(value) {
    // TODO: fix bug when user focus and terminal have scrollbars on top => it scrolls down
    // TODO: fix bug when user try to select they cannot because of focus transferred to input
    this.focused = value;
  }
}


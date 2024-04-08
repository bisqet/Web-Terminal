import {LitElement, html} from 'lit';

import './terminal-app/terminal-app.js';
import {sharedStyles} from "./css/sharedStyles.js";
import {testAppStyles} from "./css/testAppStyles.css.js";
import {getInitialHistory} from "./initialHistory/getInitialHistory.js";
import {
  createFileSystem,
  FileSystem,
  SuperRootDir
} from "./terminal-app/components/FileSystem/FileSystem.js";


export class TestParentComponent extends LitElement {
  static styles = [sharedStyles, testAppStyles];

  static properties = {
    randomValue: {type: Number},
    fileSystem: {type: FileSystem},
    superRootDir: {type: SuperRootDir},
  };

  constructor() {
    super();
    this.randomValue = 0;
    this.superRootDir = new SuperRootDir();
  }


  render() {
    console.warn(this.superRootDir);
    return html`
      <main class="main">
        <terminal-app .superRootDir=${this.superRootDir} .path="${this.superRootDir.path}"
                      .history=${getInitialHistory(this.randomValue)}></terminal-app>
      </main>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.updateFS();
  }

  async updateFS() {
    this.fileSystem = await createFileSystem({type: 'emulated'}).then(fs => this.fileSystem = fs);
    this.superRootDir = new SuperRootDir([this.fileSystem]);
  }
}

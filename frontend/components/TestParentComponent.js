import {LitElement, html} from 'lit';

import './terminal-app/terminal-app.js';
import {sharedStyles} from "./css/sharedStyles.js";
import {testAppStyles} from "./css/testAppStyles.css.js";
import {getInitialHistory} from "./initialHistory/getInitialHistory.js";
import {SuperRootDir} from "./terminal-app/components/SuperRootDir/SuperRootDir.js";
import {createFileSystem} from "./terminal-app/components/SuperRootDir/FileSystem/createFileSystem.js";


export class TestParentComponent extends LitElement {
  static styles = [sharedStyles, testAppStyles];

  static properties = {
    randomValue: {type: Number},
    fileSystem: {type: Promise},
    superRootDir: {type: SuperRootDir},
  };

  constructor() {
    super();
    this.randomValue = 0;
    this.superRootDir = new SuperRootDir();
  }


  render() {
    console.log(this.superRootDir);
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
    const fileSystem = await createFileSystem({type: 'emulated'})
    const fileSystem2 = await createFileSystem({name: 'test', type: 'emulated'})
    this.superRootDir = new SuperRootDir([fileSystem, fileSystem2]);
  }
}

import {ExecutableCommand} from "../ExecutableCommand.js";
import {html} from "lit";
import {map} from "lit/directives/map.js";


export class Ls extends ExecutableCommand {
  async execute({userCommand, superRootDir}) {
    const response = super.execute(userCommand);
    if (userCommand.path !== '/') { // TODO: NOT FORGET CHANGE TO ===
      response.result = Ls.#getResultForSuperRootDir(superRootDir);
      return response
    }
    const fileSystem = superRootDir.get(userCommand.fsPath);
    if (!fileSystem)return response;
    const fileSystemDirectory = fileSystem.rootDir;
    const pathArray = userCommand.pathWithoutFsArray;
    let resultFolder = fileSystemDirectory;
    for (let i = 0; i < pathArray.length; i++)
      resultFolder = resultFolder.getDirectoryHandle(pathArray[i], {create: false});

    return response;
  }// TODO: rewrite it so UserCommand will have currentFolder as DirectoryHandle

  static #getResultForSuperRootDir(superRootDir) {
    const allDirs = superRootDir.values();
    const allDirsPaths = Array.from(allDirs).map(dir => dir.path);// TODO: rewrite using Iterator.prototype.map() when it will work on Safari or add polyfill
    return html`${map(allDirsPaths, (dirPath) => html`
      <div>${dirPath.join('/')}</div>`)}`
  }
}


export const ls = new Ls({
  name: "ls",
  possibleOptions: ["a"],
  aliases: new Map([['la', '-a']]),
  description: html`Simplified version of ls command. Lists all content of the current directory emulated in browser.
  <br>Use mkfs command to grant disk or folder access. Switch to it using cd /\$\{fsName\} command.`,
  usage: "ls",
});

// TODO: add command options
// TODO: add work with fileSystem

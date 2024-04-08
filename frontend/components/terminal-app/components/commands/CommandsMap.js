import {ls} from "./Ls/Ls.js";
import {commandNotFound} from "./CommandNotFound/CommandNotFound.js";
import {help} from "./Help/Help.js";
import {mkfs} from "./mkfs/mkfs.js";
import {cd} from "./Cd/Cd.js";

export class CommandsMap extends Map {


  constructor(commands) {
    super();
    commands.forEach((command) => {
      this.set(command.name, command);
    });
  }

  get(name) {
    const command = super.get(name);
    if(command === undefined) {
      return commandNotFound;
    }
    return command;
  }

}

const commands = [ls, help, commandNotFound, mkfs, cd];
export const commandsMap = new CommandsMap(commands);
// TODO: make commands importable or not.
// Right now all the builtin commands imported into the final bundle
// It would be cool if we can specify from terminal open API which commands we want in the bundle

import {ExecutableCommand} from "../ExecutableCommand.js";
import {html} from "lit";


export class Ls extends ExecutableCommand {
    execute({userCommand, fileSystem}) {
        const response = super.execute(userCommand);
        response.result = userCommand.input;
        return response;
    }
}

export const ls = new Ls({
    name: "ls",
    possibleOptions: ["a"],
    aliases: new Map([['la', '-a']]),
    description: html`Simplified version of ls command. Lists all content of the current directory emulated in browser. <br>Use mkfs command to grant disk or folder access. Switch to it using cd /\$\{fsName\} command.`,
    usage: "ls",
});
//TODO: add command options
//TODO: add work with fileSystem

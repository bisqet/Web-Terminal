import {ExecutableCommand} from "../ExecutableCommand.js";
import {html} from "lit";


export class Cd extends ExecutableCommand {
    execute({userCommand, fileSystem = undefined}) {
        const response = super.execute(userCommand);
        response.result = 'Error: no FS found';
        if(fileSystem === undefined) {
return response;
}
        response.result = 'FS found';
        return response;
    }
}

export const cd = new Cd({
    name: "cd",
    description: html`Change the shell working directory. The argument is the name of a directory in the user's file system. <br>Use mkfs command to grant disk or folder access. Switch to it using cd /local`,
    usage: "cd [dir]",
});

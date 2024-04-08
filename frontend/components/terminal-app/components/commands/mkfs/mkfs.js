import {ExecutableCommand} from "../ExecutableCommand.js";


export class Mkfs extends ExecutableCommand {
    async execute({userCommand}){
        const response = super.execute(userCommand);
        try {
            const directoryToAdd = await showDirectoryPicker();
            console.log(directoryToAdd)
            response.result = `added directory: ${directoryToAdd?.name}`;
            return response;
        } catch (e) {
            console.dir(e)
            response.result = `Directory not added: ${e}`;
            return response;
        }
    }
}

export const mkfs = new Mkfs({
    name: "mkfs",
    description: "Grant access to local filesystem in the terminal. Switch to it using cd /${fsName}",
    usage: "mkfs ${fsName}",
})
//TODO: add mkfs ${fsName} usage so it will be accessible through cd /${fsName}
// Use /local as default value of fsName
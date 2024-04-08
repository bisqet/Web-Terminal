import {ExecutableCommand} from "../ExecutableCommand.js";
import {commandsMap} from "../CommandsMap.js";
import {argumentExist} from "../helpers.js";
import {html} from "lit";
import {map} from "lit/directives/map.js";


export class Help extends ExecutableCommand {
    execute({userCommand}) {
        const response = super.execute(userCommand);
        if (!argumentExist(userCommand.args)) {
            response.result = getAllCommandsDescriptions();
        } else {
            response.result = getResult(userCommand.args[0]);
        }
        return response;
    }
}

const getAllCommandsDescriptions = () => {
    return map(commandsMap, (commandArray) => {
        const command = commandArray[1]
        return html`${command.name} - ${command.description}<br><br>`
    })
}
const getResult = (name) => {
    const command = commandsMap.get(name)
    return html`${command.name} - ${command.description}<br>Usage: ${command.usage}<br>`
}
export const help = new Help({
    name: "help",
    description: "Prints all the commands available Or help for certain command",
    usage: "help, help ${command}",
})
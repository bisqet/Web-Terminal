import {CommandResponse} from "./CommandResponse.js";

export class ExecutableCommand {
    constructor({
                    name = '',
                    possibleOptions = [],
                    description = 'Some command description..',
                    usage = 'Use it somehow..',
                    aliases = new Map(),
                }) {
        this.name = name;
        this.possibleOptions = possibleOptions;
        this.aliases = aliases;
        this.description = description;
        this.usage = usage;
    }

    execute(userCommand) {
        console.log(userCommand)
        if (userCommand.abort) {
            return new CommandResponse({...userCommand, input: userCommand.input + "^C"})
        }
        return new CommandResponse(userCommand)
    }
}
//TODO: add layer to execute by aliases
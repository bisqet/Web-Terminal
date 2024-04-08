export class CommandResponse {
    constructor(userCommand) {
        this.path = userCommand.path;
        this.input = userCommand.input;
        this.result = undefined;
        this.abort = userCommand.abort
    }
}
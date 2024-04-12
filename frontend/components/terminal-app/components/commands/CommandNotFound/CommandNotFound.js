import {ExecutableCommand} from "../ExecutableCommand.js";


export class CommandNotFound extends ExecutableCommand {
  execute({userCommand, superRootDir}) {
    const response = super.execute(userCommand);
    if (userCommand.command.trim() === '')return response;

    response.result = `${userCommand.command}: command not found`;
    return response;
  }
}

export const commandNotFound = new CommandNotFound({
  name: "Command Not Found",
  description: "Command Not Found",
  usage: "Command Not Found",
});

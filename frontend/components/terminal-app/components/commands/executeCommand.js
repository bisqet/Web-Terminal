import {commandsMap} from "./CommandsMap.js";

export const executeCommand = async ({userCommand, superRootDir}) => {
  console.log(userCommand);
  if (userCommand.abort) {
    return {path: userCommand.path, result: `${userCommand.input}^C`};
  }

  return commandsMap.get(userCommand.command).execute({userCommand, superRootDir});
};

class ParsedInput {
  constructor({command = '', options = [], args = []}) {
    this.command = command;
    this.options = options;
    this.args = args;
  }
}

export class UserCommand {
  static defaultEnvironment = {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: "=)"
  };
  static defaultPath = '/';

  constructor({
                path = UserCommand.defaultPath,
                input = '',
                command = '',
                options = [],
                args = [],
                environment = UserCommand.defaultEnvironment,
                abort = false,
                result: undefined,
              }) {
    this.input = input.trim();
    let parsedInput = new ParsedInput({});
    if(this.input && this.input.length !== 0) {
      parsedInput = UserCommand.parseInput(this.input);
    }
    this.abort = abort;
    this.command = parsedInput.command || command;
    this.options = [...parsedInput.options, ...options];
    this.args = [...parsedInput.args, ...args];
    this.path = path;
    this.environment = environment;
  }

  static parseInput(input) {
    if(input === undefined || input === '') {
return;
}
    // Regular expression to match tokens with or without quotes, including options with values
    const tokenRegex = /('[^']*'|"[^"]*"|\S+=(?:'[^']*'|"[^"]*"|\S+)|\S+)/g;

    // Extract tokens from input and initialize arrays for options and arguments
    const tokens = input.match(tokenRegex) || [];
    const options = [];
    const args = [];

    // Iterate over tokens and categorize them as options or arguments
    for(const token of tokens) {
      if(token.startsWith('-')) {
        options.push(token);
      }
 else {
        args.push(token);
      }
    }

    // Extract command
    const command = args.shift(); // Assuming the first non-option token is the command

    // Return an object containing command, options, and arguments
    return new ParsedInput({
      command,
      options,
      args
    });
  }
}

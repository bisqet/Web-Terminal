# Web Terminal Component

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run app.js
```

This project was created using `bun init` in bun v1.0.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Roadmap
- [ ] Filesystem
   1. [ ] Emulated in browser fs
   2. [ ] Use usual fs which user allow access
- [ ] General commands
   1. [ ] cd
   2. [ ] ls
   3. [ ] cat
- [ ] In progress

## General questions
- Should we have WASM API to include commands?
  - We will need example wasm command with an api
## TODO:
1. [ ] Terminal Input
   1. [ ] change this.#recalculateCursorOffset(); here and inside ArrowUp and ArrowDown cases
   2. [ ] not execute when user use ctrl+c to copy selected value
   3. [ ] proper history with save working draft
2. [ ] FileSystem
   1. [ ] think about how possible to return something but still be able to use await, so it will wait for FS to be ready. So we will have only createFileSystem
3. [ ] Commands
   1. [ ] mkfs
      1. [ ] add mkfs ${fsName} usage, so it will be accessible through cd /${fsName}
      2. [ ] Use /local as default value of fsName
   2. [ ] ls
      1. [ ] add command options
      2. [ ] add work with fileSystem
   3. [ ] commandsMap
      1. [ ] make commands importable or not.
   4. [ ] ExecutableCommand
      1. [ ] add layer to execute by aliases
4. [ ] Server part:
   1. [ ] transfer all frontend deps to separate folder keeping w/o build development (mean transfer node_modules to frontend so serve ./frontend not ./)
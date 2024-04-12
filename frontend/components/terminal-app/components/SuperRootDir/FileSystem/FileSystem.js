export class FileSystem extends EventTarget {
  constructor({name = '/', type = 'emulated', rootDir, path, updateFSName = false}) {
    super();
    this.name = name;
    this.type = type;
    this.rootDir = rootDir;
    this.path = path;
    this.updateFSName = updateFSName;

    if (this.rootDir instanceof Promise) {
      rootDir.then((res) => { // allow creation of filesystem not waiting for rootDir to be ready
        this.rootDir = res;
        if (updateFSName === true) {
          this.name = res.name;
          this.path = [type, name]; // regenerate path with new name

          this.dispatchCustomEvent('nameUpdated', {detail: {name: this.name, path: this.path}});
        }
      });
    }
  }

  dispatchCustomEvent(name, detail) {
    const event = new CustomEvent(name, {detail});
    this.dispatchEvent(event);
  }
}

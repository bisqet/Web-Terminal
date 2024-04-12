export class SuperRootDir extends Map {

  constructor(fileSystems = []) {
    super();
    fileSystems.forEach((fileSystem) => {
      this.set(`${fileSystem.type}/${fileSystem.name}`, fileSystem);
    });
  }

  set(name, fileSystem) {
    if (fileSystem.updateFSName === true) {
      fileSystem.addEventListener('nameUpdated', (event) => {
        this.updateFSName({fileSystem, event, name});
      });
    }

    super.set(name, fileSystem);
  }

  updateFSName({name, fileSystem, event}) {
    this.set(`${fileSystem.type}/${event.detail.name}`, fileSystem);
    this.delete(`${fileSystem.type}/${fileSystem.name}`);// If name updated we need to delete the old one
  }

  get(fileSystemName) {
    const fileSystem = super.get(fileSystemName);
    // console.log(fileSystemName, fileSystem);
    if (fileSystem === undefined)return fileSystem;

    return fileSystem
  }

  path = '/';
}

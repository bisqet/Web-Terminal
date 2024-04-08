export class FileSystem extends EventTarget {
    constructor({name = '', type = 'emulated', rootDir, path, updateFSName = false}) {
        super();
        this.name = name;
        this.type = type;
        this.rootDir = rootDir;
        this.path = path;
        this.updateFSName = updateFSName;

        if(this.rootDir instanceof Promise) {
rootDir.then((res) => {// allow creation of filesystem not waiting for rootDir to be ready
            this.rootDir = res;
            if(updateFSName === true) {
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

export const createFileSystem = async ({name, type = 'emulated', rootDir}) => {
    rootDir = rootDir || await createRootDir(type);
    if(name === undefined) {
name = rootDir?.name || '/';
}
    const path = [type, name];
    return new FileSystem({name, type, rootDir, path});
};
const createRootDir =  (type) => new Promise((res, rej) => {
    if(type === 'emulated') {
return navigator.storage.getDirectory().then(res);
}
    if(type === 'local') {
return window.showDirectoryPicker().then(res);
}
    rej(new Error('Unknown FS type'));
});

export const createFileSystemNotWaitingForFSToBeReady = ({name, type = 'emulated', rootDir}) => { // TODO: think about how possible to return something but still be able to use await so it will wait for FS to be ready. So we will have only createFileSystem
    createRootDir(type); // we're not waiting for rootDir to be ready
    let updateFSName = false;
    if(name === undefined) {
        name = rootDir?.name;
        if(!rootDir?.name) {
            name = '/';
            updateFSName = true; // we will update FS name when promise resolves only when user not provided custom name for FS
        }
    }
    const path = [type, name];
    return new FileSystem({name, type, rootDir, path, updateFSName});
};


export class SuperRootDir extends Map {

    constructor(fileSystems = []) {
        super();
        fileSystems.forEach((fileSystem) => {
            this.set(fileSystem.name, fileSystem);
        });
    }

    set(name, fileSystem) {
        if(fileSystem.updateFSName === true) {
fileSystem.addEventListener('nameUpdated', (event) => {
            this.updateFSName({fileSystem, event, name});
        });
}
        super.set(name, fileSystem);
    }
    updateFSName({name, fileSystem, event}) {
        this.set(event.detail.name, fileSystem);
        this.delete(name);// If name updated we need to delete the old one
    }

    get(name) {
        const command = super.get(name);
        console.log(name, command);
        if(command === undefined) {
return command;
}
    }

    path = '/';
}

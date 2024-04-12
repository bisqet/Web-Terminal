import {FileSystem} from "./FileSystem.js";

export const createRootDir = (type) => new Promise((res, rej) => {
  if (type === 'emulated')
    return navigator.storage.getDirectory().then(res);
  if (type === 'local')
    return window.showDirectoryPicker().then(res);

  rej(new Error('Unknown FS type'));
});

export const createFileSystemNotWaitingForFSToBeReady = ({name, type = 'emulated', rootDir}) => { // TODO: think about how possible to return something but still be able to use await so it will wait for FS to be ready. So we will have only createFileSystem
  createRootDir(type); // we're not waiting for rootDir to be ready
  let updateFSName = false;
  if (name === undefined) {
    name = rootDir?.name;
    if (!rootDir?.name) {
      name = '/';
      updateFSName = true; // we will update FS name when promise resolves only when user not provided custom name for FS
    }
  }
  const path = [type, name];
  return new FileSystem({name, type, rootDir, path, updateFSName});
};

/*
 TODO: Change it somehow so it will use
  (await navigator.storage.getDirectory()).getDirectoryHandle("my first folder", { create: true, });
*/

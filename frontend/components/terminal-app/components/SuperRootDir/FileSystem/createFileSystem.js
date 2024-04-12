import {createRootDir} from "./createRootDir.js";
import {FileSystem} from "./FileSystem.js";

export const createFileSystem = async ({name, type = 'emulated', rootDir}) => {
  rootDir = rootDir || await createRootDir(type);
  if (name === undefined) name = rootDir?.name || '/';

  const path = [type, name];
  return new FileSystem({name, type, rootDir, path});
};

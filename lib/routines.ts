import { FolderType } from "./types.";

export function addNewFolder(name: string, folderArr: FolderType[]) {
  folderArr.push({ name: name, children: [] });
}

export function addNewFile(name: string, folderArr: FolderType[]) {
  folderArr.push({ name: name });
}

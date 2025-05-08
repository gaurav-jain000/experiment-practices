import { FolderType } from "@/lib/types.";
import React from "react";
import Folder from "./Folder";

function FolderStrucuture({ folders }: { folders: FolderType[] }) {
  return (
    <>
      {folders.map((folder, index) => {
        return <Folder key={folder.name + "-" + index} folder={folder} />;
      })}
    </>
  );
}

export default FolderStrucuture;

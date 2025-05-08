import { folderStructure } from "@/lib/shared";
import FolderStrucuture from "../components/FolderStrucuture";

function Page() {
  return (
    <div className="p-8">
      <h1 className="mb-8 font-black text-6xl text-gray-800">
        Folder Structure
      </h1>
      <div>
        <FolderStrucuture folders={folderStructure} />
      </div>
    </div>
  );
}

export default Page;

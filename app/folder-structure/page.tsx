import FolderStrucuture from "../components/FolderStrucuture";

function Page() {
  return (
    <div className="p-8">
      <h1 className="mb-8 font-black text-6xl text-gray-800">
        Folder Structure
      </h1>
      <div>
        <FolderStrucuture
          folders={[
            {
              name: "Folder 1",
              children: [
                {
                  name: "Subfolder 1-1",
                  children: [{ name: "File 1-1-1" }, { name: "File 1-1-2" }],
                },
                { name: "File 1-2" },
              ],
            },
            {
              name: "Folder 2",
              children: [{ name: "File 2-1" }, { name: "File 2-2" }],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Page;

"use client";
import { FolderType } from "@/lib/types.";
import { useState } from "react";
import { motion } from "framer-motion";
import { addNewFile, addNewFolder } from "@/lib/routines";

function Folder({ folder }: { folder: FolderType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [isAddingFile, setIsAddingFile] = useState(false);
  if (!folder.children)
    return (
      <div className="bg-gray-200 rounded-lg text-gray-800 flex justify-between items-center py-2 px-4 w-full my-2">
        {folder.name}
      </div>
    );
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="bg-gray-800 rounded-lg text-white flex justify-between items-center gap-4 py-2 px-4 w-full my-2"
      >
        {folder.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          className={`text-current duration-300 ${!isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 0 1 0-1.414L12 8.586l4.707 4.707a1 1 0 0 1-1.414 1.414L12 11.414l-3.293 3.293a1 1 0 0 1-1.414 0"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <motion.div
        className="overflow-hidden ms-8"
        style={{ height: isOpen ? "auto" : "0px" }}
      >
        <div className="flex gap-2 items-center">
          {isAddingFile || isAddingFolder ? null : (
            <button
              onClick={() => {
                setIsAddingFolder(true);
              }}
              className="bg-green-600  text-white rounded-lg px-2 py-1 text-sm"
            >
              Add new folder
            </button>
          )}
          {isAddingFolder ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const folderName = formData.get("folder-name");
                if (!folderName) alert("Please enter a folder name");
                try {
                  addNewFolder(
                    folderName as string,
                    folder.children as FolderType[]
                  );
                } catch (e) {
                  console.log(e);
                } finally {
                  setIsAddingFolder(false);
                }
              }}
              className="flex gap-2 items-center"
            >
              <input
                className="p-1 border border-gray-300"
                type="text"
                name="folder-name"
                required
                minLength={3}
              />
              <button
                type="submit"
                className="bg-gray-200 rounded-lg px-2 py-1 text-sm"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAddingFile(false);
                }}
                className="bg-red-600 text-white rounded-lg px-2 py-1 text-sm"
              >
                Cancel
              </button>
            </form>
          ) : null}
          {isAddingFolder || isAddingFile ? null : (
            <button
              onClick={() => {
                setIsAddingFile(true);
              }}
              className="bg-green-600  text-white rounded-lg px-2 py-1 text-sm"
            >
              Add new file
            </button>
          )}
          {isAddingFile ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const fileName = formData.get("file-name");
                if (!fileName) alert("Please enter a folder name");
                try {
                  addNewFile(
                    fileName as string,
                    folder.children as FolderType[]
                  );
                } catch (e) {
                  console.log(e);
                } finally {
                  setIsAddingFile(false);
                }
              }}
              className="flex gap-2 items-center"
            >
              <input
                className="p-1 border border-gray-300"
                type="text"
                name="file-name"
                required
                minLength={3}
              />
              <button
                type="submit"
                className="bg-gray-200 rounded-lg px-2 py-1 text-sm"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAddingFile(false);
                }}
                className="bg-red-600 text-white rounded-lg px-2 py-1 text-sm"
              >
                Cancel
              </button>
            </form>
          ) : null}
        </div>
        {folder.children.map((child, index) => (
          <Folder key={child.name + "-" + index} folder={child} />
        ))}
      </motion.div>
    </div>
  );
}

export default Folder;

"use client";
import { FolderType } from "@/lib/types.";
import { useState } from "react";

function Folder({ folder }: { folder: FolderType }) {
  const [isOpen, setIsOpen] = useState(false);
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
          className={`text-current ${!isOpen ? "rotate-180" : ""}`}
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
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out ms-8"
        style={{ height: isOpen ? "auto" : 0 }}
      >
        {folder.children.map((child, index) => (
          <Folder key={child.name + "-" + index} folder={child} />
        ))}
      </div>
    </div>
  );
}

export default Folder;

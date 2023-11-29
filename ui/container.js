import React from "react";
import Link from "next/link";
const MainContainer = () => {
  return (
    <div className="flex justify-between items-center px-8 py-3 dark:bg-gray-800 dark:text-white mb-4">
      <Link className="py-1 px-2 rounded text-2xl font-bold" href="/">
        Toker's list.
      </Link>
      <Link
        className="bg-gray-200 dark:bg-gray-700 dark:text-white mr-2 py-1 px-2 rounded text-2xl font-bold"
        href="/addTodo"
      >
        Add Todo
      </Link>
    </div>
  );
};

export default MainContainer;

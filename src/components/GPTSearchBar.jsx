
import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-35 flex justify-center">
      <form className="w-1/2 grid grid-cols-12 gap-2 items-center p-4 rounded-lg bg-black/90">
        <input
          type="text"
          placeholder="Search..."
          className="col-span-9 bg-white text-black placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-md"
        />

        <button
          type="submit"
          className="col-span-3 cursor-pointer bg-red-800 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

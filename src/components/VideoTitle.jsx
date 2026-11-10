import React from "react";
import PlayIcon from "../utils/PlayIcon";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute top-[40%] left-12 z-20 text-white max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
      <p className="text-sm md:text-base opacity-90 line-clamp-3 mb-6">{description}</p>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded font-semibold hover:bg-opacity-80 transition cursor-pointer">
          <PlayIcon size={22} className="fill-black" />
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 py-2.5 rounded font-bold hover:bg-gray-500/50 transition cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
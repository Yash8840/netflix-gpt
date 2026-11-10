import React from "react";
import GPTSearchBar from "./GPTSearchbar";
import GPTSuggestions from "./GPTSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={BG_URL}
          alt="background"
          className="h-full min-h-screen w-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <GPTSearchBar />
        <GPTSuggestions />
      </div>
    </div>
  );
};

export default GPTSearchPage;

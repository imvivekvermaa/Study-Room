import React from "react";
import { FaComputer, FaGithubAlt } from "react-icons/fa6";
import Articles from "./Pages/Articles";
import AiConcepts from "./Pages/AiConcepts";

function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="bg-zinc-900 w-3/5 h-8 rounded-full flex justify-between">
        <div className="w-1/5 h-6 ml-4 mt-1  flex items-center">
          <span
            style={{ boxShadow: "0 0 0.25em #00FF19" }}
            className="inline w-1.5 h-1.5 rounded-full bg-green-500 ml-2"
          ></span>
          <FaComputer className="text-white w-7 h-7 ml-2" />
          <span className="text-green-500 text-xs ml-1 hover:text-green-700">
            {"<study room>"}
          </span>
        </div>
        <div className="w-1/2 h-6  mt-1 text-white flex justify-center gap-12 ">
          <div>Home</div>
          <Articles />
          <AiConcepts />
        </div>
        <div className="w-1/5 h-6 mr-4 mt-1 flex justify-end">
          <div className="bg-white w-20 h-6 rounded-full flex justify-center items-center hover:bg-green-500">
            <button className="flex items-center text-sm ml-2 font-semibold">
              Repo
              <FaGithubAlt className="m-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

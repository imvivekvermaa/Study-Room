import { FaComputer, FaGithubAlt } from "react-icons/fa6";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import AIML from "../Navbar/AIML";
import LandingPage from "./LandingPage";

function Navbar() {

  return (
      <div className="bg-zinc-950 w-full h-8 flex justify-between fixed border-b border-zinc-600 rounded-t rounded-xl">
        <div className="w-1/5 h-6 ml-4 mt-1 flex items-center">
          <span
            style={{ boxShadow: "0 0 0.25em #00FF20" }}
            className="inline w-1.5 h-1.5 rounded-full bg-green-500 ml-2"
          ></span>
          <NavLink to={"/"} className={"flex"}>
            <FaComputer className="text-white w-8 h-8 ml-2" />
            <span className="text-green-500 text-lg ml-1  hover:text-green-700 select-none">
              {"<study room>"}
            </span>
          </NavLink>
        </div>
        <div className="w-1/2 h-6  mt-1 text-white flex justify-center gap-12 ">
          <NavLink className={"text-green-600 focus:text-green-500"} to={"/"}>Home</NavLink>
          <NavLink className={"focus:text-green-500"} to={"/typescript"}>Typescript</NavLink>
          <NavLink className={"focus:text-green-500"} to={"/python"}>Python</NavLink>
          <NavLink className={"focus:text-green-500"} to={"/machinelearning"}>Machine Learning</NavLink>
          
        </div>
        <div className="w-1/5 h-6 mr-4 mt-1 flex justify-end items-center">
          <div className="text-white mr-5 text-sm">
            <NavLink className={'focus:text-green-500'} to={"/login"}>Sign-up</NavLink>
            
          </div>
          <div className="bg-white w-20 h-6 rounded-full flex justify-center items-center hover:bg-green-500">
            <Link
              to="https://github.com/imvivekvermaa/Study-Room"
              target="_blank"
              className="flex items-center text-sm ml-2 font-semibold"
            >
              Repo
              <FaGithubAlt className="m-2" />
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Navbar;

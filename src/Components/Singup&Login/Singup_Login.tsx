import React from "react";

function Singup_Login() {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <div className="w-[60vw] h-[70vh] flex">
        <div
          id="left"
          className="w-full h-full flex items-center justify-center bg-zinc-950 text-white "
        >
          <div className="flex-col w-full h-1/3 justify-center items-center">
            <div className="w-full h-[10vh] text-5xl font-bold text-center text-green-500">
              {"<study room>"}
            </div>
            <div className="text-xl font-bold text-center">
              Create an account{" "}
            </div>
          </div>
        </div>
        <div
          id="right"
          className="w-full h-full bg-zinc-200 flex items-center justify-center rounded-lg"
        >
          <div className="form font-semibold">
            <form className="w-60 h-80 mt-5 pt-5" action="submit">
              <label htmlFor="email">Email :</label>
              <input
                className="block w-full h-8 pl-1 mb-2 border border-black rounded"
                placeholder="xyz@gmail.com"
                type="text"
                name="email"
                id="email"
              />
              <label htmlFor="username">Username :</label>
              <input
                className="block w-full h-8 pl-1 mb-2 border border-black rounded"
                placeholder="username"
                type="text"
                name="username"
                id="username"
              />
              <label htmlFor="password">password :</label>
              <input
                className="block w-full h-8 pl-1 mb-2 border border-black rounded"
                placeholder="password"
                type="password"
                name="password"
                id="password"
              />
              <button
                className="block w-full h-8 pl-1 my-5 border border-black bg-zinc-950 rounded text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup_Login;

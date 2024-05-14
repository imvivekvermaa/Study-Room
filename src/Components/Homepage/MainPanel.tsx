import { useState } from "react";
import Chatbox from "../Chatbox/Chatbox";
import Youtube from "./Youtube";

function MainPanel() {
  const [urlValue, setUrlValue] = useState("");

  return (
    <div className="col-start-1 col-end-5 mt-20">
      <div className="flex h-[580px] justify-between">
        <div id="video" className="">
          <Youtube />
        </div>
        <div id="chatbox" className="">
          <Chatbox />
        </div>
        {/* <div className="flex w-80 h-[50vh] bg-sky-500 overflow-hidden"></div> */}
      </div>
    </div>
  );
}

export default MainPanel;
{
  /* <div id="imagebox" className="w-1/4 h-[460px] bg-red-500 ml-7 mt-24 text-white">
          <div
            id="image"
            className="w-[20vw] h-60 flex justify-center items-center  overflow-hidden ml-7"
          >
            <img
              className="w-full h-full rounded-lg"
              src={"https://wallpapercave.com/wp/ew0V5jf.jpg"}
              alt={"logo"}
            />
          </div>
          <div
            id="imagesummary"
            style={{ scrollbarWidth: "none" }}
            className="h-12 mt-5 flex justify-center items-center overflow-auto "
          >
            image summary here.
          </div>
        </div> */
}

{
  /* <div
          id="translationbox"
          style={{ borderColor: "gray" }}
          className="w-[20vw] h-[400px] p-2 mt-5 text-white ml-12 text-center rounded-lg"
        >
          <div className=" bg-zinc-600 font-semibold mb-2 rounded">
            Translation
          </div>
          <div style={{scrollbarWidth:"none"}} className="w-[20vw] h-[370px] text-zinc-500 overflow-auto leading-snug">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            voluptatem voluptas, doloribus accusantium alias saepe consectetur
            cumque dolore ratione dolorem provident possimus necessitatibus unde
            omnis illo eius a earum odio? Deleniti quae ipsam odit! Ad
            exercitationem ut atque nisi nam perferendis eos sint veritatis
            reiciendis aspernatur possimus amet, esse sit laborum? Illum unde,
            inventore suscipit ullam sit assumenda aperiam ipsum! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Facilis corrupti ipsum
            magni. Corporis illum nemo ab odit et sed aliquam distinctio eveniet
            quisquam consequuntur. Obcaecati explicabo unde optio eius iure.
          </div>
        </div> */
}

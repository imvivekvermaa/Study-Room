import "../../App.css";
import { useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import axios from "axios";

function Chatbox() {
  const [data, setData] = useState<any>([]);
  const dataRef: React.MutableRefObject<any> = useRef();

  async function getFetchedData(userInput:string) {
    try {
      // Simulating asynchronous data fetching
      const fetchData = await axios({
        url: "http://127.0.0.1:8787/chat",
        method: "POST",
        data: {
          question: userInput,
        },
      });
      const chatData = fetchData.data;
      console.log(chatData);
      setData((prevData: string) => [...prevData, chatData]);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error if needed
    }
  }

  function handleSubmit(event:any) {
    event.preventDefault();
    const userInput = dataRef.current.value;
    setData((prevData:any) => [...prevData, userInput]);
    getFetchedData(userInput);
    dataRef.current.value = "";
  }

  return (
    <div
      id="chatbox"
      className="w-[40vw] mr-3 text-white"
    >
      <div className="h-8 font-semibold mb-2 border-zinc-600 border-t rounded-lg text-center text-zinc-400">
       Chat-Box
      </div>
      <div
        id="chat"
        style={{ scrollbarWidth: "none" }}
        className="w-[40vw] h-[450px] p-2 overflow-auto"
      >
        {data.map((value:string, index: number) => {
          if (index % 2 == 0) {
            return <LeftCard key={index} newdata={value} />;
          }
          return <RightCard key={index} newdata={value} />;
        })}
      </div>
      <form
        typeof="submit"
        onSubmit={handleSubmit}
        id="inputbox"
        
        className="w-[40vw] h-10 my-1 mx-1 border-zinc-300 border-b border-t rounded-lg flex items-center p-2 flex justify-between"
      >
        <input
          ref={dataRef}
          id="input"
          type="text"
          className=" w-[40vw] pl-1 bg-transparent focus:outline-none text-zinc-400"
          placeholder="Message . ."
        />
        <button className="focus:outline-none">
          <RiSendPlaneFill className="self-center text-xl text-green-500" />
        </button>
      </form>
    </div>
  );
}

export default Chatbox;

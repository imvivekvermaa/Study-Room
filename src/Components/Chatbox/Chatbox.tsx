import "../../App.css";
import { useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import axios from "axios";

function Chatbox() {
  const [data, setData] = useState<any>([]);
  const dataRef = useRef();

  async function getFetchedData(userInput) {
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
      setData((prevData) => [...prevData, chatData]);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error if needed
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userInput = dataRef.current.value;
    setData((prevData) => [...prevData, userInput]);
    getFetchedData(userInput);
    dataRef.current.value = "";
  }

  return (
    <div
      id="chatbox"
      className="w-[40vw] mr-3 text-white"
    >
      <div className=" font-semibold mb-2 border-t rounded-lg text-center">
        Chat-Box
      </div>
      <div
        id="chat"
        style={{ scrollbarWidth: "none" }}
        className="w-[40vw] h-[450px] p-2 overflow-auto"
      >
        {data.map((value, index) => {
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
        
        className="w-[40vw] h-10 my-1 mx-1 border-zinc-300 border-b rounded-lg flex items-center p-2 flex justify-between"
      >
        <input
          ref={dataRef}
          id="input"
          type="text"
          className=" w-[40vw] pl-1 bg-transparent focus:outline-none"
        />
        <button className="focus:outline-none">
          <RiSendPlaneFill className="self-center text-xl text-green-500" />
        </button>
      </form>
    </div>
  );
}

export default Chatbox;

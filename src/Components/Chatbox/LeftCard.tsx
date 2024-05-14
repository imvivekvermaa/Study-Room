
function LeftCard({newdata}) {

  return (
    <div id="card" className="w-[42vw] p-1 flex mt-1">
      <div
        id="faceicon"
        className="w-[30px] h-[30px] bg-sky-600 rounded-full flex justify-center items-center"
      >
        V
      </div>
      <div
        id="leftmessage"
        className="w-[95%] rounded-xl bg-zinc-900 text-zinc-400 leading-tight pl-2 ml-1 text-balance flex items-center"
      >
        {newdata}

      </div>

    </div>
  );
}

export default LeftCard;

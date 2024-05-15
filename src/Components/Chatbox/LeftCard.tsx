function LeftCard({ newdata }:any) {
  return (
    <div id="card" className="w-[100%] p-1 flex mt-1">
      <div
        id="faceicon"
        className="w-[32px] h-[30px] bg-sky-600 rounded-full flex justify-center items-center"
      >
        V
      </div>
      <div
        id="leftmessage"
        className="w-full rounded-xl bg-zinc-900 text-zinc-400 leading-tight pl-2 ml-1 py-1"
      >
        {newdata}
      </div>
    </div>
  );
}

export default LeftCard;

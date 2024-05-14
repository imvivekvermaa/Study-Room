import video1 from "./videos/drone.mp4";
import video2 from "./videos/mars2.mp4";
import video3 from "./videos/turtle.mp4";

function VideoCom() {
  return (
    <div id="video" className="col-start-1 col-end-5">
      <div className=" ">
        <div className="w-full h-[7vh] text-zinc-400 text-md flex justify-center items-center pt-2">
          <b className="text-white">Stay tune!</b>✨ for the most awaited Ai
          model
          <b className="mx-2 text-white">Sora</b> to turn your ideas into
          videos. It will be available here  for our users
          as soon as it releases...
        </div>

        <div id="video" className="mt-3 flex gap-2 justify-evenly mb-2">
          <div className="w-[30vw] h-full rounded-xl">
            <video
              className="w-full h-full object-cover rounded-lg"
              muted
              loop
              autoPlay
            >
              <source src={video1} type="video/mp4" />
            </video>
            <div className="flex justify-center mt-2 text-zinc-500 text-center text-sm border-b border-zinc-500 rounded-b-xl">
              A furious drone shot close to ground with mountains view.
            </div>
          </div>

          <div className="w-[30vw] h-full rounded-xl">
            <video
              className="w-full h-full object-cover rounded-lg"
              muted
              loop
              autoPlay
            >
              <source src={video2} type="video/mp4" />
            </video>
            <div className="flex justify-center mt-2 text-zinc-500 text-center text-sm border-b border-zinc-500 rounded-b-xl">
              An astronaut couple visting Mars for the first time.
            </div>
          </div>

          <div className="w-[30vw] h-full rounded-xl">
            <video
              className="w-full h-full object-cover rounded-lg"
              muted
              loop
              autoPlay
            >
              <source src={video3} type="video/mp4" />
            </video>
            <div className="flex justify-center mt-2 text-zinc-500 text-center text-sm border-b border-zinc-500 rounded-b-xl">
              A baby turtle slowly moving towards ocean.
            </div>
          </div>
        </div>
        <div id="videoAbout" className="text-zinc-400 text-center px-5 mt-6">
          <div className=" text-zinc-400">(Video Previews)</div>
        </div>
      </div>
    </div>
  );
}

export default VideoCom;

import { FaLinkedin, FaRegCopyright, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-[50vh] col-start-1 col-end-5 bg-zinc-950 flex items-center gap-4">
      <div className="w-full h-72 border-t rounded-3xl text-white flex items-center relative">
        <span className="text-green-600 font-bold text-6xl absolute left-[5%] top-[25%] select-none">
          {"<study room>"}
        </span>
        <br />
        <span className="absolute text-zinc-500 ml-10 w-[55%] left-[40%] top-[20%] select-none">
          Artificial Intelligence is already over the clouds, So why not use it
          at our full potential? Very soon we all will be able to generate
          videos like these by just prompting the desired outcome. <br />
          <span className="text-zinc-400">
            This platform is to provide the best experience while you Ai-ing
            your geeky study-questions. The utilization of AI brings efficiency,
            accuracy, and innovation to your work. creativity information is now
            at your fingertips, you just need to poke that keyboard the right
            way.
          </span>
        </span>
        <span className="absolute left-[40%] top-[87%] flex gap-3 items-center select-none">
          Contact us-
          <Link
            className="hover:shadow hover:shadow-zinc-400 hover:rounded"
            to={"https://www.linkedin.com/in/imvivekvermaa"}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="hover:shadow hover:shadow-zinc-400 hover:rounded"
            to={"https://twitter.com/imvivekvermaa"}
            target="_blank"
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            className="hover:shadow hover:shadow-zinc-400 hover:rounded"
            to={"mailto:imvivekvermaa@gmail.com"}
          >
            <MdEmail />
          </Link>
          <span className="flex items-center gap-2 border-l border-sm text-zinc-400">
            <FaRegCopyright className="text-sm ml-4" />
            2024
          </span>
        </span>
      </div>
    </div>
  );
}

export default Footer;

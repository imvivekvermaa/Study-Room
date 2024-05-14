import { useState } from "react";

function Youtube() {
  let persistedUrl;
  const [url, setUrl] = useState("");

  const finalURL = function convertToEmbeddedUrl(normalUrl) {
    // Regular expression to match YouTube video ID
    const videoIdRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Extracting video ID from the URL
    const match = normalUrl.match(videoIdRegex);

    if (match && match[1]) {
      const videoId = match[1];
      // Constructing embedded URL
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      // If URL doesn't match the pattern
      return "Invalid YouTube URL";
    }
  };

  // Example usage:
  async function urlData(event: any) {
    event.preventDefault();
    const inputUrl = event.target["0"].value;
    const embeddedUrl = finalURL(inputUrl);
    console.log(embeddedUrl);
    setUrl(embeddedUrl);
    event.target["0"].value = "";
  }
  console.log(url)

  return (
    <div className="w-[56vw] h-[60vh] mt-20">
      <div className="w-full h-full flex items-center justify-center">
      <iframe
        className="w-full h-full rounded-lg ml-2 border border-zinc-700"
        src={url == 'Invalid YouTube URL'? "https://youtu.be/8ZjFAhQjGzY?si=Tb4dlh46W9bD2MpY": url}
      />
      </div>
      <div className="w-full flex items-center justify-center text-zinc-400 ">
        <form className=" " action="submit" onSubmit={urlData} id="inputbox">
          <input
            className="w-[30vw] border-b rounded-t rounded-xl border-zinc-700 bg-transparent focus:outline-none text-center text-sm"
            type="text"
            placeholder="Youtube video url"
          />
        </form>
      </div>
      {/* <div className="h-48 rounded-lg mt-3 ml-2 border-b border-t border-zinc-300 overflow-auto text-zinc-400 px-2 pt-3">
        maxime sint eveniet deserunt nemo laudantium necessitatibus illo magni
        excepturi consectetur ipsa qui. Tempore explicabo molestiae omnis? sdgsd
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellat cumque rem neque aliquid! In reiciendis, hic mollitia perspiciatis totam reprehenderit autem porro? Id placeat inventore eaque ullam iusto. Repellendus?
        Sunt commodi consequuntur ratione suscipit quae voluptatem similique in cupiditate, et temporibus modi nisi, vero atque totam nobis corrupti quod, enim numquam necessitatibus laboriosam tenetur. Laudantium similique minus aliquid harum.
        Nisi dolor nihil itaque. Reiciendis nisi, laudantium nulla doloribus repudiandae ullam delectus culpa vel, magni fugiat, debitis inventore exercitationem vero at! Obcaecati, commodi! A laudantium suscipit beatae numquam cum fugiat!
        Rem unde eaque fugiat temporibus itaque libero repellat nesciunt mollitia iusto ratione, quam ipsa placeat earum corporis animi sint tempora quos, nam non. Nulla accusamus deleniti, voluptas fuga consectetur unde.
        Assumenda porro soluta dolorem quasi delectus molestiae ducimus blanditiis iste labore! Commodi recusandae blanditiis consequatur a quis eos itaque dignissimos obcaecati quia numquam natus ducimus labore, odit et necessitatibus ea.
      </div> */}
    </div>
  );
}

export default Youtube;

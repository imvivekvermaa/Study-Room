import MainPanel from "./MainPanel";
import VideoCom from "./VideoCom";
import Footer from "./Footer";
import MiddlePart from "./MiddlePart";

function LandingPage() {
  return (
    <div className="w-full h-full bg-zinc-950 grid grid-cols-4 overflow-auto">
      <MainPanel />
      <MiddlePart />
      <VideoCom />
      <Footer />
    </div>
  );
}

export default LandingPage;

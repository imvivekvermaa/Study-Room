import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Homepage/LandingPage";
import Typescript from "./Components/Pages/Typescript";
import Python from "./Components/Pages/Python";
import MachineLearning from "./Components/Pages/MachineLearning";
import Navbar from "./Components/Homepage/Navbar";
import Singup_Login from "./Components/Singup&Login/Singup_Login";


function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/typescript" element={<Typescript />} />
          <Route path="/python" element={<Python />} />
          <Route path="/machinelearning" element={<MachineLearning />} />
          <Route path="/login" element={<Singup_Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

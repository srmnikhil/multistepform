import formImage from "./assets/form.svg";
import Button from "./components/Button";
import MultiStepForm from "./pages/MultiStepForm";
import About from "./pages/About";
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <img
        src={formImage}
        alt="Developer Logo"
        className="w-100 mb-8 drop-shadow-xl animate-[0.8s_ease-out_forwards] motion-safe:animate-[slideDown_0.8s_ease-out_forwards]"
      />
      <h1 className="font-extrabold text-3xl sm:text-5xl text-gray-800 leading-tight">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Multi Step Form!
        </span>
      </h1>
      <p className="mt-6 text-base sm:text-xl italic text-gray-400 max-w-sm sm:max-w-2xl px-2">
        Build modern, dynamic forms with ease. Click below to start your
        journey!
      </p>

      <div className="mt-5">
        <Button
          onClick={() => navigate("/form")}
          label="Get Started"
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 text-base sm:px-8 sm:py-3 sm:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        />
        <Button
          onClick={() => navigate("/about")}
          label="About"
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 text-base sm:px-8 sm:py-3 sm:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ml-4"
        />
      </div>
      
      <p className="mt-12 text-sm text-gray-400">
        Built with ❤️ using React + Tailwind
      </p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<MultiStepForm />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

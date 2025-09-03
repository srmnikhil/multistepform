import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function About() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 relative">
      {/* Background circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <h1 className="font-extrabold text-3xl sm:text-5xl text-gray-800 leading-tight mb-8">
        About <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">This Website</span>
      </h1>

      <div className="max-w-3xl text-left space-y-6 sm:px-4">
        {/* About the website */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
          This website is a dynamic, multi-step form platform built with React and TailwindCSS. 
          It allows users to navigate through structured chapters and screens, making form filling
          intuitive and organized. The form is completely <strong>config-driven</strong>, 
          meaning all questions, options, and validation rules are generated from a JavaScript configuration file, 
          making it highly flexible and easily extendable without modifying the core code.
        </p>

        {/* About the form */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
          Each form is divided into chapters containing multiple screens. Users can navigate forward or backward, 
          and progress is clearly indicated through a visually appealing progress bar. 
          The form supports multiple input types such as text fields, radio buttons, and checkboxes, 
          along with validation for numbers, emails, and required fields. 
          Upon submission, the form can be reset for new entries without reloading the page.
        </p>

        {/* About the developer */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
          Developed by <strong>Nikhil Sharma</strong>, an aspiring Software Engineer focused on MERN Stack development. 
          Passionate about clean, responsive, and scalable web applications. 
          Connect with the developer via:
          <ul className="list-disc list-inside mt-2">
            <li>
              LinkedIn: <a href="https://linkedin.com/in/srmnikhil" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">LinkedIn/srmnikhil</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/srmnikhil" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">GitHub/srmnikhil</a>
            </li>
            <li>
              Email: <a href="mailto:srmnikhilswn@gmail.com" className="text-purple-600 underline">srmnikhilswn@gmail.com</a>
            </li>
          </ul>
        </p>
      </div>

      {/* Back to Home Button */}
      <div className="mt-8">
        <Button
          onClick={() => navigate("/")}
          label="Back to Home"
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 sm:px-8 sm:py-3 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        />
      </div>

      <p className="mt-12 text-sm text-gray-400">
        Built with ❤️ using React + Tailwind
      </p>
    </div>
  );
}

export default About;

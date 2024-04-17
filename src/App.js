// import "./App.css";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Heading from "./components/Heading";
// import Home from "./components/Home";
// import Project from "./components/Project";

// function App() {
//   return (
//     <div className="w-full h-full">
//       <img
//         className="h-full w-full object-cover absolute"
//         src="/3.jpg"
//         alt=""
//       />
//       <div className="relative z-10 flex">
//         <Heading></Heading>
//         <div className="flex flex-col">
//           <Home></Home>
//           <About></About>
//           <Project></Project>
//           <Contact></Contact>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js
// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Heading from "./components/Heading";
// import Home from "./components/Home";
// import Project from "./components/Project";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <div className="w-full h-full">
//           <img
//             className="h-full w-full object-cover absolute"
//             src="/3.jpg"
//             alt=""
//           />
//           <div className="relative z-10 flex">
//             <Heading></Heading>
//             <div className="flex flex-col">
//               <Route path="/" exact element={Home} />
//               <Route path="/about" element={About} />
//               <Route path="/project" element={Project} />
//               <Route path="/contact" element={Contact} />
//             </div>
//           </div>
//         </div>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Heading from "./components/Heading";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full">
        <img
          className="h-full w-full object-cover absolute"
          src="/3.jpg"
          alt=""
        />
        <div className="relative flex">
          <div className="w-[200px]">
            <Heading />
          </div>
          <div className="flex flex-col w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

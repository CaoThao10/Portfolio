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
      <div className="lg:h-screen w-screen bg-[#000] ">
        <div className="bg-image-container">
          {/* <img
            className=" h-full w-full lg:h-screen lg:w-screen object-cover absolute "
            src="/3.jpg"
            alt=""
            style={{ minHeight: "100vh" }}
          /> */}
        </div>
        <div className="relative flex w-full h-full">
          <div className="  xl:w-[200px]">
            <Heading />
            <div className="lg:absolute fixed lg:top-[50%] top-[70%] z-10 xl:left-[176px] hide-on-mobile">
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lg:h-80 h-[150px] object-cover  "
                src="/cat.webp"
                alt=""
                style={{ left: "45px" }} // Mặc định cho màn điện thoại
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-full ">
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

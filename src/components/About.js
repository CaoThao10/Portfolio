// import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// const About = () => {
//   AOS.init();
//   return (
//     <div
//       data-aos="fade-right"
//       data-aos-offset="300"
//       data-aos-easing="ease-in-sine"
//       data-aos-duration="1500"
//       className="h-svh flex justify-center items-center p-3 overflow-hidden m-5"
//     >
//       <div class="popup-container lg:w-[900px] w-[450px]">
//         <div class="popup-body about-container lg:gap-8 gap-3 grid grid-cols-2">
//           <div class="img-frame w-[50px] lg:w-[250px] ">
//             <img className="w-[100px] lg:w-[250px]" src="/avt2.jpg" alt="" />
//           </div>
//           <div class="hero-content">
//             <h1 className="h1 lg:text-4xl text-md">Cao Thao</h1>
//             <p className="lg:text-xl text-sm">
//               I am a front-end developer. I am trying to learn and develop more
//               every day. I will dedicate myself to creating visually appealing
//               and user-friendly websites. I'm always open to using new skill
//               sets and I believe in the power of collaboration, working closely
//               with designers and backend developers to deliver consistent and
//               efficient solutions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
      className="h-svh flex justify-center items-center p-3 overflow-hidden m-5"
    >
      <div className="popup-container lg:w-[900px] w-[90%]">
        <div className="popup-body lg:h-[70vh] about-container lg:gap-8 gap-3 p-3 grid grid-cols-1 lg:grid-cols-2">
          <div className="img-frame w-[150px] lg:w-[250px]">
            <img className="w-full" src="/avt2.jpg" alt="" />
          </div>
          <div className="hero-content">
            <h1 className="h1 lg:text-4xl text-md">Cao Thao</h1>
            <p className="lg:text-xl text-sm">
              I am a front-end developer. I am trying to learn and develop more
              every day. I will dedicate myself to creating visually appealing
              and user-friendly websites. I'm always open to using new skill
              sets and I believe in the power of collaboration, working closely
              with designers and backend developers to deliver consistent and
              efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

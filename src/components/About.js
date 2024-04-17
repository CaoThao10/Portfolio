import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  AOS.init();
  return (
    // <div
    //   data-aos="zoom-in-up"
    //   className="h-svh flex justify-center items-center"
    // >
    //   <div class="popup-container">
    //     <div class="popup-body about-container">
    //       <div class="img-frame">
    //         <img src="/avt2.jpg" alt="" />
    //       </div>
    //       <div class="hero-content">
    //         <h1 className="h1">Cao Thao</h1>
    //         <p>
    //           I am a front-end developer. I am trying to learn and develop more
    //           every day. I will dedicate myself to creating visually appealing
    //           and user-friendly websites. I'm always open to using new skill
    //           sets and I believe in the power of collaboration, working closely
    //           with designers and backend developers to deliver consistent and
    //           efficient solutions.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
      className="h-svh flex justify-center items-center"
    >
      <div class="popup-container">
        <div class="popup-body about-container">
          <div class="img-frame">
            <img src="/avt2.jpg" alt="" />
          </div>
          <div class="hero-content">
            <h1 className="h1">Cao Thao</h1>
            <p>
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

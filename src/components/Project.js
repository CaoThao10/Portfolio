// import React from "react";

// const Project = () => {
//   return (
//     <div className="h-svh flex items-center justify-center h2">
//       <article class="card">
//         <h1 class="card__title">
//           <mark> Citrus Blush Blogs</mark> my project
//         </h1>
//         <p class="card__description">
//           A website that shares knowledge and experience about programming.
//           <br />
//           Technology uses HTML, CSS, ReactJS, Firebase <br />
//           Developed by: Cao Thao
//         </p>

//         <div class="media-object grid grid-cols-2">
//           <div>
//             <h2 class="media-object__title">Citrus Blush Blogs</h2>
//             <div className="flex gap-2 text-lg ">
//               <a
//                 href="/"
//                 // target="_blank"
//                 className="media-object__button"
//               >
//                 Preview
//                 <svg
//                   width="19"
//                   height="20"
//                   viewBox="0 0 19 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M9.54461 12.3572L10.7229 13.5355L14.2596 9.9997L10.7238 6.46387L9.54544 7.64303L11.0679 9.16637H4.78711V10.833H11.0679L9.54461 12.3572Z"
//                     fill="#F8F8F8"
//                   />
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M15.9823 16.4813C19.5623 12.9013 19.5623 7.09801 15.9823 3.51801C12.4023 -0.061992 6.59898 -0.061992 3.01898 3.51801C-0.561015 7.09801 -0.561015 12.9013 3.01898 16.4813C6.59898 20.0613 12.4023 20.0613 15.9823 16.4813ZM14.804 15.303C15.5004 14.6066 16.0529 13.7798 16.4298 12.8698C16.8067 11.9599 17.0007 10.9846 17.0007 9.99967C17.0007 9.01475 16.8067 8.03948 16.4298 7.12953C16.0529 6.21958 15.5004 5.39278 14.804 4.69634C14.1075 3.9999 13.2807 3.44745 12.3708 3.07053C11.4608 2.69362 10.4856 2.49963 9.50065 2.49963C8.51573 2.49963 7.54045 2.69362 6.63051 3.07054C5.72056 3.44745 4.89376 3.9999 4.19732 4.69634C2.79079 6.10287 2.0006 8.01054 2.0006 9.99967C2.0006 11.9888 2.79079 13.8965 4.19732 15.303C5.60385 16.7095 7.51151 17.4997 9.50065 17.4997C11.4898 17.4997 13.3975 16.7095 14.804 15.303Z"
//                     fill="#F8F8F8"
//                   />
//                 </svg>
//               </a>
//               <a
//                 href="https://github.com/CaoThao10/Blog"
//                 className="media-object__button"
//                 // target="_blank"
//               >
//                 View GitHub{" "}
//                 <svg
//                   width="19"
//                   height="20"
//                   viewBox="0 0 19 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M9.54461 12.3572L10.7229 13.5355L14.2596 9.9997L10.7238 6.46387L9.54544 7.64303L11.0679 9.16637H4.78711V10.833H11.0679L9.54461 12.3572Z"
//                     fill="#F8F8F8"
//                   />
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M15.9823 16.4813C19.5623 12.9013 19.5623 7.09801 15.9823 3.51801C12.4023 -0.061992 6.59898 -0.061992 3.01898 3.51801C-0.561015 7.09801 -0.561015 12.9013 3.01898 16.4813C6.59898 20.0613 12.4023 20.0613 15.9823 16.4813ZM14.804 15.303C15.5004 14.6066 16.0529 13.7798 16.4298 12.8698C16.8067 11.9599 17.0007 10.9846 17.0007 9.99967C17.0007 9.01475 16.8067 8.03948 16.4298 7.12953C16.0529 6.21958 15.5004 5.39278 14.804 4.69634C14.1075 3.9999 13.2807 3.44745 12.3708 3.07053C11.4608 2.69362 10.4856 2.49963 9.50065 2.49963C8.51573 2.49963 7.54045 2.69362 6.63051 3.07054C5.72056 3.44745 4.89376 3.9999 4.19732 4.69634C2.79079 6.10287 2.0006 8.01054 2.0006 9.99967C2.0006 11.9888 2.79079 13.8965 4.19732 15.303C5.60385 16.7095 7.51151 17.4997 9.50065 17.4997C11.4898 17.4997 13.3975 16.7095 14.804 15.303Z"
//                     fill="#F8F8F8"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div class="media-object__thumbnail overflow-hidden rounded-2xl">
//             <img className="object-cover h-full w-full" src="/6.png" alt="" />
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default Project;

import React from "react";

const Project = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="h-svh w-full flex items-center justify-center "
    >
      <article className="card lg:w-[900px] w-[80%] lg:p-10 p-3">
        <h1 className="card__title">
          <mark> Citrus Blush Blogs</mark> my project
        </h1>
        <p className="card__description">
          A website that shares knowledge and experience about programming.
          <br />
          Technology uses HTML, CSS, ReactJS, Firebase <br />
          Developed by: Cao Thao
        </p>

        <div className="media-object flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
          <div className="w-[180px] lg:h-[160px] flex flex-col justify-center items-center lg:w-[100%] overflow-hidden rounded-2xl">
            <img
              className="object-cover lg:h-full lg:w-full"
              src="/6.png"
              alt=""
            />
          </div>
          <div className="media-object__content flex gap-5 flex-col">
            <h2 className="lg:text-3xl font-bold">Citrus Blush Blogs</h2>
            <div className="flex lg:flex-row flex-col gap-2 text-lg ">
              <a
                href="/"
                className="media-object__button flex justify-center items-center   text-sm lg:text-lg px-5 py-2 rounded-full "
              >
                Preview
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.54461 12.3572L10.7229 13.5355L14.2596 9.9997L10.7238 6.46387L9.54544 7.64303L11.0679 9.16637H4.78711V10.833H11.0679L9.54461 12.3572Z"
                    fill="#F8F8F8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9823 16.4813C19.5623 12.9013 19.5623 7.09801 15.9823 3.51801C12.4023 -0.061992 6.59898 -0.061992 3.01898 3.51801C-0.561015 7.09801 -0.561015 12.9013 3.01898 16.4813C6.59898 20.0613 12.4023 20.0613 15.9823 16.4813ZM14.804 15.303C15.5004 14.6066 16.0529 13.7798 16.4298 12.8698C16.8067 11.9599 17.0007 10.9846 17.0007 9.99967C17.0007 9.01475 16.8067 8.03948 16.4298 7.12953C16.0529 6.21958 15.5004 5.39278 14.804 4.69634C14.1075 3.9999 13.2807 3.44745 12.3708 3.07053C11.4608 2.69362 10.4856 2.49963 9.50065 2.49963C8.51573 2.49963 7.54045 2.69362 6.63051 3.07054C5.72056 3.44745 4.89376 3.9999 4.19732 4.69634C2.79079 6.10287 2.0006 8.01054 2.0006 9.99967C2.0006 11.9888 2.79079 13.8965 4.19732 15.303C5.60385 16.7095 7.51151 17.4997 9.50065 17.4997C11.4898 17.4997 13.3975 16.7095 14.804 15.303Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/CaoThao10/Blog"
                className="media-object__button flex justify-center items-center   text-sm lg:text-lg px-5 py-2 rounded-full "
              >
                View GitHub{" "}
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.54461 12.3572L10.7229 13.5355L14.2596 9.9997L10.7238 6.46387L9.54544 7.64303L11.0679 9.16637H4.78711V10.833H11.0679L9.54461 12.3572Z"
                    fill="#F8F8F8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9823 16.4813C19.5623 12.9013 19.5623 7.09801 15.9823 3.51801C12.4023 -0.061992 6.59898 -0.061992 3.01898 3.51801C-0.561015 7.09801 -0.561015 12.9013 3.01898 16.4813C6.59898 20.0613 12.4023 20.0613 15.9823 16.4813ZM14.804 15.303C15.5004 14.6066 16.0529 13.7798 16.4298 12.8698C16.8067 11.9599 17.0007 10.9846 17.0007 9.99967C17.0007 9.01475 16.8067 8.03948 16.4298 7.12953C16.0529 6.21958 15.5004 5.39278 14.804 4.69634C14.1075 3.9999 13.2807 3.44745 12.3708 3.07053C11.4608 2.69362 10.4856 2.49963 9.50065 2.49963C8.51573 2.49963 7.54045 2.69362 6.63051 3.07054C5.72056 3.44745 4.89376 3.9999 4.19732 4.69634C2.79079 6.10287 2.0006 8.01054 2.0006 9.99967C2.0006 11.9888 2.79079 13.8965 4.19732 15.303C5.60385 16.7095 7.51151 17.4997 9.50065 17.4997C11.4898 17.4997 13.3975 16.7095 14.804 15.303Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Project;

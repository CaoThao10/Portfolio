import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import App from "../App.css";
const Heading = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div className="fixed  bg-[#000] flex-col gap-y-10 w-full py-5  border border-l-0 border-t-0 border-b-0  border-r-gray-800  z-10 xl:h-svh   xl:w-[200px] flex items-center xl:pt-[50px]">
      <div className="silver-shadow  xl:w-[150px] hide-on-mobile xl:h-[180px] xl:overflow-hidden rounded-md xl:rounded-xl opacity-90 ">
        <img
          className=" xl:flex xl:flex-col  object-cover h-full w-full  hide-on-mobile"
          src="/avt3.jpg"
          alt=""
        />
      </div>

      <div className="flex xl:flex-col w-full justify-center  gap-10 font-semibold text-lg items-center ">
        <NavLink
          to="/"
          className={`flex  xl:gap-x-3 text-sm xl:text-xl icon  text-[#b1b1b1]  items-center justify-center ${
            currentTab === "home" && "active"
          }`}
          // href="/home"
          onClick={() => handleTabClick("home")}
        >
          <svg
            className={`hidden xl:inline-block ${
              currentTab === "home" && "active-icon"
            }`}
            width="28"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 19H9.692V13.115H14.308V19H18V10L12 5.46201L6 10V19ZM5 20V9.50001L12 4.21201L19 9.50001V20H13.308V14.115H10.692V20H5Z"
              fill="#b1b1b1"
            />
          </svg>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`flex  gap-1 xl:gap-x-3 text-sm xl:text-xl text-[#b1b1b1] icon item-center justify-center ${
            currentTab === "about" && "active"
          }`}
          onClick={() => handleTabClick("about")}
        >
          <svg
            className={`hidden xl:inline-block ${
              currentTab === "about" && "active-icon"
            }`}
            width="28"
            height="26"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M230.92 212C215.69 185.67 192.22 166.79 164.83 157.84C178.378 149.775 188.904 137.485 194.792 122.858C200.679 108.231 201.603 92.076 197.42 76.8736C193.238 61.6711 184.181 48.2619 171.64 38.7052C159.098 29.1486 143.767 23.9728 128 23.9728C112.232 23.9728 96.9011 29.1486 84.36 38.7052C71.819 48.2619 62.7617 61.6711 58.5792 76.8736C54.3966 92.076 55.3201 108.231 61.2076 122.858C67.0952 137.485 77.6215 149.775 91.1698 157.84C63.7798 166.78 40.3098 185.66 25.0798 212C24.5213 212.911 24.1508 213.924 23.9903 214.98C23.8297 216.036 23.8823 217.114 24.145 218.149C24.4077 219.185 24.8751 220.157 25.5197 221.009C26.1643 221.861 26.973 222.575 27.898 223.11C28.8231 223.644 29.8458 223.988 30.9059 224.12C31.9659 224.253 33.0418 224.172 34.07 223.882C35.0982 223.592 36.058 223.1 36.8927 222.433C37.7273 221.766 38.42 220.939 38.9298 220C57.7698 187.44 91.0698 168 128 168C164.93 168 198.23 187.44 217.07 220C217.58 220.939 218.272 221.766 219.107 222.433C219.942 223.1 220.901 223.592 221.93 223.882C222.958 224.172 224.034 224.253 225.094 224.12C226.154 223.988 227.176 223.644 228.102 223.11C229.027 222.575 229.835 221.861 230.48 221.009C231.124 220.157 231.592 219.185 231.855 218.149C232.117 217.114 232.17 216.036 232.009 214.98C231.849 213.924 231.478 212.911 230.92 212ZM71.9998 96C71.9998 84.9242 75.2841 74.0972 81.4375 64.8881C87.5908 55.6789 96.3368 48.5013 106.57 44.2627C116.802 40.0242 128.062 38.9152 138.925 41.076C149.788 43.2368 159.766 48.5703 167.598 56.402C175.429 64.2338 180.763 74.212 182.924 85.0749C185.085 95.9379 183.976 107.198 179.737 117.43C175.499 127.663 168.321 136.409 159.112 142.562C149.903 148.716 139.076 152 128 152C113.153 151.984 98.9179 146.079 88.4193 135.58C77.9207 125.082 72.0157 110.847 71.9998 96Z"
              fill="#b1b1b1"
            />
          </svg>
          About
        </NavLink>
        <NavLink
          to="/project"
          className={` flex gap-1 xl:gap-x-3 text-sm xl:text-xl icon text-[#b1b1b1] item-center justify-center ${
            currentTab === "project" && "active"
          }`}
          onClick={() => handleTabClick("project")}
          // href="/project"
        >
          <svg
            className={`hidden xl:inline-block ${
              currentTab === "project" && "active-icon"
            }`}
            width="28"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.615 20C4.155 20 3.771 19.846 3.463 19.538C3.15433 19.2293 3 18.845 3 18.385V8.615C3 8.155 3.15433 7.771 3.463 7.463C3.771 7.15433 4.155 7 4.615 7H9V5.615C9 5.155 9.15433 4.771 9.463 4.463C9.771 4.15433 10.155 4 10.615 4H13.385C13.845 4 14.2293 4.15433 14.538 4.463C14.846 4.771 15 5.155 15 5.615V7H19.385C19.845 7 20.229 7.15433 20.537 7.463C20.8457 7.771 21 8.155 21 8.615V18.385C21 18.845 20.846 19.229 20.538 19.537C20.2293 19.8457 19.845 20 19.385 20H4.615ZM4.615 19H19.385C19.5383 19 19.6793 18.936 19.808 18.808C19.936 18.6793 20 18.5383 20 18.385V8.615C20 8.46167 19.936 8.32067 19.808 8.192C19.6793 8.064 19.5383 8 19.385 8H4.615C4.46167 8 4.32067 8.064 4.192 8.192C4.064 8.32067 4 8.46167 4 8.615V18.385C4 18.5383 4.064 18.6793 4.192 18.808C4.32067 18.936 4.46167 19 4.615 19ZM10 7H14V5.615C14 5.46167 13.936 5.32067 13.808 5.192C13.6793 5.064 13.5383 5 13.385 5H10.615C10.4617 5 10.3207 5.064 10.192 5.192C10.064 5.32067 10 5.46167 10 5.615V7Z"
              fill="#b1b1b1"
            />
          </svg>
          Project
        </NavLink>
        <NavLink
          to="/contact"
          className={` flex gap-1 xl:gap-x-3 text-sm xl:text-xl icon text-[#b1b1b1] item-center justify-center ${
            currentTab === "contact" && "active"
          }`}
          onClick={() => handleTabClick("contact")}
          // href="/contact"
        >
          <svg
            className={`hidden xl:inline-block ${
              currentTab === "contact" && "active-icon"
            }`}
            width="24"
            height="22"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.95 3.684L8.637 8.912C8.45761 9.06063 8.23196 9.14196 7.999 9.14196C7.76604 9.14196 7.54039 9.06063 7.361 8.912L1.051 3.684C1.01713 3.78591 0.999905 3.89261 1 4V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V4C15.0004 3.89266 14.9835 3.78596 14.95 3.684ZM2 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V12C16 12.5304 15.7893 13.0391 15.4142 13.4142C15.0391 13.7893 14.5304 14 14 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2ZM1.79 3L7.366 7.603C7.54459 7.75051 7.76884 7.83144 8.00046 7.83199C8.23209 7.83254 8.45672 7.75266 8.636 7.606L14.268 3H1.79Z"
              fill="#b1b1b1"
            />
          </svg>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Heading;

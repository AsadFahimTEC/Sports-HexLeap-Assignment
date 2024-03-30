// import { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Banners = () => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     const localTheme = localStorage.getItem("theme");
//     document.querySelector("html").setAttribute("data-theme", localTheme);
//   }, [theme]);

//   const handleToggle = (e) => {
//     if (e.target.checked) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//   return (
//     <div className="mt-4">
//       <div className="p-4 md:p-8">
//         <div className="flex justify-between items-center gap-4 -mt-2">  
//         <h1 className="text-2xl text-[#000000] md:text-4xl font-bold mb-4">
//           Sports
//         </h1>
//          {/* toggle theme */}
//       <div className="navbar-end ">
//         {/* dark Light */}

//         <label className="swap swap-rotate mr-5">
//           {/* this hidden checkbox controls the state */}
//           <input
//             type="checkbox"
//             onChange={handleToggle}
//             checked={theme == "light" ? false : true}
//           />

//           {/* sun icon */}
//           <svg
//             className="swap-on fill-current lg:w-10 md:w-10 w-8 lg:h-10 md:h-10 h-8"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//           </svg>

//           <svg
//             className="swap-off fill-current lg:w-10 md:w-10 w-8 lg:h-10 md:h-10 h-8"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//           </svg>
//         </label>

        
//       </div>
          
//         </div>
        
      
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mr-4 ml-4">
//           {/* Image 1 */}
//           <div className="flex flex-col">
//             <img
//               src="https://i.ibb.co/jy2RyZk/dc33760174d3f67737f6e318d0f118ff.jpg"
//               className="w-60 h-72"
//               alt=""
//             />
//             <div className="mt-2">
//               <h1 className="text-[#000000]">Sacramento River Cats</h1>
//               <div className="flex gap-8">
//                 <h6 className="text-[#525965]">Total events</h6>
//                 <h6 className="text-[#525965]">Sport</h6>
//               </div>
//               <div className="flex gap-8">
//                 <h6 className="text-[#000000]">48 Events</h6>
//                 <h6 className="text-[#000000] ml-2">Baseball</h6>
//               </div>
//             </div>
//           </div>
//           {/* Image 2 */}
//           <div className="flex flex-col">
//             <img
//               src="https://i.ibb.co/7Y0dTqT/76e2b366b2456bbd169b0c3c9525252c.jpg"
//               className="w-60 h-72"
//               alt=""
//             />
//             <div className="mt-2">
//               <h1 className="text-[#000000]">Las Vegas Aviator</h1>
//               <div className="flex gap-8">
//                 <h6 className="text-[#525965]">Total events</h6>
//                 <h6 className="text-[#525965]">Sport</h6>
//               </div>
//               <div className="flex gap-8">
//                 <h6 className="text-[#000000]">28 Events</h6>
//                 <h6 className="text-[#000000] ml-2">Baseball</h6>
//               </div>
//             </div>
//           </div>
//           {/* Image 3 */}
//           <div className="flex flex-col">
//             <img
//               src="https://i.ibb.co/Xp3nzpH/b2fcf21c696811f745109da24a740d73.jpg"
//               className="w-60 h-72"
//               alt=""
//             />
//             <div className="mt-2">
//               <h1 className="text-[#000000]">new jersey devils</h1>
//               <div className="flex gap-8">
//                 <h6 className="text-[#525965]">Total events</h6>
//                 <h6 className="text-[#525965]">Sport</h6>
//               </div>
//               <div className="flex gap-8">
//                 <h6 className="text-[#000000]">15 Events</h6>
//                 <h6 className="text-[#000000] ml-2">ice hockey</h6>
//               </div>
//             </div>
//           </div>
//           {/* Image 4 */}
//           <div className="flex flex-col">
//             <img
//               src="https://i.ibb.co/7Y0dTqT/76e2b366b2456bbd169b0c3c9525252c.jpg"
//               className="w-60 h-72"
//               alt=""
//             />
//             <div className="mt-2">
//               <h1 className="text-[#000000]">Las Vegas Aviators</h1>
//               <div className="flex gap-8">
//                 <h6 className="text-[#525965]">Total events</h6>
//                 <h6 className="text-[#525965]">Sport</h6>
//               </div>
//               <div className="flex gap-8">
//                 <h6 className="text-[#000000]">28 Events</h6>
//                 <h6 className="text-[#000000] ml-2">Baseball</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <button className="rounded p-2 text-white bg-[#2C9CF0]">
//           See More
//         </button>
//       </div>
   
//     </div>
//   );
// };

// export default Banners;

// typescript
import { useState, useEffect } from "react";

const Banners = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="mt-4">
      <div className="p-4 md:p-8">
        <div className="flex justify-between items-center gap-4 -mt-2">
          <h1 className="text-2xl text-[#000000] md:text-4xl font-bold mb-4">
            Sports
          </h1>
          {/* toggle theme */}
          <div className="navbar-end">
            {/* dark Light */}

            <label className="swap swap-rotate mr-5">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme == "light" ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current lg:w-10 md:w-10 w-8 lg:h-10 md:h-10 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current lg:w-10 md:w-10 w-8 lg:h-10 md:h-10 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mr-4 ml-4">
          {/* Image 1 */}
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co/jy2RyZk/dc33760174d3f67737f6e318d0f118ff.jpg"
              className="w-60 h-72"
              alt=""
            />
            <div className="mt-2">
              <h1 className="text-[#000000]">Sacramento River Cats</h1>
              <div className="flex gap-8">
                <h6 className="text-[#525965]">Total events</h6>
                <h6 className="text-[#525965]">Sport</h6>
              </div>
              <div className="flex gap-8">
                <h6 className="text-[#000000]">48 Events</h6>
                <h6 className="text-[#000000] ml-2">Baseball</h6>
              </div>
            </div>
          </div>
          {/* Image 2 */}
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co/7Y0dTqT/76e2b366b2456bbd169b0c3c9525252c.jpg"
              className="w-60 h-72"
              alt=""
            />
            <div className="mt-2">
              <h1 className="text-[#000000]">Las Vegas Aviator</h1>
              <div className="flex gap-8">
                <h6 className="text-[#525965]">Total events</h6>
                <h6 className="text-[#525965]">Sport</h6>
              </div>
              <div className="flex gap-8">
                <h6 className="text-[#000000]">28 Events</h6>
                <h6 className="text-[#000000] ml-2">Baseball</h6>
              </div>
            </div>
          </div>
          {/* Image 3 */}
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co/Xp3nzpH/b2fcf21c696811f745109da24a740d73.jpg"
              className="w-60 h-72"
              alt=""
            />
            <div className="mt-2">
              <h1 className="text-[#000000]">new jersey devils</h1>
              <div className="flex gap-8">
                <h6 className="text-[#525965]">Total events</h6>
                <h6 className="text-[#525965]">Sport</h6>
              </div>
              <div className="flex gap-8">
                <h6 className="text-[#000000]">15 Events</h6>
                <h6 className="text-[#000000] ml-2">Ice Hockey</h6>
              </div>
            </div>
          </div>
          {/* Image 4 */}
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co/7Y0dTqT/76e2b366b2456bbd169b0c3c9525252c.jpg"
              className="w-60 h-72"
              alt=""
            />
            <div className="mt-2">
              <h1 className="text-[#000000]">Las Vegas Aviators</h1>
              <div className="flex gap-8">
                <h6 className="text-[#525965]">Total events</h6>
                <h6 className="text-[#525965]">Sport</h6>
              </div>
              <div className="flex gap-8">
                <h6 className="text-[#000000]">28 Events</h6>
                <h6 className="text-[#000000] ml-2">Baseball</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="rounded p-2 text-white bg-[#2C9CF0]">
          See More
        </button>
      </div>
    </div>
  );
};

export default Banners;

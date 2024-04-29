import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";

import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Change this value to adjust when the navbar should change
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <nav>
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-10">
          <a href="/">
            <Logo style="h-auto w-[100px]" />
          </a>

          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
              Home
            </li>

            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <BiSearch className="sm hidden h-6 w-6 sm:inline" />
          <p className="hidden lg:inline">Kids</p>
          <BsBellFill className="h-6 w-6" />

          <img
            src="/dp.png"
            alt="dp"
            width={60}
            height={60}
            className="cursor-pointer rounded w-auto h-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import Logo from "../Logo/Logo";
// import { BiSearch } from "react-icons/bi";
// import { BsBellFill } from "react-icons/bs";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 100) { // Change this value to adjust when the navbar should change
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
//       <div className="container flex justify-between items-center px-4 py-3">
//         <a href="/">
//           <Logo className="h-auto w-[100px]" />
//         </a>

//         <ul className="hidden space-x-4 md:flex">
//           <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
//             Home
//           </li>

//           <li className="headerLink">TV Shows</li>
//           <li className="headerLink">Movies</li>
//           <li className="headerLink">New & Popular</li>
//           <li className="headerLink">My List</li>
//         </ul>

//         <div className="flex items-center space-x-4 text-sm font-light">
//           <BiSearch className="sm hidden h-6 w-6 sm:inline" />
//           <p className="hidden lg:inline">Kids</p>
//           <BsBellFill className="h-6 w-6" />

//           <img
//             src="/dp.png"
//             alt="dp"
//             width={60}
//             height={60}
//             className="cursor-pointer rounded w-auto h-auto"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

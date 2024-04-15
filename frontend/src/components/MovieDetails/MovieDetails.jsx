// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import { baseUrl } from "../../utils/constant";
// import { IoIosInformationCircle } from "react-icons/io";
// import { FaPlay } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";

// const MovieDetails = ({ movie, showPlayer, setShowPlayer, trailerURL }) => {
//     // var a = "https://www.youtube.com/watch?v=XeDbyVODQ5M";
//     var movieTrailorId = trailerURL.split("=");
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-screen justify-center lg:pb-12">
//           <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
//             {/* <img
//               fill
//               src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
//               className="object-cover"
//               alt="movie poster"
//             /> */}
//             <iframe
//               className="w-screen aspect-video object-cover"              src={`https://www.youtube.com/embed/${movieTrailorId[1]}?autoplay=1&mute=1&controls=0&showinfo=0`}
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerpolicy="strict-origin-when-cross-origin"
//               allowfullscreen
//             ></iframe>
//           </div>
//           <div className="z-10 relative flex flex-col items-start space-y-3 px-6">
//           <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl ml-10">
//             {movie?.title || movie?.name || movie?.original_name}
//           </h1>
//           {/* <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl ml-10"> */}
//           <p className="max-w-lg text-sm md:text-base lg:text-lg">
//             {movie?.overview}
//           </p>

//           <div className="flex space-x-3">
//             <button
//               className="bannerButton bg-white text-black ml-10"
//               onClick={() => {
//                 setShowPlayer(true);
//               }}
//             >
//               <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
//               Play
//             </button>

//             <button className="bannerButton bg-[gray]/70">
//               <IoIosInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
//               More Info
//             </button>
//           </div>
//           </div>
//         </div>

//         <div
//           className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
//             showPlayer ? "opacity-100 z-50" : "opacity-0 -z-10"
//           }`}
//         >
//           <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
//             <span className="font-semibold">Play Trailer</span>
//             <div
//               className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
//               onClick={() => setShowPlayer(false)}
//             >
//               <AiOutlineClose className="h-5" />
//             </div>
//           </div>
//           <div className="relative pt-[56.25%]">
//             <ReactPlayer
//               url={trailerURL}
//               width="100%"
//               height="100%"
//               style={{ position: "absolute", top: "0", left: "0" }}
//               controls={true}
//               playing={showPlayer}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieDetails;

// Banner css solved

// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import { IoIosInformationCircle } from "react-icons/io";
// import { FaPlay } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";

// const MovieDetails = ({ movie, showPlayer, setShowPlayer, trailerURL }) => {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-screen justify-center lg:pb-12">
//           <div className="absolute top-0 left-0 w-full h-full bg-black z-0">
//               <img
//                 src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
//                 // src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}`}
//                 alt="movie poster"
//                 className="object-cover w-full h-full"
//               />
//             {/* )} */}
//           </div>
//           <div className="z-10 relative flex flex-col items-start space-y-3 px-6">
//             <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
//               {movie?.title || movie?.name || movie?.original_name}
//             </h1>
//             <p className="max-w-lg text-sm md:text-base lg:text-lg">
//               {movie?.overview}
//             </p>
//             <div className="flex space-x-3">
//             <button
//               className="bannerButton bg-white text-black ml-10"
//               onClick={() => {
//                 setShowPlayer(true);
//               }}
//             >
//               <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
//               Play
//             </button>

//               <button className="bannerButton bg-[gray]/70">
//                 <IoIosInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
//                 More Info
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Close button for the trailer */}
//         {showPlayer && (
//           <div className="fixed top-3 right-3">
//             <button
//               className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full focus:outline-none"
//               onClick={() => setShowPlayer(false)}
//             >
//               <AiOutlineClose className="h-5" />
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default MovieDetails;

import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosInformationCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { baseUrl } from "../../utils/constant";
import ReactPlayer from "react-player/lazy";

const MovieDetails = ({ movie, trailerURL }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  var movieTrailorId = trailerURL.split("=");
  // var movieTrailorId = trailerURL ? trailerURL.split("=") : null;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-screen justify-center lg:pb-12">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-0">
            {/* <img
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                alt="movie poster"
                className="object-cover w-full h-full"
              /> */}
            {/* <iframe
              className="w-screen aspect-video object-cover"
              src={`https://www.youtube.com/embed/${movieTrailorId[1]}?autoplay=1&mute=1&controls=0&showinfo=0`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
            {movieTrailorId[1] == "undefined" ? (
              // <iframe
              //   className="w-screen aspect-video object-cover"
              //   src={`https://www.youtube.com/embed/${movieTrailorId[1]}?autoplay=1&mute=1&controls=0&showinfo=0`}
              //   title="YouTube video player"
              //   frameborder="0"
              //   allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //   referrerpolicy="strict-origin-when-cross-origin"
              //   allowfullscreen
              // ></iframe>
              <img
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                alt="movie poster"
                className="object-cover w-full h-full"
              />
            ) : (
              <iframe
                className="w-screen aspect-video object-cover"
                src={`https://www.youtube.com/embed/${movieTrailorId[1]}?autoplay=1&mute=1&controls=0&showinfo=0`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              // <img
              //   src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
              //   alt="movie poster"
              //   className="object-cover w-full h-full"
              // />
            )}
          </div>
          <div className="z-10 relative flex flex-col items-start space-y-3 px-6">
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="max-w-lg text-sm md:text-base lg:text-lg">
              {movie?.overview}
            </p>
            <div className="flex space-x-3">
              <button
                className="bannerButton bg-white text-black ml-10"
                onClick={() => setShowPlayer(true)}
              >
                <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                Play
              </button>
              <button className="bannerButton bg-[gray]/70">
                <IoIosInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
                More Info
              </button>
            </div>
          </div>
        </div>
        {/* Close button for the trailer */}
        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0 -z-10"
          }`}
        >
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
            <span className="font-semibold">Play Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
              onClick={() => setShowPlayer(false)}
            >
              <AiOutlineClose className="h-5" />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={trailerURL}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

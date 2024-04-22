// import React from "react";

// const Thumbnail = ({ movie }) => {
//   return (
//     <a
//       href={`/${movie.id}`}
//       className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
//     >
//       <img
//         src={`https://image.tmdb.org/t/p/w500${
//           movie.backdrop_path || movie.poster_path
//         }`}
//         className="rounded-sm object-cover md:rounded"
//         fill
//         alt="movie poster"
//       />
//     </a>
//   );
// };

// export default Thumbnail;


// import React from "react";

// const Thumbnail = ({ movie }) => {
//   return (
//     <a
//       href={`/${movie.id}`}
//       className={`relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-110 md:hover:z-10`}
//     >
//       <img
//         src={`https://image.tmdb.org/t/p/w500${
//           movie.backdrop_path || movie.poster_path
//         }`}
//         className="rounded-sm object-cover md:rounded"
//         fill
//         alt="movie poster"
//       />
//     </a>
//   );
// };

// export default Thumbnail;



// import React, { useState } from "react";

// const Thumbnail = ({ movie }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <a
//       href={`/${movie.id}`}
//       className="relative min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:min-w-[260px] md:hover:scale-110 md:hover:z-10"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="relative h-28 md:h-36 overflow-hidden">
//         <img
//           src={`https://image.tmdb.org/t/p/w500${
//             movie.backdrop_path || movie.poster_path
//           }`}
//           className="rounded-sm object-cover md:rounded"
//           fill
//           alt="movie poster"
//         />
//       </div>
//       {hovered && (
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 md:p-4">
//           <p className="text-sm md:text-lg font-bold">{movie.title}</p>
//         </div>
//       )}
//     </a>
//   );
// };

// export default Thumbnail;



// import React, { useState } from "react";

// const Thumbnail = ({ movie }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <a
//       href={`/${movie.id}`}
//       className="relative min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:min-w-[260px] md:hover:scale-110 md:hover:z-10"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="relative min-h-[120px] md:min-h-[180px] overflow-hidden">
//         <img
//           src={`https://image.tmdb.org/t/p/w500${
//             movie.backdrop_path || movie.poster_path
//           }`}
//           className="rounded-sm object-cover md:rounded"
//           fill
//           alt="movie poster"
//         />
//         {hovered && (
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 md:p-4">
//             <p className="text-sm md:text-lg font-bold">{movie.title}</p>
//           </div>
//         )}
//       </div>
//     </a>
//   );
// };

// export default Thumbnail;

import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

import React, { useState } from "react";

const Thumbnail = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/${movie.id}`}
      className={`relative min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:min-w-[310px] md:hover:scale-110 md:hover:z-10 ${
        hovered ? "md:min-h-[240px]" : "md:min-h-[180px]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative overflow-hidden ${
          hovered ? "md:min-h-[250px]" : "md:min-h-[18px]"
        }`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          fill
          alt="movie poster"
        />
        {hovered && (
          <div className=" bottom-0 left-0 right-0 bg-black  text-white  p-3 md:p-6">
            <div className="flex mb-2">
              <PlayArrow className="border-white border-2 rounded-full p-1 mr-2" />
              <Add className="border-white border-2 rounded-full p-1 mr-2" />
              <ThumbUpAltOutlined className="border-white border-2 rounded-full p-1 mr-2" />
              <ThumbDownOutlined className="border-white border-2 rounded-full p-1 mr-2" />
            </div>
            <div className="flex items-center text-sm mb-2 text-gray-500 font-semibold">
              <span>1 hour 14 mins</span>
              <span className="border-gray-500 border-solid border-1 rounded px-1 mx-2">
                +16
              </span>
            </div>
            <div className="text-xs mb-2">
              Lorem ipsum dolor sit amet consect eaque illo veniam eligen
              numquam modi error!
            </div>
            <div className="text-sm text-gray-400">Action</div>
            <p className="text-sm md:text-sm ">{movie.title}</p>
          </div>
        )}
      </div>
    </a>
  );
};

export default Thumbnail;

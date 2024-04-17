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



import React, { useState } from "react";

const Thumbnail = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/${movie.id}`}
      className={`relative min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:min-w-[300px] md:hover:scale-110 md:hover:z-10 ${
        hovered ? "md:min-h-[240px]" : "md:min-h-[180px]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative overflow-hidden ${hovered ? "md:min-h-[240px]" : "md:min-h-[180px]"}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          fill
          alt="movie poster"
        />
        {hovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-3 md:p-10">
            <p className="text-sm md:text-lg font-bold">{movie.title}</p>
          </div>
        )}
      </div>
    </a>
  );
};

export default Thumbnail;

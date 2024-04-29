import React, { useEffect, useState } from "react";

import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

const Thumbnail = ({ movie }) => {
  const [hovered, setHovered] = useState(false);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.videos && data.videos.results.length > 0) {
          const trailerIndex = data.videos.results.findIndex(
            (element) => element.type === "Trailer"
          );
          const trailerURL = `https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`;
          setTrailer(trailerURL);
        } else {
          setTrailer("");
        }
      });
  }, []);

  var movieTrailorId = trailer.split("=");

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
        {trailer && hovered ? (
          <iframe
            src={`https://www.youtube.com/embed/${movieTrailorId[1]}?autoplay=1&mute=1&controls=0&showinfo=0`}
            className="absolute top-0 left-0 w-full h-full rounded-sm object-cover md:rounded"
            title="movie trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${
              movie.backdrop_path || movie.poster_path
            }`}
            className="rounded-sm object-cover md:rounded"
            fill
            alt="movie poster"
          />
        )}
        {hovered && (
          // <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 md:p-6 z-10">
          <div
            className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white ${
              trailer ? "p-1 md:p-2.5" : "p-3 md:p-6"
            } z-10 ${trailer ? "pb-8" : "pb-6"}`}
          >
            <div className={`flex mb-2`}>
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
            </div>
            {/* <div className="text-sm text-gray-400">Action</div>
            <p className="text-sm md:text-sm ">{movie.title}</p> */}
          </div>
        )}
      </div>
    </a>
  );
};

export default Thumbnail;

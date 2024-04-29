import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosInformationCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { baseUrl } from "../../utils/constant";
import ReactPlayer from "react-player/lazy";
import MoviePopup from "../MoviePopup/MoviePopup"; // Import the MoviePopup component

const MovieDetails = ({ movie, trailerURL }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of MoviePopup

  var movieTrailorId = trailerURL.split("=");

  const handleClosePopup = () => {
    setShowPopup(false); // Set showPopup to false to close the MoviePopup
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-screen justify-center lg:pb-12">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-0">
            {movieTrailorId[1] == "undefined" ? (
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
                frameBorder="0"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
              <button
                className="bannerButton bg-[gray]/70"
                onClick={() => setShowPopup(true)} // Show MoviePopup on click
              >
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
      {/* Show MoviePopup if showPopup is true */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-auto">
          <MoviePopup onClose={handleClosePopup} />
        </div>
      )}
    </>
  );
};

export default MovieDetails;

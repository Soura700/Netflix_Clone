import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { AiOutlineClose } from "react-icons/ai";

const MoviePopup = ({ onClose }) => {
  return (
    <div className="flex justify-center p-10">
      <div className="h-max w-6/12 border-2 border-zinc-950 bg-black ">
        <div>
          {/* Movie Poster */}
          <img
            className="h-96 w-full "
            src="https://m.media-amazon.com/images/M/MV5BMGYzM2QxNWEtY2EwZC00OTE2LWExZDEtNjQ0NDAyMjYzNGJlXkEyXkFqcGdeQXVyMTY1MjAwNDU0._V1_.jpg"
            alt=""
            style={{ opacity: 0.8 }}
          />
          {/* Play button */}
          <div className="absolute top-1/2 h-10 w-24 text-2xl mx-4 bg-white rounded-md p-1">
            <ArrowRightIcon fontSize="large" />
            <span>Play</span>
          </div>
          {/* Add to watchlist button */}
          <div className="absolute top-1/2 left-1/3 mx-4 bg-white rounded-full p-1 border-2 border-zinc-950">
            <AddIcon />
          </div>
          {/* Thumb Up button */}
          <div className="absolute top-1/2 left-1/4 bg-white rounded-full p-1 border-2 border-zinc-950">
            <ThumbUpIcon />
            <div className="absolute top-1/2 bg-white rounded-full p-1 border-2 border-zinc-950">
              <VolumeUpIcon />
            </div>
          </div>
        </div>
        {/* Movie details */}
        <div className="flex flex-row text-white">
          <div className="flex flex-col w-1/2 p-3">
            <span>89% Season 2</span>
            <span>language,self-harm,tobacco use</span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem quod ipsum ipsam nobis. Recusandae quas ipsa ullam
              assumenda officiis nobis ad officia? Mollitia consequuntur fugiat
              quidem odit officia aspernatur consequatur.
            </span>
          </div>
          <div className="flex flex-col mx-6 p-3">
            <span>cast: srk , ak</span>
            <span>genre: horror</span>
          </div>
        </div>
        {/* Episodes */}
        <div className="flex justify-between p-4 text-white">
          <span>Episodes</span>
          <div>Season 1</div>
        </div>
        <div className="p-4 ">
          {/* Episodes list */}
          <div className="w-full h-24 border-2 border-white "></div>
          <div className="w-full h-24 border-2 border-white my-3"></div>
          <div className="w-full h-24 border-2 border-white my-3 "></div>
          <div className="w-full h-24 border-2 border-white my-3"></div>
        </div>
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <button onClick={onClose} className="text-white">
            <AiOutlineClose className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;

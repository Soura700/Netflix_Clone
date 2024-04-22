import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="bg-black h-90 w-full">
      <div className="p-10 pl-40">
        <div className="flex space-x-4">
          <span className="text-blue-600 mt-5 ml-10">
            <FacebookIcon style={{ fontSize: "2rem" }} />
          </span>
          <span className="text-blue-600 mt-5 ml-10">
            <InstagramIcon style={{ fontSize: "2rem" }} />
          </span>
          <span className="text-blue-600 mt-5 ml-10">
            <TwitterIcon style={{ fontSize: "2rem" }} />
          </span>
          <span className="text-blue-600 mt-5 ml-10">
            <YouTubeIcon style={{ fontSize: "2rem" }} />
          </span>
        </div>
        <div className="flex flex-row mt-8 text-lg ">
          <div className="text-white flex flex-col mx-10 ">
            <span>Audio Description</span>
            <span className="mt-2">Investor Relation</span>
            <span className="mt-2">Legal notices</span>
          </div>
          <div className="text-white flex flex-col ml-20">
            <span>Help Centre</span>
            <span className="mt-2">Jobs</span>
            <span className="mt-2">Cookie Preferences</span>
          </div>
          <div className="text-white flex flex-col ml-20">
            <span>Gift Cards</span>
            <span className="mt-2">Terms Of use</span>
            <span className="mt-2">Corporate Information</span>
          </div>
          <div className="text-white flex flex-col ml-20">
            <span>Media Centre</span>
            <span className="mt-2">Privacy</span>
            <span className="mt-2">Contact Us</span>
          </div>
        </div>
        <div className="text-white mt-3 ml-8 ">
          <button className="border border-white p-2">Service Code</button>
        </div>
        <div className="text-white  mt-4 ml-8 text-xs">
          1997-2024 Netflix,Inc
        </div>
      </div>
    </div>
  );
};

export default Footer;

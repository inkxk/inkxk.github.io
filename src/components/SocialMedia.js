import React from "react";
import Fab from "@mui/material/Fab";
import { socialMedia } from "../../Data";

// icons
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaLine,
    FaTwitter,
    FaReddit,
    FaStackOverflow,
} from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="mt-4 flex xl:justify-start justify-center">
            <Fab
                className="bg-[#171515] hover:bg-[#525252] md:w-11 md:h-11 h-10 w-10 mx-1"
                href="https://github.com/inkxk"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub className="text-white md:h-6 md:w-6 h-5 w-5" />
            </Fab>
            <Fab
                className="bg-[#0077b5] hover:bg-[#489ecc] md:w-11 md:h-11 h-10 w-10 mx-1"
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedinIn className="text-white md:h-6 md:w-6 h-5 w-5" />
            </Fab>
            <Fab
                className="bg-[#FF4500] hover:bg-[#fa7d4f] md:w-11 md:h-11 h-10 w-10 mx-1"
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaReddit className="text-white md:h-6 md:w-6 h-5 w-5" />
            </Fab>
            <Fab
                className="bg-[#06C755] hover:bg-[#44d27f] md:w-11 md:h-11 h-10 w-10 mx-1"
                href="https://line.me/ti/p/~gunink"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLine className="text-white md:h-6 md:w-6 h-5 w-5" />
            </Fab>
            <Fab
                className="bg-[#C13584] hover:bg-[#e952a7] md:w-11 md:h-11 h-10 w-10 mx-1"
                href="https://www.instagram.com/inkxk_/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram className="text-white md:h-6 md:w-6 h-5 w-5" />
            </Fab>
            <Fab
                className="bg-[#00acee] hover:bg-[#4cc3f2] md:w-11 md:h-11 h-10 w-10 mx-1"
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTwitter className="text-white md:h-6 md:w-6 h-5 w-5" />
            </Fab>
            <Fab
                className="bg-[#f3ca32] hover:bg-[#ffdf6a] md:w-11 md:h-11 h-10 w-10 mx-1"
                href="https://stackoverflow.com/users/16453804/inkxk"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaStackOverflow className="text-white md:h-6 md:w-6 h-5 w-5" />
            </Fab>
        </div>
    );
};

export default SocialMedia;

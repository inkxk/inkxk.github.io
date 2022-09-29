import React from "react";

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
            <div className="bg-[#171515] hover:bg-[#525252] rounded-full h-12 w-12 flex justify-center items-center mx-1">
                <a
                    href="https://github.com/inkxk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="text-white h-8 w-8" />
                </a>
            </div>

            <div className="bg-[#0077b5] hover:bg-[#489ecc] rounded-full h-12 w-12 flex justify-center items-center mx-1">
                <a
                    href="https://www.linkedin.com/in/potcharapol-nokyoo-a0a42521b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn className="text-white h-8 w-8" />
                </a>
            </div>

            <div className="bg-[#FF4500] hover:bg-[#fa7d4f] rounded-full h-12 w-12 flex justify-center items-center mx-1">
                <a
                    href="https://www.reddit.com/user/inkxk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaReddit className="text-white h-8 w-8" />
                </a>
            </div>

            <div className="bg-[#06C755] hover:bg-[#44d27f] rounded-full h-12 w-12 flex justify-center items-center mx-1">
                <a
                    href="https://line.me/ti/p/~gunink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLine className="text-white h-8 w-8" />
                </a>
            </div>

            <div className="bg-[#C13584] hover:bg-[#e952a7] rounded-full h-12 w-12 flex justify-center items-center mx-1">
                <a
                    href="https://www.instagram.com/inkxk_/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="text-white h-8 w-8" />
                </a>
            </div>

            <div className="bg-[#00acee] hover:bg-[#4cc3f2] rounded-full h-12 w-12 flex justify-center items-center mx-1">
                <a
                    href="https://twitter.com/inkxk_"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter className="text-white h-8 w-8" />
                </a>
            </div>

            <div className="bg-[#f3ca32] hover:bg-[#ffdf6a] rounded-full h-12 w-12 flex justify-center items-center mx-1">
                <a
                    href="https://stackoverflow.com/users/16453804/inkxk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaStackOverflow className="text-white h-8 w-8" />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;

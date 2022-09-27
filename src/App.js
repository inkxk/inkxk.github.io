import React from "react";
import SocialMedia from "./components/SocialMedia";
import Skills from "./components/Skills";
import { greeting, skills } from "./Data";
import profile from "./assets/profile.jpg";

// icons
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function App() {
    return (
        <div className="container mx-auto mt-10">
            {/* Greeting Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="xl:hidden flex items-center justify-center">
                    <img
                        alt="profile"
                        src={profile}
                        objectFit="cover"
                        width="300"
                        height="300"
                        className="rounded-full"
                    />
                </div>
                <div className="w-full xl:mt-20 mt-6 xl:ml-10">
                    {/* Info */}
                    <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold xl:text-start text-center tracking-wider">
                        {greeting.firstName}{" "}
                        <br className="md:hidden xl:block" />{" "}
                        {greeting.lastName}
                    </h1>

                    {/* Description */}
                    <p className="xl:text-start text-center tracking-wide xl:text-4xl md:text-3xl text-2xl font-medium text-gray-500 mt-3 lg:mx-16 xl:mx-0">
                        {greeting.subTitle}
                    </p>

                    {/* Contact */}
                    <p className="xl:text-start text-center tracking-wide xl:text-2xl md:text-3xl text-2xl font-medium text-gray-500 xl:mt-12 mt-8 lg:mx-16 xl:mx-0 items-center">
                        <BiPhoneCall className="w-7 h-7 inline mb-1" />{" "}
                        {greeting.phoneNumber} <br />{" "}
                        <AiOutlineMail className="w-7 h-7 inline mb-1" />{" "}
                        {greeting.email} <br />{" "}
                        <HiOutlineLocationMarker className="w-7 h-7 inline mb-1" />{" "}
                        {greeting.location}
                    </p>

                    {/* Social Media */}
                    <SocialMedia />

                    {/* Resume Btn */}
                    <div className="flex items-center justify-center xl:justify-start">
                        <button
                            type="button"
                            className="focus:outline-none text-white bg-cyan-600 hover:bg-cyan-500 font-medium rounded-lg px-5 py-2.5 mt-6"
                        >
                            <a
                                href="https://en.wikipedia.org/wiki/Next.jsm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                resume
                            </a>
                        </button>
                    </div>
                </div>

                {/* Img */}
                <div className="w-full hidden xl:block">
                    <img
                    alt="profile"
                        src={profile}
                        layout="responsive"
                        objectFit="contain"
                        width="500"
                        height="500"
                    />
                </div>
            </div>

            {/* divider */}
            <div className="xl:flex mt-12 hidden"></div>

            {/* Skills Section */}
            {/* Skills Title */}
            <div className="flex justify-center items-center xl:mt-12 mt-16 xl:mb-10 mb-6">
                <h1 className="xl:text-5xl md:text-4xl text-3xl font-medium">
                    What Skills I Have?
                </h1>
            </div>

            {/* Skills Icon */}
            <div className="grid grid-cols-1 xl:grid-cols-2 mb-20">
                <Skills />

                {/* skills description */}
                <div className="xl:pr-10 flex xl:justify-start justify-center xl:p-0 md:px-20 pr-10 pl-10">
                    <ul className="list-disc text-lg">
                        <li className="xl:pb-0 pb-2">{skills.frontEnd}</li>
                        <li className="xl:pb-0 pb-2">{skills.mobile}</li>
                        <li className="xl:pb-0 pb-2">{skills.css}</li>
                        <li className="xl:pb-0 pb-2">{skills.backEnd}</li>
                        <li className="xl:pb-0 pb-2">{skills.aws}</li>
                        <li className="xl:pb-0 pb-2">{skills.mySQL}</li>
                        <li className="xl:pb-0 pb-2">{skills.terraform}</li>
                        <li className="xl:pb-0 pb-2">{skills.git}</li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <p className="text-center text-lg mb-5">
                © 2022 Potcharapol Nokyoo
            </p>
        </div>
    );
}

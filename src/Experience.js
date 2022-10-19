import React from "react";
import { experience } from "./Data";
import gosoftLogo from "./assets/gosoft_logo.png";

export default function Experience() {
    return (
        <div className="container mx-auto mt-10 mb-5">
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-medium text-center xl:mb-6 mb-16 xl:mt-12 mt-16">Experience</h1>

            <div className="flex justify-center flex-col items-center xl:mb-16 mb-0">
                <div className="flex justify-center xl:flex-row flex-col items-center">
                    <div>
                        <a href={experience[0].website_link} target="_blank" rel="noopener noreferrer">
                            <img src={gosoftLogo} className="w-60 mx-auto" alt="ku" />
                        </a>
                    </div>
                    <div className="mt-6 xl:ml-10">
                        <p className="text-2xl font-medium text-center xl:text-start leading-9">
                            {experience[0].role} <br /> {experience[0].company}
                        </p>
                        <p className="text-xl font-medium text-center xl:text-start leading-9 mb-2">{experience[0].duration}</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <p className="text-center text-lg xl:mt-[50vh] mt-[40vh]">© 2022 Potcharapol Nokyoo</p>
        </div>
    );
}

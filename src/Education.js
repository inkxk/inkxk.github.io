import React from "react";
import Certification from "./components/Certification";
import { degrees } from "./Data";
import Divider from "@mui/material/Divider";

export default function Education() {
    return (
        <div className="container mx-auto mt-10 mb-5">
            {/* Education */}
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-medium text-center xl:mb-4 mb-0 xl:mt-12 mt-16">
                Education
            </h1>

            <div className="flex justify-center flex-col items-center xl:mb-16 mb-0">
                <div className="flex justify-start xl:flex-row flex-col">
                    <div>
                        <a
                            href={degrees.website_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="ku.png" className="w-80 mx-auto" alt="ku" />
                        </a>
                    </div>
                    <div className="mt-6">
                        <p className="text-2xl font-medium text-center xl:text-start leading-9">
                            {degrees.title} <br /> {degrees.subtitle}
                        </p>
                        <p className="text-xl font-medium text-center xl:text-start leading-9 mb-2">
                            {degrees.duration}
                        </p>
                        <Divider className="mb-4" />
                        <p className="text-lg font-medium mb-2">
                            Mechanical Engineering Project
                        </p>
                        <ul class="list-disc ml-5">
                            <li className="text-lg mb-2">
                                Particulate Matters Analyzing from Bike’s Tires{" "}
                                <br /> in Various Riding Conditions (Graduation
                                Thesis)
                            </li>
                            <li className="text-lg">
                                Temperature Measurement with Calibration <br />{" "}
                                and Temperature Monitoring via NetPIE
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Certification */}
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-medium text-center xl:mb-8 mb-6 xl:mt-8 mt-12">
                Certification
            </h1>
            <Certification />

            {/* Footer */}
            <p className="text-center text-lg mt-20">
                © 2022 Potcharapol Nokyoo
            </p>
        </div>
    );
}

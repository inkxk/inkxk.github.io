import React from "react";

export default function Projects() {
    return (
        <div className="container mx-auto mt-10 mb-5">
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-medium text-center xl:mb-8 mb-6 xl:mt-8 mt-12">
                Projects
            </h1>

            <div className="flex items-center justify-center flex-wrap gap-8 mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex justify-center"
                    >
                        <img className="rounded-t-lg h-36" src="" alt="" />
                        <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                            <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                                PROJECT LINK
                            </h1>
                        </div>
                    </a>
                    <div className="pr-5 pl-5 pt-6">
                        <h5 className="text-xl font-semibold text-gray-900 text-center">
                            asd
                        </h5>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <p className="text-center text-lg mt-20">
                © 2022 Potcharapol Nokyoo
            </p>
        </div>
    );
}

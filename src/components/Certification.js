import React from "react";
import { certifications } from "../../Data";

const Certification = (img, title, description) => {
    return (
        <div className="flex items-center justify-center flex-wrap gap-8 mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[10].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="HackerRank.png" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-6">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[10].title}
                    </h5>
                    <p className="font-semibold text-lg text-gray-500 text-center">
                        {certifications[10].subtitle}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[9].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="HackerRank.png" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-6">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[9].title}
                    </h5>
                    <p className="font-semibold text-lg text-gray-500 text-center">
                        {certifications[9].subtitle}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[8].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="HackerRank.png" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-6">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[8].title}
                    </h5>
                    <p className="font-semibold text-lg text-gray-500 text-center">
                        {certifications[8].subtitle}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[7].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="HackerRank.png" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-6">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[7].title}
                    </h5>
                    <p className="font-semibold text-lg text-gray-500 text-center">
                        {certifications[7].subtitle}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[6].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="HackerRank.png" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-6">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[6].title}
                    </h5>
                    <p className="font-semibold text-lg text-gray-500 text-center">
                        {certifications[6].subtitle}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[0].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="bornlogo.jpeg" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-6 pb-3">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[0].title}
                    </h5>
                    <p className="mb-3 font-semibold text-lg text-gray-500 text-center">
                        {certifications[0].subtitle}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[1].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="bornlogo.jpeg" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-6">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[1].title}
                    </h5>
                    <p className="font-semibold text-lg text-gray-500 text-center">
                        {certifications[1].subtitle}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[2].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="udemy.png" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-2 pb-3">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[2].title}
                    </h5>
                    <p className="mb-3 font-semibold text-lg text-gray-500 text-center">
                        {certifications[2].subtitle}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300 w-96 h-64">
                <a
                    href={certifications[3].certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex justify-center"
                >
                    <img className="rounded-t-lg h-36" src="udemy.png" />
                    <div className="opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center bg-gray-900 items-end">
                        <h1 className="text-white font-medium text-xl opacity-100 tracking-wider">
                            CERTIFICATE
                        </h1>
                    </div>
                </a>
                <div className="pr-5 pl-5 pt-2 pb-3">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900 text-center">
                        {certifications[3].title}
                    </h5>
                    <p className="mb-3 font-semibold text-lg text-gray-500 text-center">
                        {certifications[3].subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Certification;

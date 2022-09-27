import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "/", pageName: "/" },
    { name: "Education", href: "/education", pageName: "/education" },
    { name: "Experience", href: "/experience", pageName: "/experience" },
    { name: "Projects", href: "/projects", pageName: "/projects" },
];

export default function Navbar() {
    const [currentPage, setCurrentPage] = useState("home");

    useEffect(() => {
        setCurrentPage(window.location.pathname);
    }, []);

    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-9 w-auto"
                                        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/au-kddi/190/octopus_1f419.png"
                                        alt="octopus"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={
                                                    item.pageName ===
                                                    currentPage
                                                        ? "text-teal-600 px-3 py-2 rounded-md font-medium text-lg"
                                                        : "text-black hover:text-gray-500 px-3 py-2 rounded-md font-medium text-lg"
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={
                                        item.pageName === currentPage
                                            ? "text-teal-600 block px-3 py-2 rounded-md text-lg font-medium text-end"
                                            : "text-black hover:text-gray-500 block px-3 py-2 rounded-md text-lg font-medium text-end"
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

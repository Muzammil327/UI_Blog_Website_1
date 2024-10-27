import React from "react";
import { FaFacebook, FaGlobe, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#000000]">
            <div className="mx-auto xl:px-15 lg:px-12 md:px-9 sm:px-6 px-4 py-10">
                <div className="grid grid-cols-12 gap-4 my-10">
                    {data.map((data: any) => {
                        return (
                            <div key={data.title} className="lg:col-span-2 md:col-span-4 col-span-6">
                                <h5 className="text-white font-bold mb-6">{data.title}</h5>
                                <ul>
                                    {data.links.map((link: string, index: number) => (
                                        <li key={data.link} className="text-white hover:underline mb-3 text-sm">
                                            {" "}
                                            <a href="#">
                                                {link}
                                            </a>{" "}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}

                    <div className="lg:col-span-2 md:col-span-4 col-span-6 border-b py-8 border-[#474543]">
                        <ul className="flex items-center gap-4">
                            <li className="hover:bg-[#47444436] text-white p-1 text-xl">
                                <FaTwitter />
                            </li>
                            <li className="hover:bg-[#47444436] text-white p-1 text-xl">
                                <FaFacebook />
                            </li>
                            <li className="hover:bg-[#47444436] text-white p-1 text-xl">
                                <FaYoutube />
                            </li>
                        </ul>
                    </div>

                </div>
                <div>
                    <button className="flex gap-2 items-center text-white text-sm">
                        <span><FaGlobe /></span>
                        <span>
                            English (United States)
                        </span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" focusable="false"><path d="m9.25 5.75 6.25 6.5-6.25 6.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" vector-effect="non-scaling-stroke"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

const data = [
    {
        title: "Dropbox",
        links: [
            "Desktop app",
            "Mobile app",
            "Integrations",
            "Features",
            "Solutions",
            "Security",
            "Early access",
            "Templates",
            "Free tools",
        ],
    },
    {
        title: "Products",
        links: [
            "Plus",
            "Professional",
            "Business",
            "Enterprise",
            "Dash",
            "Dropbox Sign",
            "DocSend",
            "Plans",
            "Product updates",
        ],
    },
    {
        title: "Features",
        links: [
            "Send large files",
            "Send long videos",
            "Cloud photo storage",
            "Secure file transfer",
            "Password manager",
            "Cloud backup",
            "Edit PDFs",
            "Electronic signatures",
            "Screen recorder",
            "Convert to PDF",
        ],
    },
    {
        title: "Support",
        links: [
            "Help Center",
            "Contact Us",
            "Privacy & Terms",
            "Cookie Policy",
            "Cookies & CCPA Preferences",
            "AI Principles",
            "Sitemap",
            "Learning Resources",
        ],
    },
    {
        title: "Resources",
        links: [
            "Blog",
            "Customer Stories",
            "Resources Library",
            "Developers",
            "Community Forums",
            "Referrals",
            "Reseller Partners",
            "Integration Partners",
            "Find a Partner",
        ],
    },
    {
        title: "Company",
        links: [
            "About us",
            "Jobs",
            "Investor relations",
            "ESG",
        ]
    }
];

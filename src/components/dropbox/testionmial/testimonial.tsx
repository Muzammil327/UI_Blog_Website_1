"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonWithoutBg } from "../ui/button/page";

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        slidesToShow: 1.5, // Adjust based on your design
        slidesToScroll: 1,
        arrows: false, // Hide arrows if not needed
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-20">
            <Slider {...settings}>
                {TestimonialData.map((data, index) => (
                    <div
                        key={index}
                        className="bg-[#1C1D21] !flex p-2 rounded-lg shrink-0 md:flex-row flex-col"
                    >
                        <div className="img md:h-60 h-full md:w-60 w-full flex-shrink-0 relative">
                            <img
                                src={data.img}
                                alt=""
                                className="rounded-xl h-full w-full object-cover"
                            />
                            <span className="absolute bottom-2 left-2 text-white">
                                <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon" width="32" height="32" role="presentation" focusable="false"><path d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-2 11.5v-7l5.5 3.5-5.5 3.5Z" fill="currentColor" vector-effect="non-scaling-stroke"></path></svg>
                            </span>
                        </div>
                        <div className="body ml-4 flex-1 flex flex-col justify-between md:py-0 py-5">
                            <div className="flex-1">
                                <span className="text-sm text-[#B32C6E] font-semibold">
                                    Testimonial
                                </span>
                                <h4 className="text-white text-lg font-semibold my-3">
                                    {data.name}
                                </h4>
                                <p className="text-[#7C7C7D] text-sm">{data.description}</p>
                            </div>

                            <div className="flex md:mt-0 mt-12">
                                <ButtonWithoutBg variant='white'>Watch Testimonial</ButtonWithoutBg>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialSlider;

const TestimonialData = [
    {
        id: 0,
        name: "The security of knowing our information is safe.",
        description:
            "Customer Bryan Chandler reveals how his team uses Dropbox to organize and share files securely.",
        slug: "/",
        img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/BrianThumb.png?id=ad81b907-369a-439e-b7f7-1c52d1061618&output_type=webp",
    },
    {
        id: 1,
        name: "The security of knowing our information is safe.",
        description:
            "Customer Bryan Chandler reveals how his team uses Dropbox to organize and share files securely.",
        slug: "/",
        img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/JustinThumb.png?id=9e7c8793-8282-4398-a9d0-b1f1a803f10a&output_type=webp",
    },
    {
        id: 2,
        name: "The security of knowing our information is safe.",
        description:
            "Customer Bryan Chandler reveals how his team uses Dropbox to organize and share files securely.",
        slug: "/",
        img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/BrianThumb.png?id=ad81b907-369a-439e-b7f7-1c52d1061618&output_type=webp",
    },
];

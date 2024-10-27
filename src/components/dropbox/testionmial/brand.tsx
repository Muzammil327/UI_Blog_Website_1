'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Brand() {
    var settings = {
        dots: false, // Enable dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Adjust this based on your needs
        slidesToScroll: 1,
        arrows: false, // Hide arrows
        // Adjust margin between slides using CSS
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
        <section>
            <div className='md:py-5 text-center'>
                <span className='text-[#818183] font-semibold'>Trusted by the biggest companies in the world</span>
            </div>

            <Slider {...settings}>
                <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/logos/jamf-wordmark-150x150.svg?id=de5cfc87-e306-4921-85ba-f86ada8508e8" alt="" className='px-5 max-h-40 w-auto object-covers' />
                <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/logos/marykay-wordmark-150x150.svg?id=3cac7763-007c-4b6a-b7c2-0c349ee1d5b6" alt="" className='px-5 max-h-40 w-auto object-covers' />
                <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/logos/mclaren-racing-wordmark-150x150.svg?id=fbc6b1a8-08d1-4484-8466-81233b13842e" alt="" className='px-5 max-h-40 w-auto object-covers' />
                <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/logos/sundance-wordmark-150x150.svg?id=29f99860-d5ac-4087-a4b1-48336d06050c" alt="" className='px-5 max-h-40 w-auto object-covers' />
                <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/logos/wag-wordmark-150x150.svg?id=68270282-bc75-4285-9c56-07fc2a08fb00" alt="" className='px-5 max-h-40 w-auto object-covers' />
                <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/logos/calm-wordmark-150x150.svg?id=2b05984d-45db-474a-9dca-ef8093891cd4" alt="" className='px-5 max-h-40 w-auto object-covers' />
            </Slider>

            <div className='flex items-center justify-center'>
                <span className='hover:bg-[#47444436] text-white p-1 text-xl'>
                    <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon" width="32" height="32" role="presentation" focusable="false"><path d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm0 14.5c-4.374 0-6.5-2.126-6.5-6.5 0-4.374 2.126-6.5 6.5-6.5 4.374 0 6.5 2.126 6.5 6.5 0 4.374-2.126 6.5-6.5 6.5Z" fill="currentColor" vector-effect="non-scaling-stroke"></path><path d="m10 15.5 5.5-3.5L10 8.5v7Z" fill="currentColor" vector-effect="non-scaling-stroke"></path></svg>
                </span>
            </div>
        </section>
    )
}

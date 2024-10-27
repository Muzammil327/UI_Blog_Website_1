import React from 'react'
import { ButtonBg, ButtonWithoutBg } from '../ui/button/page'
import Brand from './brand'
import Testimonial from './testimonial'

export default function Testionmial() {
    return (
        <section className='md:mx-3 py-10'>
            <div className="mx-auto xl:px-15 lg:px-12 md:px-9 sm:px-6 px-3 py-24 bg-gradient-to-b from-[#26292D] to-[#010102] md:rounded-lg">
                <div className='flex items-center justify-center flex-col'>
                    <span className='text-[#F7F5F2]'>
                        <svg viewBox="0 0 24 24" fill="none" className="dig-PictogramIcon" width="64" height="64" focusable="false" role="presentation"><path d="M15 9V7.25C15 5.768 14.436 4 11.75 4S8.5 5.768 8.5 7.25V9H6v7.75A3.254 3.254 0 0 0 9.25 20h5a3.254 3.254 0 0 0 3.25-3.25V9H15Zm-5-1.75c0-1.292.458-1.75 1.75-1.75s1.75.458 1.75 1.75V9H10V7.25Zm6 9.5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75V10.5H16v6.25Z" fill="currentColor" vector-effect="non-scaling-stroke"></path><path d="M11 15.366V17h1.5v-1.634a1.603 1.603 0 0 0 1-1.616A1.626 1.626 0 0 0 11.75 12 1.626 1.626 0 0 0 10 13.75a1.603 1.603 0 0 0 1 1.616Z" fill="currentColor" vector-effect="non-scaling-stroke"></path></svg>
                    </span>
                    <h3 className='text-[#F7F5F2] text-2xl my-5'>Security never comes second</h3>
                    <p className='text-[#8C8C8D] md:w-7/12 text-center'>From industry-leading encryption and tamper-proof documents to version history and recovery, Dropbox keeps your intellectual property safe and never sells or shares your data.</p>
                    <div className='flex items-center md:gap-10 gap-5 mt-6 md:flex-row flex-col'>
                        <ButtonBg>Get Started Free</ButtonBg>
                        <ButtonWithoutBg variant='white' icon>Learn More</ButtonWithoutBg>
                    </div>
                </div>

                <Testimonial />
                <Brand />
            </div>
        </section>
    )
}


import React from 'react'
import { ButtonBg, ButtonWithoutBg } from '../ui/button/page'

export default function About1() {
    return (
        <section>
            <div className="heading">
                <div>
                    <span></span>
                    <span></span>
                </div>
                <h3>Work with anyone, from anywhere, on any device</h3>
                <p>Dropbox delivers flexible sharing, smart organization, and seamless collaboration—even for those without an account—so you and your team can get it done, and done right.</p>
                <div className='flex items-center md:gap-10 gap-5 mt-6 md:flex-row flex-col'>
                    <ButtonBg>Get Started Free</ButtonBg>
                    <ButtonWithoutBg variant='white' icon>Learn More</ButtonWithoutBg>
                </div>
            </div>
            <div className="img"></div>
        </section>
    )
}

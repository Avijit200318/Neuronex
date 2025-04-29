import React from 'react'
import ThreeDRobot from '../components/ThreeDRobot'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div>
            <div id='page1' className="bg-[#0B021C] w-full h-screen text-white overflow-hidden relative">
                <Navbar />
                <div className="main h-[calc(100vh-5rem)] flex">
                    <div className="left w-[60%] px-16 py-8 flex flex-col justify-center items-start gap-4">
                        <h1 className='text-[3.5rem] leading-[4rem] line-clamp-3'>Innovating the Future with AI Smart Solutions That Simplify Your Life</h1>
                        <p className='w-[80%] text-[0.9rem] text-gray-500 mix-blend-exclusion mt-4 font-semibold'>Welcome to Neuronex, where a nexus of clever AI brains team up to take the grind out of your day. From plants that chat back to an editing wiz that pumps out killer videos for creators while they kick back, we’re here to automate the boring stuff and sprinkle some fun into the mix. Next up? Slick tools for the corporate crew—think auto-emails, spreadsheet magic, and call-handling on autopilot. We’re all about saving your time and boosting your vibe with AI that’s smart, seamless, and a little bit sassy.</p>
                        <div className="btn relative flex gap-8 mt-6 z-10">
                            <button id="contact" className='relative w-52 px-8 py-4 text-[1.3rem] rounded-full bg-white text-[#0B021C] cursor-pointer overflow-hidden transition-all duration-700 border-2 border-white z-20 hover:text-white font-semibold'>Contact Us</button>
                            <button id="started" className='relative w-52 px-8 py-4 text-[1.3rem] rounded-full bg-transparent text-white cursor-pointer overflow-hidden transition-all duration-700 border-2 border-white z-20 hover:text-[#0B021C] font-semibold'>Get Started</button>
                        </div>
                    </div>
                    <div className="right relative w-2/5 flex justify-center items-center">
                        <ThreeDRobot />
                    </div>
                </div>
            </div>
        </div>
    )
}

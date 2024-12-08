"use client"

import Image from "next/image"
import Heading from "./sub/Heading"
import Achievements from "./sub/Achievement"
import { aboutData , downloadIcon,arrowLeftIcon, aboutText } from "@/assets"

const About = () => {
  return (
    <div id="about" className="min-h-screen  flex flex-col items-center justify-center">
      <Heading title='About Me'/>
        <div className="w-full flex items-center justify-between md:justify-center">
            <Image className="w-[300px] lg:w-[200px] md:hidden" src='/about-me.png' alt="About Image" width={400} height={400}/>
            <div className='max-w-[800px] dark:bg-zinc-700 transition-colors relative rounded-xl bg-zinc-100 p-5 text-justify '>
              <span className="absolute dark:text-zinc-700 transition-colors -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">
                {arrowLeftIcon}
              </span>
              <p className="text-lg font-light dark:text-white transition-colors text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">{aboutText}</p>
              <a href="/nick-cv.pdf" download="" className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors">
                <span>Download CV</span>
                <span className="text-xl">{downloadIcon}</span>
              </a>
            </div>
        </div>
        <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
          {aboutData.map((data,i)=><Achievements key={i} title={data.title} icon={data.icon} number={data.amount}/>)}
        </div>
    </div>
  )
}

export default About
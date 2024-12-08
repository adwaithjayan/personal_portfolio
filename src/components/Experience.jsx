"use client"

import { useRef } from "react"
import Image from "next/image"

import { motion,useScroll,useSpring } from "framer-motion"

import { arrowLeftIcon, experienceData } from "@/assets"
import Heading from "./sub/Heading"


const Experience = () => {
  const containerRef =useRef(null);

  const date =new Date().getFullYear();

  const {scrollYProgress} = useScroll({
    target:containerRef,
    offset:['start 95%','end end']
  });

  const srcollY =useSpring(scrollYProgress,{stiffness:200,damping:20})



  return (
    <div id="experience" className="py-20  relative">
      <Heading title='Experience & Education'/>
      <Image src={'/education.png'} className="absolute -top-4 right-0 opacity-70 lg:hidden" alt="Exprience image" width={400} height={400}/>
      <div ref={containerRef} className="w-full relative h-full  flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10">
        {experienceData.map((data,i)=>(
              <div className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${ i%2 ===0 ? "-left-[300px] xl:-left-[240px] lg:-left-0":"left-[300px] xl:left-[240px] lg:left-0"}`} key={`id-${i}`}>
              <motion.div initial={{opacity:0,x:i%2 ===0 ?-80 :80}} whileInView={{opacity:1,x:0}} transition={{duration:0.7,type:'spring',stiffness:50}} viewport={{once:true}} className="flex relative z-20 flex-col gap-y-3 rounded-md border border-red-300 transition-colors dark:bg-zinc-700 bg-white p-4 tracking-wide sm:text-sm">
                <h1 className="text-xl dark:text-white transition-colors sm:text-lg font-light text-gray-700">{data.title}</h1>
                <p className="text-gray-800 dark:text-gray-100 transition-colors">
                  <span className="block font-light">Education:</span>
                  <span className="block pl-2 font-extralight">{data.education}</span>
                </p>
                <div className="text-gray-800 dark:text-gray-200 transition-colors">
                  <span className="font-light ">Experience:</span>
                  <ul className="pl-2">
                    {data.experience.map((exp,j)=><li key={j} className="my-1 font-extralight">{exp}</li> )}
                  </ul>
                </div>
                <span className={`absolute top-20  text-red-300 -translate-y-1/2 lg:hidden  ${i%2===0?"left-full rotate-180":"right-full"}`}>{arrowLeftIcon}</span>
              </motion.div>
              <div className={`absolute top-20  w-14 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light bg-white z-10 -translate-y-1/2 ${i%2===0?"left-full -translate-x-1/2 lg:left-1/2":"right-full translate-x-1/2 lg:right-1/2"}`}>{date-experienceData.length+i+1}</div>
              </div>
        ))}
       
        <motion.div initial={{scaleY:0}} style={{scaleY:srcollY}} className="absolute origin-top w-1 h-full rounded-full bg-gray-300"></motion.div>
      </div>
    </div>
  )
}

export default Experience
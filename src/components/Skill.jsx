"use client"

import Image from "next/image"

import { motion } from "framer-motion"

import Heading from "./sub/Heading"
import { skillsData } from "@/assets"


const motionVariants = {
    visible:(i)=>({
        opacity:1,
        y:0,
        transition:{
            delay:0.3+i*0.07,
        },
    }),
    hidden:{
        opacity:0,
        y:30,
    }
}

const Skill = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-y-20 ">
        <Heading title='Skills'/>
        <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10
        lg:gap-y-6">
            {skillsData.map((skill,i)=>(
            <motion.div custom={i} variants={motionVariants} initial='hidden' whileHover={{scale:1.1}} viewport={{margin:"50px",once:true}} whileInView='visible' key={i} className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2">
                <Image className="h-auto w-[40px]" src={skill.icon} alt={skill.name} width={100} height={100}/>
                <p className="text-sm text-gray-600">{skill.name}</p>
            </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Skill
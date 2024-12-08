"use client"

import Image from "next/image"
import { useState } from "react"

import { motion } from "framer-motion"

const ProjectCard = ({name,desc,url,index}) => {
    const [show,setShow]=useState(false)
  return (
    <motion.div initial={{opacity:0,y:index%2 ===0?100:-100}} whileInView={{opacity:1,y:0}} viewport={{once:true}}  transition={{duration:1,type:'spring',stiffness:100}} onMouseEnter={()=>{
        setShow(true)
      
    }} onMouseLeave={()=>setShow(false)} className="w-[350px] relative sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer">
        <Image className="rounded-lg opacity-70" src={url} alt={name} width={400} height={400}/>
        <motion.div initial={{opacity:0}} animate={{opacity:show?1:0}} transition={{duration:0.2}} className="absolute dark:bg-zinc-700/95 transition-colors  top-0 w-full h-full flex  flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg">
            <h2 className="text-lg dark:text-white transition-colors font-bold tracking-wide text-gray-500">{name}</h2>
            <p className="text-justify text-gray-500 transition-colors dark:text-gray-100 first-letter:pl-2">{desc}</p>
        </motion.div>
    </motion.div>
  )
}

export default ProjectCard
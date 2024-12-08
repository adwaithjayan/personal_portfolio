"use client"

import { useEffect, useRef, useState } from "react"

import { animate ,motion} from "framer-motion"

import { projectsButton, projectsData } from "@/assets"
import Heading from "./sub/Heading"
import ProjectCard from "./sub/ProjectCard"

const Project = () => {
    const [tech,settech]=useState("All");
    const [index,setIndex]=useState(0);
    const prevRef =useRef(0);
    const buttonRef = useRef([]);

    const handleClick=()=>{
        animate(buttonRef.current[prevRef.current],{opacity:0.5,scale:1});
        animate(buttonRef.current[index],{opacity:1,scale:1.2})
    }

    useEffect(()=>{
        handleClick();
        prevRef.current = index;
    },[index])

  return (
    <div className="min-h-screen py-20 " id="projects">
        <Heading title='Projects' />
        <dir className='flex flex-wrap items-center justify-between gap-4 py-10'>
            {projectsButton.map((button,i)=>
            <motion.button key={i} initial={{opacity:i===0?1:0.5,scale:i===0?1.2:1}} onClick={()=>{
                settech(button)
                setIndex(i);
            }} ref={(el)=>buttonRef.current.push(el)} className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400">{button}</motion.button>
        )}
        </dir>
        <div className="flex flex-wrap items-center justify-center gap-5">
            {projectsData.filter((project)=>{
                return project.tech.some((item)=>(tech === 'All'?true:item ===tech))
            }).map((data,i)=>
            <motion.div layout key={`id-${i}`}>
                <ProjectCard  name={data.name} url={data.url} desc={data.desc} index={i}/>
            </motion.div>
        )}
        </div>
    </div>
  )
}

export default Project
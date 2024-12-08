"use client"

import { useState } from "react"

import {  motion } from "framer-motion"

import { QuestionArrow } from "@/assets"

const variants={
    visible:(i)=>({
        opacity:1,
        x:0,
        transition:{
            delay:i*0.07
        },
    }),
    hidden:{opacity:0,x:-30}
}

const Qusetion = ({question,answer,i}) => {
    const [show,setShow]=useState()
  return (
    <motion.li custom={i} variants={variants} initial='hidden' whileInView='visible' viewport={{margin:"50px",once:true}} className="border dark:hover:bg-zinc-700 transition-colors border-yellow-500 p-1 rounded-lg">
        <h1 className={`flex items-center dark:text-white dark:hover:text-yellow-600   text-xl font-extralight  tracking-wide cursor-pointer text-gray-800 hover:text-yellow-600 transition-colors ${show && "border-b  text-yellow-600"}`} onClick={()=>setShow(prev=>!prev)}>
            <motion.span animate={{rotate:show?180:0}}>{QuestionArrow}</motion.span>
            <span>{question}</span>
        </h1>
        
        <motion.p initial={{scaleY:0,height:0 ,opacity:0}} transition={{duration:0.1,type:'spring',stiffness:show ? 250:50,opacity:{delay:show?0.2:0}}} animate={{scaleY:show ? 1:0,height:show?"auto":0,opacity:show?1:0}} className="pl-8 text-lg font-extralight dark:text-gray-200 transition-colors tracking-wide text-gray-900 first-letter:pl-3 box-border origin-top">{answer}</motion.p>
    </motion.li>
  )
}

export default Qusetion
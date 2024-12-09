"use client"

import { useState } from "react"
import Image from "next/image"

import { useMotionValue , useTransform , motion , useSpring } from "framer-motion"

import { heroIcons } from "@/assets"

const Hero = () => {

    const [windowOffset, setWindowOffsetSet] = useState({innerWidth:0, innerHeight:0});
    const [mouseMove,setMouseMove] =useState(false);
    const [buttonHover,setButtonHover] = useState(false);

    const x =useMotionValue(0);
    const y =useMotionValue(0);

    const handleMouseMove =(e)=>{
        const {clientX,clientY} =e;
        x.set(clientX);
        y.set(clientY);
        
    };
    const handleMouseEnter =()=>{
        setWindowOffsetSet({innerWidth:window.innerWidth,innerHeight:window.innerHeight});
        setMouseMove(true);
    };

    const {innerHeight,innerWidth} = windowOffset;

    const xSpring = useSpring(x,{stiffness:100,damping:10});
    const ySpring = useSpring(y,{stiffness:100,damping:10});

    const rotateY = useTransform(xSpring,[0,innerWidth],[-30,30]);
    const rotateX = useTransform(ySpring,[0,innerHeight],[10,-50]);


  return (
    <div id="home" onMouseMove={handleMouseMove} className='h-screen grid place-items-center' onMouseEnter={handleMouseEnter}>
        <div>
            <motion.div initial={{opacity:0,y:-100}} transition={{delay:0.5}} animate={{opacity:1,y:0}} className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
                <motion.div className="flex items-center justify-center" style={{rotateX:mouseMove ? rotateX : 0 , rotateY:mouseMove ? rotateY :0 ,transition:'0.1s'}}>
                    <Image src={'/person.png'} className="h-auto w-[150px]" alt="Person image" width={400} height={400} priority/>
                    <motion.span initial={{scale:0}} transition={{opacity:{delay:0.4}}} animate={{opacity:buttonHover  ? 0:1,scale:buttonHover ?2 :0,y:buttonHover?-40:0}} className="absolute text-3xl font-semibold text-white">Hi</motion.span>
                </motion.div>
                <h1 className="text-center transition-colors text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white">My Name Is Adwaith Jayan &</h1>
                <p className="text-lg dark:text-gray-200 transition-colors tracking-wider text-gray-700">I like animations 😊</p> 
            </motion.div>
            <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.5}} className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
               {heroIcons.map((icons)=> (<a href="#"  key={icons.id} className="hover:bg-red-400 hover:text-white transition-colors rounded-lg">
                    {icons.icon}
                </a>))}
            </motion.div>
            <motion.a href="#" initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:0.5}} className="mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider mx-auto text-white hover:bg-red-500 transition-colors " onMouseEnter={()=>setButtonHover(true)} onMouseLeave={()=>setButtonHover(false)}>Talk to Me</motion.a>
        </div>
    </div>
  )
}

export default Hero
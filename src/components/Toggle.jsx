"use client"

import { useEffect, useRef, useState } from "react";

import { reactLocalStorage } from "reactjs-localstorage";
import { motion } from "framer-motion";

import { moonIcon, sunIcon } from "@/assets"

const Toggle = ({children})=>{
    const mainRef = useRef(null);
    const [darkTheme, setDarkMode] = useState(false);

    const addDarkMode =()=>{
        mainRef.current.classList.add('dark');
        setDarkMode(true);
    }
    const removeDarkMode =()=>{
        mainRef.current.classList.remove('dark');
        setDarkMode(false);
    }

    useEffect(()=>{
        const darkTheme = reactLocalStorage.get('darkTheme');
        const darkThemeParse =darkTheme !==undefined &&JSON.parse(darkTheme);
        const sysTheme = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme:dark)").matches
        if(darkTheme ===undefined){
         sysTheme ? addDarkMode() :removeDarkMode();
        }else{
            darkThemeParse ?addDarkMode() :removeDarkMode();
        }
    },[]);

    return <main ref={mainRef}>
        <div className="bg-zinc-50 dark:bg-zinc-800">
            <div className="max-w-[1200px] overflow-hidden xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5">
                <button onClick={()=>{
                    if(!darkTheme){
                        addDarkMode();
                        reactLocalStorage.set('darkTheme',true);
                    }else{
                        removeDarkMode();
                        reactLocalStorage.set('darkTheme',false);

                    }
                }} className="fixed right-14 sm:right-10 top-10 z-50 text-yellow-600 hover:text-yellow-500">
                    <motion.span animate={{scale:darkTheme?0:1}} className="block absolute rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800">{moonIcon}</motion.span>
                    <motion.span animate={{scale:darkTheme?1:0}} className="block absolute rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800">{sunIcon}</motion.span>
                </button>
                {children}
            </div>
        </div>
    </main>
}

export default Toggle
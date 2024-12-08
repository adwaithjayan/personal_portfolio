"use client"


import Image from "next/image"

import { motion } from "framer-motion"

import Heading from "./sub/Heading"

 


const Contact = () => {
  return (
    <div className="h-screen py-20 lg:h-auto lg:py-40 xs:pb-20" id="contact">
        <Heading title={'Get in touch'}/>
        <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
            <motion.div initial={{opacity:0,y:150}} whileInView={{opacity:1,y:0}} transition={{duration:0.4}} viewport={{once:true}}>
                <Image src='/contact.gif' alt="contact image" height={400} width={400} className="w-[400px] rounded-md opacity-80"/>
            </motion.div>
            <motion.form className="w-[600px] lg:w-[400px] sm:full flex flex-col gap-3"  initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:0.4}} viewport={{once:true}}>
                <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
                    <input type="text" name="name" id="name" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" placeholder="Your Name"/>
                    <input type="email" name="email" id="eamil" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" placeholder="Your Email"/>
                </div>
                <input type="text" name="subject" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" placeholder="Subject"/>
                <textarea name="message" id="message" className="max-h-[250px] min-h-[150px]  border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" placeholder="Write Me..."></textarea>
                <input type="submit" value='Send Message' className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm tracking-wider text-white hover::bg-yellow-500 transition-colors cursor-pointer outline-none" />
            </motion.form>
        </div>
    </div>
  )
}

export default Contact
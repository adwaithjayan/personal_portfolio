"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { animate ,motion} from "framer-motion"

import Heading from "./sub/Heading"
import { arrowIcons, reviewsData, starIcons } from "@/assets"


const Reviews = () => {
  const [index,setIndex]=useState(0);
  const [direction,setDirection] = useState(false);
  const prevRef =useRef(0);
  const slides =useRef([]);


  const rightClick =()=>{
    animate(slides.current[index],{x:0},{delay:0.3});
    animate(slides.current[prevRef.current],{
      scale:index===0?1:0.4,
      rotate:index ===0?0:index%2===0?10:-10
    })
  };

  const leftClick =()=>{
    animate(slides.current[index],{scale:1,rotate:0},{delay:0.2});
    animate(slides.current[prevRef.current],{
      x:'100%'
    })
  }

  useEffect(()=>{
    direction ? leftClick():rightClick()
    prevRef.current=index;
  },[index])

  return (
    <div className="my-20 " id="reviews">
      <Heading title={'Reviews'}/>
      <div className="flex flex-col items-center justify-center">
        <motion.div initial={{opacity:0,x:-200}} viewport={{once:true}} whileInView={{opacity:1,x:0}} transition={{duration:0.4}}  className="w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center relative overflow-hidden">
          {reviewsData.map((review,i)=>
          <motion.div key={i} initial={{x:'100%'}} ref={(el)=>slides.current.push(el)} className="absolute dark:bg-zinc-700 transition-colors inset-0 flex flex-col items-center justify-center gap-y-7 lg;gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl">
            <Image src={review.image} alt="Reviews image" width={130} height={130} className="w-[130px] aspect-square border border-yellow-500 rounded-full p-4 object-contain"/>
            <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">{review.name}</h1>
            <p className="text-lg dark:text-white transition-colors md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">{review.comment}</p>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <span className="text-lg font-light text-yellow-600 mr-3">{review.stars.reduce((sum,item)=>{
                return (sum +=item)
              },0).toFixed(1)}</span>
              <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                {review.stars.map((star,j)=>
                <span key={j}>{star ===1 ? starIcons[0].icon:starIcons[1].icon}</span>
              )}
              </div>
            </div>
          </motion.div>
          )}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button className={`${index ===0 ? "opacity-30 pointer-events-none":"opacity-100 pointer-events-auto"} hover:scale-150 transition-all`} onClick={()=>{
            setDirection(true);
            setIndex(index-1);
          }}>{arrowIcons[0].icon}</button>
          <button  className={`${index ===reviewsData.length-1 ? "opacity-30 pointer-events-none":"opacity-100 pointer-events-auto"} hover:scale-150 transition-all`}   onClick={()=>{
            setDirection(false);
            setIndex(index+1);
          }}>{arrowIcons[1].icon}</button>
        </div>
      </div>
    </div>
  )
}

export default Reviews
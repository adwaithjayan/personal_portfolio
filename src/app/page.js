"use client"

import { useEffect, useRef, useState } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import Project from "@/components/Project";
import Qa from "@/components/Qa";
import Reviews from "@/components/Reviews";
import Skill from "@/components/Skill";
import Toggle from '@/components/Toggle'
import Loading from "@/components/sub/Loading";

export default function Home() {
  const [id, setId] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry)=> {
         const intersecting = entry.isIntersecting
         if (intersecting) {
            setId(entry.target.id)
         }
        })
      },{threshold:0.3}
  )
  const compArr = Array.from(componentRef.current.children);
    compArr.forEach((comp) => {
    observer.observe(comp)
  })
  },[])

  return (
    <>
      <Loading/>
    <Toggle>
      <NavBar id={id} />
      <div ref={componentRef} className="w-min" >
        <Hero />
        <About />
        <Experience />
        <Skill />
        <Reviews />
        <Project />
        <Pricing />
        <Contact />
        <Qa />
      </div>
      </Toggle>
    </>
  );
  }
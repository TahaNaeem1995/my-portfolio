"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Project } from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";
import AOS from "aos"
import { useEffect } from "react";
import Aos from "aos";
export default function Home() {
  useEffect (() => {
    AOS.init({
       easing:"ease-out-back",
       duration:1200,
       delay:100,
       mirror:true,
       anchorPlacement:"bottom-bottom",
       offset:160,
      });
      AOS.refresh();
  },[]);
  return (
    <main>
      <Hero />
      <Project/>
      <Skills/>
      <Contact/>
      <About/>
      <Footer/>
          </main>
  );
}

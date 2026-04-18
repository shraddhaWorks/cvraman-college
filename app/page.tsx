'use client';

import Course from "@/components/common/course";
import Hero from "@/components/home/hero";
import Mission from "@/components/home/mssion";
import Welcome from "@/components/home/welcome";
import Why from "@/components/common/why";


export default function Home() {
  return (
    
      <>
      <Hero />
      <Welcome/>
    
      <Mission/>
      
      <Why/>
      <Course/>

     </>
  );
}

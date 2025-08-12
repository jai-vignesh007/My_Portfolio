"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticleBackground from "./ParticleBackground"

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
    <ParticleBackground/>
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/MyPic.jpg"
          alt="MyImage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#373774aa]"
        ></Image>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          Full-Stack & Cloud Engineer <br />
          <span className="text-cyan-200"> crafting scalable products.</span>
        </h1>
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Hi! I&apos;m Jai - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Software Engineer",
                  "React + Node.js Developer",
                  "Cloud-Native Engineer (AWS)",
                  "DevOps & CI/CD Practitioner",
                  "Flutter Mobile Developer",
                  "Java & Spring Boot Backend Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
          <span>See My Work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

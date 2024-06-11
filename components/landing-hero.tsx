import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Star from "./landing-star-icon";
const Hero = () => {
  const signInPath = "https://www.happymelon.club"
  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <div className="flex flex-col gap-6 pt-8 justify-center items-center z-40">
        <div className="flex flex-col justify-center items-center lg:gap-2 text-white text-4xl lg:text-6xl xl:flex-row font-[750]">
          <span>Socialize With&nbsp;</span>
          <span className="bg-gradient-to-r from-[#c5a6fa] to-[#bf3afe] bg-clip-text text-transparent">
            Trust And Freedom
          </span>
        </div>
        <div className="text-xs md:text-lg text-white font-[550] flex justify-center items-center flex-col lg:flex-row">
          <span>Melon Is An Aggregated Information Platform&nbsp;</span>
          <span>That Combines Decentralized Technology And Principles.</span>
        </div>
        <Button className="text-black mt-8 text-base font-[550] w-28 h-10 rounded-full bg-gradient-to-r from-[#64FFA9] from-100% to-[#35f978] to-100%">
          <a href={signInPath} target={'_blank'} rel="noreferrer">
           Join now
          </a>
        </Button>
      </div>
      <Image
        className="absolute bottom-2 animate-bounce"
        src="landing-mouse.svg"
        width={40}
        height={64}
        alt="mouse"
      />
      <div className="absolute z-20 top-[20%] w-full">
        <div className="grid grid-cols-7">
          <Star className="col-start-6 col-span-1 lg:w-16 lg:h-16 w-12 h-12 " />
        </div>
        <div className="grid grid-cols-8">
          <Star className="col-start-2 col-span-1 lg:w-12 lg:h-12 w-8 h-8 " />
        </div>
        <div className="grid grid-cols-8 pt-5">
          <Star className="col-start-8 col-span-1 lg:w-11 lg:h-11 w-7 h-7 " />
        </div>
      </div>
      <video
        loop
        muted
        autoPlay
        className="absolute min-w-full z-10 mix-blend-lighten opacity-45 xl:top-0 bottom-1/4"
      >
        <source src="landing-bg-m.mp4" type="video/mp4" />
      </video>

      <div className="absolute w-full h-full bg-cover top-0 " >
        <div className="relative w-full h-full z-20  bg-cover" style={{ backgroundImage: "url('landing-green-point.svg')" }}></div>
      </div>
      <div className="absolute w-full z-10 min-h-screen top-0 opacity-0 sm:opacity-100 bg-gradient-to-b from-black from-0% to-transparent -to-40%"></div>
      <video
        loop
        muted
        autoPlay
        className="absolute max-w-3xl lg:max-w-6xl z-20 mix-blend-lighten"
      >
        <source src="landing-bg-c.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;

"use client";
import { useEffect, useState } from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Blog", path: "https://x.com/happymelon82347" },
    { title: "Litepaper", path: "https://adaptable-bramble-279.notion.site/HappyMelon-7e14547dc7134310b80ea70744dfad9b" },
    // { title: "Contact us", path: "#landing-fooder" },
  ];
  const signInPath = "https://www.happymelon.club"

  useEffect(() => {
    document.onclick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && !target.closest(".menu-btn")) setState(false);
    };
  }, []);


  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <div className="flex flex-row gap-2 justify-center">
        <div className="w-12 h-7 lg:w-16 lg:h-11 relative">
          <Image
            src="landing-logo.svg"
            alt="melon logo"
            layout='fill'
          // objectFit="cover"
          />
        </div>
        <Image
          className="hidden md:block"
          src="landing-melon.svg"
          width={104.48}
          height={23.89}
          alt="melon text"
        />
      </div>
      <div className="md:hidden">
        <button className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {
            state ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )
          }
        </button>
      </div>
    </div>
  )

  return (
    <div className='w-full fixed  top-0 z-50'>
      <header>
        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
          <Brand />
        </div>
        <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-black shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
          <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <Brand />
            <div className={` flex-1 items-center justify-end mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
              <ul className="justify-end items-center space-y-6 md:flex md:space-x-16 md:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-white hover:text-emerald-300 text-base font-[550]"
                    >
                      <a href={item.path} className="block" target={'_blank'} rel="noreferrer">
                        {item.title}
                      </a>
                    </li>
                  );
                })}
                <li
                  className="text-white hover:text-emerald-300 text-base font-[550]"
                >
                  <a href="#landing-fooder" className="block">
                    Contact us
                  </a>
                </li>
                <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                  <li>
                    <Button className={`text-black text-base font-[550] ${state ? 'w-full' : 'w-28'} h-10 rounded-full bg-gradient-to-r from-[#64FFA9] from-100% to-[#35F978] to-100%`}>
                      <a href={signInPath} target={'_blank'} rel="noreferrer">
                        Sign in
                      </a>
                    </Button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Navbar
import React from 'react'
import Image from "next/image";
const Diversity = () => {
    return (
        <div className="relative flex items-center justify-center overflow-hidden">
            <div className='z-10 text-white flex items-center justify-center flex-col gap-12 py-6'>
                <span className='font-[750] text-3xl sm:text-6xl'>More I Diversity</span>
                <div className='grid sm:grid-flow-row-dense grid-rows-3 sm:grid-rows-2 grid-cols-1 sm:grid-cols-2  gap-2'>
                    <div className='px-8 py-6 flex flex-col items-center gap-10 rounded-3xl border-[1px] opacity-85 border-[#3F3F3F] bg-[#0F0F11]'>
                        <span className='font-bold text-2xl'>Dual-Tone Display</span>
                        <div className='relative w-[346px] h-[213px]'>
                            <Image src="/landing-diversity-1.png" alt="diversity img" width={316} height={183}
                                className='absolute top-0 left-0' />
                            <Image src="/landing-diversity-2.png" alt="diversity img" width={316} height={183}
                                className='absolute bottom-0 right-0' />
                        </div>
                    </div>
                    <div className='px-8 py-6 flex flex-col items-center gap-10 rounded-3xl border-[1px] opacity-85 border-[#3F3F3F] bg-[#0F0F11]'>
                        <span className='font-bold text-2xl'>Cultural Inclusivity</span>
                        <div className='relative w-[346px] h-[213px] flex items-center justify-center'>
                            <Image src="/landing-diversity-3.png" alt="diversity img" width={316} height={183}
                                className='absolute' />
                        </div>
                    </div>
                    <div className='sm:px-8 pt-6 flex flex-col sm:col-span-2 items-center rounded-3xl border-[1px] opacity-85 border-[#3F3F3F] bg-[#0F0F11]'>
                        <span className='font-bold text-2xl'>Modular Design</span>
                        <div className='relative w-full sm:w-[740px] h-[290px] flex items-center justify-center'>
                            <Image src="/landing-diversity-4.png" alt="diversity img" width={740} height={290}
                                className='absolute' />
                        </div>
                    </div>
                </div>
            </div>


            <video
                loop
                muted
                autoPlay
                className="absolute min-w-max xl:min-w-full mix-blend-lighten opacity-40 hidden sm:block"
            >
                <source src="landing-bg-s.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Diversity
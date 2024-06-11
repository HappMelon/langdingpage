import React from 'react'
import Image from "next/image";

const Fooder = () => {
    const followUsPath = "https://x.com/happymelon82347"
    return (
        <div id="landing-fooder" className='w-full  flex items-center justify-center pt-12 sm:pb-6'>
            <div className='grid grid-rows-2 grid-cols-1 sm:grid-cols-2  gap-y-24 w-full sm:w-2/3'>
                <div className='hidden sm:block'>
                    <div className="flex flex-row gap-2 justify-start">
                        <div className="w-12 h-7 lg:w-16 lg:h-11 relative">
                            <Image
                                src="landing-logo.svg"
                                alt="melon logo"
                                layout='fill'
                            />
                        </div>
                        <Image
                            src="landing-melon.svg"
                            width={104.48}
                            height={23.89}
                            alt="melon text"
                        />
                    </div>
                </div>
                <div className='flex flex-row gap-1 items-center justify-center sm:justify-start'>
                    <span className='font-bold text-3xl bg-gradient-to-r from-[#68FFAE] to-[#31F874] bg-clip-text text-transparent'>
                        <a href={followUsPath} target={'_blank'} rel="noreferrer">
                        Follow us on Twitter
                        </a>
                    </span>
                    <Image src={'landing-turn.svg'} width={41.45} height={41.45} alt={'turn.svg'} />
                </div>
                <div className='flex items-center  justify-center sm:justify-start '>
                    <span className='font-[550] text-[#A6A6A6] text-sm leading-7 '>© 2024 Melon Inc. Copyright and rights reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Fooder
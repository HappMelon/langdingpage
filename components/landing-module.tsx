import React from 'react'
import Image from "next/image";
const Module = () => {
  return (
    <div className='relative flex justify-center items-center max-w-full'>
      <div className='w-full flex gap-6 flex-col items-center justify-center z-10 pt-28'>
        <div className='flex gap-2 flex-row items-center justify-center font-[750] text-2xl sm:text-6xl p-2 bg-gradient-to-r from-[#68FFAE] to-[#31F874] bg-clip-text text-transparent'>
          <span>Engage,</span>
          <span>Enlighten,</span>
          <span>Empower</span>
        </div>
        <div className='text-white text-center w-full px-2 sm:px-0 sm:w-[693px]'>
          <span>Our goal is to create a trusted,free,and high-value social network.Through mechanisms such as staking,predictions, and token incentives,Melon provides you with the ability to express themselves and prevents the spread of meaningless information.</span>
        </div>
        <div className='grid grid-flow-row sm:grid-flow-col gap-8 m-24'>
          <div className='flex items-center pt-8 flex-col gap-4 px-6 w-[296px] xl:w-[316px] h-[390px] xl:h-[410px] border-[1px] border-[#3F3F3F] bg-[#0F0F11] rounded-3xl'>
            <div className='flex justify-center items-center w-16 h-16 rounded-full bg-[#FF5A0E]'>
              <Image
                src={"landing-bianji.svg"}
                width={32}
                height={32}
                alt='bianji'
              />
            </div>
            <span className='font-bold text-base text-white'>Decentralized Universe</span>
            <span className='text-[#979C9E] text-center'>As a service provider, we ensure a secure, anonymous, and enjoyable experience using zk-SNARK Algorithm Encryption, Node-based Storage, RSS3, ML Algorithms, and AI Language Models. With us, you can post shocking news, share your opinions, and vote for rights and freedom.</span>
          </div>
          <div className='flex items-center pt-8 flex-col gap-4 px-6 w-[296px] xl:w-[316px] h-[390px] border-[1px] border-[#3F3F3F] bg-[#0F0F11] rounded-3xl'>
            <div className='flex justify-center items-center w-16 h-16 rounded-full bg-[#00DDC1]'>
              <Image
                src={"landing-quanxian.svg"}
                width={32}
                height={32}
                alt='bianji'
              />
            </div>
            <span className='font-bold text-base text-white'>Thriving Web3 Economy</span>
            <span className='text-[#979C9E] text-center'>We enhance the playability of information dissemination through stake verification, stake prediction, and NFT token creation, while boosting the engagement of KOLs. Your rights and authorities expand as you collect more tokens or rank higher within your interest groups.</span>
          </div>
          <div className='flex items-center pt-8  flex-col gap-4 px-6 w-[296px] xl:w-[316px] h-[390px] border-[1px] border-[#3F3F3F] bg-[#0F0F11] rounded-3xl'>
            <div className='flex justify-center items-center w-16 h-16 rounded-full bg-[#AF6BFB]'>
              <Image
                src={"landing-money-contorl.svg"}
                width={32}
                height={32}
                alt='bianji'
              />
            </div>
            <span className='font-bold text-base text-white'>DAO Consensus</span>
            <span className='text-[#979C9E] text-center'>In Melon, we establish consensus by creating mechanisms for transparent content creation, distribution, participation, verification, and feedback. Our dual-token model with reasonable incentives and restrictive rules helps you build credibility and reputation.</span>
          </div>
        </div>
      </div>


      <div className='absolute w-11/12  sm:w-3/4 sm:h-1/3 -translate-y-[42%]'>
        <div className='absolute left-0 top-0 w-3 h-72 landing-move-mask'>
          <Image src={"landing-bg-t-1.svg"} width={12} height={9.48} alt='move bg' className='landing-move-image' />
        </div>
        <div className='absolute right-0 bottom-0 w-3 h-60 landing-move-mask'>
          <Image src={"landing-bg-t-2.svg"} width={12} height={9.48} alt='move bg' className='landing-move-image'/>
        </div>
      </div>
      <div className="landing-bg-1 absolute top-0 sm:w-[649.1px] sm:h-[397.65px]"></div>
      <div className='absolute h-screen min-w-full'>
        <div className='absolute bottom-0 left-0'>
          <div className="relative  lg:w-[306px] lg:h-80 -left-16 -bottom-36">
            <Image
              src="landing-bg-i-1.svg"
              alt="melon bg"
              layout='fill'
            />
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <div className="relative  lg:w-[306px] lg:h-80 top-16 -right-14">
          <Image
            src="landing-bg-i-2.svg"
            alt="melon bg"
            layout='fill'
          />
        </div>
      </div>
    </div>
  )
}

export default Module

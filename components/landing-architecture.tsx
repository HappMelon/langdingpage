import React from 'react'
import Image from "next/image";

export const ArchitectureCard = ({ iconColor, trade, des }: { iconColor: string, trade: string, des: string }) => {
    return (
        <div className='w-44 h-32 sm:w-[249px] sm:h-[201px] border-[1px] border-[#3F3F3F] rounded-3xl bg-[#0F0F11]  pl-4 p-2 sm:p-8  gap-3 sm:gap-4 flex items-start justify-start flex-col'>
            <Image src={'landing-trade.svg'} width={28} height={29} color={iconColor} alt="trade" />
            <span className='font-medium text-2xl sm:text-5xl' style={{ color: iconColor }}>{trade}</span>
            <span className='font-medium text-xs text-[#979C9E]'>{des}</span>
        </div>
    )
}

const Architecture = () => {
    const architectureCardItems = [
        {
            iconColor: '#FF5A0E',
            trade: '665,695',
            des: 'Total transactions'
        },
        {
            iconColor: '#F2F63E',
            trade: '665,695',
            des: 'Total transactions'
        },
        {
            iconColor: '#933FFE',
            trade: '665,695',
            des: 'Total transactions'
        },
        {
            iconColor: '#FF5A0E',
            trade: '665,695',
            des: 'Total transactions'
        },
        {
            iconColor: '#F2F63E',
            trade: '665,695',
            des: 'Total transactions'
        },
        {
            iconColor: '#933FFE',
            trade: '665,695',
            des: 'Total transactions'
        },
    ]

    return (
        <div className='relative w-full xl:min-h-screen flex flex-col py-12 gap-16 items-center justify-center'>
            <div className='flex flex-col gap-12 items-center justify-center sm:w-[787px] z-10'>
                <span className='font-[750] text-3xl sm:text-6xl bg-gradient-to-r from-[#68FFAE] to-[#31F874] bg-clip-text text-transparent'>A Robust Architecture</span>
                <span className='font-[550] text-md sm:text-lg text-center text-white'>Melon&apos;s unique staking and prediction mechanism,along with the vision of &quot;socialize with trust and freedom,&quot;make the team prioritize information security, reliability,and transparency.We use zk-SNARKs zero-knowledge proofs and on-chain data storage to ensure that users can experience social and content interaction in line with our slogan.Additionally,we aim to onboard more Web 2.0 users into the decentralized world,and we are concurrently developing and planning to deploy technologies that reduce interaction costs and time,creating a seamless Web3 user experience.</span>
            </div>
            <div className="w-full inline-flex flex-nowrap overflow-hidden gap-4 sm:gap-16 z-20">
                <ul className="flex items-center justify-center md:justify-start gap-4 sm:gap-16 landing-animate-infinite-scroll">
                    {
                        architectureCardItems.map((item, index) => (
                            <li key={index}>
                                <ArchitectureCard iconColor={item.iconColor} trade={item.trade} des={item.des} />
                            </li>
                        ))
                    }
                </ul>
                <ul className="flex items-center justify-center md:justify-start gap-4 sm:gap-16  landing-animate-infinite-scroll" aria-hidden="true">
                    {
                        architectureCardItems.map((item, index) => (
                            <li key={index}>
                                <ArchitectureCard iconColor={item.iconColor} trade={item.trade} des={item.des} />
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='absolute w-full h-2/3 top-1/3 z-0'>
                <Image
                    src="/landing-architecure-img-1.png"
                    alt="architecure img"
                    layout='fill'
                />
            </div>
        </div>
    )
}

export default Architecture
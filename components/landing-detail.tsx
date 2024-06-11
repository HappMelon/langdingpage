import React from 'react'
import Image from "next/image";
const Detail = () => {
    return (
        <div className='relative flex justify-center items-center'>
            <div className='relative m-4 xl:m-24 grid  grid-cols-1 xl:grid-cols-2  grid-rows-[repeat(7,auto)] xl:grid-rows-3 xl:gap-x-10 gap-y-16 xl:gap-y-48'>
                <div className='flex justify-end order-1'>
                    <div className='flex flex-col gap-6 w-full xl:w-[490px] text-center xl:text-start'>
                        <span className='text-white font-[750] text-3xl lg:text-4xl sm:text-5xl'>Hotspot Timeline</span>
                        <span className='text-white font-bold text-xl sm:text-2xl'>Systematized Information Display</span>
                        <span className='text-[#979C9E] font-[550] text-md sm:text-lg'>Melon offers a decentralized space for sharing and accessing information, structuring the vast ocean of data to present it intuitively and effectively. Users participate in the verification process, allowing community members to evaluate or predict information. This collective wisdom filters out valuable and authentic content, addressing errors and misleading information.</span>
                    </div>
                </div>
                <div className='flex justify-center items-center order-2'>
                    <div className='relative w-full  lg:w-[610px]  aspect-[9/6]'>
                        <div className="relative w-full h-full z-40 ">
                            <Image
                                src="/landing-detail-img-1.png"
                                alt="detail img"
                                layout='fill'
                            />
                        </div>
                        <div className="landing-bg-2 absolute top-0 left-12 overflow-hidden sm:w-[499.17px] sm:h-[305.8px]"></div>
                    </div>
                </div>



                <div className='flex justify-center items-center  order-4 xl:order-3'>
                    <div className='relative  w-full  lg:w-[610px]  aspect-[9/6]'>
                        <div className="relative w-full h-full z-40">
                            <Image
                                src="/landing-detail-img-2.png"
                                alt="detail img"
                                layout='fill'
                            />
                        </div>
                        <div className="landing-bg-2 absolute top-0 left-12 overflow-hidden  sm:w-[499.17px] sm:h-[305.8px]"></div>
                    </div>
                </div>
                <div className='flex justify-start order-3 xl:order-4'>
                    <div className='flex flex-col gap-6 w-full xl:w-[490px] text-center xl:text-start'>
                        <span className='text-white font-[750]  text-3xl lg:text-4xl sm:text-5xl'>Melon Wallet</span>
                        <span className='text-white font-bold text-xl sm:text-2xl'>Introduction to the on-chain and
                            offchain incentive system</span>
                        <span className='text-[#979C9E] font-[550] text-md sm:text-lg'>Users can utilize centralized identity authentication and earn off-chain $Melon rewards from platform activities. These rewards can be used within the platform for subscriptions, premium content, or predictions. Off-chain $Melon is stored on centralized servers and cannot be exchanged for fiat currency or other virtual tokens.</span>
                    </div>
                </div>




                <div className='flex justify-end order-5'>
                    <div className='flex flex-col gap-6  w-full xl:w-[490px] text-center xl:text-start'>
                        <span className='text-white font-[750]  text-3xl lg:text-4xl sm:text-5xl'>Betting Prediction</span>
                        <span className='text-white font-bold text-xl sm:text-2xl'>Unique Staking Gameplay</span>
                        <span className='text-[#979C9E] font-[550] text-md sm:text-lg'>Freedom does not imply irresponsibility. Users must demonstrate that their actions provide value rather than engaging in irresponsible behavior. Melon aims for users to get closer to the truth as they consume content. Through staking tokens for content predictions, Melon incentivizes insightful users and empowers the community to influence events. Web 2.0 users can withdraw off-chain $Melon to their wallets after establishing their DID, thus transitioning into Web3.</span>
                    </div>
                </div>
                <div className='flex justify-center items-center order-6'>
                    <div className='relative  w-full  lg:w-[610px]  aspect-[9/6]'>
                        <div className="relative w-full h-full z-40">
                            <Image
                                src="/landing-detail-img-3.png"
                                alt="detail img"
                                layout='fill'
                            />
                        </div>
                        <div className="landing-bg-2 absolute top-0 left-12 overflow-hidden  sm:w-[499.17px] sm:h-[305.8px]"></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Detail
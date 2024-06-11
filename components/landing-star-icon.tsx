import React from 'react'

const Star = ({width, height, className}:{width?:number, height?:number, className?:string}) => {
    return (
        <div className={`${className}`} style={{width:`${width}px`, height:`${height}px`}}>
            <svg width="100%" height="100%" viewBox="0 0 68 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 0L36.6022 27.31L58.0416 9.81192L40.2824 30.936L68 33.5L40.2824 36.064L58.0416 57.1881L36.6022 39.69L34 67L31.3978 39.69L9.95837 57.1881L27.7176 36.064L0 33.5L27.7176 30.936L9.95837 9.81192L31.3978 27.31L34 0Z" fill="url(#paint0_linear_5502_12051)" />
                <defs>
                    <linearGradient id="paint0_linear_5502_12051" x1="0" y1="33.5" x2="68" y2="33.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#68FFAE" />
                        <stop offset="1" stopColor="#31F874" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    )
}

export default Star
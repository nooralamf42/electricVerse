import { BRAND_NAME } from '@/constants/globalConstants'
import React from 'react'

export default function Footer() {
  return (
    <div 
      className='relative h-[50dvh] md:h-[70dvh]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 md:h-[70dvh] h-[50dvh] w-full'>
        <Content />
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className='dark:bg-[#4E4E5A] bg-neutral-100 py-8 px-12 h-full w-full flex flex-col justify-between mx-auto p-4 container'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='md:flex justify-between items-end'>
            <h1 className='text-[10vw] leading-[0.8] mt-10'>{BRAND_NAME}</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase dark:text-[#ffffff80]'>About</h3>
                <p>Home</p>
                <p>Projects</p>
                <p>Our Mission</p>
                <p>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase dark:text-[#ffffff80]'>Services</h3>
                <p>Electrical</p>
                <p>Plumbing</p>
                <p>Carpentry</p>
                <p>Painting</p>
                <p>Gardening</p>
                <p>Cleaning</p>
            </div>
        </div>
    )
}
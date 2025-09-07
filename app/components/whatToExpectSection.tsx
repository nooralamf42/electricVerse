import React from 'react'
import * as motion from 'motion/react-client'
import { cardData } from '@/constants/services'

const WhatToExpectSection = () => {
  return (
    <section className='min-h-screen grid place-content-center gap-16 my-12'>
        <motion.h2 className='text-3xl md:text-6xl text-center ' initial={{ filter: 'blur(10px)' }} whileInView={{ filter: 'blur(0px)' }} transition={{ duration: .5 }} viewport={{ amount: .4 }} >Here's what you can expect from us ...</motion.h2>
        <div className=''>
            <ServiceCards />
        </div>
    </section>
  )
}

export default WhatToExpectSection

  const ServiceCards = () => {
  
    return (
      <div className="max-w-5xl mx-auto grid  sm:grid-cols-2  lg:grid-cols-3 gap-6 p-4">
        {cardData.map((card, index) => (
          <motion.div
          initial={{ filter: 'blur(10px)' , y: 80, opacity: 0 }}
          whileInView={{ filter: 'blur(0px)' , y: 0, opacity: 1 }}
          transition={{ duration: .5 }}
          viewport={{ amount: .4 , once: true }}
            key={index}
            className={`${card.bgColor} h-[200px] flex justify-center items-center p-6 rounded-lg shadow-md ${index==1 || index==2 || index==8 ? 'lg:col-span-2' : index==cardData.length-1 ? 'hidden' : ''}`}
          >
            <h3 className="text-xl font-semibold text-neutral-700">{card.text}</h3>
          </motion.div>
        ))}
      </div>
    );
  };
  
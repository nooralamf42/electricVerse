import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"
import { services } from '@/constants/services'
import { Star, Users2 } from 'lucide-react'
import { HAPPY_CUSTOMERS, RATING } from '@/constants/globalConstants'
import BookServiceDialog from '@/components/bookServiceDialog'


const leftSideVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
}

const HeroSection = () => {
    return (
        <section className='grid md:grid-cols-2 gap-4 justify-center md:justify-between mt-20 md:mt-40 items-center min-h-[70vh] overflow-hidden'>
            {/* left side */}
            <motion.div initial="hidden" animate="show" variants={leftSideVariants} className=''>
              <h1 className='text-4xl font-semibold tracking-tight leading-12'>Home Services at your doorstep</h1>
              <p className='text-lg text-muted-foreground'>We provide a wide range of home services to meet your needs.</p>  

              <div className='border-dashed p-5 rounded-2xl border-black/60 dark:border-white/60 border-3  my-10 w-fit md:ml-4 max-md:w-full'>
                <h2 className='text-lg font-semibold text-neutral-700 dark:text-white tracking-tight'>Which service are you looking for?</h2>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    {services.map((service) => (
                        <BookServiceDialog service={service.name} key={service.name}>
                            <div className="flex items-center flex-col gap-2">
                                <Image
                                    src={service.image}
                                    className='rounded-lg h-20 w-30 object-cover object-center'
                                    alt={service.name}
                                    width={50}
                                    height={50}
                                />
                                <p className='text-center text-sm text-neutral-600 dark:text-white' >{service.name}</p>
                            </div>
                        </BookServiceDialog>
                    ))}
                </div>
              </div>

              <div className='flex items-center gap-10 my-12'>
                <div className='flex gap-2'>
                <Star  size={50}/>
                <div>
                 <p className='text-lg font-semibold'>{RATING}</p>
                 <span className='text-sm text-muted-foreground'>Service Rating</span>
                </div>
                </div>
                <div className='flex gap-2'>
                <Users2 size={50}/>
                <div>
                <p className='text-lg font-semibold'>{HAPPY_CUSTOMERS}</p>
                <span className='text-sm text-muted-foreground'>Happy Customers</span>
                </div>
                </div>
              </div>
            </motion.div>
            {/* right side */}
            <div className="grid grid-cols-2 grid-rows-3 gap-2">
                <motion.div className="row-span-2 relative w-full h-full" viewport={{amount: .1}} whileInView={{filter: 'blur(0px)', rotate: 0, y: 0}} initial={{ filter: 'blur(10px)', rotate: 10, y: -10 }} transition={{ duration: .3 }}>
                    <Image
                        src="/gardening.png"
                        alt="Service 1"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>

                {/* Top Right */}
                <motion.div className="relative w-full h-48" viewport={{amount: .1}} whileInView={{filter: 'blur(0px)', rotate: 0, y: 0}} initial={{ filter: 'blur(10px)', rotate: 10, y: -10 }} transition={{ duration: .3 }}>
                    <Image
                        src="/carpentry.jpg"
                        alt="Service 2"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>

                {/* Bottom Left */}
                <motion.div className="relative w-full h-full row-span-2" viewport={{amount: .1}} whileInView={{filter: 'blur(0px)', x: 0}} initial={{ filter: 'blur(10px)',  x: 100 }} transition={{ duration: .3 }}>
                    <Image
                        src="/electrical.webp"
                        alt="Service 3"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>


                {/* Bottom Right */}
                <motion.div className="relative w-full h-full" viewport={{amount: .1}} whileInView={{filter: 'blur(0px)', x: 0}} initial={{ filter: 'blur(10px)',  x: -100 }} transition={{ duration: .3 }}>
                    <Image
                        src="painting.jpg"
                        alt="Service 4"
                        fill
                        className="object-cover rounded-lg object-left"
                    />
                </motion.div>
            </div>
        </section>

    )
}

export default HeroSection
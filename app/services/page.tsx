import { BlurFade } from '@/components/ui/blur-fade'
import WhatsappButton from '@/components/whatsappButton'
import { services } from '@/constants/services'
import Image from 'next/image'
import React from 'react'

const servicesPage = () => {
    return (
        <main className='min-h-screen mt-24'>
            <h1 className='text-3xl md:text-6xl text-center my-12'>All Services</h1>
            <div>
                <ServiceCards />
            </div>
        </main>
    )
}

export default servicesPage

const ServiceCards = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 container mx-auto px-4 pb-34'>
            {
                services.map((service, index) => (
                    <div className='w-full' key={service.name}>
                        <BlurFade inView delay={index * .14}>
                            <Image className='w-full aspect-square object-cover rounded-lg object-top' src={service.image} alt={service.name} width={600} height={600} />
                            <h2 className='text-2xl md:text-4xl my-3'>{service.name}</h2>
                            <p className='text-lg mb-3'>{service.description}</p>
                            <WhatsappButton service={service.name} />
                        </BlurFade>
                    </div>
                ))
            }
        </div>
    )
}
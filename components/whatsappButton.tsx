import { PHONE_NUMBER } from '@/constants/globalConstants'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappButton = ({service}: {service: string}) => {
  return (
    <Link className='flex group bg-green-400 text-gray-50 items-center gap-2 text-lg p-2 border rounded-full justify-center shadow-lg font-semibold' target="_blank" href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=I%20want%20to%20get%20${service.toLowerCase()} service at my home.`}>
       <FaWhatsapp size={25} className='group-hover:rotate-10 transition-transform'/> <span>Book Now</span>
    </Link>
  )
}

export default WhatsappButton
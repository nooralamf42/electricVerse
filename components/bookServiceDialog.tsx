import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { FaWhatsapp } from 'react-icons/fa'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
import { PHONE_NUMBER } from '@/constants/globalConstants'

const BookServiceDialog = ({ children, service }: { children: React.ReactNode, service: string }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>You want to book a {service} service.</DialogTitle>
                </DialogHeader>

                <div className="flex gap-5  justify-center items-center mt-4">
                    <Link target="_blank" className='bg-green-50 flex items-center gap-2 rounded-full border px-5 py-2 cursor-pointer' href={`tel:${PHONE_NUMBER}`}><span>Book Now <PhoneCall className='text-green-500 inline-block ' size={25} /></span></Link>
                    <Link target="_blank" className='bg-green-50 flex items-center gap-2 rounded-full border px-5 py-2 cursor-pointer' href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=I%20want%20to%20get%20${service.toLowerCase()} service at my home.`}><span>Message on WhatsApp <FaWhatsapp className='text-green-500 inline-block ' size={25} /></span></Link>
                </div>

                {/* <DialogFooter>
                    <DialogClose>Cancel</DialogClose>
                    <DialogClose>Book</DialogClose>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}

export default BookServiceDialog
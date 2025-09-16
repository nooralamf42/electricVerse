'use client'

import { Menu } from 'lucide-react'
import { Sheet,  SheetContent,  SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { motion } from 'motion/react'
import { useState } from 'react'
import { navItems } from '@/constants/navItems'
import Link from 'next/link'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import SearchBox from './searchBox'
import { ThemeModeToggle } from './themeModeToggle'

const itemVariants = {
    hidden: { },
    show: {  transition: {
        staggerChildren: 0.1,   // gap between each child animation
        delayChildren: 0.2,     // wait before first child starts
    }, },
}

const childrenVariants = {
    hidden: { opacity: 1, y: 20, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } },
}

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.aside initial={{ opacity: 0 , y: 20}} animate={{ opacity: 1, y: 0 }} className='hidden max-sm:flex justify-end items-center gap-1'>
            {/* <motion.div initial={{ opacity: 0 , y: 20}} animate={{ opacity: 1, y: 0 }}>
                <SearchBox/>
            </motion.div> */}
            <motion.div initial={{ opacity: 0 , y: 20}} animate={{ opacity: 1, y: 0 }}>
                <ThemeModeToggle />
            </motion.div>
            <Sheet>
                <SheetTrigger ><Menu /></SheetTrigger>
                <SheetContent >
                    <VisuallyHidden>
                        <SheetHeader >
                            <SheetTitle>Navigation</SheetTitle>
                        </SheetHeader>
                    </VisuallyHidden>
                    <motion.ul initial='hidden' animate={isOpen ? "show" : "show"} onViewportEnter={() => setIsOpen(true)} onViewportLeave={() => setIsOpen(false)} variants={itemVariants} className='flex flex-col gap-8 h-screen justify-center items-center'>
                        {navItems.map((item) => (
                            
                            <motion.li variants={childrenVariants} key={item.name}>
                                <Link href={item.href} title={item.name} className='flex gap-0.5 flex-col items-center'>
                                    {<item.icon size={30} />} {item.name}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>

                </SheetContent>
            </Sheet>
        </motion.aside>
    )
}

export default SideNav
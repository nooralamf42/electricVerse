import { BRAND_NAME } from '@/constants/globalConstants'
import { navItems } from '@/constants/navItems'
import Link from 'next/link'
import * as motion from "motion/react-client"
import { ThemeModeToggle } from './themeModeToggle'
import SideNav from './sideNav'

const Header = () => {
    return (
        <header>
            <NavBar />
        </header>
    )
}

const brandNameVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}
const listVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,   // gap between each child animation
            delayChildren: 0.3,     // wait before first child starts
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};
const NavBar = () => {

    return (
        <nav className='fixed top-0 z-50 bg-white/90 dark:bg-black/90 border-b backdrop-blur py-4 w-full'>
            <div className="container mx-auto flex justify-between items-center px-4">
                <motion.div className='text-xl md:text-2xl font-bold' variants={brandNameVariant} initial="hidden" animate="show"><Link href="/">{BRAND_NAME}</Link></motion.div>
                
                <SideNav />
                <motion.ul
                    variants={listVariants}
                    initial="hidden"
                    animate="show"
                    className='flex justify-end gap-4 items-center max-sm:hidden'>
                    {/* Search box */}
                    {/* <motion.li variants={itemVariants} key={'searchBox'}>
                        <SearchBox />
                    </motion.li> */}
                    {/* Theme Mode Toggle Button */}
                    <motion.li  variants={itemVariants} key={'themeModeToggle'}>
                        <ThemeModeToggle />
                    </motion.li>
                    {/* Navigation Items */}
                    {navItems.map((item) => (
                        <motion.li variants={itemVariants} key={item.name}>
                            <Link href={item.href} title={item.name}>
                                {<item.icon />}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </nav>
    )
}



export default Header
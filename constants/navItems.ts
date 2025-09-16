import { Home, Phone, Contact } from "lucide-react"
import { PHONE_NUMBER } from "./globalConstants"

export const navItems = [
    {
        name: "Home",
        href: "/",
        icon: Home
    },
    {
        name: "Call Us",
        href: `tel:+${PHONE_NUMBER}`,
        icon: Phone
    },
    // {
    //     name: 'Contact Us',
    //     href: '/contact',
    //     icon: Contact
    // }   
]
'use client'
import { BaggageClaim, Briefcase, MessageCircleHeart, Newspaper } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation"

const navList = [{ id: 1, title: "Feeds", link: "/", icon: <Newspaper className="me-2" size={20} /> }, { id: 2, title: "Messages", link: "/messages", icon: <MessageCircleHeart className="me-2" size={20} /> }, { id: 3, title: "Jobs", link: "/jobs", icon: <Briefcase className="me-2" size={20} /> }, , { id: 4, title: "Applied Job", link: "/applied-jobs", icon: <BaggageClaim className="me-2" size={20} /> }]

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <nav className="w-[15%] flex flex-col p-4 dark:bg-custom_card_bg h-max_height rounded-md dark:border-none border-[1px]">
            {
                navList.map((item) => {
                    return <Link key={item?.id} className={`w-100 flex items-center p-2 mb-2 dark:bg-black rounded-md hover:scale-105 duration-300 hover:shadow-custom_primary shadow-sm ${pathname === item?.link && "shadow-custom_primary shadow-sm text-custom_primary"}`} href={item?.link!}>{item?.icon} {item?.title}</Link>
                })
            }
        </nav>
    )
}
"use client"
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ThemeToggle from "./ui/theme-toggle";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="container flex justify-between items-center py-2 shadow-md shadow-[#cfcfcf] dark:shadow-custom_orange dark:shadow-md">
            <div>
                <Link className="font-bold text-2xl" href="/">codmen <span className="text-custom_orange">J</span></Link>
            </div>
            <ul className="flex items-center">
                <li className={`me-6 ${pathname === "/" && "text-custom_orange"}`}><Link href="/">Home</Link></li>
                <li className="me-6"><ThemeToggle /></li>
                <li>
                    <DropdownMenu >
                        <DropdownMenuTrigger className="outline-none focus:hidden">
                            <Avatar className="outline-none focus:hidden">
                                <AvatarImage src="" />
                                <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><Link className={`${pathname === "/profile" && "text-custom_orange"}`} href="/profile">Profile</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link className={`me-6 ${pathname === "/about" && "text-custom_orange"}`} href="/about">About</Link></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
            </ul>
        </nav>
    )
}
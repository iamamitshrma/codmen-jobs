"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useRef } from "react"

export default function MessagesPage() {
    const chatRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        chatRef.current?.lastElementChild?.scrollIntoView()
    }, []);
    return (
        <div className="flex items-center gap-4 h-[78vh]">
            <div className="w-[70%] h-[78vh] rounded-md dark:bg-black border-[0.5px] dark:border-none flex flex-col justify-between gap-1">
                <div ref={chatRef} className="overflow-auto w-[100%] h-[90%] p-2">
                    {
                        [...new Array(20)].map((item, index) => {
                            return (
                                <div key={index + 1} className={`flex flex-col dark:bg-custom_card_bg border-[0.5px] dark:border-none mb-5 w-2/3 rounded-md rounded-tr-none p-2 ${index % 2 === 0 && "ml-auto"}`}>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae.</p>
                                    <span className="font-thin text-xs ml-auto">2:00 PM</span>
                                </div>
                            )
                        })
                    }
                </div>
                <form className="flex items-center gap-3 p-2" action="">
                    <Input placeholder="Type your message..." />
                    <Button variant="outline">Send</Button>
                </form>
            </div>
            <div className="w-[30%] h-[80vh] rounded-md dark:bg-black overflow-auto p-2">
                {
                    [...new Array(20)].map((item, index) => {
                        return (
                            <div key={index + 1} className={`cursor-pointer flex items-center mb-2 dark:bg-custom_card_bg p-2 border-[0.5px] dark:border-none rounded-md ${index === 0 && "dark:bg-custom_orange"}`}>
                                <Avatar className="outline-none focus:hidden me-4">
                                    <AvatarImage src="" />
                                    <AvatarFallback>AS</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h6>Amit Sharma</h6>
                                    <p className={`font-thin text-sm text-gray-500 ${index === 0 && "dark:text-white"}`}>Software Engineer</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
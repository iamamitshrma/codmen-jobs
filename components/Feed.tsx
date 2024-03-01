import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Image from "next/image"
import { Heart, MessageSquareDashed, SendHorizontal } from "lucide-react"

export default function Feed() {
    return (
        <Card className="mb-6">
            <CardHeader className="py-2 px-3">
                <div className="flex items-center">
                    <Avatar className="outline-none focus:hidden me-5">
                        <AvatarImage src="" />
                        <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                        <h6 className="-mb-2">Amit Sharma</h6>
                        <small>5 hrs ago</small>
                    </div>
                </div>
                <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod unde a voluptates saepe accusantium consequuntur molestias doloribus, debitis labore ut tempore? Perferendis optio ab vel, dignissimos odit quasi magni accusantium.</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-2">
                <div className="w-[100%] h-[100%]">
                    <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        src="https://images.unsplash.com/photo-1682687220795-796d3f6f7000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="feed-image"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start w-full pb-2 px-3">
                <div className="flex items-center font-thin text-sm">
                    <span className="text-custom_orange me-5">420 likes</span>
                    <span className="text-custom_orange">10 shares</span>
                </div>
                <hr className="h-[1px] w-full my-3" />
                <div className="flex items-center gap-14 w-full">
                    <div className="flex items-center cursor-pointer hover:text-custom_orange transition-all"><Heart className="me-4" size={16} /><span>Like</span></div>
                    {/* <div className="flex items-center"><MessageSquareDashed className="me-4" size={16} /><span>Comment</span></div> */}
                    <div className="flex items-center cursor-pointer hover:text-custom_orange transition-all"><SendHorizontal className="me-4" size={16} /><span>Share</span></div>
                </div>
            </CardFooter>
        </Card>
    )
}
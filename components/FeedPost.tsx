import { Textarea } from "@/components/ui/textarea"
import { Input } from "./ui/input"
import Image from "next/image"
import { Button } from "./ui/button"
import { SendHorizontal } from "lucide-react"

export default function FeedPost() {
    return (
        <div className="w-full mb-6 border-[1px] dark:bg-black p-3 rounded-md shadow-md">
            <Textarea className="mb-5" placeholder="What on your mind?" />
            {
                false ? (
                    <div className="w-[100%] h-[100%] mb-5">
                        <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            className="rounded-md"
                            src="https://images.unsplash.com/photo-1682687220795-796d3f6f7000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="feed-image"
                        />
                    </div>
                ) : <Input type="file" className="mb-5" />
            }
            <Button variant="outline">Hit me now <SendHorizontal className="ms-4" size={16} /></Button>
        </div>
    )
}
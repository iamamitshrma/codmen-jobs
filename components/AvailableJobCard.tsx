import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function AvailableJobCard({isApplied}: {isApplied: Boolean}) {
    return (
        <div className="dark:bg-black border-[0.5px] dark:border-none p-2 mb-5 rounded-md shadow-md">
            <div className="flex w-full mb-5">
                <Avatar className="outline-none focus:hidden rounded-sm me-5">
                    <AvatarImage className="rounded-sm" src="" />
                    <AvatarFallback className="rounded-sm">KS</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="font-bold text-custom_orange">thecodemen</h2>
                    <p className="text-sm mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <span className="text-xs font-bold ml-auto">10-50 employees</span>
            </div>

            <div className="dark:bg-custom_card_bg border-[0.5px] dark:border-none p-2 rounded-md">
                <div className="flex items-center justify-between mb-2">
                    <span>Front-end Developer</span>
                    <span>Onsite | 4 LPA</span>
                    <Button disabled={isApplied ? true : false} variant="outline">{isApplied ? "Applied" : "Apply"}</Button>
                </div>
                <hr className="mb-2 bg-gray-500 h-[1px]" />
                <h3 className="font-bold mb-2">Skill Required:</h3>
                <ul className="flex gap-2 flex-wrap">
                    <li className="border-[1px] text-custom_orange px-2 py-1 rounded-lg">React</li>
                    <li className="border-[1px] text-custom_orange px-2 py-1 rounded-lg">NextJS</li>
                    <li className="border-[1px] text-custom_orange px-2 py-1 rounded-lg">React Native</li>
                    <li className="border-[1px] text-custom_orange px-2 py-1 rounded-lg">Nodejs</li>
                    <li className="border-[1px] text-custom_orange px-2 py-1 rounded-lg">MongoDB</li>
                </ul>
            </div>
        </div>
    )
}
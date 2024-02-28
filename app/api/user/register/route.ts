import { connectToDB } from "@/lib/database";
import { User } from "@/models/users.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        connectToDB();
        const { username, email, fullName, avatar, password } = await req.json();

        if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
            return NextResponse.json({message: "All fields are required!"}, {status: 400})
        }

        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        });
        if (existedUser) {
            return NextResponse.json({message: "User with email or username already exists!"}, {status: 400})
        }
        
        console.log({username, email, fullName, avatar, password})
        return NextResponse.json({message: "User Registered successfully!", data: null}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something wrong happened!"}, {status: 400})
    }    
}
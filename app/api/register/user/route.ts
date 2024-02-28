import { connectToDB } from "@/lib/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        connectToDB();
        const { username, email, fullName, avatar, password } = await req.json();
        console.log({username, email, fullName, avatar, password})
        return NextResponse.json({message: "User Registered successfully!", data: null}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something wrong happened!"}, {status: 400})
    }    
}
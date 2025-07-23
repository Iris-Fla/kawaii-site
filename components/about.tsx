"use client"
import { Lexend_Exa } from "next/font/google";

const lexendExa = Lexend_Exa({
    weight: "400",
    display: "swap",
    subsets: ["latin"],
});

export default function About()
{
    return (
        <div className="bg-[e5e5e5]">
            <h1 className={`${lexendExa.className} `}>sample</h1>
        </div>
    )
}
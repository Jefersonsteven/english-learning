import Image from "next/image"
import Link from "next/link"
import React from "react"
import siderBarOptions from "@/data/sliderbarOptions.json"

interface SideBarOptionProps {
    optionName: string
}

const SideBarOption: React.FC<SideBarOptionProps> = ({ optionName }) => {
    return (
        <div
            title={optionName}
            className="bg-[rgb(0,0,0,0.45)] hover:bg-[rgb(0,0,0,0.80)] rounded-lg"
        >
            <Link
                href={optionName}
                className="text-[rgba(191,191,191,0.45)] hover:text-white font-bold hover:underline"
            >
                <p className="p-2 overflow-hidden text-ellipsis">
                    {optionName}
                </p>
            </Link>
        </div>
    )
}


export const SideBar = () => {
    return (
        <div className="bg-sky-600 h-screen w-1/6 p-4 flex flex-col gap-2 absolute overflow-scroll overflow-x-hidden">
            {
                siderBarOptions.map((option) => (
                    <SideBarOption key={option.label} optionName={option.label} />
                ))
            }
        </div>
    )
}
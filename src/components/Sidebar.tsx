'use client'
import Link from "next/link"
import React from "react"
import siderBarOptions from "@/data/sliderbarOptions.json"
import clsx from "clsx"

import { usePathname } from "next/navigation"

interface SideBarOptionProps {
    optionName: {
        label: string
        href: string
    }
}


const SideBarOption: React.FC<SideBarOptionProps> = ({ optionName }, x) => {
    const route = usePathname()
    return (
        <div
            title={optionName.label}
            className={clsx(
                'rounded-lg transition-all duration-300 ease-in-out',
                {
                    'bg-[rgba(155,64,224,0.8)] text-white': route === optionName.href,
                    'bg-[rgb(0,0,0,0.45)] hover:bg-[rgb(0,0,0,0.80)] text-[rgba(191,191,191,0.45)]': route !== optionName.href,
                })}
        >
            <Link
                href={optionName.href}
                className=" hover:text-white font-bold hover:underline"
            >
                <p className="p-2 overflow-hidden text-ellipsis">
                    {optionName.label}
                </p>
            </Link>
        </div>
    )
}


export const SideBar = () => {
    return (
        <div className=" bg-violet-950 h-screen w-1/6 p-4 flex flex-col gap-2 absolute overflow-auto overflow-x-hidden">
            {
                siderBarOptions.map((option) => (
                    <SideBarOption key={option.label} optionName={option} />
                ))
            }
        </div>
    )
}
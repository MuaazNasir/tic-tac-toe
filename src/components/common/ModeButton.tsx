import { ModeButtonProps } from '@/types/ModeButtonProps'
import Link from 'next/link'
import React from 'react'



const ModeButton = ({ title, href }: ModeButtonProps) => {
    return (
        <Link className="bg-[#5C5470] bg-opacity-90 rounded-md shadow-lg shadow-light-blue hover:bg-opacity-75 text-3xl py-4 px-6 hover:shadow-md text-light-bg font-bold font-sans text-[#FAF0E6] transition-all" href={href}>
            {title}
        </Link>
    )
}

export default ModeButton
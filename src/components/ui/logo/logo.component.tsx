'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Logo = () => {
    const pathName = usePathname()
    const isHome = pathName === "/"
    return (
        !isHome ? 
        <Link href="/">
            <Image
                src="/vercel.svg"
                alt="logo"
                width={64}
                height={64}
            />
        </Link>
        :
        <Image
        src="/vercel.svg"
        alt="logo"
        width={64}
        height={64}
        />
    )
}

export default Logo
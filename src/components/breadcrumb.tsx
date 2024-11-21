'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const Breadcrumb = () => {
    const pathname = usePathname()

    const paths = pathname.split("/").filter((path) => path !== "")

    return (
        <div className="container mx-auto py-2 text-xs">
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                    {
                        paths.map((path, index) => {
                            const href = `/${paths.slice(0, index + 1).join("/")}`
                            return (
                                <li key={index}> 
                                    <Link href={
                                        href === "/" ? "/" : href
                                    } className="text-muted-foreground hover:text-foreground capitalize">
                                        {path} /
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ol>
            </nav>
        </div>
    )
}

'use client'

import { Button } from "../ui/button"
import { Gift, Ticket, LucideProps, View, RulerIcon } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ILink {
    label: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
    url: string;
}

const links: ILink[] = [
    {
        label: 'Overview',
        icon: View,
        url: '/admin'
    },
    {
        label: 'Premios',
        icon: Gift,
        url: '/admin/premios'

    },
    {
        label: 'Tickets',
        icon: Ticket,
        url: '/admin/tickets'
    },
    {
        label: 'Sortoes',
        icon: RulerIcon,
        url: '/admin/sorteos'
    }
]

export function NavigationBar() {
    const pathname = usePathname()

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {
                    links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            passHref
                        >
                            <Button
                                key={index}
                                variant={pathname === link.url ? 'link' : 'ghost'}
                                className={pathname === link.url ? 'border-b-2 border-primary rounded-none' : ''}
                            >
                                <link.icon className="mr-1" />
                                {link.label}
                            </Button>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
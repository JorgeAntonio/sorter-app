'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const routes = [
    { name: 'Inicio', path: '/' },
    { name: 'Ganadores', path: '/winners' },
]

export const NavLinks = () => {
    const pathName = usePathname();

    return (
        <div className="hidden md:block ml-10 w-full">
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    {
                        routes.map((route, index) => (
                            <Link
                                key={index}
                                href={route.path}
                                className={pathName === route.path
                                    ? 'text-gray-900 font-bold'
                                    : 'text-gray-600 hover:text-gray-900'
                                }
                            >
                                {route.name}
                            </Link>
                        ))
                    }
                </div>
                <Link href={'/logout'}>
                    <Button variant={"outline"} className="hover:bg-red-700 hover:text-white">
                        <LogOut/>
                        Cerrar Sesión
                    </Button>
                </Link>
            </div>
        </div>
    )
}

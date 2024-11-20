'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '../ui/button';

const routes = [
    { name: 'Inicio', path: '/' },
    { name: 'Ganadores', path: '/winners' },
]

export function Navbar() {
    const pathName = usePathname();

    return (
        <nav className="shadow-sm py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/logo-item.svg"
                alt="Logo"
                className="py-2"
                width={60}
                height={120}
              />
              <div className="hidden md:block ml-10">
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
              </div>
            </div>
            <Link href='/sign-in'>
                <Button> 
                    Iniciar sesión
                </Button>
            </Link>
          </div>
        </div>
      </nav>
    );
}


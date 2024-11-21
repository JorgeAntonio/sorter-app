// import Link from 'next/link';
import Image from 'next/image';
// import { Button } from '../ui/button';
import { NavLinks } from './nav-links';
// import { verifySession } from "@/lib/dal"
// import UserNav from './user-nav';

export default async function Navbar() {
  // const session = await verifySession()
  // const user = session ? session.isAuth : null

  return (
    <nav className="shadow-sm py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Image
              src="/logo-item.svg"
              alt="Logo"
              className="py-2"
              width={60}
              height={120}
            />
            <NavLinks />
          </div>
          {/* <div>
            {
              user ? (
                <UserNav />
              ) : (
                <Link href="/sign-in">
                  <Button size='sm'>
                    Registrarse
                  </Button>
                </Link>
              )
            }
          </div> */}
        </div>
      </div>
    </nav>
  );
}


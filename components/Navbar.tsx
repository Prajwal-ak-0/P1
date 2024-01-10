"use client"

import { Button } from './ui/button'
import Logo from './Logo'
import { useRouter } from 'next/navigation'
import { ModeToggle } from './ModeToggle';
import UserMenu from './UserMenu';
import Avatar from './Avatar';
import { useCurrentUser } from '@/hooks/useCurrentUser';

interface NavbarProps {
    isLogin?: boolean;
    isRegister?: boolean;
}

const Navbar = ({
    isLogin,
    isRegister
}: NavbarProps = {
    }) => {
    const router = useRouter();
    const user = useCurrentUser();

    return (
        <div className="flex dark:shadow-neutral-600  justify-between h-20  shadow-lg items-center p-4">
            <div className='md:ml-12'>
                <Logo />
            </div>
            <div className="max-sm:hidden flex space-x-4 md:space-x-6 md:mr-8">
                {
                    !user ? (
                        <>
                            {
                                !isLogin && (
                                    <Button size={"lg"} onClick={() => router.push('/auth/login')} className="bg-white hover:bg-neutral-100 hover:shadow-md text-black px-4 py-2 rounded">
                                        Log in
                                    </Button>
                                )
                            }
                            {
                                !isRegister && (
                                    <Button size={"lg"} onClick={() => router.push('/auth/register')} className="bg-black hover:bg-neutral-600 hover:shadow-md text-white px-4 py-2 rounded">
                                        Register
                                    </Button>
                                )
                            }
                            <ModeToggle />
                        </>
                    ) : (
                        <>
                            <ModeToggle />
                            <UserMenu />
                        </>
                    )
                }
            </div>
            <div className="sm:hidden">
                <UserMenu />
            </div>
        </div>
    )
}

export default Navbar
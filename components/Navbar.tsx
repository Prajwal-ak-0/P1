"use client"

import { Button } from './ui/button'
import Logo from './Logo'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router =  useRouter();

    return (
        <div className="flex justify-between h-20  shadow-lg items-center bg- text-white p-4">
            <div className='md:ml-12'>
                <Logo />
            </div>
            <div className="space-x-4 md:space-x-6 md:mr-8">
                <Button size={"lg"} onClick={() => router.push('/auth/login')} className="bg-white hover:bg-neutral-100 hover:shadow-md text-black px-4 py-2 rounded">
                    Log in
                </Button>
                <Button size={"lg"}   onClick={() => router.push('/auth/register')} className="bg-black text-white px-4 py-2 hover:shadow-md rounded">
                    Sign up
                </Button>
            </div>
        </div>
    )
}

export default Navbar
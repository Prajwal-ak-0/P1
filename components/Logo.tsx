"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/')} className="dark:text-white text-black cursor-pointer  text-3xl font-bold">
      LOGO
    </div>
  )
}

export default Logo
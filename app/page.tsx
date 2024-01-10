import { Button } from '@/components/ui/button'
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/Auth/LoginButton";
import Navbar from '@/components/Navbar';

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <div>
      <Navbar/>
    </div>
  )
}
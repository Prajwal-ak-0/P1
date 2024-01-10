import { Poppins } from "next/font/google";
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
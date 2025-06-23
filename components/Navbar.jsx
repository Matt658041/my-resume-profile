import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For Next.js 13+ app router
import navImage from "../public/github-profile.jpg";



export default function Navbar() {
  

  return (
   
    <div className="flex items-center space-x-2">
    <h1 className="text-2xl font-bold text-white"> Let's build something together</h1>
   
    </div>
   

);

  
}

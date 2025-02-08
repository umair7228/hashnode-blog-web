import { GithubIcon, Globe, Linkedin, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <header className="flex items-center justify-center py-4 border-b border-white/15 w-full">
        <nav className="w-[80%] max-w-screen-2xl flex items-center justify-between">
          {/* logo */}
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src={"/logo/logo.png"}
              alt="logo"
              width={50}
              height={50}
              className="w-10 h-10"
            />
            <h2 className="text-2xl font-semibold">UMAIR</h2>
          </Link>

          {/* nav links */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href={'https://www.linkedin.com/in/umairnawaz7228/'} target="_blank">
              <Button variant='secondary' className="bg-[#27272A] hover:bg-black text-white">
                <Linkedin /> Linkedin
              </Button>
            </Link>
            
            <Link href={'https://umair-portfolio-web.vercel.app/'} target="_blank">
              <Button variant='secondary' className="bg-[#27272A] hover:bg-black text-white">
                <Globe /> Portfolio
              </Button>
            </Link>

            <Link href={'https://github.com/umair7228'} target="_blank">
              <Button variant='secondary' className="bg-[#27272A] hover:bg-black text-white">
                <GithubIcon /> Github
              </Button>
            </Link>
          </div>







          <Sheet>
            <SheetTrigger className="block lg:hidden"><Menu /></SheetTrigger>
            <SheetContent  className="bg-black border border-white/30 shadow-lg">
              <SheetHeader>
                <SheetTitle className="border-b border-white/30 pb-3">
                <Link href={"/"} className="flex items-center space-x-2">
                  <Image
                    src={"/logo/logo.png"}
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-10 h-10"
                  />
                  <h2 className="text-2xl text-white font-semibold">UMAIR</h2>
                </Link>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 items-start justify-center">
                    <Link href={'https://www.linkedin.com/in/umairnawaz7228/'} target="_blank">
                      <Button variant='secondary' className="bg-[#27272A] hover:bg-black text-white">
                        <Linkedin /> Linkedin
                      </Button>
                    </Link>
                    
                    <Link href={'https://umair-portfolio-web.vercel.app/'} target="_blank">
                      <Button variant='secondary' className="bg-[#27272A] hover:bg-black text-white">
                        <Globe /> Portfolio
                      </Button>
                    </Link>

                    <Link href={'https://github.com/umair7228'} target="_blank">
                      <Button variant='secondary' className="bg-[#27272A] hover:bg-black text-white">
                        <GithubIcon /> Github
                      </Button>
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        </nav>
    </header>
  )
}

export default Header

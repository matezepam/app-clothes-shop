import { useEffect, useState } from "react"
import { Bird, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div className="group cursor-pointer">
          <Bird className="w-9 h-9 text-white transition-all duration-500 group-hover:text-blue-500 group-hover:scale-110" />
        </div>

        <nav className="hidden md:flex items-center gap-12 text-sm tracking-wide text-zinc-300">
          <a className="relative group cursor-pointer">
            Shop
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
          </a>

          <a className="relative group cursor-pointer">
            Colección
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
          </a>

          <a className="relative group cursor-pointer">
            Sobre Nosotros
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <User className="w-5 h-5 text-zinc-300 hover:text-blue-500 transition duration-300 cursor-pointer" />

          <Button className="hidden md:inline-flex bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-500 rounded-full px-6">
            Crear Cuenta
          </Button>
        </div>

      </div>
    </header>
  )
}

export default Navbar
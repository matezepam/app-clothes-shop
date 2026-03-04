import { useState } from "react"
import { Globe, CreditCard } from "lucide-react"

const Footer = () => {
  const [language, setLanguage] = useState<"EN" | "ES">("EN")
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD")

  return (
    <footer className="w-full bg-zinc-950 text-zinc-200 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            🦅
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Eagle Store: Futuristic fashion and lifestyle. Premium aesthetic with clean UX.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-zinc-300 uppercase text-sm">Categories</h3>
          <a className="hover:text-blue-400 transition cursor-pointer text-sm">Hombre</a>
          <a className="hover:text-blue-400 transition cursor-pointer text-sm">Mujer</a>
          <a className="hover:text-blue-400 transition cursor-pointer text-sm">Descuentos</a>
          <a className="hover:text-blue-400 transition cursor-pointer text-sm">Comparar Precios</a>
        </div>

        {/* Language + Currency */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-zinc-300 uppercase text-sm">Settings</h3>
          <div className="flex gap-4 items-center">
            <Globe className="w-5 h-5 text-zinc-300" />
            <select
              className="bg-zinc-900 text-zinc-200 px-2 py-1 rounded-md hover:bg-zinc-800 transition"
              value={language}
              onChange={(e) => setLanguage(e.target.value as "EN" | "ES")}
            >
              <option value="EN">English</option>
              <option value="ES">Español</option>
            </select>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <CreditCard className="w-5 h-5 text-zinc-300" />
            <select
              className="bg-zinc-900 text-zinc-200 px-2 py-1 rounded-md hover:bg-zinc-800 transition"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as "USD" | "EUR")}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        {/* Contact / Social */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-zinc-300 uppercase text-sm">Contact</h3>
          <a className="hover:text-blue-400 transition cursor-pointer text-sm">Support</a>
          <a className="hover:text-blue-400 transition cursor-pointer text-sm">FAQ</a>
          <a className="hover:text-blue-400 transition cursor-pointer text-sm">Privacy Policy</a>
          <a className="hover:text-blue-400 transition cursor-pointer text-sm">Terms of Service</a>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800 mt-6 py-4 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Eagle Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
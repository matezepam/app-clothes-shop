import { useState } from "react"
import { Globe, Phone, MessageCircle, MapPin, Truck, X, Instagram } from "lucide-react"

const Footer = () => {
  const [language, setLanguage] = useState<"ES" | "EN">("ES")
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD")

  return (
    <footer className="w-full bg-zinc-950 text-zinc-100 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-8 text-sm md:text-base">

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-zinc-300 uppercase">Categorías</h3>
          <a className="hover:text-blue-400 transition cursor-pointer">Hombre</a>
          <a className="hover:text-blue-400 transition cursor-pointer">Mujer</a>
          <a className="hover:text-blue-400 transition cursor-pointer">Descuentos</a>
          <a className="hover:text-blue-400 transition cursor-pointer">Comparar precios</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-zinc-300 uppercase">Información</h3>
          <a className="hover:text-blue-400 transition cursor-pointer">Pedidos a domicilio</a>
          <a className="hover:text-blue-400 transition cursor-pointer">Políticas de envío</a>
          <a className="hover:text-blue-400 transition cursor-pointer">Sobre Nosotros</a>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-400">Idioma / Moneda:</span>
            <div className="flex gap-2 mt-1">
              <select
                className="bg-zinc-900 text-zinc-200 px-2 py-1 rounded-md hover:bg-zinc-800 transition"
                value={language}
                onChange={(e) => setLanguage(e.target.value as "ES" | "EN")}
              >
                <option value="ES">Español</option>
                <option value="EN">English</option>
              </select>
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
        </div>

        <div className="flex flex-col gap-4 items-start md:items-end">
          <h3 className="font-semibold text-zinc-300 uppercase">Contacto</h3>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-400" />
            <span>+593 9 1234 5678</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span>WhatsApp: +593 9 8765 4321</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-zinc-300" />
            <span>Guayaquil, Ecuador</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-zinc-300" />
            <span>Envíos a domicilio disponibles</span>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition"><X className="w-5 h-5" /></a>
            <a href="#" className="hover:text-pink-400 transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:opacity-80 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.879v-6.99h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-zinc-800 mt-6 py-4 text-center text-zinc-400 text-sm md:text-base">
        © {new Date().getFullYear()} Eagle Store
      </div>
    </footer>
  )
}

export default Footer
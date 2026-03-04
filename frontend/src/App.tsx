import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 py-20">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Bienvenido a Eagle Store 🦅
          </h1>
          <p className="text-zinc-300 text-center max-w-xl">
            Tu tienda futurista de moda y estilo de vida. Explora colecciones, crea tu estilo con AI, y compra de manera segura.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
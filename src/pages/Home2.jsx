// =======================
// FILE: src/App.jsx
// =======================
import { motion } from "framer-motion";

function App() {
  return (
    <main className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex flex-col items-center px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-red-500/20 blur-[140px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center font-bold shadow-lg">
            C
          </div>
          <span className="font-semibold tracking-wide text-lg">UCSC CTF</span>
        </div>

        <a
          href="https://forms.gle/tuFormulario"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
        >
          Unirme
        </a>
      </nav>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-24 max-w-4xl"
      >
        <p className="text-red-400 text-sm mb-4">Próximamente 2026</p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          UCSC <span className="text-red-500">CYBERSEC</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          La primera unidad de ciberseguridad competitiva de la UCSC.
          Formación real, retos reales y competencia internacional.
        </p>

        <div className="mt-10">
          <a
            href="https://forms.gle/tuFormulario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            Quiero ser parte →
          </a>
        </div>
      </motion.section>

      {/* PROBLEMA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 max-w-4xl text-center"
      >
        <h2 className="text-3xl font-bold mb-6">El Problema</h2>
        <p className="text-gray-400">
          La UCSC no tiene presencia en ciberseguridad competitiva.
          No existen laboratorios, equipo CTF ni una ruta formativa sólida,
          dejando a los estudiantes fuera de una de las áreas más críticas del futuro.
        </p>
      </motion.section>

      {/* SOLUCION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-24 max-w-5xl"
      >
        <h2 className="text-3xl font-bold text-center mb-10">La Solución</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Laboratorio tipo HackTheBox",
            "Competencias CTF reales",
            "Formación en hacking ético y reversing"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-[#0f172a]/80 border border-gray-800 rounded-2xl backdrop-blur hover:border-red-500 transition">
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* IMPACTO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 max-w-5xl text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Impacto</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Académico", "Reputacional", "Económico", "Estratégico"].map((item, i) => (
            <div key={i} className="p-6 bg-[#0f172a] rounded-xl border border-gray-800">
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* ROADMAP */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 max-w-5xl"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Roadmap</h2>

        <div className="space-y-6">
          <div className="p-6 border border-gray-800 rounded-xl">Fase 1: MVP (0–4 meses)</div>
          <div className="p-6 border border-gray-800 rounded-xl">Fase 2: Expansión (9 meses)</div>
          <div className="p-6 border border-gray-800 rounded-xl">Fase 3: Consolidación (2 años)</div>
        </div>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 text-center max-w-3xl"
      >
        <h2 className="text-3xl font-bold mb-6">
          "Hoy la UCSC forma ingenieros.
          Mañana puede formar quienes protejan Chile."
        </h2>

        <a
          href="https://forms.gle/tuFormulario"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-110"
        >
          Unirme al proyecto
        </a>
      </motion.section>

      <footer className="mt-32 mb-10 text-gray-500 text-sm">
        © 2026 UCSC CyberSec
      </footer>
    </main>
  );
}

export default App;
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Trophy, Shield } from "lucide-react";

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01234567890ABCDEF{}[]<>/\\|";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(2, 3, 12, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columns = Math.floor(canvas.width / fontSize);
      while (drops.length < columns) drops.push(Math.random() * -100);

      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const progress = drops[i] / (canvas.height / fontSize);

        if (progress < 0.3) {
          ctx.fillStyle = `rgba(220, 38, 38, ${0.3 + progress})`;
        } else if (progress < 0.6) {
          ctx.fillStyle = `rgba(168, 85, 247, ${0.5})`;
        } else {
          ctx.fillStyle = `rgba(99, 102, 241, ${0.3})`;
        }

        if (drops[i] * fontSize > 0) {
          ctx.fillStyle = "#ffffff";
          ctx.font = `bold ${fontSize}px monospace`;
        } else {
          ctx.font = `${fontSize}px monospace`;
        }

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
    };

    const interval = setInterval(draw, 40);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.35 }}
    />
  );
}

export default function Home() {
  const marqueeItems = [
    { code: "REV", name: "Reverse Engineering" },
    { code: "PWN", name: "Binary Exploitation" },
    { code: "WEB", name: "Web Exploitation" },
    { code: "CRY", name: "Cryptography" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">

      {/* SECTION 1: Hero */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Matrix Rain background */}
        <div className="absolute inset-0 z-0 bg-[#02030c]">
          <MatrixRain />
        </div>

        {/* Blurred overlay behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-80 bg-gray-950 blur-[90px] pointer-events-none z-10 rounded-full" />

        {/* Navbar */}
        <header className="relative z-20 w-full">
          <div className="flex items-center justify-between py-5 px-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-bold flex items-center justify-center text-xl">
                C
              </div>
              <span className="font-semibold tracking-wide text-lg text-foreground">
                UCSC CTF
              </span>
            </div>
            <a
              href="https://forms.gle/tuFormulario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors"
              data-testid="button-nav-join"
            >
              Unirme
            </a>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent mt-[3px]" />
        </header>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-20 text-center px-4">
          <span className="text-red-400 text-sm font-medium mb-4 tracking-wider uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Próximamente 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="text-foreground">UCSC </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-red-500 via-purple-500 to-indigo-500">
              CYBERSEC
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
            La primera unidad de ciberseguridad competitiva de la UCSC. Formación real, retos reales y competencia internacional.
          </p>
          <a
            href="https://forms.gle/tuFormulario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-medium mt-10 transition-transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)]"
            data-testid="button-hero-cta"
          >
            Quiero ser parte &rarr;
          </a>
        </div>

        {/* Logo marquee */}
        <div className="relative z-20 pb-10 pt-16 flex items-center overflow-hidden border-t border-white/5 bg-background/50 backdrop-blur-sm mt-auto">
          <div className="px-8 whitespace-nowrap shrink-0 border-r border-white/10 mr-8">
            <span className="text-foreground/50 text-sm uppercase tracking-widest font-medium">
              Areas <br /> de ciberseguridad
            </span>
          </div>

          <div className="flex overflow-hidden relative w-full">
            <div className="flex gap-12 animate-marquee whitespace-nowrap items-center min-w-max">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <div key={i} className="liquid-glass rounded-lg px-4 py-2 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-xs font-bold text-white/80">
                    {item.code}
                  </div>
                  <span className="font-semibold text-white/90">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: El Problema */}
      <section className="mt-32 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">El Problema</h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            La UCSC no tiene presencia en ciberseguridad competitiva. No existen laboratorios, equipo CTF ni una ruta formativa sólida, dejando a los estudiantes fuera de una de las áreas más críticas del futuro.
          </p>
        </motion.div>
      </section>

      {/* SECTION 3: La Solución */}
      <section className="mt-32 max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          La Solución
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Laboratorio tipo HackTheBox",
              desc: "Entorno controlado y privado para practicar vulnerabilidades reales y escalar privilegios sin riesgos.",
              icon: <Terminal className="w-6 h-6 text-indigo-400" />
            },
            {
              title: "Competencias CTF Reales",
              desc: "Participación activa en eventos nacionales e internacionales representando a la universidad.",
              icon: <Trophy className="w-6 h-6 text-purple-400" />
            },
            {
              title: "Formación en Hacking Ético",
              desc: "Ruta de aprendizaje estructurada desde fundamentos hasta técnicas avanzadas de explotación.",
              icon: <Shield className="w-6 h-6 text-red-400" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="liquid-glass rounded-2xl p-8 border border-white/5 hover:border-red-500/50 transition-colors group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Impacto */}
      <section className="mt-32 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Impacto
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Académico", desc: "Creación de un estándar de excelencia técnica y práctica." },
            { title: "Reputacional", desc: "Posicionar a la UCSC como referente en ciberseguridad." },
            { title: "Económico", desc: "Mejores oportunidades laborales y becas para los miembros." },
            { title: "Estratégico", desc: "Alineación con la estrategia nacional de ciberdefensa." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="liquid-glass rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-2 text-white/90">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Roadmap */}
      <section className="mt-32 max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Roadmap
        </motion.h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {[
            { title: "Fase 1: MVP (0–4 meses)", desc: "Establecimiento del equipo core, infraestructura base y primera participación en CTF." },
            { title: "Fase 2: Expansión (9 meses)", desc: "Apertura a nuevos estudiantes, talleres internos y alianzas con otras universidades." },
            { title: "Fase 3: Consolidación (2 años)", desc: "Organización del primer CTF interuniversitario UCSC y reconocimiento oficial." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-red-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(220,38,38,0.4)] z-10">
                {i + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] liquid-glass border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CTA Final */}
      <section className="mt-40 mb-32 text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-10 italic leading-relaxed text-white/90">
            "Hoy la UCSC forma ingenieros. Mañana puede formar quienes protejan Chile."
          </h2>
          <a
            href="https://forms.gle/tuFormulario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-medium transition-transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)]"
            data-testid="button-footer-cta"
          >
            Unirme al proyecto
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 UCSC CyberSec. Proyecto no oficial de la universidad.
        </p>
      </footer>
    </div>
  );
}

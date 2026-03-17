/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Play, CheckCircle2, ShieldCheck, Zap, X, AlertTriangle, Ticket } from "lucide-react";

export default function App() {
  const checkoutUrl = "https://pay.lowify.com.br/checkout?product_id=ck9UQ8";
  const exitCheckoutUrl = "https://pay.lowify.com.br/go.php?offer=wkl7fqn";
  const movieTitle = "Ela viu o namorado ir buscar a ex… e tomou a decisão mais difícil da vida dela";
  const movieImage = "https://i.ytimg.com/vi/LK6-1cqxY1A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAA-hfE6ryBr3fLiDFUTarKYn_3fA";

  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left through the top of the window
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0502] text-white font-sans selection:bg-red-500/30">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-900/10 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-lg mx-auto px-4 py-8 md:py-12">
        {/* New Header (Matching Image) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="flex items-center gap-0.5 mb-4">
            <span className="text-2xl font-black tracking-tighter text-red-600">DRAMA</span>
            <span className="text-2xl font-black tracking-tighter text-white">FLIX</span>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-[#2a1d0a] border border-[#4a3515] flex items-center gap-2">
            <span className="text-sm">🔥</span>
            <span className="text-xs font-bold text-[#f5a623] uppercase tracking-wide">Em alta no Brasil</span>
          </div>
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-black leading-tight mb-4 tracking-tight">
            Ela viu o namorado ir buscar a ex… e tomou a decisão mais difícil da vida dela
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Descubra o segredo que mudou a vida dela para sempre. O drama que conquistou milhões, agora completo para você.
          </p>
        </motion.div>

        {/* Movie Poster/Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
        >
          <img 
            src={movieImage} 
            alt="Capa do Dorama" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Video Section */}
        <div className="mb-10">
          <p className="text-center text-zinc-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Assista a uma prévia
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-zinc-900"
          >
            {/* Using the custom video tag provided */}
            <div className="absolute inset-0 z-10">
              {/* @ts-ignore - custom element */}
              <lt-v2 
                v="56ba2b64-39d7-46a9-afe7-384d5c6084c7" 
                ar="9:16" 
                p="cc=600101&ph=8&pi=s&ps=x&st=0&sc=0&ap=1&lp=0&ib=ff0000&io=50&pc=ff0000"
              ></lt-v2>
            </div>
            
            <img 
              src={movieImage} 
              alt="Cena do Dorama" 
              className="w-full h-full object-cover opacity-50 grayscale-[0.3]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <p className="mt-4 text-center text-red-500 text-xs md:text-sm font-bold animate-pulse">
            ⚠️ Atenção: Esta oferta pode sair do ar a qualquer momento.
          </p>
        </div>

        {/* Pricing & Checkout Card (Matching the image) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 relative"
        >
          <div className="bg-[#1a222c] border border-white/5 rounded-2xl p-8 pt-10 overflow-hidden shadow-2xl">
            {/* 80% OFF Badge */}
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-tighter">
              90% OFF
            </div>

            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-red-600 rounded-full" />
              O que você vai receber:
            </h2>

            <ul className="space-y-4 mb-10">
              {[
                "Temporada Completa (Todos os episódios)",
                "Qualidade HD (Alta Definição)",
                "Acesso Vitalício e Imediato",
                "Sem mensalidades (Pagamento único)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-emerald-500/50 flex items-center justify-center bg-emerald-500/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center space-y-1 mb-8">
              <p className="text-zinc-500 text-sm line-through decoration-red-500/50">De R$ 49,90</p>
              <p className="text-5xl font-black tracking-tighter text-white">R$ 5,00</p>
              <p className="text-amber-400 text-xs font-medium uppercase tracking-widest">Oferta por tempo limitado</p>
            </div>

            <a 
              href={checkoutUrl}
              className="block w-full py-4 bg-red-700 hover:bg-red-600 text-white rounded-full font-black text-center text-lg transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(185,28,28,0.3)] uppercase"
            >
              COMPRAR AGORA - R$ 5,00
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex items-center justify-center gap-6 opacity-40 grayscale">
            <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold">
              <ShieldCheck className="w-3 h-3" /> Seguro
            </div>
            <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold">
              <Zap className="w-3 h-3" /> Imediato
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 space-y-8"
        >
          <h3 className="text-center text-xl font-bold uppercase tracking-widest text-zinc-400">
            Depoimentos de quem já assistiu
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                name: "Ana Clara",
                text: "Melhor dorama que já assisti! A história é emocionante e o final é surpreendente. Valeu cada centavo.",
                stars: 5
              },
              {
                name: "Mariana S.",
                text: "A qualidade da imagem é ótima e o acesso foi imediato. Recomendo muito para quem ama um bom drama.",
                stars: 5
              },
              {
                name: "Julia Lima",
                text: "Estava louca para ver esse dorama completo e finalmente achei. Por 5 reais não tem como não comprar!",
                stars: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm italic mb-4">"{testimonial.text}"</p>
                <p className="text-white text-xs font-bold uppercase tracking-wider">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

          {/* Social Proof / Urgency */}
          <div className="text-center pt-4">
            <p className="text-zinc-500 text-[11px] uppercase tracking-widest leading-relaxed">
              Mais de <span className="text-red-400 font-bold">1.430 pessoas</span> já adquiriram este título hoje.
            </p>
          </div>

        {/* Footer */}
        <footer className="mt-16 pb-8 text-center border-t border-white/5 pt-8">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © 2026 Dorama Flix • Todos os direitos reservados
          </p>
        </footer>
      </main>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#121212] border-2 border-red-600/50 rounded-[32px] p-8 text-center shadow-[0_0_50px_rgba(220,38,38,0.3)]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/30 border border-red-900/50 mb-8">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500">
                  ESPERE! NÃO VÁ AINDA
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl font-black text-white mb-6 tracking-tighter uppercase">
                ÚLTIMA CHANCE
              </h2>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Não queremos que você perca essa história incrível por causa do preço. Liberamos um desconto extra <span className="text-amber-400 font-bold">SOMENTE AGORA</span>.
              </p>

              {/* Price Box */}
              <div className="bg-zinc-900/50 rounded-3xl p-8 mb-8 border border-white/5">
                <p className="text-zinc-500 text-sm line-through mb-1">De R$ 5,00</p>
                <p className="text-6xl font-black text-red-600 tracking-tighter mb-2">
                  R$ 2,99
                </p>
                <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  PREÇO DE UMA COCA-COLA!
                </p>
              </div>

              {/* CTA Button */}
              <a 
                href={exitCheckoutUrl}
                className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-white rounded-full font-black text-lg transition-all active:scale-[0.98] shadow-xl mb-6 uppercase"
              >
                <Ticket className="w-5 h-5" />
                QUERO PAGAR SÓ R$ 2,99
              </a>

              {/* Dismiss Link */}
              <button 
                onClick={() => setShowExitPopup(false)}
                className="text-zinc-500 text-xs underline underline-offset-4 hover:text-zinc-300 transition-colors"
              >
                Não, prefiro pagar o preço normal
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

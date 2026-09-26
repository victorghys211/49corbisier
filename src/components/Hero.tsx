import { motion } from "motion/react";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/images/scout-logo.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 md:px-12 bg-scout-green overflow-hidden">
      {/* 
        Full-screen wide mountain & forest panorama:
        - Wide-angle panoramic landscape taken from a distance ("meer van verder")
        - Majestic mountains in the background with a vast pine forest valley lower down
        - Dominant deep dark green tones, calm and non-flashy outdoor scout atmosphere
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img 
          src="/mountain-forest-bg.jpg" 
          alt="Panorama montagneux et forêt de pins - Scouts 49 Corbisier" 
          className="w-full h-full object-cover object-[center_32%] scale-100 opacity-60 brightness-[0.72] contrast-110 saturate-90 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Deep scout dark-green overlay - ensures dark green is the dominant color everywhere without being flashy */}
        <div className="absolute inset-0 bg-scout-green/50 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-[#06170d]/30 pointer-events-none" />

        {/* Soft edge blends into the top navbar and subsequent section */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-scout-green via-scout-green/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-scout-green via-scout-green/80 to-transparent" />

        {/* Soft scrim behind headline to maintain high legibility while the mountain & forest panorama stretches across */}
        <div className="absolute inset-0 bg-gradient-to-r from-scout-green/65 via-scout-green/30 to-transparent lg:w-3/5" />

        {/* Subtle ambient tartan glow (navy blue + crimson red) */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-scout-red/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-scout-blue/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Heading, Slogan, CTAs & 2 Key Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Small Top Badge with Tartan Red + Gold Trim */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-scout-red/60 border border-scout-yellow/35 text-scout-yellow text-xs font-bold uppercase tracking-widest shadow-md">
              <Compass size={14} className="text-scout-yellow" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline:
                "L'aventure" in yellow, italic, not underlined
                "commence ici" in white underneath in a powerful display font
            */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="leading-[1.08] tracking-tight">
                <span className="block text-4xl sm:text-6xl md:text-7xl font-serif italic text-scout-yellow font-normal drop-shadow-md">
                  {t('hero.titlePart1')}
                </span>
                <span className="block text-3xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-wider drop-shadow-md">
                  {t('hero.titlePart2')}
                </span>
                <span className="sr-only"> – 49 Corbisier • 49 scouts à Wilrijk</span>
              </h1>
            </div>

            {/* Slogan */}
            <p className="text-lg sm:text-2xl font-serif italic text-scout-yellow/95 leading-snug drop-shadow-sm">
              « {t('hero.slogan')} »
            </p>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-cream/85 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow-sm">
              {t('hero.subtitle')}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a href="#sections" className="btn-accent text-xs sm:text-sm px-7 py-3.5 shadow-xl">
                <span>{t('hero.cta')}</span>
                <ArrowRight size={16} />
              </a>
              
              <a href="#inscriptions" className="btn-outline text-xs sm:text-sm px-7 py-3.5">
                <Sparkles size={15} />
                <span>{t('hero.ctaInscriptions')}</span>
              </a>
            </div>

            {/* 3 Clean Social Links: Facebook Unité, Instagram Unité, Instagram Troupe */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <a
                href="https://www.facebook.com/49corbisier/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Unité"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-scout-yellow/40 text-cream/80 hover:text-white transition-all text-xs font-medium backdrop-blur-sm shadow-sm group"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook Unité</span>
              </a>

              <a
                href="https://www.instagram.com/49corbisier/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Unité"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-scout-yellow/40 text-cream/80 hover:text-white transition-all text-xs font-medium backdrop-blur-sm shadow-sm group"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#E1306C] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram Unité</span>
              </a>

              <a
                href="https://www.instagram.com/troupe_49/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Troupe"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-scout-yellow/40 text-cream/80 hover:text-white transition-all text-xs font-medium backdrop-blur-sm shadow-sm group"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#F77737] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram Troupe</span>
              </a>
            </div>

            {/* 2 Clean Stats: 15+ Chefs motivés • 1937 Presque 90 ans */}
            <div className="pt-6 border-t border-scout-yellow/20 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10">
              <div className="space-y-0.5 text-center lg:text-left">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-scout-yellow block">
                  {t('hero.stats.membersVal')}
                </span>
                <p className="text-xs uppercase font-bold tracking-wider text-cream/85">
                  {t('hero.stats.members')}
                </p>
              </div>

              <div className="h-12 w-px bg-scout-yellow/20 hidden sm:block" />

              <div className="space-y-0.5 text-center lg:text-left">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-scout-yellow block">
                  {t('hero.stats.historyVal')}
                </span>
                <p className="text-xs uppercase font-bold tracking-wider text-cream/85">
                  {t('hero.stats.history')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Scout Logo large, completely clean without frame or text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex items-center justify-center pt-4 lg:pt-0"
          >
            <div className="relative group">
              <img 
                src={logoImg} 
                alt="49 Corbisier Scout Logo" 
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

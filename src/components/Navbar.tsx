import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('49_lang', lng);
    }
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'nl', label: 'Nederlands', short: 'NL' },
    { code: 'en', label: 'English', short: 'EN' },
  ];

  const currentLang = languages.find(l => i18n.language?.startsWith(l.code)) || languages[0];

  // Close dropdowns on outside click or resize
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsLangOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: t('nav.about') },
    { href: "#sections", label: t('nav.sections') },
    { href: "#local", label: t('nav.local') },
    { href: "#photos", label: t('nav.photos') },
    { href: "#extras", label: t('nav.extras') },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <nav id="main-nav" className="fixed top-0 left-0 right-0 z-50 bg-scout-green/95 backdrop-blur-md border-b border-scout-yellow/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 h-20 md:h-22 flex items-center justify-between gap-4">
        {/* Brand with authentic Logo - strictly prevented from line-breaking or splitting */}
        <a href="#" className="flex items-center gap-3 md:gap-3.5 group shrink-0 select-none whitespace-nowrap">
          <Logo size={50} className="transition-transform group-hover:scale-105 shrink-0" />
          <div className="flex flex-col shrink-0">
            <span className="text-xl sm:text-2xl font-display font-bold text-scout-yellow group-hover:text-scout-yellow-light transition-colors leading-none tracking-wider whitespace-nowrap">
              49 Corbisier
            </span>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.18em] text-cream/70 pt-1 uppercase flex items-center gap-1.5 whitespace-nowrap">
              <span className="whitespace-nowrap">Wilrijk</span>
              <span className="w-1 h-1 rounded-full bg-scout-yellow shrink-0" />
              <span className="text-scout-yellow whitespace-nowrap">{t('nav.since')}</span>
            </span>
          </div>
        </a>

        {/* Desktop Menu - balanced spacing without socials, sleek language dropdown */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-7 shrink-0">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-[11px] 2xl:text-xs font-bold tracking-wider uppercase text-cream/90 hover:text-scout-yellow transition-colors relative py-1 px-1 whitespace-nowrap group shrink-0"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scout-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Sleek Desktop Language Chooser (Logo + FR default / active, revealing NL & EN on interaction) */}
          <div 
            ref={langRef} 
            className="relative shrink-0 ml-1"
            onMouseEnter={() => setIsLangOpen(true)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLangOpen((prev) => !prev)}
              aria-label="Changer de langue / Taal kiezen"
              aria-expanded={isLangOpen}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-scout-yellow/40 text-cream/90 hover:text-white transition-all text-xs cursor-pointer select-none group"
            >
              <Globe size={14} className="text-scout-yellow shrink-0 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-bold tracking-wider text-[11px] uppercase text-cream/90 group-hover:text-scout-yellow transition-colors">
                {currentLang.short}
              </span>
              <ChevronDown 
                size={12} 
                className={`text-cream/50 transition-transform duration-200 ${isLangOpen ? 'rotate-180 text-scout-yellow' : 'group-hover:text-cream/90'}`} 
              />
            </button>

            {/* Dropdown Menu on hover or click */}
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1.5 w-36 py-1 bg-[#0b2416]/98 backdrop-blur-xl border border-scout-yellow/30 rounded-xl shadow-2xl z-50 overflow-hidden"
                >
                  {languages.map((lng) => {
                    const isActive = currentLang.code === lng.code;
                    return (
                      <button
                        key={lng.code}
                        type="button"
                        onClick={() => {
                          changeLanguage(lng.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer text-left ${
                          isActive
                            ? 'bg-scout-yellow/15 text-scout-yellow font-bold'
                            : 'text-cream/80 hover:text-white hover:bg-white/5 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded tracking-wider ${
                            isActive ? 'bg-scout-yellow text-scout-green font-extrabold' : 'bg-white/10 text-cream/70'
                          }`}>
                            {lng.short}
                          </span>
                          <span>{lng.label}</span>
                        </div>
                        {isActive && <Check size={13} className="text-scout-yellow shrink-0" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tablet & Mobile: Hamburger Button */}
        <div className="flex xl:hidden items-center">
          <button 
            type="button"
            id="mobile-menu-toggle" 
            className="p-2 rounded-xl text-scout-yellow border border-scout-yellow/30 hover:bg-white/10 active:scale-95 transition-all cursor-pointer relative z-50 focus:outline-none focus:ring-2 focus:ring-scout-yellow/50" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-dropdown"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-scout-green border-t border-scout-yellow/20 px-6 py-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-base font-semibold text-cream hover:text-scout-yellow transition-colors border-b border-white/5 pb-2.5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Language Switcher */}
            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-cream/70">
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-scout-yellow shrink-0" />
              </div>
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                {(['fr', 'nl', 'en'] as const).map((lng) => {
                  const isActive = i18n.language?.startsWith(lng);
                  return (
                    <button
                      key={lng}
                      type="button"
                      onClick={() => {
                        changeLanguage(lng);
                        setIsOpen(false);
                      }}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase transition-all cursor-pointer ${
                        isActive
                          ? 'bg-scout-yellow text-scout-green font-extrabold shadow-sm'
                          : 'text-cream/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {lng}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

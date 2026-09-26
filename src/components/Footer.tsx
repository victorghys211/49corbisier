import { Shield, ArrowUp, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('49_lang', lng);
    }
    i18n.changeLanguage(lng);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-scout-blue via-scout-blue to-[#071324] border-t-2 border-scout-yellow/30 text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1: Identity & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={46} />
              <div>
                <h3 className="text-xl font-display font-bold text-scout-yellow">
                  49 Corbisier
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cream/70">
                  Wilrijk • Est. 1937
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-serif italic">
              « {t('footer.slogan')} »
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scout-green-card border border-scout-yellow/20 text-[10px] font-bold uppercase tracking-wider text-scout-yellow">
              <Shield size={12} className="text-scout-yellow" />
              <span>15+ Chefs motivés • Wilrijk</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-scout-yellow border-b border-scout-yellow/20 pb-2">
              Sections & Activités
            </h4>
            <ul className="space-y-2 text-xs text-cream/80 font-normal">
              <li><a href="#about" className="hover:text-scout-yellow transition-colors">Qui sommes-nous (depuis 1937)</a></li>
              <li><a href="#sections" className="hover:text-scout-yellow transition-colors">La Meute (5-11 ans / Louveteaux)</a></li>
              <li><a href="#sections" className="hover:text-scout-yellow transition-colors">La Troupe (12-17 ans / Scouts)</a></li>
              <li><a href="#sections" className="hover:text-scout-yellow transition-colors">La Jeune Équipe (18 ans / Aventuriers)</a></li>
              <li><a href="#sections" className="hover:text-scout-yellow transition-colors">Le Cadre d'Unité (Logistique & Gestion)</a></li>
              <li><a href="#local" className="hover:text-scout-yellow transition-colors">Notre Local & Terrains</a></li>
            </ul>
          </div>

          {/* Col 3: Extras & Raccourcis */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-scout-yellow border-b border-scout-yellow/20 pb-2">
              Vie de l'Unité & Détente
            </h4>
            <ul className="space-y-2 text-xs text-cream/80 font-normal">
              <li><a href="#extras" className="hover:text-scout-yellow transition-colors">Le Coin des Anciens</a></li>
              <li><a href="#extras" className="hover:text-scout-yellow transition-colors">49 Nonante (Projet 90 ans)</a></li>
              <li><a href="#extras" className="hover:text-scout-yellow transition-colors">Vidéoclip du Grand Camp</a></li>
              <li><a href="#extras" className="hover:text-scout-yellow transition-colors">Article Mystère de la Boutique</a></li>
              <li><a href="#extras" className="hover:text-scout-yellow transition-colors">Jeu du Mois (Mots Croisés)</a></li>
              <li><a href="#photos" className="hover:text-scout-yellow transition-colors">Moments de Vie (Galerie Photos)</a></li>
            </ul>
          </div>

          {/* Col 4: Inscriptions & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-scout-yellow border-b border-scout-yellow/20 pb-2">
              Rendez-vous & Inscription
            </h4>
            <p className="text-xs text-cream/80 leading-relaxed font-normal">
              <strong className="text-scout-yellow">Local Scout :</strong><br />
              Varenlaan 9, 2610 Wilrijk (Antwerpen)<br />
              Réunions : Selon le calendrier des sections
            </p>
            <div className="pt-2">
              <a href="#inscriptions" className="btn-tartan-red text-xs w-full py-2.5 text-center shadow-lg shadow-scout-red/25 border border-scout-yellow/30 hover:border-scout-yellow">
                {t('hero.ctaInscriptions')}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Natural Multilingual Scout Notes (FR/NL/EN) */}
        <div className="mt-14 pt-8 border-t border-scout-yellow/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/70">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} 49 Corbisier • {t('footer.subline')}
            </p>
            <span className="hidden sm:inline text-cream/40">•</span>
            {/* Discreet language switcher in footer */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-cream/60">
              <Globe size={13} className="text-scout-yellow/80 shrink-0" />
              {(['fr', 'nl', 'en'] as const).map((lng, idx) => {
                const isActive = i18n.language?.startsWith(lng);
                return (
                  <span key={lng} className="flex items-center gap-2">
                    <button 
                      type="button"
                      onClick={() => changeLanguage(lng)} 
                      className={`hover:text-scout-yellow transition-colors cursor-pointer uppercase ${
                        isActive ? 'text-scout-yellow font-bold underline underline-offset-2' : ''
                      }`}
                    >
                      {lng}
                    </button>
                    {idx < 2 && <span className="text-white/20">|</span>}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Incredibly subtle easter egg: tiny feather with calopsitte strictly on the same line */}
            <span 
              className="inline-flex items-center gap-[5px] text-[10px] text-cream/30 font-mono tracking-wider select-none hover:text-cream/50 transition-colors whitespace-nowrap shrink-0"
              style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
              title="Calopsitte"
            >
              <span>🪶</span>
              <span>calopsitte</span>
            </span>

            <button 
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-scout-green-card border border-scout-yellow/30 flex items-center justify-center text-scout-yellow hover:bg-scout-yellow hover:text-scout-blue transition-colors cursor-pointer shrink-0"
              aria-label="Retourner en haut de page"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

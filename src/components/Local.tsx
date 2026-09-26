import { motion } from "motion/react";
import { MapPin, ShoppingBag, Beer, HeartHandshake, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import localImg from "../assets/images/local-varenlaan.png";

export default function Local() {
  const { t } = useTranslation();

  return (
    <section id="local" className="py-10 md:py-24 bg-scout-green relative px-4 sm:px-6 md:px-12 border-t border-scout-yellow/15">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-scout-blue/70 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('local.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-scout-yellow">
            {t('local.title')}
          </h2>

          <p className="text-base sm:text-lg text-cream/90 font-normal leading-relaxed">
            {t('local.desc')}
          </p>
        </div>

        {/* 2-Column Section: 4 Stacked Cards (Left) + Townhouse Photo (Right) */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: 4 Clean, Stacked Information Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 justify-between">
            
            {/* Block 1: Adresse */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-scout p-4.5 sm:p-5 space-y-2 bg-scout-green-card border-2 border-scout-yellow/25 hover:border-scout-yellow/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-scout-blue border border-scout-yellow/30 flex items-center justify-center text-scout-yellow shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-scout-yellow text-lg sm:text-xl">
                      {t('local.addressTitle')}
                    </h3>
                    <span className="font-mono text-xs sm:text-sm text-cream/90 font-bold tracking-wide">
                      {t('local.addressStreet')}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-scout-blue/80 border border-scout-yellow/30 text-xs font-semibold text-scout-yellow">
                  Park Den Brandt (5 min)
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-cream/85 leading-relaxed font-normal pt-0.5">
                {t('local.addressDesc')}
              </p>
            </motion.div>

            {/* Block 2: Le Magasin Scout */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="card-scout p-4.5 sm:p-5 space-y-2 bg-scout-green-card border-2 border-scout-yellow/25 hover:border-scout-yellow/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-scout-red border border-scout-yellow/30 flex items-center justify-center text-scout-yellow shrink-0 shadow-sm">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-scout-yellow text-lg sm:text-xl">
                      {t('local.storeTitle')}
                    </h3>
                    <p className="text-xs text-cream/70">{t('local.storeSubtitle')}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-scout-red/80 border border-scout-yellow/30 text-xs font-semibold text-scout-yellow">
                  Foulard & insignes
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-cream/85 leading-relaxed font-normal pt-0.5">
                {t('local.storeDesc')}
              </p>
            </motion.div>

            {/* Block 3: Bar 49 */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-scout p-4.5 sm:p-5 space-y-2 bg-scout-green-card border-2 border-scout-yellow/25 hover:border-scout-yellow/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-scout-blue border border-scout-yellow/30 flex items-center justify-center text-scout-yellow shrink-0 shadow-sm">
                    <Beer size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-scout-yellow text-lg sm:text-xl">
                      {t('local.barTitle')}
                    </h3>
                    <p className="text-xs text-scout-yellow/90 font-medium">{t('local.barSubtitle')}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-scout-yellow/20 border border-scout-yellow/30 text-xs font-semibold text-scout-yellow">
                  Convivialité & soirées
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-cream/85 leading-relaxed font-normal pt-0.5">
                {t('local.barDesc')}
              </p>
            </motion.div>

            {/* Block 4: Coup de Main */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="card-scout p-4.5 sm:p-5 space-y-2 bg-scout-green-card border-2 border-scout-yellow/30 hover:border-scout-yellow/60 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-scout-blue border border-scout-yellow/30 flex items-center justify-center text-scout-yellow shrink-0 shadow-sm">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-scout-yellow text-lg sm:text-xl">
                      {t('local.handymanTitle')}
                    </h3>
                    <p className="text-xs text-scout-yellow font-semibold">{t('local.handymanSubtitle')}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-cream/90 leading-relaxed font-normal pt-0.5">
                {t('local.handymanDesc')}
              </p>
            </motion.div>

          </div>

          {/* Right Column: Authentic Photo of Townhouse Local at Varenlaan 9 */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex"
          >
            <div className="relative w-full h-full min-h-[420px] sm:min-h-[480px] rounded-3xl overflow-hidden border-2 border-scout-yellow/30 bg-scout-green-card shadow-2xl group flex flex-col justify-end">
              <img 
                src={localImg} 
                alt="Notre local scout à Varenlaan 9, Wilrijk" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-scout-green/95 via-scout-green/30 to-transparent opacity-90" />
              
              <div className="relative z-10 m-4 sm:m-6 p-4 rounded-2xl bg-scout-blue/90 border border-scout-yellow/35 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-scout-yellow">
                  <MapPin size={14} className="text-scout-yellow shrink-0" />
                  <span>Notre Repère • Varenlaan 9</span>
                </div>
                <p className="text-xs text-cream/90 mt-1 font-sans leading-relaxed">
                  Notre maison de maître à Wilrijk, à deux pas du Parc Den Brandt pour nos activités scoutes.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Part: Google Maps Horizontal & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto card-scout p-4 sm:p-6 space-y-4 bg-scout-green-card border-2 border-scout-yellow/25 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h3 className="font-display font-bold text-scout-yellow text-xl">
                {t('local.mapTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-cream/80 font-mono">
                {t('local.addressStreet')} (Anvers)
              </p>
            </div>

            <a 
              href="https://maps.google.com/?q=Varenlaan+9+2610+Wilrijk"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-accent text-xs py-2 px-5 whitespace-nowrap"
            >
              <span>{t('local.openMapsBtn')}</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="relative w-full h-[280px] sm:h-[350px] rounded-2xl overflow-hidden border border-scout-yellow/20 shadow-inner">
            <iframe
              title="Google Maps 49 Corbisier"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Varenlaan%209%2C%202610%20Wilrijk&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full filter contrast-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

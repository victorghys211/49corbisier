import { motion, AnimatePresence } from "motion/react";
import { Compass, TreePine, ShieldCheck, Heart, Users, BookOpen, X, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function About() {
  const { t } = useTranslation();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const values = [
    {
      icon: <TreePine className="w-6 h-6 text-scout-yellow" />,
      title: t('about.values.adventure'),
      desc: t('about.values.adventureDesc'),
    },
    {
      icon: <Heart className="w-6 h-6 text-scout-yellow" />,
      title: t('about.values.friendship'),
      desc: t('about.values.friendshipDesc'),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-scout-yellow" />,
      title: t('about.values.spirit'),
      desc: t('about.values.spiritDesc'),
    },
    {
      icon: <Users className="w-6 h-6 text-scout-yellow" />,
      title: t('about.values.family'),
      desc: t('about.values.familyDesc'),
    }
  ];

  return (
    <section id="about" className="py-10 md:py-24 bg-scout-green relative px-4 sm:px-6 md:px-12 border-t border-scout-yellow/15">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-scout-blue/70 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('about.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-scout-yellow">
            {t('about.title')}
          </h2>

          <p className="text-base sm:text-lg text-cream/90 leading-relaxed font-normal">
            {t('about.content')}
          </p>

          {/* Clean History Button */}
          <div className="pt-2">
            <button
              onClick={() => setIsHistoryOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-scout-blue/80 border border-scout-yellow/40 text-scout-yellow hover:bg-scout-yellow hover:text-scout-blue transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer"
            >
              <BookOpen size={15} />
              <span>{t('about.historyBtn')}</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Full-width Scout Photo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border-2 border-scout-yellow/30 bg-scout-green-card shadow-2xl group"
        >
          <img 
            src="/main.jpg" 
            alt="Scouts 49 Corbisier" 
            className="w-full h-[340px] sm:h-[460px] md:h-[520px] object-cover group-hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* 4 Core Principles in Full Screen Grid - Balanced Tartan Red & Navy Blue Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-scout p-6 space-y-3 bg-scout-green-card border-2 border-scout-yellow/25 hover:border-scout-yellow/60 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-2xl ${idx % 2 === 0 ? 'bg-scout-red border-scout-yellow/30' : 'bg-scout-blue border-scout-yellow/30'} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                {val.icon}
              </div>
              <h3 className="font-display font-bold text-scout-yellow text-lg">
                {val.title}
              </h3>
              <p className="text-cream/80 text-xs sm:text-sm leading-relaxed font-normal">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* History Modal */}
      <AnimatePresence>
        {isHistoryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-scout-green border-2 border-scout-yellow/40 rounded-3xl p-6 sm:p-10 text-cream space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-scout-blue text-scout-yellow hover:bg-scout-yellow hover:text-scout-blue transition-colors cursor-pointer"
                aria-label="Fermer la fenêtre d'histoire"
              >
                <X size={20} />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-scout-yellow">
                  Archives & Tradition • Wilrijk
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-scout-yellow">
                  {t('about.historyModalTitle')}
                </h3>
              </div>

              <div className="space-y-4 text-cream/90 text-sm sm:text-base leading-relaxed font-normal border-t border-scout-yellow/20 pt-4">
                <p>{t('about.historyModalP1')}</p>
                <div className="pt-1">
                  <h4 className="font-display font-bold text-scout-yellow text-base sm:text-lg pb-1">
                    {t('about.historyModalSubtitle')}
                  </h4>
                  <p>{t('about.historyModalP2')}</p>
                </div>
                {t('about.historyModalP2b') ? (
                  <p>{t('about.historyModalP2b')}</p>
                ) : null}
                <p className="p-4 rounded-xl bg-scout-blue/60 border border-scout-yellow/30 text-scout-yellow font-semibold text-sm sm:text-base">
                  {t('about.historyModalP3')}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsHistoryOpen(false)}
                  className="btn-accent text-xs"
                >
                  {t('about.closeBtn')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

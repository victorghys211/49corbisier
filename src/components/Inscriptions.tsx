import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { UserPlus, CheckCircle2, ShieldCheck, ExternalLink, Calendar, Sparkles } from "lucide-react";

export default function Inscriptions() {
  const { t, i18n } = useTranslation();

  const stepsData = (t('inscriptions.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>) || [];
  const certLabel = i18n.language?.startsWith('nl')
    ? 'Erkende chefs' 
    : i18n.language?.startsWith('en')
      ? 'Certified chefs' 
      : 'Encadrement certifié';

  return (
    <section id="inscriptions" className="py-10 md:py-28 bg-scout-green relative px-4 sm:px-6 md:px-12 border-t border-scout-yellow/15">
      <div className="max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-scout-blue/70 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest">
            <UserPlus className="w-3.5 h-3.5 text-scout-yellow" />
            <span>{t('inscriptions.badge')}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-scout-yellow">
            {t('inscriptions.title')}
          </h2>
          
          <p className="text-base sm:text-lg text-cream/90 font-normal leading-relaxed">
            {t('inscriptions.subtitle')}
          </p>
        </div>

        {/* 3 Registration Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stepsData.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="card-scout p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-display font-black text-scout-yellow">
                    {`0${idx + 1}`}
                  </span>
                  <div className={`w-8 h-8 rounded-full ${idx === 1 ? 'bg-scout-red' : 'bg-scout-blue'} flex items-center justify-center text-scout-yellow border border-scout-yellow/20`}>
                    <CheckCircle2 size={16} />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-scout-yellow">
                  {step.title}
                </h3>

                <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-semibold text-scout-yellow/80 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-scout-yellow" />
                <span>{certLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Free Trial / Discovery Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4 sm:p-5 rounded-2xl bg-scout-blue/70 border border-scout-yellow/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left shadow-xl"
        >
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-scout-yellow/15 border border-scout-yellow/30 flex items-center justify-center text-scout-yellow shrink-0 mt-0.5 sm:mt-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-display font-bold text-scout-yellow">
                {t('inscriptions.trialTitle')}
              </h4>
              <p className="text-xs sm:text-sm text-cream/90 leading-relaxed max-w-3xl mt-0.5">
                {t('inscriptions.trialDesc')}
              </p>
            </div>
          </div>
          <a
            href="#sections"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-scout-yellow text-scout-green font-bold text-xs whitespace-nowrap hover:bg-white transition-colors shrink-0 shadow"
          >
            <span>{t('inscriptions.viewSectionsChefs')}</span>
          </a>
        </motion.div>

        {/* Official Google Forms Action Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border-2 border-scout-yellow/30 shadow-2xl bg-scout-green-card"
        >
          {/* Card Header Bar */}
          <div className="p-4 sm:p-6 bg-scout-blue border-b border-scout-yellow/20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-scout-yellow">
              <Calendar size={18} className="text-scout-yellow shrink-0" />
              <span>{t('inscriptions.formTitle')} • Saison 2026-2027</span>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-scout-yellow/80 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
              Google Forms
            </span>
          </div>

          {/* Action & Explanation Area */}
          <div className="p-6 sm:p-10 text-center max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-scout-blue/80 border-2 border-scout-yellow/30 flex items-center justify-center text-scout-yellow mx-auto shadow-inner">
              <UserPlus size={36} className="text-scout-yellow" />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {t('inscriptions.formTitle')}
              </h3>
              <p className="text-sm sm:text-base text-cream/90 leading-relaxed font-normal">
                {t('inscriptions.formExplanation')}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSc6sb_HkHdVuiW91tawavQe3JLBVjVR2nJxv78OEJltSMosLw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-sm sm:text-base py-3.5 px-8 flex items-center justify-center gap-2.5 cursor-pointer shadow-xl w-full sm:w-auto font-bold uppercase tracking-wider"
              >
                <span>{t('inscriptions.formActionBtn')}</span>
                <ExternalLink size={18} />
              </a>
            </div>

            <p className="text-xs text-cream/60 font-mono pt-2">
              🔒 {t('inscriptions.formNotice')}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

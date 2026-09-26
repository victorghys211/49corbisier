import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, CheckCircle2, MessageSquare, ExternalLink, HelpCircle, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Contact() {
  const { t } = useTranslation();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const faqQuestions = [
    {
      q: t('faq.items.0.q'),
      a: t('faq.items.0.a'),
    },
    {
      q: t('faq.items.1.q'),
      a: t('faq.items.1.a'),
    },
    {
      q: t('faq.items.2.q'),
      a: t('faq.items.2.a'),
    },
    {
      q: t('faq.items.3.q'),
      a: t('faq.items.3.a'),
    },
  ];

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  // Required exact order:
  // 1. Insta Unite (@49corbisier)
  // 2. Insta Troupe (@troupe_49)
  // 3. Facebook (49 Corbisier)
  // 4. TikTok (@4nege)
  // In vibrant, large badge shape with rich colors!
  const socialsList = [
    {
      id: "instagram-unite",
      name: "Instagram Unité",
      handle: "@49corbisier",
      url: "https://www.instagram.com/49corbisier/",
      color: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      badgeBg: "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500",
      borderGlow: "border-pink-500/60 shadow-pink-900/30",
      icon: (
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: "instagram-troupe",
      name: "Instagram Troupe",
      handle: "@troupe_49",
      url: "https://www.instagram.com/troupe_49/",
      color: "from-[#f09433] via-[#e6683c] to-[#dc2743]",
      badgeBg: "bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600",
      borderGlow: "border-orange-500/60 shadow-orange-900/30",
      icon: (
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: "facebook",
      name: "Facebook",
      handle: "49 Corbisier",
      url: "https://www.facebook.com/49corbisier/",
      color: "from-[#1877f2] to-[#0d56b3]",
      badgeBg: "bg-gradient-to-r from-blue-600 to-indigo-700",
      borderGlow: "border-blue-400/60 shadow-blue-900/30",
      icon: (
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      id: "tiktok",
      name: "TikTok",
      handle: "@4nege",
      url: "https://www.tiktok.com/@4nege",
      color: "from-zinc-900 via-neutral-900 to-black",
      badgeBg: "bg-gradient-to-r from-slate-900 via-zinc-900 to-neutral-950",
      borderGlow: "border-cyan-400/50 shadow-cyan-900/30",
      icon: (
        <svg className="w-9 h-9 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.42c0 1.9-.4 3.79-1.39 5.34-1.12 1.77-2.9 3.07-4.94 3.63-1.62.45-3.37.34-4.95-.29-1.89-.75-3.46-2.18-4.39-3.99-1.01-1.94-1.22-4.27-.61-6.39.63-2.17 2.1-4.04 4.09-5.11 1.61-.87 3.49-1.2 5.31-.96v4.14c-1.08-.25-2.26-.06-3.18.52-.94.59-1.57 1.6-1.74 2.69-.21 1.25.26 2.57 1.21 3.39.91.79 2.21 1.05 3.38.68.96-.3 1.74-1.03 2.08-1.97.16-.48.24-.98.24-1.49V.02h.07z"/>
        </svg>
      )
    }
  ];

  // Unit emails: Meute -> Troupe -> Cadre
  const unitEmails = [
    {
      key: "meute",
      name: t('socialsAndContact.units.meute'),
      email: "49corbisier.loups@gmail.com",
      desc: t('socialsAndContact.unitDescs.meute', "Inscriptions, activités & vie de la Meute")
    },
    {
      key: "troupe",
      name: t('socialsAndContact.units.troupe'),
      email: "49corbisier.scouts@gmail.com",
      desc: t('socialsAndContact.unitDescs.troupe', "Inscriptions, patrouilles & camp des Scouts")
    },
    {
      key: "cadre",
      name: t('socialsAndContact.units.cadre'),
      email: "49corbisier.unite@gmail.com",
      desc: t('socialsAndContact.unitDescs.cadre', "Finances, attestations fiscales & administration")
    }
  ];

  return (
    <section id="contact" className="py-10 md:py-28 bg-scout-green relative px-4 sm:px-6 md:px-12 border-t border-scout-yellow/15">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
        
        {/* ============================================================== */}
        {/* 1. SOCIALS SECTION: Large vibrant colorful badges             */}
        {/* Order: Insta Unite, Insta Troupe, FB, TikTok                 */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-scout-blue/80 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest">
              <MessageSquare className="w-3.5 h-3.5 text-scout-yellow" />
              <span>Réseaux & Communauté</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-scout-yellow">
              {t('socialsAndContact.socialsTitle')}
            </h2>
            
            <p className="text-cream/90 text-sm sm:text-base font-normal">
              {t('socialsAndContact.socialsSubtitle')}
            </p>
          </div>

          {/* Socials Grid: Large, colorful, vibrant badge format */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {socialsList.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center space-y-4 transition-all duration-300 transform hover:-translate-y-1.5 shadow-2xl border-2 ${social.borderGlow} ${social.badgeBg} group overflow-hidden`}
              >
                {/* Visual badge top pill */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/30">
                  {social.icon}
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-black text-white text-lg sm:text-xl drop-shadow">
                    {social.name}
                  </h4>
                  <span className="text-white/90 text-xs sm:text-sm font-mono block bg-black/30 px-3 py-1 rounded-full border border-white/20">
                    {social.handle}
                  </span>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white group-hover:underline">
                  <span>Rejoindre</span>
                  <ExternalLink size={13} />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* NEW FAQ SECTION: Under Nos Réseaux Sociaux & above Mail Contact */}
        {/* ============================================================== */}
        <motion.div
          id="faq-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-scout-yellow/20 space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-scout-blue/80 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-scout-yellow" />
              <span>{t('faq.badge')}</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-scout-yellow">
              {t('faq.title')}
            </h3>

            <p className="text-cream/80 text-sm sm:text-base font-normal">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqQuestions.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx + 1}`}
                  className="rounded-2xl border border-scout-yellow/25 bg-scout-green-card/90 overflow-hidden shadow-lg transition-all duration-300 hover:border-scout-yellow/50"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer select-none group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx + 1}`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="shrink-0 w-7 h-7 rounded-lg bg-scout-blue/70 border border-scout-yellow/30 text-scout-yellow text-xs font-mono font-bold flex items-center justify-center">
                        Q{idx + 1}
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base text-cream group-hover:text-scout-yellow transition-colors leading-snug">
                        {item.q}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-scout-yellow shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx + 1}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-cream/85 font-normal leading-relaxed border-t border-scout-yellow/10">
                          <p>{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 2. CONTACT PAR MAIL: Requested title "Contactez-nous par mail" */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-scout-yellow/20 space-y-10"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-scout-blue/80 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest">
              <Mail className="w-3.5 h-3.5 text-scout-yellow" />
              <span>Contact Officiel</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-scout-yellow">
              {t('socialsAndContact.contactTitle')}
            </h3>

            <p className="text-cream/80 text-sm sm:text-base font-normal">
              {t('socialsAndContact.contactNotice')}
            </p>
          </div>

          {/* 3 Unit Emails Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {unitEmails.map((item, idx) => (
              <div 
                key={item.key}
                className="card-scout p-6 flex flex-col justify-between space-y-4 bg-scout-green-card border-scout-yellow/30 shadow-xl"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl ${idx === 1 ? 'bg-scout-red' : 'bg-scout-blue'} flex items-center justify-center text-scout-yellow border border-scout-yellow/30`}>
                    <Mail size={18} />
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-scout-yellow text-base">
                      {item.name}
                    </h4>
                    <p className="text-cream/70 text-xs mt-1 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-scout-yellow/20 space-y-2">
                  <a 
                    href={`mailto:${item.email}`}
                    className="text-xs font-mono text-scout-yellow hover:text-white break-all block transition-colors font-semibold"
                  >
                    {item.email}
                  </a>

                  <button 
                    onClick={() => copyToClipboard(item.email)}
                    className="w-full py-2.5 px-3 rounded-xl bg-scout-blue/80 hover:bg-scout-yellow hover:text-scout-blue transition-all text-[11px] font-bold uppercase tracking-wider text-cream flex items-center justify-center gap-1.5 cursor-pointer border border-scout-yellow/20"
                  >
                    {copiedEmail === item.email ? (
                      <>
                        <CheckCircle2 size={13} className="text-green-400" />
                        <span>Adresse copiée !</span>
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>Copier l'adresse e-mail</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Site note: Conçu avec amour par vos chefs (avec IA) */}
          <div className="max-w-2xl mx-auto pt-4 text-center px-4">
            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-normal">
              {t('socialsAndContact.aiDisclaimer', "Ce site a été conçu avec amour par vos chefs (avec un petit coup de pouce de l'Intelligence Artificielle). Il se peut qu'une petite erreur se soit glissée par-ci par-là. Si vous remarquez un bug, ou si vous avez des idées géniales pour améliorer le site, n'hésitez pas à nous contacter ! Merci et bonne visite.")}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

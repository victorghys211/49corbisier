import { motion, AnimatePresence } from "motion/react";
import { useState, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { 
  Users, 
  ChevronRight, 
  X, 
  FileText, 
  Shirt, 
  ShoppingBag,
  Phone,
  MessageCircle,
  Shield,
  Sparkles,
  Maximize2,
  ExternalLink,
  Download
} from "lucide-react";

const meuteImg = "/meute.jpg";
const troupeImg = "/troupe.jpeg";
const jeImg = "/jeune-equipe.JPG";
const cadreImg = "/cadre.jpg";

interface Chef {
  totem: string;
  name: string;
  role?: string;
  phone?: string;
  avatar: string;
}

interface SectionData {
  id: "meute" | "troupe" | "jeuneEquipe" | "cadre";
  name: string;
  tagline: string;
  age: string;
  descKey: string;
  image: string;
  uniformImage?: string;
  docName?: string;
  chefs?: Chef[];
}

export default function Branches() {
  const { t } = useTranslation();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);

  // Fallback avatars until custom chef portraits are uploaded to /public/chefs/
  const DEFAULT_AVATARS: Record<string, string> = {
    "Akela": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    "King Louie": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    "Baloo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    "Bagheera": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
    "Kaa": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    "MASTER": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    "KINKAJOU": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    "CALOPSITTE": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    "JACALA": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    "JACARA": "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=200&q=80",
    "KOALA": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    "Cheveche": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    "Ocelot": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    "Loutre": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    "Wallabi": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80"
  };

  const handleChefAvatarError = (e: SyntheticEvent<HTMLImageElement>, chefTotem: string) => {
    const target = e.currentTarget;
    const slug = chefTotem.toLowerCase().replace(/\s+/g, '-');
    const fallback = DEFAULT_AVATARS[chefTotem] || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80";

    // If /chefs/slug.jpg failed, try /slug.jpg, then fallback
    if (target.src.includes(`/chefs/${slug}`)) {
      target.src = `/${slug}.jpg`;
    } else if (target.src !== fallback) {
      target.src = fallback;
    }
  };

  // 1. MEUTE CHEFS:
  // Akela: Chef de Meute
  // Autres chefs: Chef
  const meuteChefs: Chef[] = [
    {
      totem: "Akela",
      name: "Jean Van Durme",
      role: "Chef de Meute",
      phone: "+32 494 55 04 49",
      avatar: "/chefs/akela.jpg"
    },
    {
      totem: "King Louie",
      name: "Gilles Van Durme",
      role: "Chef",
      phone: "+32 479 16 28 00",
      avatar: "/chefs/king-louie.jpg"
    },
    {
      totem: "Baloo",
      name: "Andreas De Witte",
      role: "Chef",
      phone: "+32 468 59 78 96",
      avatar: "/chefs/baloo.jpg"
    },
    {
      totem: "Bagheera",
      name: "Jack Van Dingenen",
      role: "Chef",
      phone: "+32 476 17 82 01",
      avatar: "/chefs/bagheera.jpg"
    },
    {
      totem: "Kaa",
      name: "Charles Sironval",
      role: "Chef",
      phone: "+32 467 03 71 45",
      avatar: "/chefs/kaa.jpg"
    }
  ];

  // 2. TROUPE CHEFS:
  // MASTER: Chef de Troupe
  // Autres chefs: Chef
  const troupeChefs: Chef[] = [
    {
      totem: "MASTER",
      name: "Antoine Mangay",
      role: "Chef de Troupe",
      phone: "+32 470 34 45 88",
      avatar: "/chefs/master.jpg"
    },
    {
      totem: "KINKAJOU",
      name: "Pierre Vanderhofstadt",
      role: "Chef",
      phone: "+32 470 75 52 03",
      avatar: "/chefs/kinkajou.jpg"
    },
    {
      totem: "CALOPSITTE",
      name: "Victor Ghys",
      role: "Chef",
      phone: "+32 493 46 86 34",
      avatar: "/chefs/calopsitte.jpg"
    },
    {
      totem: "JACALA",
      name: "Thibeaud Depeser",
      role: "Chef",
      phone: "+32 491 87 16 82",
      avatar: "/chefs/jacala.jpg"
    },
    {
      totem: "JACARA",
      name: "Kristian Demesmaeker",
      role: "Chef",
      phone: "+32 467 04 70 91",
      avatar: "/chefs/jacara.jpg"
    },
    {
      totem: "KOALA",
      name: "Arthur Nellens",
      role: "Chef",
      phone: "+31 6 15856575",
      avatar: "/chefs/koala.jpg"
    }
  ];

  // 3. STAFF D'UNITE (CADRE):
  // CU: Cheveche: Mathieu Kransfeld
  // ACU: Ocelot: Nicolas Janssens de Varebeke
  // ACU: Loutre: Julien Roefs
  // Responsable TOK: Wallabi: Victor Nellens
  const cadreStaff: Chef[] = [
    {
      totem: "Cheveche",
      name: "Mathieu Kransfeld",
      role: "CU (Chef d'Unité)",
      phone: "+32 479 22 81 61",
      avatar: "/chefs/cheveche.jpg"
    },
    {
      totem: "Ocelot",
      name: "Nicolas Janssens de Varebeke",
      role: "ACU (Assistant Chef d'Unité)",
      phone: "+32 495 40 54 28",
      avatar: "/chefs/ocelot.jpg"
    },
    {
      totem: "Loutre",
      name: "Julien Roefs",
      role: "ACU (Assistant Chef d'Unité)",
      phone: "+32 460 95 36 40",
      avatar: "/chefs/loutre.jpg"
    },
    {
      totem: "Wallabi",
      name: "Victor Nellens",
      role: "Responsable TOK",
      phone: "+32 471 93 64 44",
      avatar: "/chefs/wallabi.jpg"
    }
  ];

  const sections: SectionData[] = [
    {
      id: "meute",
      name: "MEUTE",
      tagline: "Les Louveteaux",
      age: "5 – 11 ans",
      descKey: "sections.meute.desc",
      image: meuteImg,
      uniformImage: "/Uniforme_Louvetaux.jpeg",
      docName: "Programme_Meute_Sem1.pdf",
      chefs: meuteChefs
    },
    {
      id: "troupe",
      name: "TROUPE",
      tagline: "Les Scouts",
      age: "12 – 17 ans",
      descKey: "sections.troupe.desc",
      image: troupeImg,
      uniformImage: "/Uniforme_Scout.jpeg",
      docName: "Programme_Troupe_Sem1.pdf",
      chefs: troupeChefs
    },
    {
      id: "jeuneEquipe",
      name: "JEUNE EQUIPE",
      tagline: "Les Aventuriers",
      age: "18 ans",
      descKey: "sections.jeuneEquipe.desc",
      image: jeImg
    },
    {
      id: "cadre",
      name: "CADRE D'UNITÉ",
      tagline: "Staff d'Unité & Logistique",
      age: "Coordination",
      descKey: "sections.cadre.desc",
      image: cadreImg,
      chefs: cadreStaff
    }
  ];

  const activeSection = sections.find(s => s.id === selectedSection);

  const handleOpenPdf = (docName: string) => {
    window.open(`/${docName}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="sections" className="py-20 md:py-28 bg-scout-green relative px-4 sm:px-6 md:px-12 border-t border-scout-yellow/15">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header: Nos Sections */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-scout-blue/70 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>{t('sections.title')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-scout-yellow">
            {t('sections.title')}
          </h2>

          <p className="text-base sm:text-lg text-cream/90 font-normal leading-relaxed">
            {t('sections.subtitle')}
          </p>
        </div>

        {/* ============================================================== */}
        {/* LAYOUT:                                                        */}
        {/* Row 1: MEUTE (large) & TROUPE (large) + JEUNE EQUIPE (beside)  */}
        {/* Row 2: CADRE horizontally underneath                           */}
        {/* ============================================================== */}
        <div className="space-y-6">
          
          {/* Top Row: Meute (large), Troupe (large), and Jeune Equipe (3rd branch) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {/* 1. MEUTE (Large Primary Branch: 5 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedSection("meute")}
              className="lg:col-span-5 card-scout flex flex-col justify-between overflow-hidden group hover:border-scout-yellow transition-all duration-300 p-0 shadow-2xl cursor-pointer"
            >
              <div className="relative h-72 sm:h-80 lg:h-[340px] overflow-hidden bg-scout-blue">
                <img 
                  src={meuteImg} 
                  alt="Meute 49 Corbisier" 
                  className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scout-green/85 via-scout-green/20 to-transparent" />
                
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-scout-red/90 border border-scout-yellow/40 text-xs font-bold tracking-wider text-scout-yellow shadow-md">
                  5 – 11 ans
                </span>

                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-scout-yellow block drop-shadow">
                    Les Louveteaux
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white drop-shadow-md">
                    MEUTE
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-cream/85 text-xs sm:text-sm leading-relaxed font-normal">
                  {t('sections.meute.desc')}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSection("meute");
                  }}
                  className="w-full btn-accent text-xs py-3 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{t('sections.discoverBtn')}</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </motion.div>

            {/* 2. TROUPE (Large Primary Branch: 5 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedSection("troupe")}
              className="lg:col-span-5 card-scout flex flex-col justify-between overflow-hidden group hover:border-scout-yellow transition-all duration-300 p-0 shadow-2xl cursor-pointer"
            >
              <div className="relative h-72 sm:h-80 lg:h-[340px] overflow-hidden bg-scout-blue">
                <img 
                  src={troupeImg} 
                  alt="Troupe 49 Corbisier" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scout-green via-scout-green/30 to-transparent opacity-95" />
                
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-scout-blue/90 border border-scout-yellow/40 text-xs font-bold tracking-wider text-scout-yellow shadow-md">
                  12 – 17 ans
                </span>

                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-scout-yellow block">
                    Les Scouts
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white">
                    TROUPE
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-cream/85 text-xs sm:text-sm leading-relaxed font-normal">
                  {t('sections.troupe.desc')}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSection("troupe");
                  }}
                  className="w-full btn-accent text-xs py-3 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{t('sections.discoverBtn')}</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </motion.div>

            {/* 3. JEUNE EQUIPE (3rd Branch alongside: 2 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => setSelectedSection("jeuneEquipe")}
              className="lg:col-span-2 card-scout flex flex-col justify-between overflow-hidden group hover:border-scout-yellow transition-all duration-300 p-0 shadow-2xl cursor-pointer bg-scout-green-card"
            >
              <div className="relative h-44 lg:h-48 overflow-hidden bg-scout-blue">
                <img 
                  src={jeImg} 
                  alt="Jeune Équipe 49 Corbisier" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scout-green via-scout-green/40 to-transparent opacity-95" />
                
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-scout-yellow text-scout-blue text-[10px] font-black tracking-wider shadow">
                  18 ans
                </span>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-scout-yellow block">
                    Les Aventuriers
                  </span>
                  <h3 className="text-lg lg:text-xl font-display font-black text-white leading-tight">
                    JEUNE ÉQUIPE
                  </h3>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-cream/80 text-xs leading-relaxed font-normal">
                  {t('sections.jeuneEquipe.desc')}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSection("jeuneEquipe");
                  }}
                  className="w-full btn-accent text-[11px] py-2.5 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>{t('sections.discoverBtn')}</span>
                  <ChevronRight size={13} />
                </button>
              </div>
            </motion.div>

          </div>

          {/* Row 2: CADRE horizontally underneath (spanning full width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelectedSection("cadre")}
            className="w-full card-scout p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-scout-yellow transition-all duration-300 shadow-2xl cursor-pointer bg-gradient-to-r from-scout-blue/50 via-scout-red/25 to-scout-blue/50 border-2 border-scout-yellow/30"
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-scout-yellow/40 shrink-0 shadow-lg bg-scout-blue">
                <img 
                  src={cadreImg} 
                  alt="Cadre 49 Corbisier" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-scout-yellow/20 border border-scout-yellow/30 text-[10px] font-bold uppercase tracking-wider text-scout-yellow">
                  <Shield size={12} />
                  <span>Coordination & Logistique</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                  CADRE D'UNITÉ
                </h3>

                <p className="text-xs sm:text-sm text-cream/80 max-w-2xl font-normal leading-relaxed">
                  {t('sections.cadre.desc')}
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSection("cadre");
              }}
              className="btn-accent text-xs py-3 px-6 shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Découvrir le Staff d'Unité</span>
              <ChevronRight size={15} />
            </button>
          </motion.div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* SECTION DETAIL MODALS (Tailored strictly per branch)            */}
      {/* ============================================================== */}
      <AnimatePresence>
        {activeSection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-scout-green border-2 border-scout-yellow/40 rounded-3xl p-6 sm:p-8 text-cream space-y-6 max-h-[92vh] overflow-y-auto shadow-2xl"
            >
              <button 
                onClick={() => setSelectedSection(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-scout-blue text-scout-yellow hover:bg-scout-yellow hover:text-scout-blue transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              {/* ==================== 1. MODAL FOR MEUTE ==================== */}
              {activeSection.id === "meute" && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 border-b border-scout-yellow/20 pb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-scout-yellow/30 shrink-0">
                      <img src={meuteImg} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-scout-yellow block">
                        Les Louveteaux • 5 – 11 ans
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                        MEUTE
                      </h3>
                    </div>
                  </div>

                  {/* Intro */}
                  <p className="text-cream/90 text-sm sm:text-base leading-relaxed font-normal">
                    {t('sections.meute.intro')}
                  </p>

                  <p className="text-scout-yellow text-sm sm:text-base font-medium">
                    {t('sections.meute.theme')}
                  </p>

                  {/* Programme Document Open */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-scout-green-card border-2 border-scout-yellow/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-scout-blue flex items-center justify-center text-scout-yellow border border-scout-yellow/30 shrink-0">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-scout-yellow text-sm sm:text-base">
                          {t('sections.programmeDocBtn')}
                        </h4>
                        <p className="text-xs text-cream/70 font-mono">
                          {activeSection.docName || "Programme_Meute_Sem1.pdf"}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenPdf(activeSection.docName || "Programme_Meute_Sem1.pdf")}
                      className="btn-accent text-xs py-2.5 px-5 flex items-center gap-2 cursor-pointer shrink-0"
                    >
                      <ExternalLink size={15} />
                      <span>Ouvrir (PDF)</span>
                    </button>
                  </div>

                  {/* Le Staff */}
                  <div className="space-y-4 pt-2 border-t border-scout-yellow/20">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-scout-yellow flex items-center gap-2">
                      <Users size={16} />
                      <span>Le Staff</span>
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {meuteChefs.map((chef, idx) => (
                        <div 
                          key={idx}
                          className="p-3.5 rounded-2xl bg-scout-blue/40 border border-scout-yellow/20 text-center flex flex-col items-center justify-between space-y-2 shadow-sm"
                        >
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-scout-yellow/50 shadow-md">
                            <img 
                              src={chef.avatar} 
                              alt={chef.totem} 
                              onError={(e) => handleChefAvatarError(e, chef.totem)}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="space-y-0.5">
                            {/* Ligne 1: Nom de jungle */}
                            <div className="font-display font-bold text-scout-yellow text-xs sm:text-sm">
                              {chef.totem}
                            </div>
                            {/* Ligne 2: Rôle (Chef de Meute / Chef) */}
                            {chef.role && (
                              <div className="text-[11px] text-scout-yellow/90 font-semibold">
                                {chef.role}
                              </div>
                            )}
                            {/* Ligne 3: Nom réel */}
                            <div className="text-xs text-cream/90 font-medium">
                              {chef.name}
                            </div>
                            <div className="text-[10px] text-cream/60 font-mono pt-1">
                              {chef.phone}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Uniforme & Vente */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-scout-yellow/20">
                    
                    {/* Uniforme Louveteaux */}
                    <div className="p-4 rounded-2xl bg-scout-blue/30 border border-scout-yellow/20 space-y-3 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shirt size={16} className="text-scout-yellow" />
                            <h5 className="font-display font-bold text-scout-yellow text-sm">
                              Uniforme officiel
                            </h5>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-scout-red/80 border border-scout-yellow/30 text-[10px] font-bold text-scout-yellow uppercase tracking-wider">
                            Uniforme impeccable
                          </span>
                        </div>

                        {/* Image Uniforme Louveteaux with Click to Enlarge */}
                        <div 
                          onClick={() => setExpandedImage({
                            src: "/Uniforme_Louvetaux.jpeg",
                            title: "Uniforme Officiel — Meute (Louveteaux 5-11 ans)"
                          })}
                          className="relative h-52 sm:h-60 rounded-xl overflow-hidden border border-scout-yellow/30 bg-scout-blue/60 group cursor-pointer"
                        >
                          <img 
                            src="/Uniforme_Louvetaux.jpeg" 
                            alt="Uniforme officiel Louveteaux 49 Corbisier" 
                            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-scout-yellow font-bold text-xs bg-gradient-to-t from-black/70 via-transparent to-transparent">
                            <Maximize2 size={16} />
                            <span>Cliquer pour agrandir</span>
                          </div>
                        </div>

                        <p className="text-xs text-cream/90 leading-relaxed font-normal">
                          {t('sections.meute.uniforme')}
                        </p>
                      </div>
                    </div>

                    {/* Vente de l'Unité */}
                    <div className="p-4 rounded-2xl bg-scout-blue/30 border border-scout-yellow/20 space-y-3 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShoppingBag size={16} className="text-scout-yellow" />
                            <h5 className="font-display font-bold text-scout-yellow text-sm">
                              Vente de l'Unité
                            </h5>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-scout-yellow/20 border border-scout-yellow/30 text-[10px] font-bold text-scout-yellow uppercase tracking-wider">
                            Financement camps
                          </span>
                        </div>

                        {/* Image Vente (non-zoomable) */}
                        <div className="relative h-52 sm:h-60 rounded-xl overflow-hidden border border-scout-yellow/30 bg-scout-blue/60">
                          <img 
                            src="/Vente.jpeg" 
                            alt="Vente de l'unité 49 Corbisier" 
                            className="w-full h-full object-contain p-2"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <p className="text-xs text-cream/90 leading-relaxed font-normal">
                          {t('sections.meute.vente')}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Carnet Technique Meute */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-scout-green-card border-2 border-scout-yellow/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-scout-blue flex items-center justify-center text-scout-yellow border border-scout-yellow/30 shrink-0">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-scout-yellow text-sm sm:text-base">
                          🏕️ Carnet Technique de la Meute
                        </h4>
                        <p className="text-xs text-cream/70 font-mono">
                          Carnet_Technique_Meute.pdf
                        </p>
                      </div>
                    </div>

                    <a
                      href="/Carnet_Technique_Meute.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent text-xs py-2.5 px-5 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      <ExternalLink size={15} />
                      <span>Ouvrir (PDF)</span>
                    </a>
                  </div>
                </div>
              )}

              {/* ==================== 2. MODAL FOR TROUPE ==================== */}
              {activeSection.id === "troupe" && (
                <div className="space-y-6">
                  {/* Header: Above TROUPE, put Les Scouts */}
                  <div className="flex items-center gap-4 border-b border-scout-yellow/20 pb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-scout-yellow/30 shrink-0">
                      <img src={troupeImg} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-scout-yellow block">
                        Les Scouts • 12 – 17 ans
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                        TROUPE
                      </h3>
                    </div>
                  </div>

                  {/* Intro */}
                  <p className="text-cream/90 text-sm sm:text-base leading-relaxed font-normal">
                    {t('sections.troupe.intro')}
                  </p>

                  <p className="text-scout-yellow text-sm sm:text-base font-medium">
                    {t('sections.troupe.theme')}
                  </p>

                  {/* Programme Document Open */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-scout-green-card border-2 border-scout-yellow/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-scout-blue flex items-center justify-center text-scout-yellow border border-scout-yellow/30 shrink-0">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-scout-yellow text-sm sm:text-base">
                          {t('sections.programmeDocBtn')}
                        </h4>
                        <p className="text-xs text-cream/70 font-mono">
                          {activeSection.docName || "Programme_Troupe_Sem1.pdf"}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenPdf(activeSection.docName || "Programme_Troupe_Sem1.pdf")}
                      className="btn-accent text-xs py-2.5 px-5 flex items-center gap-2 cursor-pointer shrink-0"
                    >
                      <ExternalLink size={15} />
                      <span>Ouvrir (PDF)</span>
                    </button>
                  </div>

                  {/* Staff (without numbers in parentheses) */}
                  <div className="space-y-4 pt-2 border-t border-scout-yellow/20">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-scout-yellow flex items-center gap-2">
                      <Users size={16} />
                      <span>Staff</span>
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {troupeChefs.map((chef, idx) => (
                        <div 
                          key={idx}
                          className="p-3.5 rounded-2xl bg-scout-blue/40 border border-scout-yellow/20 text-center flex flex-col items-center justify-between space-y-2 shadow-sm"
                        >
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-scout-yellow/50 shadow-md">
                            <img 
                              src={chef.avatar} 
                              alt={chef.totem} 
                              onError={(e) => handleChefAvatarError(e, chef.totem)}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="space-y-0.5">
                            {/* Ligne 1: Totem */}
                            <div className="font-display font-bold text-scout-yellow text-xs sm:text-sm">
                              {chef.totem}
                            </div>
                            {/* Ligne 2: Rôle (Chef de Troupe / Chef) */}
                            {chef.role && (
                              <div className="text-[11px] text-scout-yellow/90 font-semibold">
                                {chef.role}
                              </div>
                            )}
                            {/* Ligne 3: Nom réel */}
                            <div className="text-xs text-cream/90 font-medium">
                              {chef.name}
                            </div>
                            <div className="text-[10px] text-cream/60 font-mono pt-1">
                              {chef.phone}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Uniforme & Vente */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-scout-yellow/20">
                    
                    {/* Uniforme Scouts */}
                    <div className="p-4 rounded-2xl bg-scout-blue/30 border border-scout-yellow/20 space-y-3 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shirt size={16} className="text-scout-yellow" />
                            <h5 className="font-display font-bold text-scout-yellow text-sm">
                              Uniforme officiel
                            </h5>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-scout-red/80 border border-scout-yellow/30 text-[10px] font-bold text-scout-yellow uppercase tracking-wider">
                            Uniforme impeccable
                          </span>
                        </div>

                        {/* Image Uniforme Scouts with Click to Enlarge */}
                        <div 
                          onClick={() => setExpandedImage({
                            src: "/Uniforme_Scout.jpeg",
                            title: "Uniforme Officiel — Troupe (Scouts 12-17 ans)"
                          })}
                          className="relative h-52 sm:h-60 rounded-xl overflow-hidden border border-scout-yellow/30 bg-scout-blue/60 group cursor-pointer"
                        >
                          <img 
                            src="/Uniforme_Scout.jpeg" 
                            alt="Uniforme officiel Scouts 49 Corbisier" 
                            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-scout-yellow font-bold text-xs bg-gradient-to-t from-black/70 via-transparent to-transparent">
                            <Maximize2 size={16} />
                            <span>Cliquer pour agrandir</span>
                          </div>
                        </div>

                        <p className="text-xs text-cream/90 leading-relaxed font-normal">
                          {t('sections.troupe.uniforme')}
                        </p>
                      </div>
                    </div>

                    {/* Vente de l'Unité */}
                    <div className="p-4 rounded-2xl bg-scout-blue/30 border border-scout-yellow/20 space-y-3 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShoppingBag size={16} className="text-scout-yellow" />
                            <h5 className="font-display font-bold text-scout-yellow text-sm">
                              Vente de l'Unité
                            </h5>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-scout-yellow/20 border border-scout-yellow/30 text-[10px] font-bold text-scout-yellow uppercase tracking-wider">
                            Financement camps
                          </span>
                        </div>

                        {/* Image Vente (non-zoomable) */}
                        <div className="relative h-52 sm:h-60 rounded-xl overflow-hidden border border-scout-yellow/30 bg-scout-blue/60">
                          <img 
                            src="/Vente.jpeg" 
                            alt="Vente de l'unité 49 Corbisier" 
                            className="w-full h-full object-contain p-2"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <p className="text-xs text-cream/90 leading-relaxed font-normal">
                          {t('sections.troupe.vente')}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Carnet Technique Troupe */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-scout-green-card border-2 border-scout-yellow/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-scout-blue flex items-center justify-center text-scout-yellow border border-scout-yellow/30 shrink-0">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-scout-yellow text-sm sm:text-base">
                          🏕️ Carnet Technique de la Troupe
                        </h4>
                        <p className="text-xs text-cream/70 font-mono">
                          Carnet_Technique_Troupe.pdf
                        </p>
                      </div>
                    </div>

                    <a
                      href="/Carnet_Technique_Troupe.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent text-xs py-2.5 px-5 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      <ExternalLink size={15} />
                      <span>Ouvrir (PDF)</span>
                    </a>
                  </div>
                </div>
              )}

              {/* ==================== 3. MODAL FOR JEUNE EQUIPE ==================== */}
              {/* No programme, no staff, no uniforme, no vente, no inscrire */}
              {activeSection.id === "jeuneEquipe" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-scout-yellow/20 pb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-scout-yellow/30 shrink-0">
                      <img src={jeImg} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-scout-yellow block">
                        18 ans • Les Aventuriers
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                        JEUNE ÉQUIPE
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-scout-blue/40 border-2 border-scout-yellow/30 space-y-4">
                    <div className="flex items-center gap-2 text-scout-yellow">
                      <Sparkles size={18} />
                      <h4 className="font-display font-bold text-base sm:text-lg">
                        Saison 2026-2027 & Coups de main
                      </h4>
                    </div>

                    <p className="text-sm sm:text-base text-cream/90 leading-relaxed font-normal">
                      {t('sections.jeuneEquipe.intro')}
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <a 
                        href="https://wa.me/32493468634"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-accent text-xs py-3 px-5 w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      >
                        <MessageCircle size={15} />
                        <span>Message WhatsApp</span>
                      </a>

                      <a 
                        href="tel:+32493468634"
                        className="btn-outline text-xs py-3 px-5 w-full sm:w-auto flex items-center justify-center gap-2 border-scout-yellow/40 text-scout-yellow hover:bg-scout-yellow/10 cursor-pointer"
                      >
                        <Phone size={15} />
                        <span className="font-mono font-medium">+32 493 46 86 34</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== 4. MODAL FOR CADRE ==================== */}
              {/* No programme, no calendar, no uniforme, no vente, no inscrire */}
              {activeSection.id === "cadre" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-scout-yellow/20 pb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-scout-yellow/30 shrink-0">
                      <img src={cadreImg} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-scout-yellow block">
                        Coordination générale & Logistique
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                        CADRE D'UNITÉ
                      </h3>
                    </div>
                  </div>

                  <p className="text-cream/90 text-sm sm:text-base leading-relaxed font-normal">
                    {t('sections.cadre.intro')}
                  </p>

                  {/* STAFF D'UNITE */}
                  <div className="space-y-4 pt-2 border-t border-scout-yellow/20">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-scout-yellow flex items-center gap-2">
                      <Shield size={16} />
                      <span>STAFF D'UNITÉ</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cadreStaff.map((chef, idx) => (
                        <div 
                          key={idx}
                          className="p-4 rounded-2xl bg-scout-blue/40 border border-scout-yellow/20 flex items-center gap-4 shadow-sm"
                        >
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-scout-yellow/50 shadow-md shrink-0">
                            <img 
                              src={chef.avatar} 
                              alt={chef.totem} 
                              onError={(e) => handleChefAvatarError(e, chef.totem)}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="space-y-0.5">
                            <div className="text-xs uppercase font-bold tracking-wider text-scout-yellow">
                              {chef.role}
                            </div>
                            <div className="font-display font-bold text-white text-sm sm:text-base">
                              {chef.totem} : <span className="font-sans font-normal text-cream/90 text-xs sm:text-sm">{chef.name}</span>
                            </div>
                            <div className="text-[10px] text-cream/60 font-mono">
                              {chef.phone}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Footer: Clean Close button */}
              <div className="pt-4 flex justify-end items-center border-t border-scout-yellow/20">
                <button 
                  onClick={() => setSelectedSection(null)}
                  className="btn-accent text-xs py-2.5 px-6 cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox / Zoom Modal for Uniforms & Vente */}
      <AnimatePresence>
        {expandedImage && (
          <div 
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] bg-scout-green border-2 border-scout-yellow/60 rounded-2xl overflow-hidden p-4 sm:p-6 flex flex-col items-center justify-between shadow-2xl cursor-default"
            >
              <button 
                onClick={() => setExpandedImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-scout-blue text-scout-yellow hover:bg-scout-yellow hover:text-scout-blue transition-colors cursor-pointer z-10 shadow-lg"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              <div className="w-full text-center pb-3 border-b border-scout-yellow/20 pr-10">
                <h4 className="font-display font-black text-scout-yellow text-lg sm:text-xl">
                  {expandedImage.title}
                </h4>
              </div>

              <div className="flex-1 w-full max-h-[72vh] flex items-center justify-center p-2 overflow-auto my-3 bg-scout-blue/40 rounded-xl border border-scout-yellow/20">
                <img 
                  src={expandedImage.src} 
                  alt={expandedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full pt-3 border-t border-scout-yellow/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/80">
                <span className="flex items-center gap-1.5 text-scout-yellow font-semibold">
                  <Shirt size={15} />
                  <span>49ème Corbisier • Tenue impeccable</span>
                </span>
                <button
                  onClick={() => setExpandedImage(null)}
                  className="btn-accent text-xs py-2 px-6 cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

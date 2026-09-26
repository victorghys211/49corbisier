import { motion } from "motion/react";
import { 
  Camera, 
  Upload, 
  CheckCircle2, 
  Image as ImageIcon, 
  Sparkles, 
  Key, 
  Lock, 
  Unlock, 
  ExternalLink, 
  Mail, 
  ShieldCheck, 
  AlertCircle,
  FolderLock,
  Info
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, ChangeEvent, FormEvent } from "react";

import photo1 from "../assets/images/1_jeux.jpg";
import photo2 from "../assets/images/2_feu.jpg";
import photo3 from "../assets/images/3_gen2lads.jpeg";
import photo4 from "../assets/images/4_voyage.jpg";
import photo5 from "../assets/images/5_parc.jpg";
import photo6 from "../assets/images/6_staff.png";

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  section: string;
  position?: string;
}

// Only official scout unit access code
const VALID_ALBUM_CODE = "49UNEFAMILLE";

// Official Google Photos Shared Album link
const DEFAULT_GOOGLE_PHOTOS_ALBUM_URL = "https://photos.app.goo.gl/1LSpErXuzj2DR6SW6";

export default function Photos() {
  const { t } = useTranslation();

  // Code Access State
  const [accessCodeInput, setAccessCodeInput] = useState("");
  const [isAlbumUnlocked, setIsAlbumUnlocked] = useState(false);
  const [codeError, setCodeError] = useState("");
  const [showAlbumInfo, setShowAlbumInfo] = useState(false);
  
  // Dynamic Google Photos Album URL (persisted in localStorage or defaulted)
  const [albumUrl, setAlbumUrl] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("corbisier_google_photos_url");
      if (stored && stored !== "https://photos.google.com") {
        return stored;
      }
    }
    return DEFAULT_GOOGLE_PHOTOS_ALBUM_URL;
  });
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [tempUrlInput, setTempUrlInput] = useState("");

  // Request Code Form State
  const [reqName, setReqName] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const [reqSection, setReqSection] = useState("meute");
  const [requestSent, setRequestSent] = useState(false);

  // Upload Form State (Upload to chefs for curation)
  const [uploaderName, setUploaderName] = useState("");
  const [uploaderSection, setUploaderSection] = useState("meute");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // 6 Curated Photo Blocks: concise white title + small yellow section
  const [gallery, setGallery] = useState<PhotoItem[]>([
    {
      id: "1",
      src: photo1,
      title: "Jeux de piste",
      section: "Meute"
    },
    {
      id: "2",
      src: photo2,
      title: "Feu de camp",
      section: "Troupe & Meute"
    },
    {
      id: "3",
      src: photo3,
      title: "Gen2lads",
      section: "Troupe"
    },
    {
      id: "4",
      src: photo4,
      title: "En voyage",
      section: "Jeune Équipe"
    },
    {
      id: "5",
      src: photo5,
      title: "Parc Den Brandt",
      section: "Le Dimanche"
    },
    {
      id: "6",
      src: photo6,
      title: "En action",
      section: "Le Staff",
      position: "object-[center_15%]"
    }
  ]);

  // Code Verification
  const handleValidateCode = (e: FormEvent) => {
    e.preventDefault();
    const cleanCode = accessCodeInput.trim().toUpperCase().replace(/[\s\-_]+/g, "");
    if (!cleanCode) return;

    if (cleanCode === VALID_ALBUM_CODE) {
      setIsAlbumUnlocked(true);
      setCodeError("");
      try {
        const link = document.createElement("a");
        link.href = albumUrl || DEFAULT_GOOGLE_PHOTOS_ALBUM_URL;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch {
        // Fallback handled by the unlocked button
      }
    } else {
      setCodeError("Code incorrect. Demandez-le ci-dessous aux chefs ou utilisez le code reçu aux réunions.");
    }
  };

  const handleSaveAlbumUrl = (e: FormEvent) => {
    e.preventDefault();
    const cleanUrl = tempUrlInput.trim();
    if (!cleanUrl) return;
    setAlbumUrl(cleanUrl);
    if (typeof window !== "undefined") {
      localStorage.setItem("corbisier_google_photos_url", cleanUrl);
    }
    setIsEditingUrl(false);
  };

  // Request Code via Email to Chefs
  const handleRequestCodeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reqName.trim() || !reqEmail.trim()) return;

    const subject = encodeURIComponent(`[49 Corbisier] Demande de code pour l'Album Photos - ${reqName.trim()}`);
    const body = encodeURIComponent(
      `Bonjour les chefs,\n\nJe souhaite accéder à l'album Google Photos partagé de 49 Corbisier pour suivre les camps et réunions.\n\n- Nom & Prénom : ${reqName.trim()}\n- Email : ${reqEmail.trim()}\n- Section : ${reqSection}\n\nMerci d'avance pour l'envoi du code d'accès !\nBonne journée.`
    );

    window.location.href = `mailto:49corbisier.scouts@gmail.com,cadre.49corbisier@gmail.com?subject=${subject}&body=${body}`;
    setRequestSent(true);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!uploaderName.trim() || (!selectedFile && !previewUrl)) return;

    const newPhoto: PhotoItem = {
      id: Date.now().toString(),
      src: previewUrl || photo4,
      title: uploaderName,
      section: uploaderSection.toUpperCase(),
    };

    setGallery(prev => [newPhoto, ...prev.slice(0, 5)]);
    setUploadSuccess(true);
    setUploaderName("");
    setSelectedFile(null);
    setPreviewUrl(null);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 5000);
  };

  return (
    <section id="photos" className="py-10 md:py-24 bg-scout-green relative px-3.5 sm:px-6 md:px-12 border-t border-scout-yellow/15">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
        
        {/* Header - MOMENTS DE VIE */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 bg-scout-blue/70 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>{t('photos.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-scout-yellow tracking-wider uppercase">
            MOMENTS DE VIE
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-cream/90 font-normal leading-relaxed">
            {t('photos.subtitle')}
          </p>
        </div>

        {/* 6 Photo Blocks: 2-column grid on mobile (gap-2.5), 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.08 }}
              className="card-scout p-0 overflow-hidden group hover:border-scout-yellow/80 transition-all duration-300 shadow-xl flex flex-col justify-between select-none rounded-xl sm:rounded-2xl"
            >
              {/* Photo Container with subtle zoom on hover */}
              <div className="relative h-32 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-scout-blue">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className={`w-full h-full object-cover ${item.position || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out brightness-95`}
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-scout-green via-transparent to-transparent opacity-85 pointer-events-none" />
              </div>

              {/* Bold white title + small yellow section */}
              <div className="p-2 sm:p-3 md:p-3.5 bg-scout-green-card border-t border-scout-yellow/15 flex items-center justify-between gap-1.5 sm:gap-2">
                <h3 className="text-xs sm:text-sm md:text-base font-display font-bold text-white truncate">
                  {item.title}
                </h3>
                <span className="text-[9px] sm:text-[10px] md:text-xs font-mono font-bold text-scout-yellow shrink-0 uppercase tracking-wider">
                  {item.section}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GOOGLE PHOTOS SHARED ALBUM ACCESS PORTAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-scout p-4 sm:p-7 md:p-8 bg-scout-green-card border-2 border-scout-yellow/40 max-w-5xl mx-auto shadow-2xl space-y-5 sm:space-y-6"
        >
          {/* Header of Google Photos Hub */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-scout-yellow/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-scout-red flex items-center justify-center text-scout-yellow border border-scout-yellow/40 shadow-lg shrink-0">
                <FolderLock size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-scout-yellow bg-scout-red/80 border border-scout-yellow/30 px-2 py-0.5 rounded-full">
                    Google Photos
                  </span>
                  <span className="text-xs text-cream/60">Camps & Réunions</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                  Albums de l'Unité
                </h3>
              </div>
            </div>

            {/* Quick Unlocked Badge & Info button */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              {isAlbumUnlocked && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-950/90 border border-scout-yellow text-scout-yellow text-xs font-bold">
                  <ShieldCheck size={14} />
                  <span>Déverrouillé</span>
                </div>
              )}

              {/* Info button for parents */}
              <button
                type="button"
                onClick={() => setShowAlbumInfo(prev => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-scout-blue/80 border border-scout-yellow/30 hover:border-scout-yellow text-scout-yellow text-xs font-semibold transition-colors cursor-pointer"
                title="Informations pour les parents"
                aria-label="Informations sur l'album pour les parents"
              >
                <Info size={14} />
                <span>{showAlbumInfo ? "Fermer infos" : "Infos parents"}</span>
              </button>
            </div>
          </div>

          {/* Short subtitle */}
          <p className="text-xs sm:text-sm text-cream/80">
            Accès sécurisé réservé aux membres et familles de la 49ème.
          </p>

          {/* Expandable info for parents */}
          {showAlbumInfo && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 sm:p-4 rounded-xl bg-scout-blue/70 border border-scout-yellow/30 text-xs text-cream/90 space-y-1.5 leading-relaxed"
            >
              <div className="flex items-center gap-1.5 text-scout-yellow font-bold text-xs uppercase tracking-wider">
                <Info size={14} />
                <span>Protection & respect de la vie privée</span>
              </div>
              <p>
                Tous les clichés complets des camps et des réunions sont centralisés dans notre Google Photos officiel. L'accès est protégé par code pour garantir que seules les familles de l'unité puissent visionner les photos des jeunes.
              </p>
              <p className="text-cream/70 text-[11px]">
                Le code est identique toute l'année. En cas d'oubli, demandez-le aux chefs ci-dessous ou un dimanche matin au local.
              </p>
            </motion.div>
          )}

          {/* Two Interactive Pillars: 1) Enter Code vs 2) Request Code */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Pillar 1: Already have the code? */}
            <div className="p-4 sm:p-5 rounded-2xl bg-scout-blue/50 border border-scout-yellow/30 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-scout-yellow mb-1">
                  <Key size={16} />
                  <h4 className="font-display font-bold text-sm sm:text-base text-white">
                    Vous avez le code ?
                  </h4>
                </div>
                <p className="text-xs text-cream/70">
                  Transmis aux réunions ou par e-mail.
                </p>
              </div>

              {!isAlbumUnlocked ? (
                <form onSubmit={handleValidateCode} className="space-y-2.5">
                  <div className="relative">
                    <input
                      type="text"
                      value={accessCodeInput}
                      onChange={(e) => {
                        setAccessCodeInput(e.target.value);
                        setCodeError("");
                      }}
                      placeholder="Code d'accès..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-scout-blue/80 border border-scout-yellow/40 text-white placeholder-cream/40 focus:outline-none focus:border-scout-yellow text-xs uppercase tracking-wider font-mono"
                    />
                    <Lock size={14} className="absolute right-3 top-3 text-scout-yellow/60" />
                  </div>

                  {codeError && (
                    <div className="p-2 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-1.5">
                      <AlertCircle size={13} className="shrink-0 text-red-400" />
                      <span>{codeError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-accent text-xs py-2.5 flex items-center justify-center gap-1.5 cursor-pointer shadow-md font-bold"
                  >
                    <Unlock size={14} />
                    <span>Ouvrir l'album</span>
                  </button>
                </form>
              ) : (
                <div className="space-y-3 p-3.5 rounded-xl bg-green-950/60 border border-scout-yellow/40 text-center">
                  <div className="w-9 h-9 mx-auto rounded-full bg-scout-yellow/20 border border-scout-yellow flex items-center justify-center text-scout-yellow">
                    <Sparkles size={18} />
                  </div>
                  <h5 className="font-display font-bold text-scout-yellow text-sm">
                    Accès autorisé !
                  </h5>

                  <a
                    href={albumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-accent text-xs py-2.5 flex items-center justify-center gap-1.5 cursor-pointer shadow-xl text-scout-blue font-bold"
                  >
                    <Unlock size={14} />
                    <span>Ouvrir l'album Google Photos</span>
                    <ExternalLink size={13} />
                  </a>

                  {!isEditingUrl ? (
                    <div className="flex items-center justify-between text-[10px] text-cream/60 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setTempUrlInput(albumUrl);
                          setIsEditingUrl(true);
                        }}
                        className="hover:text-scout-yellow underline cursor-pointer"
                      >
                        ⚙️ Modifier lien
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsAlbumUnlocked(false);
                          setAccessCodeInput("");
                        }}
                        className="hover:text-scout-yellow underline cursor-pointer"
                      >
                        Verrouiller
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSaveAlbumUrl} className="pt-2 space-y-2 text-left bg-scout-blue/80 p-2.5 rounded-xl border border-scout-yellow/30">
                      <label className="block text-[10px] font-bold uppercase text-scout-yellow">
                        Lien Google Photos :
                      </label>
                      <input
                        type="url"
                        required
                        value={tempUrlInput}
                        onChange={(e) => setTempUrlInput(e.target.value)}
                        placeholder="https://photos.app.goo.gl/..."
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-scout-blue border border-scout-yellow/40 text-white placeholder-cream/40 focus:outline-none focus:border-scout-yellow"
                      />
                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => setIsEditingUrl(false)}
                          className="px-2 py-0.5 text-[10px] rounded text-cream/70 hover:text-white"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className="px-2.5 py-0.5 text-[10px] font-bold rounded bg-scout-yellow text-scout-blue hover:bg-white transition-colors"
                        >
                          Enregistrer
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Pillar 2: Request the code from the chefs */}
            <div className="p-4 sm:p-5 rounded-2xl bg-scout-blue/50 border border-scout-yellow/30 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-scout-yellow mb-1">
                  <Mail size={16} />
                  <h4 className="font-display font-bold text-sm sm:text-base text-white">
                    Demander le code
                  </h4>
                </div>
                <p className="text-xs text-cream/70">
                  Pour les parents et membres de l'unité.
                </p>
              </div>

              {!requestSent ? (
                <form onSubmit={handleRequestCodeSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    value={reqName}
                    onChange={(e) => setReqName(e.target.value)}
                    placeholder="Nom & Prénom"
                    className="w-full px-3 py-2 rounded-xl bg-scout-blue/80 border border-scout-yellow/30 text-white placeholder-cream/40 focus:outline-none focus:border-scout-yellow text-xs"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="email"
                      required
                      value={reqEmail}
                      onChange={(e) => setReqEmail(e.target.value)}
                      placeholder="Votre e-mail"
                      className="w-full px-3 py-2 rounded-xl bg-scout-blue/80 border border-scout-yellow/30 text-white placeholder-cream/40 focus:outline-none focus:border-scout-yellow text-xs"
                    />

                    <select
                      value={reqSection}
                      onChange={(e) => setReqSection(e.target.value)}
                      className="w-full px-2.5 py-2 rounded-xl bg-scout-blue/80 border border-scout-yellow/30 text-white focus:outline-none focus:border-scout-yellow text-xs cursor-pointer"
                    >
                      <option value="meute">Meute</option>
                      <option value="troupe">Troupe</option>
                      <option value="jeuneEquipe">Jeune Équipe</option>
                      <option value="anciens">Ancien / Famille</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-outline text-xs py-2 flex items-center justify-center gap-1.5 cursor-pointer font-semibold"
                  >
                    <Mail size={13} />
                    <span>Envoyer la demande</span>
                  </button>
                </form>
              ) : (
                <div className="p-3 rounded-xl bg-scout-blue/80 border border-scout-yellow text-center space-y-1.5">
                  <CheckCircle2 size={20} className="text-scout-yellow mx-auto" />
                  <h5 className="font-display font-bold text-scout-yellow text-xs">
                    Demande envoyée !
                  </h5>
                  <p className="text-[11px] text-cream/80">
                    Les chefs vous répondront par e-mail avec le code.
                  </p>
                  <button
                    type="button"
                    onClick={() => setRequestSent(false)}
                    className="text-[10px] text-scout-yellow underline block mx-auto pt-0.5"
                  >
                    Nouvelle demande
                  </button>
                </div>
              )}

              <div className="p-2.5 rounded-xl bg-scout-blue/70 border border-scout-yellow/20 text-[11px] text-cream/75">
                💡 Ou demandez directement aux chefs le dimanche matin !
              </div>
            </div>

          </div>
        </motion.div>

        {/* Upload photos section (Parents & members share pictures -> Chefs sort and add them) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-scout p-6 sm:p-8 bg-scout-green-card border-2 border-scout-yellow/30 max-w-4xl mx-auto shadow-2xl space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-scout-yellow/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-scout-blue flex items-center justify-center text-scout-yellow border border-scout-yellow/30 shrink-0">
                <Upload size={22} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-scout-yellow">
                  {t('photos.uploadTitle')}
                </h3>
                <p className="text-xs sm:text-sm text-cream/80 mt-0.5">
                  Vos photos seront triées par les chefs puis ajoutées à l'album Google Photos officiel de l'unité.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleUploadSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-scout-yellow mb-1.5">
                  Nom & Prénom / Famille
                </label>
                <input
                  type="text"
                  required
                  value={uploaderName}
                  onChange={(e) => setUploaderName(e.target.value)}
                  placeholder="Ex : Famille Dupont"
                  className="w-full px-4 py-3 rounded-xl bg-scout-blue/60 border border-scout-yellow/30 text-white placeholder-cream/40 focus:outline-none focus:border-scout-yellow text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-scout-yellow mb-1.5">
                  {t('photos.uploadSectionSelect')}
                </label>
                <select
                  value={uploaderSection}
                  onChange={(e) => setUploaderSection(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-scout-blue/60 border border-scout-yellow/30 text-white focus:outline-none focus:border-scout-yellow text-sm cursor-pointer"
                >
                  <option value="meute">Meute (Louveteaux 5-11 ans)</option>
                  <option value="troupe">Troupe (Scouts 12-17 ans)</option>
                  <option value="jeuneEquipe">Jeune Équipe (18 ans)</option>
                  <option value="cadre">Cadre & Unité</option>
                </select>
              </div>
            </div>

            {/* File drop zone / input */}
            <div className="relative border-2 border-dashed border-scout-yellow/40 hover:border-scout-yellow rounded-2xl p-6 text-center transition-colors bg-scout-blue/30 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <div className="flex flex-col items-center justify-center gap-2">
                <ImageIcon size={32} className="text-scout-yellow" />
                <span className="text-xs sm:text-sm font-semibold text-cream/90">
                  {selectedFile ? selectedFile.name : t('photos.uploadFileBtn')}
                </span>
                <span className="text-[11px] text-cream/60">
                  Formats acceptés : JPG, PNG, HEIC (Max 20 Mo)
                </span>
              </div>
            </div>

            {/* Preview if file chosen */}
            {previewUrl && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-scout-blue/50 border border-scout-yellow/30">
                <img src={previewUrl} alt="Aperçu" className="w-16 h-16 object-cover rounded-lg border border-scout-yellow/20" />
                <div className="text-xs text-cream/80">
                  <span className="font-bold text-scout-yellow block">Fichier prêt à être envoyé</span>
                  <span>{selectedFile?.name}</span>
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-center sm:justify-end">
              <button
                type="submit"
                className="btn-accent text-xs py-3 px-8 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Upload size={14} />
                <span>{t('photos.uploadSubmitBtn')}</span>
              </button>
            </div>
          </form>

          {/* Success Message */}
          {uploadSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-green-950/80 border border-scout-yellow text-scout-yellow text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <CheckCircle2 size={18} className="shrink-0" />
              <span>{t('photos.uploadSuccess')}</span>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}

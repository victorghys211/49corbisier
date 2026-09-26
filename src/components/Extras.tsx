import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  Sparkles, 
  Flame, 
  HelpCircle, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Gift, 
  History, 
  Users, 
  X,
  ExternalLink,
  Timer,
  Trophy,
  Lightbulb,
  Pause,
  Lock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
const troupeCampImg = "/troupe.jpeg";

interface CrosswordWord {
  num: number;
  dir: "H" | "V";
  r: number;
  c: number;
  word: string;
  clue: string;
}

const MONTHLY_WORDS: CrosswordWord[] = [
  // Horizontaux (Across)
  { num: 2, dir: "H", r: 1, c: 8, word: "BIDONBAL", clue: "Le jeu chez les scouts où on lance des balles les uns sur les autres et contre des tonneaux." },
  { num: 3, dir: "H", r: 3, c: 9, word: "HOATZIN", clue: "Le totem du nouveau master." },
  { num: 5, dir: "H", r: 5, c: 1, word: "BISONS", clue: "Le gros animal à cornes des plaines Américaines." },
  { num: 7, dir: "H", r: 5, c: 8, word: "CASSEROLE", clue: "Le truc en métal sur le feu pour bouillir de l'eau." },
  { num: 10, dir: "H", r: 7, c: 3, word: "FOULARD", clue: "Le seul bout de ton uniforme que t'es vraiment obligé d'avoir sur toi tout le temps" },
  { num: 13, dir: "H", r: 11, c: 0, word: "CASTORS", clue: "Comment on appelle les scouts de la 5ème et 6ème année." },
  { num: 16, dir: "H", r: 11, c: 8, word: "FEUDECAMP", clue: "Le meilleur moment du soir au camp avec des flammes." },
  { num: 18, dir: "H", r: 13, c: 0, word: "BG", clue: "L'endroit au camp pour aller aux toilettes." },
  { num: 19, dir: "H", r: 14, c: 4, word: "TIQUE", clue: "La petite bête noire qui se met dans les endroits chaud sur le corps." },
  { num: 20, dir: "H", r: 16, c: 10, word: "HACHE", clue: "L'outil pour couper des gros arbres dans la fôret." },

  // Verticaux (Down)
  { num: 1, dir: "V", r: 0, c: 9, word: "HIGHLANDGAMES", clue: "Les jeux de sport légendaires qui viennent d'Écosse." },
  { num: 4, dir: "V", r: 3, c: 13, word: "ZORRO", clue: "Le fameux saboteur de la Troupe." },
  { num: 6, dir: "V", r: 5, c: 3, word: "SIFFLET", clue: "Le truc autour du cou du chef pour que tout le monde se rassemble." },
  { num: 8, dir: "V", r: 5, c: 15, word: "LAC", clue: "L'endroit avec plein d'eau où on se baigne parfois l'été." },
  { num: 9, dir: "V", r: 6, c: 7, word: "BALOO", clue: "Le chef des louveteaux qui aime bien manger et dormir (ours)." },
  { num: 11, dir: "V", r: 8, c: 12, word: "HAMEUZY", clue: "Le village en France où on était au grand camp cet été." },
  { num: 12, dir: "V", r: 10, c: 14, word: "TANIERES", clue: "Les magnifiques camps que les louveteaux construisent dans les bois." },
  { num: 14, dir: "V", r: 11, c: 1, word: "AIGLES", clue: "AIGLES OP 3! 1...2...3..." },
  { num: 15, dir: "V", r: 11, c: 5, word: "RATION", clue: "Ce que les chefs veulent communiquer quand ils sifflent « tit-taat, tit-taat-tit » en morse." },
  { num: 17, dir: "V", r: 11, c: 16, word: "PILOTI", clue: "La construction qu'on construit pour dormir en hauteur sur des lits en cordes." },
];

const PUZZLE_GRID: Record<string, { letter: string; num?: number }> = {
  "0-9": { letter: "H", num: 1 },
  "1-8": { letter: "B", num: 2 },
  "1-9": { letter: "I" },
  "1-10": { letter: "D" },
  "1-11": { letter: "O" },
  "1-12": { letter: "N" },
  "1-13": { letter: "B" },
  "1-14": { letter: "A" },
  "1-15": { letter: "L" },
  "2-9": { letter: "G" },
  "3-9": { letter: "H", num: 3 },
  "3-10": { letter: "O" },
  "3-11": { letter: "A" },
  "3-12": { letter: "T" },
  "3-13": { letter: "Z", num: 4 },
  "3-14": { letter: "I" },
  "3-15": { letter: "N" },
  "4-9": { letter: "L" },
  "4-13": { letter: "O" },
  "5-1": { letter: "B", num: 5 },
  "5-2": { letter: "I" },
  "5-3": { letter: "S", num: 6 },
  "5-4": { letter: "O" },
  "5-5": { letter: "N" },
  "5-6": { letter: "S" },
  "5-8": { letter: "C", num: 7 },
  "5-9": { letter: "A" },
  "5-10": { letter: "S" },
  "5-11": { letter: "S" },
  "5-12": { letter: "E" },
  "5-13": { letter: "R" },
  "5-14": { letter: "O" },
  "5-15": { letter: "L", num: 8 },
  "5-16": { letter: "E" },
  "6-3": { letter: "I" },
  "6-7": { letter: "B", num: 9 },
  "6-9": { letter: "N" },
  "6-13": { letter: "R" },
  "6-15": { letter: "A" },
  "7-3": { letter: "F", num: 10 },
  "7-4": { letter: "O" },
  "7-5": { letter: "U" },
  "7-6": { letter: "L" },
  "7-7": { letter: "A" },
  "7-8": { letter: "R" },
  "7-9": { letter: "D" },
  "7-13": { letter: "O" },
  "7-15": { letter: "C" },
  "8-3": { letter: "F" },
  "8-7": { letter: "L" },
  "8-9": { letter: "G" },
  "8-12": { letter: "H", num: 11 },
  "9-3": { letter: "L" },
  "9-7": { letter: "O" },
  "9-9": { letter: "A" },
  "9-12": { letter: "A" },
  "10-3": { letter: "E" },
  "10-7": { letter: "O" },
  "10-9": { letter: "M" },
  "10-12": { letter: "M" },
  "10-14": { letter: "T", num: 12 },
  "11-0": { letter: "C", num: 13 },
  "11-1": { letter: "A", num: 14 },
  "11-2": { letter: "S" },
  "11-3": { letter: "T" },
  "11-4": { letter: "O" },
  "11-5": { letter: "R", num: 15 },
  "11-6": { letter: "S" },
  "11-8": { letter: "F", num: 16 },
  "11-9": { letter: "E" },
  "11-10": { letter: "U" },
  "11-11": { letter: "D" },
  "11-12": { letter: "E" },
  "11-13": { letter: "C" },
  "11-14": { letter: "A" },
  "11-15": { letter: "M" },
  "11-16": { letter: "P", num: 17 },
  "12-1": { letter: "I" },
  "12-5": { letter: "A" },
  "12-9": { letter: "S" },
  "12-12": { letter: "U" },
  "12-14": { letter: "N" },
  "12-16": { letter: "I" },
  "13-0": { letter: "B", num: 18 },
  "13-1": { letter: "G" },
  "13-5": { letter: "T" },
  "13-12": { letter: "Z" },
  "13-14": { letter: "I" },
  "13-16": { letter: "L" },
  "14-1": { letter: "L" },
  "14-4": { letter: "T", num: 19 },
  "14-5": { letter: "I" },
  "14-6": { letter: "Q" },
  "14-7": { letter: "U" },
  "14-8": { letter: "E" },
  "14-12": { letter: "Y" },
  "14-14": { letter: "E" },
  "14-16": { letter: "O" },
  "15-1": { letter: "E" },
  "15-5": { letter: "O" },
  "15-14": { letter: "R" },
  "15-16": { letter: "T" },
  "16-1": { letter: "S" },
  "16-5": { letter: "N" },
  "16-10": { letter: "H", num: 20 },
  "16-11": { letter: "A" },
  "16-12": { letter: "C" },
  "16-13": { letter: "H" },
  "16-14": { letter: "E" },
  "16-16": { letter: "I" },
  "17-14": { letter: "S" },
};

export default function Extras() {
  const { t } = useTranslation();

  // Video State
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Modals for Coin des Anciens & 49 Nonante
  const [activeModal, setActiveModal] = useState<"anciens" | "nonante" | null>(null);

  // JEU DU MOIS: Mots Croisés Scouts - Anti-cheat & 1-Chance Logic
  const STORAGE_KEY = "corbisier_jeu_mois_septembre_2026_officiel_final";

  const [playerName, setPlayerName] = useState<string>("");
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>("");
  const [completedAttempt, setCompletedAttempt] = useState<{ name: string; time: string; timestamp: string } | null>(null);

  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [crosswordStatus, setCrosswordStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedCell, setSelectedCell] = useState<string | null>("0-9");
  const [activeWordNum, setActiveWordNum] = useState<number | null>(1);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [finalTime, setFinalTime] = useState<string>("");
  const [hintsUsed, setHintsUsed] = useState(0);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Check on mount if user has already played this month (1 chance only)
  useEffect(() => {
    try {
      // Purge previous test keys so fresh real attempt is ready
      localStorage.removeItem("corbisier_jeu_mois_septembre_2026_attempt");
      localStorage.removeItem("corbisier_jeu_mois_septembre_2026_officiel_v1");

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setCompletedAttempt(parsed);
        setPlayerName(parsed.name);
        setFinalTime(parsed.time);
        setHasFinished(true);
        setHasStarted(true);
        setCrosswordStatus("success");
        // Pre-fill grid with solution so they can review their puzzle
        const fullSolved: Record<string, string> = {};
        for (const [coord, data] of Object.entries(PUZZLE_GRID)) {
          fullSolved[coord] = data.letter;
        }
        setUserInputs(fullSolved);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isTimerRunning && !hasFinished) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, hasFinished]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleStartGame = () => {
    if (!playerName.trim() || playerName.trim().length < 2) {
      setNameError("Veuillez inscrire votre prénom et nom (ou totem) pour valider votre participation !");
      return;
    }
    setNameError("");
    setHasStarted(true);
    setIsTimerRunning(true);
    setSelectedCell("0-9");
    setActiveWordNum(1);
    setTimeout(() => {
      inputRefs.current["0-9"]?.focus();
      inputRefs.current["0-9"]?.select();
    }, 150);
  };

  const handleSelectCell = (coord: string, forceToggle = false) => {
    if (!hasStarted || completedAttempt) return;
    const [rStr, cStr] = coord.split('-');
    const r = parseInt(rStr, 10);
    const c = parseInt(cStr, 10);

    // Find all words passing through this cell
    const intersectingWords = MONTHLY_WORDS.filter(w => 
      w.dir === 'H' 
        ? (w.r === r && c >= w.c && c < w.c + w.word.length)
        : (w.c === c && r >= w.r && r < w.r + w.word.length)
    );

    if (intersectingWords.length === 0) return;

    // If user re-taps the current cell or requests a toggle, cycle to the other intersecting word
    if ((selectedCell === coord || forceToggle) && intersectingWords.length > 1) {
      const currentIdx = intersectingWords.findIndex(w => w.num === activeWordNum);
      const nextWord = intersectingWords[(currentIdx + 1) % intersectingWords.length];
      setSelectedCell(coord);
      setActiveWordNum(nextWord.num);
      return;
    }

    setSelectedCell(coord);

    // If active word already contains this cell, stay in it
    if (activeWordNum) {
      const current = intersectingWords.find(w => w.num === activeWordNum);
      if (current) return;
    }

    // Otherwise select the first intersecting word
    setActiveWordNum(intersectingWords[0].num);
  };

  const handleSelectWord = (word: CrosswordWord) => {
    if (!hasStarted || completedAttempt) return;
    setActiveWordNum(word.num);
    const startKey = `${word.r}-${word.c}`;
    setSelectedCell(startKey);
    setTimeout(() => {
      inputRefs.current[startKey]?.focus();
      inputRefs.current[startKey]?.select();
    }, 50);
  };

  const handleNextWord = () => {
    if (!hasStarted || completedAttempt) return;
    const currentNum = activeWordNum || 1;
    const nextNum = currentNum >= 20 ? 1 : currentNum + 1;
    const nextWord = MONTHLY_WORDS.find(w => w.num === nextNum);
    if (nextWord) handleSelectWord(nextWord);
  };

  const handlePrevWord = () => {
    if (!hasStarted || completedAttempt) return;
    const currentNum = activeWordNum || 1;
    const prevNum = currentNum <= 1 ? 20 : currentNum - 1;
    const prevWord = MONTHLY_WORDS.find(w => w.num === prevNum);
    if (prevWord) handleSelectWord(prevWord);
  };

  const handleCellChange = (coord: string, val: string) => {
    if (!hasStarted || completedAttempt) return;
    const char = val.slice(-1).toUpperCase();
    setUserInputs(prev => ({
      ...prev,
      [coord]: char
    }));
    if (crosswordStatus !== "idle") setCrosswordStatus("idle");

    // Auto-advance smoothly to next cell in current word
    if (char) {
      const [rStr, cStr] = coord.split('-');
      const r = parseInt(rStr, 10);
      const c = parseInt(cStr, 10);

      let word = MONTHLY_WORDS.find(w => w.num === activeWordNum);
      if (!word || (word.dir === 'H' ? (word.r !== r || c < word.c || c >= word.c + word.word.length) : (word.c !== c || r < word.r || r >= word.r + word.word.length))) {
        word = MONTHLY_WORDS.find(w => 
          w.dir === 'H' ? (w.r === r && c >= w.c && c < w.c + w.word.length) : (w.c === c && r >= w.r && r < w.r + w.word.length)
        );
        if (word) setActiveWordNum(word.num);
      }

      if (word) {
        const nextR = word.dir === 'V' ? r + 1 : r;
        const nextC = word.dir === 'H' ? c + 1 : c;
        const nextKey = `${nextR}-${nextC}`;
        const isNextInWord = word.dir === 'H' 
          ? nextR === word.r && nextC < word.c + word.word.length 
          : nextC === word.c && nextR < word.r + word.word.length;

        if (isNextInWord && PUZZLE_GRID[nextKey]) {
          setSelectedCell(nextKey);
          setTimeout(() => {
            inputRefs.current[nextKey]?.focus();
            inputRefs.current[nextKey]?.select();
          }, 10);
        }
      }
    }
  };

  const handleKeyDown = (coord: string, e: KeyboardEvent<HTMLInputElement>) => {
    if (!hasStarted || completedAttempt) return;
    const [rStr, cStr] = coord.split('-');
    const r = parseInt(rStr, 10);
    const c = parseInt(cStr, 10);

    if (e.key === "Backspace") {
      if (!userInputs[coord] || userInputs[coord] === "") {
        let word = MONTHLY_WORDS.find(w => w.num === activeWordNum);
        if (!word) {
          word = MONTHLY_WORDS.find(w => 
            w.dir === 'H' ? (w.r === r && c >= w.c && c < w.c + w.word.length) : (w.c === c && r >= w.r && r < w.r + w.word.length)
          );
        }
        if (word) {
          const prevR = word.dir === 'V' ? r - 1 : r;
          const prevC = word.dir === 'H' ? c - 1 : c;
          const prevKey = `${prevR}-${prevC}`;
          const isPrevInWord = word.dir === 'H'
            ? prevR === word.r && prevC >= word.c
            : prevC === word.c && prevR >= word.r;

          if (isPrevInWord && PUZZLE_GRID[prevKey]) {
            e.preventDefault();
            setSelectedCell(prevKey);
            setUserInputs(prev => ({ ...prev, [prevKey]: "" }));
            inputRefs.current[prevKey]?.focus();
          }
        }
      }
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextKey = `${r}-${c + 1}`;
      if (PUZZLE_GRID[nextKey]) {
        setSelectedCell(nextKey);
        inputRefs.current[nextKey]?.focus();
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevKey = `${r}-${c - 1}`;
      if (PUZZLE_GRID[prevKey]) {
        setSelectedCell(prevKey);
        inputRefs.current[prevKey]?.focus();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextKey = `${r + 1}-${c}`;
      if (PUZZLE_GRID[nextKey]) {
        setSelectedCell(nextKey);
        inputRefs.current[nextKey]?.focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevKey = `${r - 1}-${c}`;
      if (PUZZLE_GRID[prevKey]) {
        setSelectedCell(prevKey);
        inputRefs.current[prevKey]?.focus();
      }
    }
  };

  const checkCrossword = () => {
    if (completedAttempt) return;
    const totalLetters = Object.keys(PUZZLE_GRID).length;
    let filled = 0;
    let wrongCount = 0;

    for (const [coord, data] of Object.entries(PUZZLE_GRID)) {
      const val = (userInputs[coord] || "").toUpperCase();
      if (val) {
        filled++;
        if (val !== data.letter) {
          wrongCount++;
        }
      }
    }

    if (filled < totalLetters) {
      setCrosswordStatus("error");
      setErrorMessage(`Grille incomplète : encore ${totalLetters - filled} case(s) vide(s) à remplir sur ${totalLetters} !`);
      return;
    }

    if (wrongCount > 0) {
      setCrosswordStatus("error");
      setErrorMessage(`Attention : il y a ${wrongCount} lettre(s) incorrecte(s) dans votre grille. Vérifiez vos croisements, le chrono continue !`);
      return;
    }

    // Success - 1 Chance recorded permanently!
    const officialTime = formatTime(timerSeconds);
    setCrosswordStatus("success");
    setIsTimerRunning(false);
    setHasFinished(true);
    setFinalTime(officialTime);

    const attemptData = {
      name: playerName.trim() || "Scout Corbisier",
      time: officialTime,
      timestamp: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(attemptData));
      setCompletedAttempt(attemptData);
    } catch (e) {
      console.error(e);
    }
  };

  const giveHint = () => {
    if (!hasStarted || completedAttempt) return;
    const candidateKeys = Object.keys(PUZZLE_GRID).filter(k => {
      return (userInputs[k] || "").toUpperCase() !== PUZZLE_GRID[k].letter;
    });
    if (candidateKeys.length === 0) return;
    const randomKey = candidateKeys[Math.floor(Math.random() * candidateKeys.length)];
    setUserInputs(prev => ({
      ...prev,
      [randomKey]: PUZZLE_GRID[randomKey].letter
    }));
    setHintsUsed(h => h + 1);
    setTimerSeconds(s => s + 30);
    setSelectedCell(randomKey);
    inputRefs.current[randomKey]?.focus();
    if (crosswordStatus !== "idle") setCrosswordStatus("idle");
  };

  const clearGridInputs = () => {
    if (completedAttempt) return;
    setUserInputs({});
    setCrosswordStatus("idle");
    setErrorMessage("");
    // Note: The timer continues to run to prevent rewinding the clock!
  };

  // Count filled letters
  const filledCount = Object.keys(PUZZLE_GRID).filter(k => (userInputs[k] || "").trim().length > 0).length;
  const totalCellsCount = Object.keys(PUZZLE_GRID).length;

  // Active word coordinates set for highlighting
  const activeWord = activeWordNum ? MONTHLY_WORDS.find(item => item.num === activeWordNum) : undefined;
  const activeWordCells = new Set<string>();
  if (activeWord) {
    for (let i = 0; i < activeWord.word.length; i++) {
      const r = activeWord.dir === "H" ? activeWord.r : activeWord.r + i;
      const c = activeWord.dir === "H" ? activeWord.c + i : activeWord.c;
      activeWordCells.add(`${r}-${c}`);
    }
  }

  return (
    <section id="extras" className="py-10 md:py-24 bg-scout-green relative px-4 sm:px-6 md:px-12 border-t border-scout-yellow/15">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-scout-blue/70 border border-scout-yellow/30 rounded-full text-scout-yellow text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('extras.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-scout-yellow">
            {t('extras.title')}
          </h2>

          <p className="text-base sm:text-lg text-cream/90 font-normal leading-relaxed">
            {t('extras.subtitle')}
          </p>
        </div>

        {/* 2 Interactive Sub-Cards: Le Coin des Anciens & 49 Nonante (inside Extras, as requested!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Le Coin des Anciens */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setActiveModal("anciens")}
            className="card-scout p-6 sm:p-7 flex flex-col justify-between hover:border-scout-yellow transition-all duration-300 cursor-pointer shadow-xl group bg-scout-green-card"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-scout-blue/80 border border-scout-yellow/30 flex items-center justify-center text-scout-yellow">
                  <Users size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-scout-yellow bg-scout-blue/60 px-3 py-1 rounded-full border border-scout-yellow/20">
                  Espace Anciens
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-scout-yellow group-hover:text-white transition-colors">
                {t('extras.anciensCardTitle')}
              </h3>

              <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-normal">
                {t('extras.anciensCardDesc')}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-scout-yellow">
              <span>En savoir plus</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>

          {/* Card 2: 49 Nonante (1937 - 2027) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => setActiveModal("nonante")}
            className="card-scout p-6 sm:p-7 flex flex-col justify-between hover:border-scout-yellow transition-all duration-300 cursor-pointer shadow-xl group bg-scout-green-card"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-scout-blue/80 border border-scout-yellow/30 flex items-center justify-center text-scout-yellow">
                  <History size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-scout-yellow bg-scout-blue/60 px-3 py-1 rounded-full border border-scout-yellow/20">
                  Cap 90 ans
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-scout-yellow group-hover:text-white transition-colors">
                {t('extras.nonanteCardTitle')}
              </h3>

              <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-normal">
                {t('extras.nonanteCardDesc')}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-scout-yellow">
              <span>Découvrir le projet</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>

        </div>

        {/* Camp Video Clip (Set SHOW_CAMP_VIDEO to true to re-enable in the future) OR Responsive Full Mystery Card */}
        {(() => {
          // TOGGLE: Set to true whenever a camp video clip is ready to be published!
          const SHOW_CAMP_VIDEO = false;

          if (SHOW_CAMP_VIDEO) {
            return (
              <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                {/* Camp Video Clip */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7 card-scout p-6 sm:p-8 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-scout-yellow">
                      Souvenirs sous tente
                    </span>
                    <h3 className="text-2xl font-display font-bold text-scout-yellow">
                      {t('extras.videoTitle')}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-normal">
                      {t('extras.videoDesc')}
                    </p>
                  </div>

                  {/* Video Player Box */}
                  <div className="relative rounded-2xl overflow-hidden border border-scout-yellow/30 bg-black aspect-video group">
                    {!isPlayingVideo ? (
                      <>
                        <img 
                          src={troupeCampImg} 
                          alt="Camp Scout 49 Corbisier" 
                          className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <button
                            onClick={() => setIsPlayingVideo(true)}
                            className="w-16 h-16 rounded-full bg-scout-yellow text-scout-blue flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                            aria-label="Lire la vidéo du camp"
                          >
                            <Play size={28} className="translate-x-0.5 fill-current" />
                          </button>
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 text-center">
                          <span className="text-xs text-cream/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                            Cliquez pour démarrer la vidéo du grand camp
                          </span>
                        </div>
                      </>
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="Camp Scout 49 Corbisier"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                </motion.div>

                {/* Mystery Item Card in 12-col side-by-side mode */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-5 card-scout p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-scout-green-card border-2 border-dashed border-scout-yellow/40"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-scout-blue/80 border border-scout-yellow/30 flex items-center justify-center text-scout-yellow">
                        <Gift size={24} />
                      </div>
                      <span className="text-[11px] font-mono text-scout-yellow bg-scout-blue/80 border border-scout-yellow/30 px-3 py-1 rounded-full">
                        {t('extras.mysteryStatus')}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-scout-yellow">
                        {t('extras.mysteryTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-cream/85 mt-2 leading-relaxed font-normal">
                        {t('extras.mysteryDesc')}
                      </p>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-scout-blue/90 via-scout-green-card to-scout-blue/80 border border-scout-yellow/40 p-5 sm:p-6 shadow-inner group">
                      <div className="relative z-10 flex flex-col items-center text-center space-y-3.5">
                        <div className="relative my-1">
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-scout-blue border-2 border-scout-yellow flex items-center justify-center text-scout-yellow shadow-2xl">
                            <Lock size={32} className="drop-shadow-[0_0_12px_rgba(245,184,46,0.8)]" />
                          </div>
                        </div>
                        <p className="text-xs text-cream/90 font-serif italic max-w-xs leading-relaxed">
                          « Une silhouette inédite prend forme dans le plus grand mystère... Préparez-vous à une belle surprise ! »
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          }

          // Default view: Perfectly responsive Mystery Item Card for Mobile, Tablet, Laptop, and Desktop
          return (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-scout p-6 sm:p-8 md:p-10 bg-scout-green-card border-2 border-dashed border-scout-yellow/40 shadow-2xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
                
                {/* Left Column: Mystery Title & Description */}
                <div className="md:col-span-7 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-scout-blue/80 border border-scout-yellow/30 flex items-center justify-center text-scout-yellow shrink-0">
                      <Gift size={24} />
                    </div>
                    <span className="text-[11px] font-mono text-scout-yellow bg-scout-blue/80 border border-scout-yellow/30 px-3 py-1 rounded-full">
                      {t('extras.mysteryStatus')}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-scout-yellow">
                      {t('extras.mysteryTitle')}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-cream/90 mt-2.5 leading-relaxed font-normal">
                      {t('extras.mysteryDesc')}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-scout-blue/90 border border-scout-yellow/40 text-scout-yellow text-xs font-mono font-bold tracking-wider shadow">
                      <span className="w-2 h-2 rounded-full bg-scout-yellow animate-ping" />
                      <span>Création Secrète • Édition Limitée</span>
                    </div>
                    <span className="text-xs text-scout-yellow/80 font-mono">
                      ★ Restez connectés pour le lancement officiel ★
                    </span>
                  </div>
                </div>

                {/* Right Column: Gleaming animated mystery teaser */}
                <div className="md:col-span-5 w-full">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-scout-blue/90 via-scout-green-card to-scout-blue/80 border border-scout-yellow/40 p-5 sm:p-7 shadow-inner group">
                    {/* Pulsing golden aura in background */}
                    <div className="absolute -top-12 -left-12 w-48 h-48 bg-scout-yellow/20 rounded-full blur-2xl animate-pulse pointer-events-none" />
                    <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-scout-yellow/15 rounded-full blur-2xl animate-pulse pointer-events-none" />

                    {/* Sweeping diagonal golden light reflection */}
                    <motion.div
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-scout-yellow/25 to-transparent skew-x-12 pointer-events-none"
                      animate={{
                        x: ["-100%", "260%"]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3.2,
                        ease: "easeInOut",
                        repeatDelay: 0.8
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center text-center space-y-3.5">
                      {/* Glowing central emblem with pulsing aura */}
                      <div className="relative my-1">
                        {/* Expanding halo */}
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-scout-yellow/30 blur-md"
                          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.9, 0.5] }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                        />

                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-scout-blue border-2 border-scout-yellow flex items-center justify-center text-scout-yellow shadow-2xl group-hover:scale-105 transition-transform duration-300">
                          <Lock size={32} className="drop-shadow-[0_0_12px_rgba(245,184,46,0.8)]" />

                          {/* Twinkling star 1 */}
                          <motion.div
                            className="absolute -top-2 -right-2 text-scout-yellow"
                            animate={{ rotate: [0, 90, 180, 270, 360], scale: [0.8, 1.2, 0.8] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                          >
                            <Sparkles size={16} />
                          </motion.div>

                          {/* Twinkling star 2 */}
                          <motion.div
                            className="absolute -bottom-1 -left-2 text-scout-yellow/80"
                            animate={{ scale: [1, 0.6, 1], opacity: [0.6, 1, 0.6] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                          >
                            <Sparkles size={14} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Secret Teaser Label */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-scout-blue/90 border border-scout-yellow/40 text-scout-yellow text-[11px] font-mono font-bold tracking-wider shadow">
                        <span className="w-2 h-2 rounded-full bg-scout-yellow animate-ping" />
                        <span>Mystère Total</span>
                      </div>

                      <p className="text-xs sm:text-sm text-cream/90 font-serif italic max-w-xs leading-relaxed">
                        « Une silhouette inédite prend forme dans le plus grand mystère... Préparez-vous à une belle surprise ! »
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })()}

        {/* French Scout Crossword Puzzle: JEU DU MOIS */}
        <motion.div
          id="jeu-du-mois"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-scout p-3.5 sm:p-8 bg-scout-green-card border-2 border-scout-yellow/30 max-w-6xl mx-auto shadow-2xl space-y-6 overflow-hidden sm:overflow-visible"
        >
          {/* Top Bar with Badge, Title, and Live Chrono */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-scout-yellow/20 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-scout-yellow bg-scout-blue/80 border border-scout-yellow/30 px-3 py-0.5 rounded-full inline-block">
                  {t('extras.crosswordBadge')}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {t('extras.crosswordTitle')}
              </h3>
            </div>

            {/* Live Chronometer */}
            <div className="flex items-center gap-3 bg-scout-blue/90 border border-scout-yellow/30 rounded-2xl p-2.5 px-4 shadow-md">
              <div className="flex items-center gap-2 text-scout-yellow">
                <Timer size={20} className={isTimerRunning ? "animate-pulse text-scout-yellow" : "text-cream/60"} />
                <span className="font-mono font-black text-xl tracking-wider text-white">
                  {completedAttempt ? completedAttempt.time : formatTime(timerSeconds)}
                </span>
              </div>

              <div className="h-6 w-px bg-scout-yellow/20" />

              <span className="text-[11px] text-cream/70 font-mono">
                {completedAttempt ? "Score final" : isTimerRunning ? "En cours" : "Prêt"}
              </span>
            </div>
          </div>

          {/* Description & Letter Progress */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-cream/85">
            <p className="max-w-3xl leading-relaxed">
              {t('extras.crosswordDesc')}
            </p>

            <div className="shrink-0 flex items-center gap-2 bg-scout-blue/50 border border-scout-yellow/20 px-3 py-1.5 rounded-xl">
              <span className="text-scout-yellow font-bold font-mono">
                {filledCount} / {totalCellsCount}
              </span>
              <span className="text-cream/70 text-xs">cases remplies</span>
              <div className="w-16 h-2 bg-scout-green rounded-full overflow-hidden border border-scout-yellow/20">
                <div 
                  className="h-full bg-scout-yellow transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.round((filledCount / totalCellsCount) * 100))}%` }}
                />
              </div>
            </div>
          </div>

          {/* Warning recommendation for mobile/tablet */}
          <div className="flex items-start sm:items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-scout-blue/90 border-2 border-scout-yellow/60 shadow-lg text-scout-yellow">
            <span className="text-xl sm:text-2xl shrink-0 select-none">💡</span>
            <p className="text-xs sm:text-sm text-cream/95 font-medium leading-relaxed">
              Pour une meilleure expérience et pour voir la grille complète, nous vous conseillons de jouer sur un ordinateur ou une tablette.
            </p>
          </div>

          {/* Anti-Cheat: Completed Banner OR Name Gate Card */}
          {completedAttempt ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 sm:p-5 rounded-2xl bg-scout-blue border-2 border-scout-yellow/60 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-scout-yellow/20 border border-scout-yellow flex items-center justify-center text-scout-yellow shrink-0">
                  <Trophy size={24} />
                </div>
                <div>
                  <div className="font-bold text-scout-yellow text-sm sm:text-base flex items-center gap-2">
                    <span>Tentative officielle enregistrée pour septembre !</span>
                    <Sparkles size={16} className="text-scout-yellow" />
                  </div>
                  <div className="text-xs sm:text-sm text-cream/90 mt-0.5">
                    Scout : <strong className="text-white">{completedAttempt.name}</strong> • Chrono validé : <strong className="text-scout-yellow font-mono text-sm">{completedAttempt.time}</strong>
                  </div>
                  <div className="text-[11px] text-cream/70 mt-1">
                    Tu as utilisé ton unique chance ce mois-ci. Les gagnants et récompenses seront dévoilés à la prochaine réunion !
                  </div>
                </div>
              </div>
            </motion.div>
          ) : !hasStarted ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-scout-blue/85 border-2 border-scout-yellow/40 space-y-4 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-scout-yellow/20 pb-3">
                <div className="flex items-center gap-2 text-scout-yellow font-display font-bold text-base">
                  <Sparkles size={18} />
                  <span>Prêt pour le grand jeu du mois (20 mots) ? Entre ton nom pour commencer</span>
                </div>
                <span className="text-[11px] font-mono text-scout-yellow/90 bg-scout-yellow/10 px-2.5 py-1 rounded-full border border-scout-yellow/20 self-start sm:self-auto">
                  1 seule tentative ce mois-ci !
                </span>
              </div>

              <div className="grid sm:grid-cols-12 gap-3 items-end">
                <div className="sm:col-span-8 space-y-1.5">
                  <label className="text-xs font-semibold text-cream/90 flex items-center gap-1.5">
                    <Users size={14} className="text-scout-yellow" />
                    <span>Ton prénom et nom (ou totem) :</span>
                  </label>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => {
                      setPlayerName(e.target.value);
                      if (nameError) setNameError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleStartGame();
                    }}
                    placeholder="Ex: Jean Van Durme / Akela..."
                    className="w-full px-4 py-2.5 rounded-xl bg-scout-green-card border border-scout-yellow/40 text-white placeholder:text-cream/40 focus:outline-none focus:border-scout-yellow text-sm"
                  />
                  {nameError && (
                    <p className="text-xs text-red-300 font-medium">{nameError}</p>
                  )}
                </div>

                <div className="sm:col-span-4">
                  <button
                    type="button"
                    onClick={handleStartGame}
                    className="w-full btn-accent text-xs sm:text-sm py-2.5 px-5 font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-transform"
                  >
                    <Play size={16} />
                    <span>Démarrer le jeu</span>
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-cream/70 leading-relaxed italic">
                * Règles anti-triche : les 20 définitions sont floutées tant que tu n'as pas cliqué sur Démarrer. Une fois lancé, le chrono démarre et tu n'as droit qu'à une seule chance !
              </p>
            </motion.div>
          ) : null}

          {/* Main Game Arena: 18x17 Grid + Clues Panel */}
          <div className="grid lg:grid-cols-12 gap-8 items-start pt-2">
            
            {/* Interactive Grid 18 Rows x 17 Columns */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-3.5 w-full">

              {/* Active Clue Bar (Crucial on mobile phones when on-screen keyboard is open!) */}
              {activeWord && hasStarted && !completedAttempt && (
                <div className="w-full p-2.5 sm:p-3.5 rounded-2xl bg-scout-blue border-2 border-scout-yellow/80 text-white shadow-xl flex items-center justify-between gap-2 transition-all">
                  <button
                    type="button"
                    onClick={handlePrevWord}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-scout-yellow border border-scout-yellow/30 active:scale-95 transition-transform shrink-0"
                    title="Mot précédent"
                    aria-label="Mot précédent"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div 
                    onClick={() => handleSelectCell(selectedCell || `${activeWord.r}-${activeWord.c}`, true)}
                    className="flex-1 min-w-0 cursor-pointer text-center group px-1"
                    title="Cliquer pour basculer Horizontal / Vertical"
                  >
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-0.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md bg-scout-yellow text-scout-green font-black text-xs font-mono shadow-sm">
                        {activeWord.num}. {activeWord.dir === "H" ? "→ Horizontal" : "↓ Vertical"}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold text-scout-yellow bg-scout-yellow/15 px-2 py-0.5 rounded border border-scout-yellow/30">
                        {activeWord.word.length} lettres
                      </span>
                      <span className="text-[10px] text-cream/70 group-hover:text-scout-yellow hidden xs:inline transition-colors">
                        ⇄ Pivoter
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-cream leading-tight truncate group-hover:text-white">
                      {activeWord.clue}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextWord}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-scout-yellow border border-scout-yellow/30 active:scale-95 transition-transform shrink-0"
                    title="Mot suivant"
                    aria-label="Mot suivant"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}

              {/* Mobile Scroll Hint */}
              <div className="sm:hidden flex items-center justify-center gap-2 p-2 rounded-xl bg-scout-blue/60 border border-scout-yellow/30 text-xs text-scout-yellow font-mono text-center">
                <span className="animate-pulse">👈</span>
                <span>Fais glisser la grille pour voir les 17 colonnes</span>
                <span className="animate-pulse">👉</span>
              </div>

              {/* Scrollable Grid Container */}
              <div className="w-full max-w-full overflow-x-auto overscroll-x-contain p-2.5 sm:p-4 rounded-2xl bg-scout-blue/70 border-2 border-scout-yellow/40 shadow-inner touch-pan-x">
                <div 
                  className="w-max mx-auto grid gap-1 sm:gap-1.5 select-none grid-cols-[repeat(17,28px)] sm:grid-cols-[repeat(17,32px)] md:grid-cols-[repeat(17,34px)]"
                >
                  {Array.from({ length: 18 }).map((_, r) => (
                    Array.from({ length: 17 }).map((_, c) => {
                      const coord = `${r}-${c}`;
                      const cellData = PUZZLE_GRID[coord];
                      
                      if (!cellData) {
                        return (
                          <div 
                            key={coord} 
                            className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[34px] md:h-[34px] shrink-0 bg-scout-green/30 rounded-md border border-scout-green/40 opacity-20 pointer-events-none" 
                          />
                        );
                      }

                      const isSelected = selectedCell === coord;
                      const isInActiveWord = activeWordCells.has(coord);
                      const isLocked = !hasStarted || !!completedAttempt;

                      return (
                        <div 
                          key={coord} 
                          className={`relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[34px] md:h-[34px] shrink-0 rounded-md transition-all ${
                            isSelected ? 'ring-2 ring-scout-yellow scale-105 z-20 shadow-md' :
                            isInActiveWord ? 'ring-1 ring-scout-yellow/60 z-10' :
                            ''
                          }`}
                        >
                          {cellData.num && (
                            <span className="absolute top-0.5 left-0.5 text-[8px] sm:text-[9px] font-bold text-scout-yellow z-10 pointer-events-none leading-none">
                              {cellData.num}
                            </span>
                          )}
                          <input
                            ref={(el) => { inputRefs.current[coord] = el; }}
                            type="text"
                            disabled={isLocked}
                            maxLength={1}
                            autoCapitalize="characters"
                            autoCorrect="off"
                            autoComplete="off"
                            spellCheck={false}
                            inputMode="text"
                            value={userInputs[coord] || ""}
                            onFocus={() => handleSelectCell(coord)}
                            onChange={(e) => handleCellChange(coord, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(coord, e)}
                            className={`w-full h-full min-w-0 min-h-0 p-0 m-0 text-center font-bold text-base rounded-md focus:outline-none uppercase appearance-none ${
                              isLocked ? 'cursor-not-allowed opacity-90' : 'cursor-pointer select-all'
                            } transition-colors ${
                              isSelected 
                                ? 'bg-scout-yellow text-scout-green border-2 border-scout-yellow font-black shadow-lg' 
                                : isInActiveWord
                                ? 'bg-scout-blue text-scout-yellow border border-scout-yellow/70 font-bold'
                                : 'bg-scout-green-card text-scout-yellow border border-scout-yellow/30 hover:border-scout-yellow/60 font-semibold'
                            }`}
                          />
                        </div>
                      );
                    })
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1 w-full">
                <button
                  type="button"
                  disabled={!hasStarted || !!completedAttempt}
                  onClick={checkCrossword}
                  className="btn-accent text-xs py-2.5 px-6 font-bold flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CheckCircle2 size={15} />
                  <span>Vérifier la grille</span>
                </button>

                <button
                  type="button"
                  disabled={!hasStarted || !!completedAttempt}
                  onClick={giveHint}
                  className="btn-outline text-xs py-2.5 px-4 flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Révèle une lettre au hasard (+30s chrono)"
                >
                  <Lightbulb size={14} className="text-scout-yellow" />
                  <span>Indice (+30s)</span>
                </button>

                <button
                  type="button"
                  disabled={!hasStarted || !!completedAttempt}
                  onClick={clearGridInputs}
                  className="btn-outline text-xs py-2.5 px-4 flex items-center gap-1.5 cursor-pointer hover:text-red-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Effacer mes lettres"
                >
                  <RotateCcw size={14} />
                  <span>Effacer mes lettres</span>
                </button>
              </div>

              {hintsUsed > 0 && (
                <span className="text-[11px] text-cream/60 font-mono">
                  {hintsUsed} indice(s) utilisé(s) (+{hintsUsed * 30}s au chrono)
                </span>
              )}
            </div>

            {/* Clues Panel: Across & Down (With anti-cheat blur if not started) */}
            <div className="lg:col-span-6 relative space-y-4 text-xs sm:text-sm">
              
              {/* Anti-cheat blur overlay when not started yet */}
              {!hasStarted && !completedAttempt && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-scout-blue/95 backdrop-blur-md rounded-2xl border-2 border-scout-yellow/50 shadow-2xl space-y-3">
                  <div className="w-12 h-12 rounded-full bg-scout-yellow/20 border border-scout-yellow flex items-center justify-center text-scout-yellow mx-auto">
                    <Lock size={22} />
                  </div>
                  <h5 className="font-display font-bold text-white text-base sm:text-lg">
                    20 Définitions masquées (Anti-triche)
                  </h5>
                  <p className="text-xs sm:text-sm text-cream/90 max-w-sm leading-relaxed">
                    Pour garantir un concours 100% honnête, entre ton nom ci-dessus et clique sur <strong>"Démarrer le jeu"</strong> pour dévoiler les définitions et déclencher le chrono officiel !
                  </p>
                  <span className="text-[11px] font-mono text-scout-yellow bg-scout-yellow/15 px-3 py-1 rounded-full border border-scout-yellow/30">
                    🔒 1 seule tentative autorisée
                  </span>
                </div>
              )}

              <div className={`space-y-4 transition-all duration-300 ${!hasStarted && !completedAttempt ? 'filter blur-md select-none pointer-events-none opacity-20' : ''}`}>
                {/* Across Definitions */}
                <div className="p-4 rounded-xl bg-scout-blue/50 border border-scout-yellow/30 space-y-2.5 shadow-md">
                  <div className="flex items-center justify-between border-b border-scout-yellow/20 pb-2">
                    <h4 className="font-bold uppercase tracking-wider text-scout-yellow flex items-center gap-2">
                      <span>Horizontalement</span>
                      <span className="text-[10px] font-mono font-normal text-cream/60">(10 définitions)</span>
                    </h4>
                    <span className="text-[10px] text-cream/60">Cliquez pour repérer</span>
                  </div>

                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {MONTHLY_WORDS.filter(w => w.dir === "H").map(w => {
                      const isActive = activeWordNum === w.num;
                      return (
                        <div
                          key={`H-${w.num}`}
                          onClick={() => handleSelectWord(w)}
                          className={`p-2 rounded-lg cursor-pointer transition-all ${
                            isActive 
                              ? 'bg-scout-yellow/20 border border-scout-yellow text-white font-medium pl-3' 
                              : 'hover:bg-scout-blue/80 text-cream/90 border border-transparent'
                          }`}
                        >
                          <span className="font-black text-scout-yellow mr-1.5">
                            {w.num}.
                          </span>
                          <span>{w.clue}</span>
                          <span className="text-[10px] font-mono text-scout-yellow/80 ml-1.5">
                            ({w.word.length} lettres)
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Down Definitions */}
                <div className="p-4 rounded-xl bg-scout-blue/50 border border-scout-yellow/30 space-y-2.5 shadow-md">
                  <div className="flex items-center justify-between border-b border-scout-yellow/20 pb-2">
                    <h4 className="font-bold uppercase tracking-wider text-scout-yellow flex items-center gap-2">
                      <span>Verticalement</span>
                      <span className="text-[10px] font-mono font-normal text-cream/60">(10 définitions)</span>
                    </h4>
                    <span className="text-[10px] text-cream/60">Cliquez pour repérer</span>
                  </div>

                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {MONTHLY_WORDS.filter(w => w.dir === "V").map(w => {
                      const isActive = activeWordNum === w.num;
                      return (
                        <div
                          key={`V-${w.num}`}
                          onClick={() => handleSelectWord(w)}
                          className={`p-2 rounded-lg cursor-pointer transition-all ${
                            isActive 
                              ? 'bg-scout-yellow/20 border border-scout-yellow text-white font-medium pl-3' 
                              : 'hover:bg-scout-blue/80 text-cream/90 border border-transparent'
                          }`}
                        >
                          <span className="font-black text-scout-yellow mr-1.5">
                            {w.num}.
                          </span>
                          <span>{w.clue}</span>
                          <span className="text-[10px] font-mono text-scout-yellow/80 ml-1.5">
                            ({w.word.length} lettres)
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Feedback Messages */}
          {crosswordStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-gradient-to-r from-green-950 via-scout-blue to-green-950 border-2 border-scout-yellow text-scout-yellow shadow-2xl flex flex-col sm:flex-row items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-scout-yellow/20 border border-scout-yellow flex items-center justify-center shrink-0">
                <Trophy size={30} className="text-scout-yellow" />
              </div>
              <div className="space-y-1 text-center sm:text-left flex-1">
                <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  <span>Bravo {completedAttempt?.name || playerName} ! Grille 100% complétée avec succès !</span>
                  <Sparkles size={18} className="text-scout-yellow" />
                </h4>
                <p className="text-xs sm:text-sm text-cream/90">
                  Temps officiel enregistré : <strong className="text-scout-yellow font-mono text-base">{finalTime || formatTime(timerSeconds)}</strong>. Un vrai scout observateur et rapide !
                </p>
                <p className="text-[11px] text-cream/70">
                  Ta tentative est verrouillée et prise en compte pour le classement de septembre. Le prix sera remis à la prochaine réunion !
                </p>
              </div>
            </motion.div>
          )}

          {crosswordStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-red-950/85 border border-red-500/80 text-red-200 text-xs sm:text-sm font-semibold flex items-center gap-3 shadow-lg"
            >
              <AlertCircle size={20} className="shrink-0 text-red-400" />
              <span>{errorMessage || "Il y a encore des lettres à corriger ou à compléter. Ne baissez pas les bras !"}</span>
            </motion.div>
          )}
        </motion.div>

      </div>

      {/* Modal for Coin des Anciens */}
      <AnimatePresence>
        {activeModal === "anciens" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-scout-green border-2 border-scout-yellow/40 rounded-3xl p-6 sm:p-8 text-cream space-y-5 shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-scout-blue text-scout-yellow hover:bg-scout-yellow hover:text-scout-blue transition-colors cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              {/* Image at the top of the modal */}
              <div className="w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-scout-yellow/30 bg-scout-blue/40 shadow-inner">
                <img 
                  src="/anciens.jpg" 
                  alt="Les anciens de la 49" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex items-center gap-3 border-b border-scout-yellow/20 pb-3">
                <Users size={24} className="text-scout-yellow shrink-0" />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-scout-yellow">
                  {t('extras.anciensModalTitle')}
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-scout-blue/40 border border-scout-yellow/20 text-cream/90 text-sm leading-relaxed space-y-4 font-normal">
                <p>
                  Un petit mot pour nos anciens : la flamme brille toujours ! On est encore en train de peaufiner cette section (les chefs travaillent dur en coulisses !), mais voici déjà un petit avant-goût de ce qui se prépare :
                </p>

                {/* Clean, styled bulleted list */}
                <ul className="space-y-2 pt-1 pl-2">
                  <li className="flex items-center gap-2.5 text-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>Le Passage (27/09)</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>Mosselen souper</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>Souper Parents</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>La Fête 49 Nonante</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-scout-yellow font-semibold pt-0.5">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>... ET bien plus encore !</span>
                  </li>
                </ul>

                <p className="text-xs text-scout-yellow/90 font-serif italic pt-3 border-t border-scout-yellow/15">
                  Les dates exactes suivront bientôt (probablement pour l'année 2027 !)
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button onClick={() => setActiveModal(null)} className="btn-accent text-xs">
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal for 49 Nonante */}
      <AnimatePresence>
        {activeModal === "nonante" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-scout-green border-2 border-scout-yellow/40 rounded-3xl p-6 sm:p-8 text-cream space-y-5 shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-scout-blue text-scout-yellow hover:bg-scout-yellow hover:text-scout-blue transition-colors cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              {/* Image at the top of the modal */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-scout-yellow/30 bg-scout-blue/40 shadow-inner">
                <img 
                  src="/49nonante.jpg" 
                  alt="49 Nonante Ambitions" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-3 border-b border-scout-yellow/20 pb-3">
                <History size={24} className="text-scout-yellow shrink-0" />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-scout-yellow">
                  {t('extras.nonanteModalTitle')}
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-scout-blue/40 border border-scout-yellow/20 text-cream/90 text-sm leading-relaxed space-y-4 font-normal">
                <p>
                  Un immense merci pour votre soutien ! Nos grandes ambitions pour fêter nos 90 ans se préparent doucement. Le programme n'est pas encore 100% définitif, mais on vous concocte déjà de très beaux projets :
                </p>

                {/* Clean, styled bulleted list */}
                <ul className="space-y-2 pt-1 pl-2">
                  <li className="flex items-center gap-2.5 text-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>Le Grand Mosselen souper</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>La Fête 49 Nonante</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>Le Quiz 49 Nonante</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>Habits 49 Nonante</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-scout-yellow font-semibold pt-0.5">
                    <span className="w-2 h-2 rounded-full bg-scout-yellow shrink-0"></span>
                    <span>... ET plein d'autres surprises !</span>
                  </li>
                </ul>

                <p className="text-xs text-scout-yellow/90 font-serif italic pt-3 border-t border-scout-yellow/15">
                  Les dates exactes de ces événements suivront bientôt (probablement pour l'année 2027 !)
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button onClick={() => setActiveModal(null)} className="btn-accent text-xs">
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

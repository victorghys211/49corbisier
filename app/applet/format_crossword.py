import json

words_info = {
    "FOULARD": "Le seul bout de ton uniforme que t'es vraiment obligé d'avoir sur toi tout le temps",
    "BALOO": "Le chef des louveteaux qui aime bien manger et dormir (ours).",
    "ZORRO": "Le fameux saboteur de la Troupe.",
    "AIGLES": "AIGLES OP 3! 1...2...3...",
    "RATION": "Ce que les chefs veulent communiquer quand ils sifflent « tit-taat, tit-taat-tit » en morse.",
    "HOATZIN": "Le totem du nouveau master.",
    "BIDONBAL": "Le jeu chez les scouts où on lance des balles les uns sur les autres et contre des tonneaux.",
    "HIGHLANDGAMES": "Les jeux de sport légendaires qui viennent d'Écosse.",
    "TANIERES": "Les magnifiques camps que les louveteaux construisent dans les bois.",
    "BISONS": "Le gros animal à cornes des plaines Américaines.",
    "PILOTI": "La construction qu'on construit pour dormir en hauteur sur des lits en cordes.",
    "FEUDECAMP": "Le meilleur moment du soir au camp avec des flammes.",
    "SIFFLET": "Le truc autour du cou du chef pour que tout le monde se rassemble.",
    "HACHE": "L'outil pour couper des gros arbres dans la fôret.",
    "LAC": "L'endroit avec plein d'eau où on se baigne parfois l'été.",
    "TIQUE": "La petite bête noire qui se met dans les endroits chaud sur le corps.",
    "HAMEUZY": "Le village en France où on était au grand camp cet été.",
    "CASSEROLE": "Le truc en métal sur le feu pour bouillir de l'eau.",
    "CASTORS": "Comment on appelle les scouts de la 5ème et 6ème année.",
    "BG": "L'endroit au camp pour aller aux toilettes."
}

raw_placed = [
    ('HIGHLANDGAMES', 2, 0, 'H'),
    ('FEUDECAMP', 1, 11, 'V'),
    ('CASSEROLE', 6, 11, 'H'),
    ('TANIERES', 1, 5, 'V'),
    ('HAMEUZY', 2, 0, 'V'),
    ('BIDONBAL', 0, 7, 'V'),
    ('CASTORS', 1, 9, 'V'),
    ('PILOTI', 9, 11, 'H'),
    ('RATION', 6, 16, 'V'),
    ('BISONS', 11, 12, 'H'),
    ('AIGLES', 0, 2, 'V'),
    ('FOULARD', 3, 18, 'V'),
    ('SIFFLET', 11, 14, 'V'),
    ('HOATZIN', 4, 17, 'H'),
    ('HACHE', 2, 15, 'V'),
    ('BALOO', 11, 12, 'V'),
    ('ZORRO', 4, 21, 'V'),
    ('TIQUE', 17, 14, 'H'),
    ('BG', 0, 7, 'H'),
    ('LAC', 15, 14, 'H')
]

# Verify collisions and build grid
grid = {}
for w, r, c, d in raw_placed:
    dr, dc = (0, 1) if d == 'H' else (1, 0)
    for i, ch in enumerate(w):
        pos = (r + dr * i, c + dc * i)
        if pos in grid and grid[pos] != ch:
            print(f"CONFLICT AT {pos}: {grid[pos]} vs {ch}")
        grid[pos] = ch

# Find grid bounds
min_r = min(r for r, c in grid.keys())
max_r = max(r for r, c in grid.keys())
min_c = min(c for r, c in grid.keys())
max_c = max(c for r, c in grid.keys())

num_rows = max_r - min_r + 1
num_cols = max_c - min_c + 1
print(f"Grid: {num_rows} rows x {num_cols} cols (min_r={min_r}, min_c={min_c})")

# Determine standard crossword numbers:
# Scan row by row, col by col. If a cell starts ANY word (H or V), assign next number!
cell_to_number = {}
cur_num = 1

# List of start positions
start_positions = set()
for w, r, c, d in raw_placed:
    start_positions.add((r, c))

for r in range(min_r, max_r + 1):
    for c in range(min_c, max_c + 1):
        if (r, c) in start_positions:
            cell_to_number[(r, c)] = cur_num
            cur_num += 1

# Now build final words list with standard numbers
final_words = []
for w, r, c, d in raw_placed:
    num = cell_to_number[(r, c)]
    clue = words_info[w]
    final_words.append({
        "num": num,
        "dir": d,
        "r": r,
        "c": c,
        "word": w,
        "clue": clue
    })

# Sort final words: first Across by num, then Down by num
final_words.sort(key=lambda x: (x["dir"] != "H", x["num"]))

print("\n--- MONTHLY_WORDS ---")
print("const MONTHLY_WORDS: CrosswordWord[] = [")
print("  // Horizontaux (Across)")
for fw in final_words:
    if fw["dir"] == "H":
        print(f'  {{ num: {fw["num"]}, dir: "H", r: {fw["r"]}, c: {fw["c"]}, word: "{fw["word"]}", clue: "{fw["clue"]}" }},')
print("\n  // Verticaux (Down)")
for fw in final_words:
    if fw["dir"] == "V":
        print(f'  {{ num: {fw["num"]}, dir: "V", r: {fw["r"]}, c: {fw["c"]}, word: "{fw["word"]}", clue: "{fw["clue"]}" }},')
print("];\n")

print("--- PUZZLE_GRID ---")
print("const PUZZLE_GRID: Record<string, { letter: string; num?: number }> = {")
for r in range(min_r, max_r + 1):
    for c in range(min_c, max_c + 1):
        if (r, c) in grid:
            key = f"{r}-{c}"
            letter = grid[(r, c)]
            num_str = f", num: {cell_to_number[(r, c)]}" if (r, c) in cell_to_number else ""
            print(f'  "{key}": {{ letter: "{letter}"{num_str} }},')
print("};")

# Print ASCII art
print("\n--- ASCII GRID ---")
for r in range(min_r, max_r + 1):
    line = ""
    for c in range(min_c, max_c + 1):
        if (r, c) in grid:
            line += grid[(r, c)] + " "
        else:
            line += ". "
    print(f"{r:2d}: {line}")

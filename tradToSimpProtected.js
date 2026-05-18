// Ver2.0.1 (18/05/2026)
// User-managed list of protected phrases.
// Each entry preserves the phrase through character-level conversion
// and restores to the desired Simplified result.

// Example entries:
// { trad: "顯著", simp: "显著" }
// { trad: "著名",  simp: "著名" } // keep "著名" as-is, no char change

var tradToSimpProtected = [
    { trad: "顯著", simp: "显著" },
    { trad: "著名",  simp: "著名" }
];

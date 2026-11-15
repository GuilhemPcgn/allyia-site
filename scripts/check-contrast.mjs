// Vérifie chaque paire texte/fond utilisée sur le site (WCAG 2.1 AA).
const c = {
  ink: '#1a1a2e', plum: '#3a1a4f', muted: '#4a4560', link: '#5e3594',
  violet: '#ae80d6', white: '#ffffff', paper: '#fbf9fe', lavender: '#f1e8fa',
  mint: '#dcf3ea', sky: '#dde4fb', cream: '#fff4d9', footerText: '#eadff5',
  violetHover: '#bd96df', plumHover: '#52276e', green: '#2d9f87', line: '#d9cbe8',
};
const lum = (h) => {
  const v = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(c[a]), lum(c[b])].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
// [texte, fond, seuil]
const pairs = [];
for (const bg of ['white', 'paper', 'lavender', 'mint', 'sky', 'cream'])
  for (const fg of ['ink', 'plum', 'muted', 'link']) pairs.push([fg, bg, 4.5]);
pairs.push(['white', 'plum', 4.5], ['footerText', 'plum', 4.5], ['white', 'plumHover', 4.5],
  ['ink', 'violet', 4.5], ['ink', 'violetHover', 4.5], ['violet', 'plum', 3],
  ['green', 'white', 3], ['plum', 'white', 3]);
let fail = 0;
for (const [fg, bg, min] of pairs) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) fail++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${fg} / ${bg} : ${r.toFixed(2)} (min ${min})`);
}
process.exit(fail ? 1 : 0);

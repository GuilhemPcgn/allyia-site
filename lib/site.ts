// Contenu partagé du site. Source : « Allyia — Brief pour le site internet ».
// Règle : rien ici ne doit dépasser ce que l'app fait réellement.

export const site = {
  name: 'Allyia',
  url: 'https://allyia.fr',
  tagline: 'Entre deux séances, la vie continue. Allyia en garde la trace.',
  description:
    "Allyia est le compagnon de l'entre-deux séances : une app iPhone pour garder la trace de ce que tu vis et arriver chez ton psychologue avec tes sujets prêts. Lancement prévu au printemps 2027.",
  email: 'contact@allyia.fr',
  instagram: 'https://instagram.com/allyia_app',
  linkedin: 'https://linkedin.com/company/allyia',
};

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/application', label: "L'application" },
  { href: '/confidentialite', label: 'Confidentialité' },
  { href: '/psychologues', label: 'Pour les psychologues' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/faq', label: 'FAQ et contact' },
];

export const legalNav = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/cgu', label: "Conditions d'utilisation" },
  { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
];

// Informations légales à fournir avant mise en ligne. Tant qu'une valeur est
// vide, la page affiche un marqueur « À compléter » bien visible.
export const legal = {
  editorName: '',
  editorForm: '',
  editorAddress: '',
  editorId: '',
  publicationDirector: '',
  waitlistHost: '',
  lastUpdate: '',
};

export const emergency = [
  { number: '3114', label: 'Prévention du suicide, gratuit, 24 h sur 24' },
  { number: '15', label: 'SAMU' },
  { number: '112', label: "Numéro d'urgence européen" },
];

export const pillars = [
  {
    title: 'Garder la trace',
    text: 'Séances, journal, humeur, anxiété, énergie, sommeil, traitements : tout au même endroit.',
    tone: 'lavender',
  },
  {
    title: 'Préparer la séance',
    text: 'Tes sujets à aborder, un résumé court et des points proposés, avec un rappel la veille.',
    tone: 'mint',
  },
  {
    title: 'Garder le contrôle',
    text: "Tes données restent sur ton téléphone, tes textes sont chiffrés, et chaque point proposé par l'IA se modifie ou se supprime.",
    tone: 'sky',
  },
] as const;

export const notAllyia = [
  'Un psychologue numérique, ou un remplaçant de ton suivi.',
  'Un outil de diagnostic : aucun score de risque, aucune recommandation de traitement.',
  'Une application de méditation ou de bien-être générique.',
  'Un chatbot.',
];

export type Module = {
  id: string;
  title: string;
  text: string;
  note: string;
  capture?: { src: string; width: number; height: number; alt: string };
  tone: 'lavender' | 'mint' | 'sky' | 'cream';
};

export const modules: Module[] = [
  {
    id: 'seances',
    title: 'Séances',
    text: 'Note ce que tu veux aborder et règle ton rythme : chaque semaine, tous les quinze jours ou chaque mois. Allyia te rappelle la veille et reporte les sujets non abordés.',
    note: "Le rappel est neutre : il ne mentionne jamais le mot « psy » sur l'écran verrouillé.",
    capture: {
      src: '/captures/en-seance.webp',
      width: 720,
      height: 1420,
      alt: "Écran « En séance » : l'intention du jour, puis la liste des points à aborder. Un point est coché, les autres attendent, certains sont marqués « Important pour moi ».",
    },
    tone: 'lavender',
  },
  {
    id: 'journal',
    title: 'Journal',
    text: 'Écris librement. Allyia en propose un résumé court et jusqu’à trois points pour ta prochaine séance. Tu modifies ou tu supprimes chacun.',
    note: 'Chaque texte généré porte l’étiquette « Proposé par l’IA » ou « Résumé automatique ».',
    capture: {
      src: '/captures/journal.webp',
      width: 720,
      height: 1475,
      alt: 'Écran « Journal » : une zone pour écrire, une recherche, puis des entrées datées. Chaque résumé porte l’étiquette « Proposé par l’IA » et indique le nombre de points retenus pour la séance.',
    },
    tone: 'mint',
  },
  {
    id: 'check-in',
    title: 'Check-in du jour',
    text: 'Note ton humeur, ton anxiété et ton énergie de 1 à 10. Tu vois des tendances sur 7 jours.',
    note: 'Les tendances sont des observations, jamais des alertes ni des verdicts.',
    capture: {
      src: '/captures/check-in.webp',
      width: 720,
      height: 1112,
      alt: 'Carte « Ton humeur » : une semaine de check-ins, un visage par jour. En dessous, le résumé des 7 derniers jours : nombre de check-ins, moyennes notées et prises de traitement notées.',
    },
    tone: 'lavender',
  },
  {
    id: 'exercices',
    title: 'Exercices',
    text: 'Garde les exercices proposés en séance et reçois des rappels doux.',
    note: 'Les exercices viennent de la séance avec ton psychologue, pas d’Allyia.',
    capture: {
      src: '/captures/exercices.webp',
      width: 720,
      height: 620,
      alt: 'Liste « Ce que j’essaie » : quatre exercices, par exemple « Écrire 3 lignes sur ma journée », chacun avec son heure de rappel et le nombre de fois fait cette semaine.',
    },
    tone: 'cream',
  },
  {
    id: 'traitements',
    title: 'Traitements',
    text: 'Ajoute un médicament à la main ou scanne la boîte ou l’ordonnance. Allyia rappelle les prises, suit le stock et signale le renouvellement.',
    note: 'Le scan se fait sur le téléphone ; les noms sont contrôlés avec la base publique de l’ANSM téléchargée sur l’appareil. Le scan et le rappel de renouvellement font partie d’Allyia+.',
    capture: {
      src: '/captures/traitements.webp',
      width: 720,
      height: 1234,
      alt: 'Fiche d’un médicament : dosage, heure de prise, note personnelle, bouton pour ajouter une boîte au stock, prise du jour à noter « Pris » ou « Sauter », puis l’historique des prises.',
    },
    tone: 'sky',
  },
  {
    id: 'sommeil',
    title: 'Sommeil',
    text: 'Si tu l’autorises, Allyia lit l’app Santé et met la durée et la régularité de ton sommeil en regard de ton humeur.',
    note: 'Lecture seule, avec ton autorisation. Allyia n’écrit rien dans l’app Santé.',
    tone: 'sky',
  },
  {
    id: 'securite',
    title: 'Sécurité',
    text: 'Face ID, verrouillage automatique, textes chiffrés.',
    note: 'Le détail est sur la page Confidentialité et sécurité.',
    capture: {
      src: '/captures/securite.webp',
      width: 720,
      height: 882,
      alt: 'Écran « Profil » : réglages des notifications, protection par Face ID, Allyia+, sommeil, langue, support, export et restauration d’une sauvegarde.',
    },
    tone: 'cream',
  },
];

export const freeFeatures =
  'journal et résumés, points à aborder, préparation, mode séance, check-ins, exercices, suivi des traitements, sommeil';

export const plusFeatures = [
  'Tes tendances au-delà de 7 jours',
  'Le scan de tes boîtes de médicaments',
  'Le scan de ton ordonnance',
  'Le rappel de renouvellement de tes traitements',
  'Le bilan PDF à montrer à ton ou ta psy',
];

export const faq: { q: string; a: string }[] = [
  {
    q: "Qu'est-ce qu'Allyia ?",
    a: "Une app iPhone qui t'aide à garder la trace de ce que tu vis entre deux séances chez ton psychologue, et à arriver en séance avec tes sujets prêts.",
  },
  {
    q: 'Allyia remplace-t-elle mon psychologue ?',
    a: "Non. Allyia ne soigne pas et ne fait aucun diagnostic. Elle t'aide à préparer ce que tu travailles avec lui.",
  },
  { q: "À qui s'adresse l'app ?", a: 'Aux personnes suivies par un psychologue.' },
  {
    q: 'Allyia pose-t-elle un diagnostic ou un score de risque ?',
    a: "Non, jamais. Elle formule des observations (par exemple : « tu as noté moins d'énergie cette semaine »), sans verdict ni alerte.",
  },
  {
    q: 'Où sont mes données ?',
    a: "Sur ton iPhone. Ton journal et tes séances sont chiffrés, et la clé reste sur ton téléphone. L'app fonctionne sans réseau.",
  },
  {
    q: "L'IA lit-elle mon journal ?",
    a: "Par défaut, l'IA tourne sur ton iPhone et rien n'en sort. L'IA en ligne est désactivée : elle ne s'active qu'avec ton accord explicite. Chaque texte généré est étiqueté, et tu peux le modifier ou le supprimer.",
  },
  {
    q: "Mon psychologue voit-il ce que j'écris ?",
    a: "Non. En V1, rien n'est partagé. Une version prévue pour les psychologues te laissera choisir ce que tu partages.",
  },
  {
    q: 'Mes notifications peuvent-elles me trahir ?',
    a: "Non. Elles restent neutres : jamais de contenu sensible, jamais le mot « psy » sur l'écran verrouillé.",
  },
  {
    q: "Quand et où puis-je l'utiliser ?",
    a: "Lancement prévu au printemps 2027, sur iPhone. Il n'y a pas encore d'application Android.",
  },
  {
    q: 'Combien ça coûte ?',
    a: `Tout ce qui sert ta séance est gratuit : ${freeFeatures}. Un abonnement, Allyia+, ajoute les tendances au-delà de 7 jours, le scan des boîtes et de l'ordonnance, le rappel de renouvellement et le bilan PDF. Son prix prévu est de 4,99 € par mois ; il sera confirmé au lancement.`,
  },
  {
    q: 'Et si ça ne va pas ?',
    a: "Allyia n'est pas un service d'urgence. Appelle le 3114 (prévention du suicide, gratuit, 24 h sur 24), le 15 ou le 112. Ces numéros sont accessibles depuis le journal.",
  },
  {
    q: 'Je suis psychologue : comment participer ?',
    a: "Une version pour les psychologues est prévue en 2028. Vous pouvez vous inscrire sur la liste d'attente et candidater à la bêta.",
  },
];

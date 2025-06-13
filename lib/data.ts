import { NavItem, SocialLink, TeamMember, Value, Commitment, AppFeature, BlogPost, GalleryImage } from './types';

export const siteConfig = {
  name: "Allyia",
  description: "Structurer un réflexe digital simple, fluide et éthique pour mieux vivre avec sa santé mentale",
  url: "https://allyia.com",
  logoText: "ALLYIA"
};

export const navItems: NavItem[] = [
  { title: "Accueil", href: "/" },
  { title: "A Propos", href: "/a-propos" },
  { title: "L'application", href: "/application" },
  { title: "Communauté", href: "/communaute" },
  { title: "Espace Pro", href: "/espace-pro" },
  // { title: "Participez", href: "/participez" },
];

export const socialLinks: SocialLink[] = [
  { platform: "Email", url: "mailto:contact@allyia.fr", icon: "mail" },
  { platform: "Instagram", url: "https://instagram.com/allyia_app", icon: "instagram" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/allyia", icon: "linkedin" },
  { platform: "Discord", url: "https://discord.gg/allyia", icon: "message-circle" },
];

export const mission = {
  title: "Notre mission",
  description: "La mission d’Allyia est de structurer un réflexe digital simple et quotidien pour prendre soin de sa santé mentale, à travers une expérience fluide, personnalisée et rassurante. Grâce à une IA spécialisée et respectueuse, Allyia permet à chacun de mieux se connaître, mieux se suivre et mieux s’équilibrer, en complément des professionnels de santé.",
  image: "/img/MainHommeRobot.avif"
};

export const history = {
  title: "Notre histoire",
  description: "Dans une société hyperconnectée, où l’on peut tout monitorer sauf son bien-être mental, des millions de personnes avancent à tâtons, souvent seules, face à leurs troubles psychiques. Alors que l’anxiété, les troubles de l’humeur et les souffrances invisibles explosent, prendre soin de sa santé mentale reste un parcours flou, stigmatisant, peu structuré. Comme s’il fallait attendre d’aller mal pour avoir le droit d’agir. Allyia est née de ce paradoxe. De cette urgence partagée entre deux amis Guilhem et Tallal, de réconcilier le digital avec un sujet intime, sensible, et essentiel : notre équilibre psychique. Guilhem, développeur full-stack, vit avec un trouble bipolaire diagnostiqué. Tallal, planneur stratégique, a été formé à décrypter les usages et les besoins invisibles. Ensemble, ils imaginent une application éthique, fluide, intuitive, qui transforme la technologie en compagnon du quotidien, au service d’un acte simple : prendre soin de soi, mentalement, chaque jour.",
  image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
};

export const teamMembers: TeamMember[] = [
  {
    name: "Guilhem Poincignon",
    role: "CEO & CTO, Co-fondateur",
    bio: "Développeur full stack, Guilhem assure toute la conception technique d’Allyia. Avant le code, il y avait le rythme : il a longtemps été DJ et producteur musical sous le nom de Madcat, reconnu sur les scènes électroniques françaises. Une sensibilité artistique qu’il met aujourd’hui au service de l’ergonomie, de l’intelligence émotionnelle et de la fluidité d’usage de l’application. Diagnostiqué bipolaire, Guilhem apporte au projet son vécu personnel. Il sait ce que c’est que de vivre avec un trouble : les suivis, les décalages, les oublis, l’isolement, mais aussi la résilience. Il construit Allyia comme un repère technologique simple, utile et sincère, au service de l’humain.",
    image: "/img/Guilhem.png",
    quote: " « Je veux que cette app soit un appui. Un outil discret, mais présent. Un espace où déposer sans pression, digne de ce que j'aurai aimé avoir en poche lorsque ça allait mal. » ",
  },
  {
    name: "Tallal Ibnaiche",
    role: "CEO & CSMO, Co-fondateur",
    bio: "Planneur stratégique de formation, Tallal a construit un parcours riche, à la croisée de plusieurs univers : publicité, conseil en stratégie digitale, événementiel et milieux artistiques. Mais aussi et surtout une expérience marquante en tant que manager et directeur de restaurants bistronomiques, où il a dirigé des équipes dans des environnements exigeants. C’est dans cette expérience humaine qu’il a développé une sensibilité profonde aux frustrations, aux fragilités et aux besoins de bien-être de ses collaborateurs. Ce vécu alimente aujourd’hui toute sa démarche : concevoir un outil numérique qui respecte l’utilisateur, qui l’accompagne avec empathie, sans injonction, dans ses hauts comme ses bas. Tallal pilote la stratégie produit, la direction éditoriale, le positionnement et l’expérience utilisateur d’ALLYIA.",
    image: "/img/Tallal.png",
    quote: " « Allyia est un projet de soin, mais aussi d’écoute. J’ai vu trop de gens s’effondrer en silence, par manque d’espace. Je veux qu’on leur en donne un. » ",
  }
];

export const values: Value[] = [
  {
    title: "Bienveillance",
    description: "Chez Allyia, la bienveillance n’est pas un principe : c’est un cadre. Chaque fonctionnalité, chaque mot, chaque interaction est conçu pour apaiser, soutenir et respecter la vulnérabilité des utilisateurs.",
    icon: "heart"
  },

  {
    title: "Pair-aidance",
    description: "Nous croyons en la force de celles et ceux qui ont traversé, compris et transformé leurs propres fragilités. Allyia est porté par des personnes concernées, pour des personnes concernées. C’est ce regard de l’intérieur, humble et lucide, qui structure notre approche et nourrit notre engagement.",
    icon: "users"
  },
  {
    title: "Innovation",
    description: "Allyia met l’intelligence artificielle au service du soin psychique, sans jamais remplacer l’humain. Notre technologie est éthique, discrète, utile — elle éclaire, anticipe, et s’adapte aux usages réels de chacun. Une innovation pensée non pour remplacer, mais pour accompagner.",
    icon: "lightbulb"
  }
];

export const commitments: Commitment[] = [
  {
    title: "Conformité RGPD/HAS",
    description: "Allyia respecte rigoureusement les exigences du RGPD et les référentiels de la HAS, garantissant une application alignée sur les plus hauts standards éthiques et réglementaires du secteur de la santé.",
    icon: "shield"
  },
  {
    title: "Sécurité des données",
    description: "Toutes les données traitées par Allyia sont hébergées sur des serveurs HDS certifiés, chiffrées de bout en bout, et protégées par des protocoles stricts pour assurer une sécurité maximale.",
    icon: "lock"
  },
  {
    title: "Confidentialité",
    description: "Allyia place la confidentialité de l’utilisateur au cœur de son éthique : aucune donnée n’est partagée, ni exploitée à des fins commerciales — vous restez maître de votre information, toujours.",
    icon: "eye-off"
  }
];

export const appFeatures: AppFeature[] = [
  {
    title: "Tableau de bord personnalisé",
    description: "À partir des données physiologiques et émotionnelles partagées dans votre journal, l’IA apprend à vous connaître pour mieux anticiper les épisodes d’anxiété ou de dépression.",
    image: "/img/dashboard.png",
    icon: "bar-chart"
  },
  {
    title: "Assistant conversationnel",
    description: "Un compagnon intelligent formé à la santé mentale, pour vous écouter, vous répondre et vous guider avec justesse à chaque moment clé",
    image: "/img/chatbot.png",
    icon: "message-square"
  },
  {
    title: "Gestion des médicaments",
    description: "Rappels de prises, alertes de renouvellement, suivi des ordonnances : tout est pensé pour alléger votre charge mentale et sécuriser votre traitement au quotidien.",
    image: "/img/medsTracker.png",
    icon: "pill"
  },
  {
    title: "Espace sécurisé",
    description: "Vos ressentis, vos humeurs, vos fragilités : tout ce que vous partagez dans votre journal est protégé dans un espace chiffré, confidentiel et conforme aux normes de santé les plus exigeantes.",
    image: "/img/secureSpace.png",
    icon: "book"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 techniques de respiration pour calmer l'anxiété",
    excerpt: "Découvrez des méthodes de respiration simples et efficaces pour apaiser rapidement les symptômes d'anxiété dans votre quotidien.",
    date: "15 mai 2023",
    author: "Dr. Sophie Durand",
    image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Bien-être"
  },
  {
    id: "2",
    title: "Comment parler de sa dépression à ses proches",
    excerpt: "Aborder le sujet de la dépression avec son entourage peut être difficile. Voici quelques conseils pour faciliter cette conversation importante.",
    date: "2 juin 2023",
    author: "Émilie Lambert",
    image: "https://images.pexels.com/photos/6962313/pexels-photo-6962313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Témoignage"
  },
  {
    id: "3",
    title: "La thérapie cognitivo-comportementale expliquée simplement",
    excerpt: "Une introduction claire à la TCC, ses principes et comment elle peut vous aider à transformer vos pensées négatives en schémas plus positifs.",
    date: "20 juin 2023",
    author: "Dr. Marc Dupont",
    image: "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Thérapies"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/img/SphèresAllyia1.png",
    alt: "Sphères thèmes logo Allyia"
  },
  {
    src: "/img/SphèresAllyia2.png",
    alt: "Sphères thèmes logo Allyia"
  },
  {
    src: "/img/SphèresAllyia3.png",
    alt: "Sphères thèmes logo Allyia"
  },
  {
    src: "/img/SphèresAllyia4.png",
    alt: "Sphères thèmes logo Allyia"
  },
  {
    src: "/img/SphèresAllyia5.png",
    alt: "Sphères thèmes logo Allyia"
  },
];

export const communityContent = {
  blog: {
    title: "Le Blog Allyia",
    description: "Un espace d’exploration et de parole pour mieux comprendre la santé mentale, partager des expériences vécues, et faire évoluer les regards. Le blog d’Allyia a été pensé comme un prolongement de notre mission : ouvrir le dialogue autour du bien-être psychique, donner la parole à celles et ceux qui vivent avec des troubles mentaux, et proposer des contenus utiles, sensibles et éclairants. On y parle de santé mentale avec justesse, nuance et engagement : articles de fond, témoignages, conseils de professionnels, ressources accessibles, mais aussi initiatives inspirantes et décryptage des nouveaux usages. Informer, sensibiliser, fédérer : notre blog est un lieu vivant, bienveillant et sans tabou pour faire avancer les mentalités autant que les pratiques."
  },
  discord: {
    title: "La Communauté Discord",
    description: "Notre serveur Discord est un forum de santé mentale fondé sur les principes de la pair-aidance. C'est un espace sécurisé où les personnes vivant avec des troubles psychiques peuvent échanger, se soutenir mutuellement et partager leurs expériences. Modéré avec soin par une équipe formée, il offre des canaux thématiques, des événements communautaires et des ressources validées."
  }
};

export const proContent = {
  title: "Allyia pour les professionnels",
  description: "Allyia propose des solutions adaptées pour les entreprises et les mutuelles soucieuses du bien-être mental de leurs collaborateurs ou adhérents. Notre application peut être intégrée dans une stratégie globale de prévention des risques psychosociaux et d'amélioration de la qualité de vie au travail.",
  benefits: [
    "Accès privilégié à l'application pour vos collaborateurs/adhérents",
    "Tableaux de bord anonymisés pour suivre l'évolution du bien-être collectif",
    "Ateliers de sensibilisation à la santé mentale",
    "Accompagnement personnalisé dans la mise en place du programme"
  ]
};

export const participateContent = {
  title: "Soutenez Allyia",
  description: "Nous avons lancé une campagne de financement participatif sur Ulule pour finaliser le développement d'Allyia et la rendre accessible au plus grand nombre. En contribuant à notre projet, vous nous aidez à créer un outil qui pourra améliorer concrètement le quotidien des personnes vivant avec un trouble psychique.",
  campaign: {
    url: "https://fr.ulule.com/allyia-app/",
    target: "30 000€",
    button: "Contribuer sur Ulule"
  }
};
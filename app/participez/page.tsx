// import Link from 'next/link';
// import Image from 'next/image';
// import { participateContent } from '@/lib/data';
// import { ExternalLink, ArrowRight, Heart } from 'lucide-react';

// export default function ParticipatePage() {
//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h1 className="text-4xl font-bold mb-6">{participateContent.title}</h1>
//             <p className="text-lg text-muted-foreground">
//               {participateContent.description}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Campaign Section */}
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
//                 <Heart size={24} />
//               </div>
//               <h2 className="text-3xl font-bold text-foreground">Notre campagne Ulule</h2>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 Nous avons besoin de votre soutien pour finaliser le développement d'Allyia et la rendre accessible au plus grand nombre. Chaque contribution, même modeste, nous rapproche de notre objectif et témoigne de l'importance de ce projet pour la communauté.
//               </p>
              
//               <div className="bg-primary/5 p-6 rounded-lg">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="font-semibold">Objectif</span>
//                   <span className="font-bold">{participateContent.campaign.target}</span>
//                 </div>
//                 <div className="w-full bg-muted rounded-full h-4 mb-4">
//                   <div className="bg-primary h-4 rounded-full w-[65%]"></div>
//                 </div>
//                 <div className="flex justify-between text-sm text-muted-foreground">
//                   <span>65% atteint</span>
//                   <span>25 jours restants</span>
//                 </div>
//               </div>

//               <div className="pt-4">
//                 <Link
//                   href={participateContent.campaign.url}
//                   className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {participateContent.campaign.button}
//                   <ExternalLink className="ml-2 h-5 w-5" />
//                 </Link>
//               </div>
//             </div>

//             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
//               <Image
//                 src="https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                 alt="Campagne de financement Allyia"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Rewards Section */}
//       <section className="py-16 md:py-24 bg-primary/5">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16">
//             Nos contreparties
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-background rounded-xl p-8 shadow-sm transition-all hover:shadow-md">
//               <h3 className="text-xl font-semibold mb-3">Soutien Digital</h3>
//               <p className="text-2xl font-bold text-primary mb-6">10€</p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Accès anticipé à l'application</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Votre nom dans nos remerciements</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Newsletter exclusive</span>
//                 </li>
//               </ul>
//               <Link
//                 href={participateContent.campaign.url}
//                 className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg border border-primary text-primary font-medium transition-all hover:bg-primary/10"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Choisir cette contrepartie
//               </Link>
//             </div>
            
//             <div className="bg-background rounded-xl p-8 shadow-md border border-primary/20 transform scale-105">
//               <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full inline-block mb-3">
//                 Populaire
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Ambassadeur</h3>
//               <p className="text-2xl font-bold text-primary mb-6">50€</p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Tout du pack Soutien Digital</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">1 an d'abonnement premium offert</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Webinaire exclusif avec l'équipe</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Badge ambassadeur sur le forum</span>
//                 </li>
//               </ul>
//               <Link
//                 href={participateContent.campaign.url}
//                 className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Choisir cette contrepartie
//               </Link>
//             </div>
            
//             <div className="bg-background rounded-xl p-8 shadow-sm transition-all hover:shadow-md">
//               <h3 className="text-xl font-semibold mb-3">Partenaire</h3>
//               <p className="text-2xl font-bold text-primary mb-6">200€</p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Tout du pack Ambassadeur</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Session de consultation privée</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Votre nom dans l'application</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
//                   <span className="text-muted-foreground">Invitation à notre événement de lancement</span>
//                 </li>
//               </ul>
//               <Link
//                 href={participateContent.campaign.url}
//                 className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg border border-primary text-primary font-medium transition-all hover:bg-primary/10"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Choisir cette contrepartie
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16">
//             Questions fréquentes
//           </h2>
          
//           <div className="max-w-3xl mx-auto space-y-6">
//             <div className="bg-primary/5 rounded-lg p-6">
//               <h3 className="text-lg font-semibold mb-3">Quand l'application sera-t-elle disponible ?</h3>
//               <p className="text-muted-foreground">
//                 Nous prévoyons de lancer la version bêta de l'application au premier trimestre 2024, suivie par un lancement officiel au deuxième trimestre 2024.
//               </p>
//             </div>
            
//             <div className="bg-primary/5 rounded-lg p-6">
//               <h3 className="text-lg font-semibold mb-3">Que se passe-t-il si l'objectif n'est pas atteint ?</h3>
//               <p className="text-muted-foreground">
//                 Notre campagne fonctionne en "tout ou rien". Si nous n'atteignons pas l'objectif, toutes les contributions seront remboursées automatiquement.
//               </p>
//             </div>
            
//             <div className="bg-primary/5 rounded-lg p-6">
//               <h3 className="text-lg font-semibold mb-3">Comment puis-je contribuer autrement qu'en donnant de l'argent ?</h3>
//               <p className="text-muted-foreground">
//                 Vous pouvez nous aider en partageant notre campagne sur vos réseaux sociaux, en participant à nos tests utilisateurs, ou en rejoignant notre communauté Discord pour partager vos idées et expériences.
//               </p>
//             </div>
            
//             <div className="bg-primary/5 rounded-lg p-6">
//               <h3 className="text-lg font-semibold mb-3">L'application sera-t-elle gratuite ?</h3>
//               <p className="text-muted-foreground">
//                 Allyia proposera une version gratuite avec les fonctionnalités essentielles, et une version premium avec des options avancées. Notre objectif est de rendre l'application accessible au plus grand nombre tout en assurant sa pérennité.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-purple-500/20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-foreground mb-6">
//             Ensemble, changeons la façon dont nous prenons soin de notre santé mentale
//           </h2>
//           <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
//             Votre soutien peut faire toute la différence. Rejoignez notre communauté et participez à cette aventure !
//           </p>
//           <Link
//             href={participateContent.campaign.url}
//             className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 text-lg"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Contribuer à la campagne Ulule
//             <ExternalLink className="ml-2 h-5 w-5" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }
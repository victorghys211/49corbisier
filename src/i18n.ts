import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        about: "Qui sommes-nous",
        sections: "Sections",
        meute: "Meute",
        troupe: "Troupe",
        jeuneEquipe: "Jeune Équipe",
        cadre: "Cadre",
        local: "Notre Local",
        photos: "Moments de Vie",
        extras: "Vie de l'Unité",
        inscriptions: "Inscriptions",
        contact: "Contact & Réseaux",
        since: "Depuis 1937",
        langLabel: "Langue",
      },
      hero: {
        badge: "49 Corbisier • Wilrijk",
        titlePart1: "L'aventure",
        titlePart2: "commence ici",
        slogan: "L'amitié, le jeu et la découverte : des souvenirs qui marquent toute une vie.",
        subtitle: "Depuis des générations, la 49 Corbisier rassemble les jeunes de Wilrijk autour de valeurs simples : l'entraide, le jeu et la fraternité. Que ce soit pour se défouler lors de nos activités, explorer un bout de nature ou partager de grands moments au local, c'est ici que naissent les amitiés fortes et les souvenirs inoubliables.",
        cta: "Découvrir les Sections",
        ctaInscriptions: "Inscriptions 2026-2027",
        stats: {
          members: "Chefs motivés",
          membersVal: "15+",
          history: "Presque 90 ans",
          historyVal: "1937"
        }
      },
      about: {
        badge: "Notre Esprit",
        title: "Qui sommes-nous ?",
        content: "Bienvenue à la 49ème Corbisier. À Wilrijk, notre équipe de chefs passionnés fait vivre le scoutisme francophone depuis 1937. Presque chaque dimanche matin, nous accueillons les jeunes de 5 à 18 ans pour une vraie dose d'aventure. Que ce soit pour de grands jeux en plein air, des activités fun au local ou des moments de franche rigolade, notre but est simple : s'amuser, grandir ensemble et forger des amitiés inoubliables.",
        fiveWs: "Bienvenue à la 49ème Corbisier (49 scouts). À Wilrijk (Anvers), notre équipe de chefs fait vivre le scoutisme francophone chaque dimanche pour les jeunes de 5 à 18 ans.",
        historyBtn: "Notre Histoire (depuis 1937)",
        historyModalTitle: "NOTRE HISTOIRE : L'ESPRIT DU CLAN DEPUIS 1937",
        historyModalP1: "Fondée en 1937, la 49ème Corbisier rassemble les jeunes de Wilrijk autour de l'aventure et de la vraie camaraderie.",
        historyModalSubtitle: "Notre héritage écossais",
        historyModalP2: "Nos couleurs et notre fameux motif « tartan » ne sont pas là par hasard. Dans la tradition scoute, ce motif symbolise l'esprit de « clan » : une famille unie, forte et solidaire. Près de 90 ans plus tard, chaque louveteau et scout porte toujours ces couleurs avec fierté. Peu importe les défis, nous avançons ensemble.",
        historyModalP2b: "",
        historyModalP3: "En 2027, nous célébrerons notre 90ème anniversaire avec le projet « 49 Nonante » !",
        storyBadge: "L'Aventure scoute à Wilrijk",
        storyTitle: "Une tradition vivante depuis 1937",
        storyText: "Depuis près de 90 ans, notre unité réunit des jeunes de tout le sud d'Anvers pour apprendre à vivre en groupe, respecter la nature, bâtir des projets concrets et se forger des amitiés solides.",
        pillarsTitle: "Nos piliers d'animation",
        pillarsText: "Autonomie en patrouille, sens des responsabilités, vie saine en plein air et pédagogie de la confiance transmise de génération en génération par des chefs formés et engagés.",
        quote: "« Le scoutisme, c'est l'école de la vie : apprendre la débrouille, l'amitié et le respect de la nature en s'amusant. »",
        closeBtn: "Fermer",
        wizard: {
          badge: "Guide Interactif",
          title: "Trouve ta section à 49 Corbisier",
          subtitle: "Quelques questions pour découvrir où commence ton aventure !",
          step1Label: "1. Quel âge as-tu ?",
          step2Label: "2. Quelle aventure préfères-tu ?",
          optAgeMeute: "5 à 11 ans (Enfant)",
          optAgeTroupe: "12 à 17 ans (Adolescent)",
          optAgeJE: "18 ans (Jeune adulte)",
          optAgeAnciens: "Ancien scout ou parent",
          optActForest: "Jeux en forêt, cabanes et imaginaire",
          optActPioneer: "Constructions géantes, raids et feux de camp",
          optActProjects: "Chantiers solidaires, coups de main et voyages",
          optActMemories: "Retrouvailles, festivités et souvenirs",
          resultTitle: "Ta section idéale :",
          viewSectionBtn: "Voir cette section",
          restartBtn: "Recommencer"
        },
        values: {
          adventure: "Aventure en plein air",
          adventureDesc: "Jeux dans les bois, sjorren, constructions et nuits sous la tente.",
          friendship: "Amis pour la vie",
          friendshipDesc: "Des amitiés solides et des souvenirs inoubliables partagés autour du feu.",
          spirit: "Esprit scout",
          spiritDesc: "Autonomie en patrouille, sens de la débrouille, respect et engagement.",
          family: "Solidarité & famille",
          familyDesc: "Une grande famille chaleureuse et solidaire où chacun trouve sa place."
        }
      },
      sections: {
        title: "Nos Sections",
        subtitle: "Deux sections actives dynamiques, l'entraide de la Jeune Équipe et la coordination du Cadre d'Unité.",
        discoverBtn: "Découvrir la section",
        programmeDocBtn: "Ouvrir le programme (PDF)",
        uniformTitle: "Uniforme officiel",
        saleTitle: "Vente de l'Unité",
        chefsTitle: "Staff",
        phoneLabel: "Tél :",
        meute: {
          name: "MEUTE",
          subtitle: "Les Louveteaux",
          age: "5 – 11 ans",
          desc: "Inspirée du Livre de la Jungle : vie en meute, jeux de piste en forêt, apprentissage des nœuds et découverte de la vie en groupe.",
          intro: "La Meute accueille les enfants de 5 à 11 ans. Dans l'univers de Mowgli, d'Akela et de Baloo, les louveteaux apprennent à vivre ensemble, à respecter la nature et à développer leur sens de l'autonomie.",
          theme: "Le thème de cette année et du camp est Formule 1.",
          programme: "Au programme : grands jeux de forêt, ateliers nature et grand camp d'été.",
          uniforme: "Chaque louveteau doit être présent à chaque réunion en uniforme impeccable.",
          vente: "Une vente sera organisée pour financer le camp d'été et le matériel de l'unité (tentes, intendance, matériel de froissartage). Les informations détaillées et les produits suivront prochainement !",
          docName: "Programme_Meute_Sem1.pdf"
        },
        troupe: {
          name: "TROUPE",
          subtitle: "Les Scouts",
          age: "12 – 17 ans",
          desc: "Vie en patrouille autonome, faire des brelages, feux de camp, cuisine au feu de bois et grands défis d'orientation.",
          intro: "La Troupe regroupe les scouts de 12 à 17 ans. Organisés en patrouilles autonomes sous la houlette de leur Chef de Patrouille, ils bâtissent leurs campements sur pilotis en faisant des brelages, partent en exploration et apprennent la responsabilité.",
          theme: "Le thème de cette année et du camp est Timeline Paradox.",
          programme: "Week-ends de patrouille sous tente et grand camp d'été de 15 jours en juillet.",
          uniforme: "Chaque scout doit être présent à chaque réunion en uniforme impeccable.",
          vente: "Une vente sera organisée pour financer le camp d'été et le matériel de l'unité (tentes, intendance, matériel de froissartage). Les informations détaillées et les produits suivront prochainement !",
          docName: "Programme_Troupe_Sem1.pdf"
        },
        jeuneEquipe: {
          name: "JEUNE EQUIPE",
          subtitle: "Coups de Main",
          age: "18 ans",
          desc: "Pas de Jeune Équipe cette année, mais de retour l'année prochaine ! Besoin d'aide dans le jardin ou pour un événement ? Contactez le +32 493 46 86 34.",
          intro: "Cette année, il n'y a pas de Jeune Équipe active à l'unité, mais elle sera de retour l'année prochaine ! Si vous avez besoin d'aide dans votre jardin, pour des fêtes ou tout autre coup de main, contactez le +32 493 46 86 34. Des chefs ou des scouts castors viendront avec grand plaisir vous aider !",
          programme: "",
          uniforme: "",
          vente: "",
          docName: ""
        },
        cadre: {
          name: "CADRE",
          subtitle: "Staff d'Unité & Logistique",
          age: "Coordination générale",
          desc: "Travail dans l'ombre : logistique, intendance, gestion financière, matériel et soutien à toutes les sections de 49 Corbisier.",
          intro: "Le Staff d'Unité veille au bon fonctionnement de 49 Corbisier, soutient les chefs de section et assure la logistique du matériel et des camps.",
          programme: "",
          uniforme: "",
          vente: "",
          docName: ""
        }
      },
      local: {
        badge: "Notre Repère",
        title: "Notre Local",
        desc: "Notre quartier général à Wilrijk : une maison de maître pleine de vie, point de départ de toutes nos aventures scoutes.",
        addressTitle: "Adresse",
        addressStreet: "Varenlaan 9, 2610 Wilrijk",
        addressDesc: "Notre local est une maison de maître située à Wilrijk au 9 avenue des Fougères (Varenlaan 9). Nous sommes à seulement 5 petites minutes à pied du Parc Den Brandt, où nous faisons la grande majorité de nos activités et grands jeux en plein air !",
        mapTitle: "Plan d'accès Google Maps",
        openMapsBtn: "Ouvrir dans Google Maps",
        storeTitle: "Le Magasin Scout",
        storeSubtitle: "Directement dans le local",
        storeDesc: "Au local, vous pouvez vous procurer uniquement les éléments spécifiques à notre unité : le foulard, les insignes et les flochettes.",
        barTitle: "Bar 49",
        barSubtitle: "L'espace convivial du local",
        barDesc: "De temps en temps, des soirées et événements festifs y sont organisés pour se retrouver entre chefs, parents et amis dans une super ambiance !",
        handymanTitle: "Coup de Main",
        handymanSubtitle: "Matériel, mobilier & aide au local",
        handymanDesc: "Canapés, matériel de sport ou objets en bon état dont vous n'avez plus l'utilité : nous leur donnons une seconde vie avec plaisir pour nos jeunes ! Tout coup de main pour de petits travaux est toujours le bienvenu."
      },
      photos: {
        badge: "Galerie Photos",
        title: "Moments de Vie",
        subtitle: "Découvrez l'ambiance chaleureuse de nos réunions, week-ends et grands camps d'été à travers les yeux de nos louveteaux et scouts.",
        uploadTitle: "Partagez vos photos d'activités ou de camp",
        uploadSubtitle: "Parents, chefs ou scouts : déposez vos plus beaux clichés pour enrichir les souvenirs de 49 Corbisier !",
        uploadNamePlaceholder: "Votre nom ou famille (ex: Famille Dupont)",
        uploadSectionSelect: "Sélectionnez la section",
        uploadFileBtn: "Choisir des photos (ou glisser-déposer)",
        uploadSubmitBtn: "Envoyer à l'Unité",
        uploadSuccess: "Merci ! Vos photos ont été ajoutées aux souvenirs de l'unité avec succès."
      },
      extras: {
        badge: "Vie de l'Unité",
        title: "Vie de l'Unité & Détente",
        subtitle: "Plongez au cœur de l'ambiance scoute : le vidéoclip du grand camp, notre article mystère conçu par les chefs, le grand jeu du mois et les espaces d'anciens et de fête !",
        videoTitle: "Le Vidéoclip du Grand Camp",
        videoDesc: "Constructions sur pilotis, veillées au coin du feu et franches rigolades : revivez les meilleurs moments de nos camps en vidéo !",
        mysteryTitle: "Article Mystère de la Boutique",
        mysteryDesc: "Un nouvel article collector exclusif pour la boutique de l'unité : une surprise spéciale imaginée et conçue en secret par les chefs !",
        mysteryStatus: "En cours de création",
        crosswordBadge: "JEU DU MOIS",
        crosswordTitle: "Le jeu du mois septembre : mots croisés thème 49 Corbisier",
        crosswordDesc: "Chaque mois, un nouveau jeu interactif ou un défi est lancé pour toute l'unité ! Ce n'est pas forcément toujours sur le site : cela peut aussi être une challenge à relever et à envoyer dans le groupe. Le gagnant du mois remporte un prix exclusif à la réunion suivante !",
        anciensCardTitle: "Le Coin des Anciens",
        anciensCardDesc: "L'espace dédié aux anciens chefs, scouts et amis de 49 Corbisier pour garder le lien et partager les souvenirs.",
        anciensModalTitle: "Le Coin des Anciens • 49 Corbisier",
        anciensModalPlaceholder: "Section en cours de préparation. Le contenu et les détails pour les anciens seront disponibles très prochainement ici !",
        nonanteCardTitle: "49 Nonante (1937 - 2027)",
        nonanteCardDesc: "Le grand projet pour fêter les 90 ans de 49 Corbisier, réunissant tous les membres actifs et amis de l'unité !",
        nonanteModalTitle: "49 Nonante • Cap sur les 90 ans",
        nonanteModalPlaceholder: "Section en cours de préparation. Les détails du jubilé et des célébrations des 90 ans arrivent très bientôt !"
      },
      inscriptions: {
        badge: "Rejoindre l'aventure",
        title: "Inscriptions 2026-2027",
        subtitle: "Envie d'inscrire votre enfant à 49 Corbisier ? Remplissez le formulaire officiel ci-dessous.",
        steps: [
          {
            title: "1. Formulaire officiel",
            desc: "Complétez le questionnaire en ligne avec les coordonnées de l'enfant et des parents."
          },
          {
            title: "2. Validation du Staff",
            desc: "Nous vérifions les places disponibles en Meute (5-11 ans) ou en Troupe (12-17 ans) et nous vous confirmons l'inscription."
          },
          {
            title: "3. Cotisation",
            desc: "Règlement de la cotisation annuelle et remise du foulard officiel de l'unité."
          }
        ],
        trialTitle: "Envie de tester une réunion ?",
        trialDesc: "Chacun est libre de venir essayer lors de nos réunions ! Pour plus d'informations, envoyez un message au chef responsable de la section (voir nos sections). Vous pouvez aussi simplement venir avec un ami déjà scout !",
        viewSectionsChefs: "Contacter les chefs →",
        formTitle: "Formulaire d'inscription officiel",
        formNotice: "Formulaire sécurisé hébergé sur Google Forms. Les données restent strictement confidentielles au sein du Cadre.",
        formActionBtn: "Remplir le formulaire d'inscription",
        formExplanation: "Pour vous inscrire ou inscrire votre enfant à la 49e Corbisier, veuillez compléter notre formulaire officiel. Le lien s'ouvrira dans un nouvel onglet afin de faciliter la saisie sur ordinateur comme sur mobile."
      },
      faq: {
        badge: "Foire Aux Questions",
        title: "Foire Aux Questions (FAQ)",
        subtitle: "Les réponses à vos questions les plus courantes sur la vie à la 49.",
        items: [
          {
            q: "À partir de quel âge peut-on rejoindre la 49 ?",
            a: "Nous accueillons les enfants dès l'âge de 5-6 ans (chez les Louveteaux) pour commencer la grande aventure scoute."
          },
          {
            q: "Où et quand ont lieu les réunions ?",
            a: "Nos réunions ont presque toujours lieu le dimanche matin, de 9h45-12h00, généralement à notre local (Varenlaan 9, Wilrijk). L'horaire et le lieu pouvant parfois changer, référez-vous toujours au programme spécifique de chaque section pour les détails exacts."
          },
          {
            q: "Faut-il parler parfaitement français pour s'inscrire ?",
            a: "Pas du tout ! Bien que nous soyons une unité francophone, beaucoup de nos membres sont bilingues/néerlandophone. C'est d'ailleurs l'endroit idéal pour pratiquer son français tout en s'amusant."
          },
          {
            q: "Qu'est-ce qu'on mange ce soir ?",
            a: "Tu verras ! 😉"
          }
        ]
      },
      socialsAndContact: {
        socialsTitle: "Nos Réseaux Sociaux",
        socialsSubtitle: "Suivez toute l'actualité de nos sections en direct sur nos différents canaux !",
        contactTitle: "Contactez-nous par mail",
        contactNotice: "Les chefs répondent avec plaisir à toutes vos questions par e-mail ou lors des activités au local.",
        units: {
          meute: "La Meute (Louveteaux)",
          troupe: "La Troupe (Scouts)",
          cadre: "Le Cadre"
        },
        unitDescs: {
          meute: "Inscriptions, activités & vie de la Meute",
          troupe: "Inscriptions, patrouilles & camp des Scouts",
          cadre: "Finances, attestations fiscales & administration"
        },
        aiDisclaimer: "Ce site a été conçu avec amour par vos chefs (avec un petit coup de pouce de l'Intelligence Artificielle). Il se peut qu'une petite erreur se soit glissée par-ci par-là. Si vous remarquez un bug, ou si vous avez des idées géniales pour améliorer le site, n'hésitez pas à nous contacter ! Merci et bonne visite."
      },
      footer: {
        slogan: "Une équipe de plein de chefs motivés pour vivre la vraie aventure scoute.",
        rights: "Tous droits réservés. 49 Corbisier (Wilrijk).",
        subline: "Varenlaan 9, 2610 Wilrijk • Fondé en 1937",
        multilingualNote: "Fait par les chefs • Gemaakt door de leiding • Built with scout spirit",
        motto: "« Une fois scout, toujours scout. »"
      }
    }
  },
  nl: {
    translation: {
      nav: {
        about: "Over Ons",
        sections: "Sections",
        meute: "Meute",
        troupe: "Troupe",
        jeuneEquipe: "Jeune Équipe",
        cadre: "Cadre",
        local: "Ons Lokaal",
        photos: "Moments de Vie",
        extras: "Vie de l'Unité",
        inscriptions: "Inschrijvingen",
        contact: "Contact & Socials",
        since: "Sinds 1937",
        langLabel: "Taal",
      },
      hero: {
        badge: "49 Corbisier • Wilrijk",
        titlePart1: "Het avontuur",
        titlePart2: "begint hier",
        slogan: "Vriendschap, spel en ontdekking: herinneringen die een leven lang bijblijven.",
        subtitle: "Al generaties lang brengt 49 Corbisier de jeugd van Wilrijk samen rond eenvoudige waarden: vriendschap, spel en broederschap. Of het nu is om zich uit te leven tijdens onze activiteiten, de natuur in te trekken of samen te zijn in het lokaal, hier ontstaan hechte vriendschappen en onvergetelijke herinneringen.",
        cta: "Ontdek de Sections",
        ctaInscriptions: "Inschrijvingen 2026-2027",
        stats: {
          members: "Gemotiveerde chefs",
          membersVal: "15+",
          history: "Bijna 90 jaar",
          historyVal: "1937"
        }
      },
      about: {
        badge: "Onze Geest",
        title: "Wie zijn wij?",
        content: "Welkom bij 49 Corbisier. In Wilrijk brengt ons team van gepassioneerde chefs al sinds 1937 het Franstalig scoutisme tot leven. Bijna elke zondagochtend verwelkomen we jongeren van 5 tot 18 jaar voor een flinke dosis avontuur. Of het nu gaat om grote bosspelen in openlucht, toffe activiteiten op het lokaal of momenten vol plezier, ons doel is simpel: plezier maken, samen groeien en hechte vriendschappen smeden.",
        fiveWs: "Welkom bij 49 Corbisier (49 scouts). In Wilrijk (Antwerpen) organiseert onze leiding elke zondag Franstalig scoutisme voor jongeren van 5 tot 18 jaar.",
        historyBtn: "Onze Geschiedenis (sinds 1937)",
        historyModalTitle: "NOTRE HISTOIRE : L'ESPRIT DU CLAN DEPUIS 1937",
        historyModalP1: "Opgericht in 1937, brengt 49 Corbisier de jongeren van Wilrijk samen rond avontuur en echte kameraadschap.",
        historyModalSubtitle: "Ons Schots erfgoed",
        historyModalP2: "Onze kleuren en ons befaamde « tartan » motief zijn er niet toevallig. In de scoutstraditie symboliseert dit motief de « clan » geest: een hechte, sterke en solidaire familie. Bijna 90 jaar later draagt elke louveteau en scout deze kleuren nog steeds met trots. Wat de uitdagingen ook zijn, we gaan samen vooruit.",
        historyModalP2b: "",
        historyModalP3: "In 2027 vieren we ons 90-jarig bestaan met het project « 49 Nonante » !",
        storyBadge: "Scoutsavontuur in Wilrijk",
        storyTitle: "Een levendige traditie sinds 1937",
        storyText: "Al bijna 90 jaar brengt onze eenheid jongeren uit heel het zuiden van Antwerpen samen om in groep te leren leven, de natuur te respecteren, concrete projecten te bouwen en hechte vriendschappen te smeden.",
        pillarsTitle: "Onze pedagogische pijlers",
        pillarsText: "Autonomie in patrouille, verantwoordelijkheidszin, gezond buitenleven en het vertrouwen doorgegeven van generatie op generatie door gevormde en geëngageerde chefs.",
        quote: "« Scouting is een leerschool voor het leven: zelfredzaamheid, vriendschap en respect voor de natuur terwijl we plezier maken. »",
        closeBtn: "Sluiten",
        wizard: {
          badge: "Interactieve Gids",
          title: "Vind jouw section bij 49 Corbisier",
          subtitle: "Beantwoord twee snelle vragen en ontdek waar jouw avontuur start!",
          step1Label: "1. Hoe oud ben je?",
          step2Label: "2. Welk avontuur verkies je?",
          optAgeMeute: "5 tot 11 jaar (Louveteaux)",
          optAgeTroupe: "12 tot 17 jaar (Scouts)",
          optAgeJE: "18 jaar (Jeune Équipe)",
          optAgeAnciens: "Oud-scout of ouder",
          optActForest: "Bosspelen, hutten bouwen en fantasie",
          optActPioneer: "Grote constructies, tochten en kampvuren",
          optActProjects: "Solidaire projecten, helpende handen en reizen",
          optActMemories: "Herinneringen, reünies en feest",
          resultTitle: "Jouw ideale section:",
          viewSectionBtn: "Bekijk deze section",
          restartBtn: "Opnieuw kiezen"
        },
        values: {
          adventure: "Avontuur in openlucht",
          adventureDesc: "Bosspelen, sjorren, constructies en slapen onder de tent.",
          friendship: "Vrienden voor het leven",
          friendshipDesc: "Hechte vriendschappen en onvergetelijke herinneringen rond het kampvuur.",
          spirit: "Esprit scout",
          spiritDesc: "Autonomie in patrouille, débrouille, respect voor de natuur en traditie.",
          family: "Solidariteit & familie",
          familyDesc: "Een hechte familie waar iedereen welkom is en elkaar helpt."
        }
      },
      sections: {
        title: "Nos Sections",
        subtitle: "Twee dynamische actieve sections, de helpende handen van de Jeune Équipe en de coördinatie van het Cadre d'Unité.",
        discoverBtn: "Ontdek de section",
        programmeDocBtn: "Programma openen (PDF)",
        uniformTitle: "Officieel uniform",
        saleTitle: "Vente de l'Unité",
        chefsTitle: "Staff",
        phoneLabel: "Tel:",
        meute: {
          name: "MEUTE",
          subtitle: "Les Louveteaux",
          age: "5 – 11 jaar",
          desc: "Geïnspireerd op het Jungleboek: leven in de Meute, bosspelen, knopen leren en ontdekken van het groepsleven.",
          intro: "De Meute verwelkomt kinderen van 5 tot 11 jaar. In de wereld van Mowgli, Akela en Baloo leren de louveteaux samenleven, de natuur respecteren en zelfstandigheid ontwikkelen.",
          theme: "Het thema van dit jaar en van het kamp is Formule 1.",
          programme: "Op het programma: grote bosspelen, natuuractiviteiten en een groot zomerkamp.",
          uniforme: "Elke louveteau moet op elke vergadering aanwezig zijn in onberispelijk uniform (uniforme impeccable).",
          vente: "Er wordt een verkoop georganiseerd om het zomerkamp en het materiaal van de eenheid (tenten, kookgerei, sjormateriaal) te financieren. Alle details en de aangeboden producten volgen binnenkort!",
          docName: "Programme_Meute_Sem1.pdf"
        },
        troupe: {
          name: "TROUPE",
          subtitle: "Les Scouts",
          age: "12 – 17 jaar",
          desc: "Leven in autonome patrouilles, sjorren (faire des brelages), houtvuur, tochten en oriëntatie.",
          intro: "De Troupe brengt scouts van 12 tot 17 jaar samen. In autonome patrouilles onder leiding van hun CP bouwen ze hun eigen tentenkamp door te sjorren en leren ze verantwoordelijkheid dragen.",
          theme: "Het thema van dit jaar en van het kamp is Timeline Paradox.",
          programme: "Patrouilleweekends in de tent en een groot 15-daags zomerkamp in juli.",
          uniforme: "Elke scout moet op elke vergadering aanwezig zijn in onberispelijk uniform (uniforme impeccable).",
          vente: "Er wordt een verkoop georganiseerd om het zomerkamp en het materiaal van de eenheid (tenten, kookgerei, sjormateriaal) te financieren. Alle details en de aangeboden producten volgen binnenkort!",
          docName: "Programme_Troupe_Sem1.pdf"
        },
        jeuneEquipe: {
          name: "JEUNE EQUIPE",
          subtitle: "Les Aventuriers",
          age: "18 jaar",
          desc: "Geen Jeune Équipe dit jaar, maar volgend jaar wel! Hulp nodig in de tuin of bij een feest? Contacteer +32 493 46 86 34.",
          intro: "Dit jaar is er geen actieve Jeune Équipe bij de eenheid, maar volgend jaar wel! Als mensen hulp nodig hebben in de tuin, bij feesten of wat dan ook, contacteer dan dit nummer: +32 493 46 86 34. Chefs of scouts castors komen dan met veel plezier helpen!",
          programme: "",
          uniforme: "",
          vente: "",
          docName: ""
        },
        cadre: {
          name: "CADRE D'UNITÉ",
          subtitle: "Staff d'Unité & Logistique",
          age: "Algemene coördinatie",
          desc: "Werk achter de schermen: logistiek, materiaal, financieel beheer en ondersteuning van alle sections van 49 Corbisier.",
          intro: "Het Staff d'Unité waakt over het reilen en zeilen van de eenheid, ondersteunt de chefs van de sections en beheert materiaal en kampen.",
          programme: "",
          uniforme: "",
          vente: "",
          docName: ""
        }
      },
      local: {
        badge: "Ons Honk",
        title: "Ons Lokaal",
        desc: "Onze uitvalsbasis in Wilrijk: een levendig herenhuis en het vertrekpunt van al onze scoutavonturen.",
        addressTitle: "Adres",
        addressStreet: "Varenlaan 9, 2610 Wilrijk",
        addressDesc: "Ons lokaal is een herenhuis in Wilrijk aan de Varenlaan 9. We bevinden ons op amper 5 minuutjes wandelen van Park Den Brandt, waar we het overgrote deel van onze buitenactiviteiten en bosspelen houden!",
        mapTitle: "Google Maps Toegangsplan",
        openMapsBtn: "Openen in Google Maps",
        storeTitle: "Het Scoutswinkeltje",
        storeSubtitle: "In ons lokaal",
        storeDesc: "In ons lokaal kan je uitsluitend de specifieke eenheidsitems verkrijgen: onze officiële das, de insignes en de flochettes.",
        barTitle: "Bar 49",
        barSubtitle: "Gezellige ontmoetingsplek",
        barDesc: "Van tijd tot tijd worden hier toffe feestjes en evenementen georganiseerd om gezellig samen te komen in een geweldige, warme sfeer!",
        handymanTitle: "Coup de Main",
        handymanSubtitle: "Materiaal, meubels & helpende handen",
        handymanDesc: "Zetels, sportmateriaal of bruikbare spullen die een tweede leven verdienen: wij geven ze met plezier een plek op het lokaal! Ook hulp bij kleine klusjes is altijd welkom."
      },
      photos: {
        badge: "Fotogalerij",
        title: "Moments de Vie",
        subtitle: "Ontdek de warme sfeer van onze activiteiten, weekends en zomerkampen door de ogen van onze scouts en louveteaux.",
        uploadTitle: "Deel je foto's van activiteiten of kamp",
        uploadSubtitle: "Ouders, chefs of scouts: stuur je mooiste foto's in om de herinneringen van 49 Corbisier te verrijken!",
        uploadNamePlaceholder: "Jouw naam of familie (bv: Familie Peeters)",
        uploadSectionSelect: "Kies de section",
        uploadFileBtn: "Kies foto's (of sleep hierheen)",
        uploadSubmitBtn: "Verstuur naar de Eenheid",
        uploadSuccess: "Bedankt! Jouw foto's zijn met succes toegevoegd aan de eenheidsgalerij."
      },
      extras: {
        badge: "Vie de l'Unité",
        title: "Vie de l'Unité & Ontspanning",
        subtitle: "Beleef de scoutsgeest: de kampvideo, ons mystery item ontworpen door de chefs, het grote Jeu du Mois en de pagina's voor oud-leden en feest!",
        videoTitle: "De Kampvideoclip",
        videoDesc: "Sjorconstructies, gezang rond het kampvuur en hechte vriendschap: herbeleef de mooiste momenten van onze kampen in video!",
        mysteryTitle: "Mystery Item van de Shop",
        mysteryDesc: "Een exclusief collector-item voor de scoutsshop: een speciale verrassing die in het geheim door de chefs wordt ontworpen en gemaakt!",
        mysteryStatus: "In voorbereiding",
        crosswordBadge: "JEU DU MOIS",
        crosswordTitle: "Le jeu du mois de septembre : mots croisés thème 49 Corbisier",
        crosswordDesc: "Chaque mois, un petit jeu ou un défi interactif pour toute l'Unité ! Pas forcément sur le site : cela peut être un défi à relever et à envoyer dans le groupe. Le gagnant du mois remporte un prix lors de la réunion suivante !",
        anciensCardTitle: "Le Coin des Anciens",
        anciensCardDesc: "Voor oud-leiding, oud-scouts en vrienden van 49 Corbisier om in contact te blijven en herinneringen op te halen.",
        anciensModalTitle: "Le Coin des Anciens • 49 Corbisier",
        anciensModalPlaceholder: "Sectie in voorbereiding. De inhoud en details voor de oud-leden verschijnen hier binnenkort!",
        nonanteCardTitle: "49 Nonante (1937 - 2027)",
        nonanteCardDesc: "Het grote initiatief ter gelegenheid van 90 jaar 49 Corbisier, voor actieve leden en vrienden van de eenheid!",
        nonanteModalTitle: "49 Nonante • Op naar 90 jaar",
        nonanteModalPlaceholder: "Sectie in voorbereiding. Meer nieuws over het jubileumfeest en de festiviteiten volgt spoedig!"
      },
      inscriptions: {
        badge: "Word lid",
        title: "Inschrijvingen 2026-2027",
        subtitle: "Zin om je kind in te schrijven bij 49 Corbisier? Vul het officiële formulier hieronder in.",
        steps: [
          {
            title: "1. Online Formulier",
            desc: "Vul het onderstaande officiële formulier in met de gegevens van het kind en de ouders."
          },
          {
            title: "2. Bevestiging van de Chefs",
            desc: "We bekijken de beschikbare plaatsen in Meute (5-11 jaar) of Troupe (12-17 jaar) en bevestigen de inschrijving."
          },
          {
            title: "3. Lidgeld",
            desc: "Betaling van het jaarlijkse lidgeld en ontvangst van de officiële eenheidsdas."
          }
        ],
        trialTitle: "Zin om een vergadering te testen?",
        trialDesc: "Iedereen mag altijd vrijblijvend komen testen tijdens onze zaterdagen! Wil je meer informatie? Stuur dan een berichtje naar de verantwoordelijke chef van de section (zie onze sections). Je mag natuurlijk ook gewoon meekomen met een vriend(in) die al scout is!",
        viewSectionsChefs: "Contacteer chefs →",
        formTitle: "Officieel inschrijvingsformulier",
        formNotice: "Beveiligd formulier op Google Forms. De gegevens blijven strikt vertrouwelijk binnen het Cadre d'Unité.",
        formActionBtn: "Open inschrijvingsformulier",
        formExplanation: "Om jou of je kind in te schrijven bij de 49e Corbisier, vul je ons officiële formulier in. Het formulier opent rechtstreeks in een nieuw tabblad voor optimaal gebruiksgemak op computer en smartphone."
      },
      faq: {
        badge: "Foire Aux Questions",
        title: "Veelgestelde Vragen (FAQ)",
        subtitle: "De antwoorden op de meest gestelde vragen over onze scoutseenheid.",
        items: [
          {
            q: "Vanaf welke leeftijd kan je lid worden van de 49?",
            a: "We verwelkomen kinderen vanaf 5-6 jaar (bij de Meute / Louveteaux) om het grote scoutsavontuur te beginnen."
          },
          {
            q: "Waar en wanneer vinden de vergaderingen plaats?",
            a: "Onze activiteiten vinden bijna altijd plaats op zondagochtend, van 9u45 tot 12u00, meestal in ons lokaal (Varenlaan 9, Wilrijk). Omdat het tijdstip en de locatie soms kunnen wijzigen, raadpleeg je best altijd het specifieke programma van elke section voor de exacte details."
          },
          {
            q: "Moet je perfect Frans spreken om in te schrijven?",
            a: "Helemaal niet! Hoewel we een Franstalige eenheid zijn, zijn veel van onze leden tweetalig of Nederlandstalig. Het is trouwens de ideale plek om op een speelse manier Frans te oefenen."
          },
          {
            q: "Wat eten we vanavond?",
            a: "Tu verras ! 😉"
          }
        ]
      },
      socialsAndContact: {
        socialsTitle: "Onze Sociale Media",
        socialsSubtitle: "Volg onze belevenissen op de voet via onze sociale kanalen!",
        contactTitle: "Contacteer ons per mail",
        contactNotice: "De chefs beantwoorden graag al uw vragen per e-mail of tijdens de activiteiten op het lokaal.",
        units: {
          meute: "De Meute (Louveteaux)",
          troupe: "De Troupe (Scouts)",
          cadre: "Het Cadre"
        },
        unitDescs: {
          meute: "Inschrijvingen, activiteiten & werking van de Meute",
          troupe: "Inschrijvingen, patrouilles & kamp van de Scouts",
          cadre: "Financiën, fiscale attesten & administratie"
        },
        aiDisclaimer: "Deze site werd met veel liefde ontworpen door jullie chefs (met een klein duwtje in de rug van Artificiële Intelligentie). Het kan zijn dat er hier of daar een klein foutje is ingeslopen. Als u een bug opmerkt of geweldige ideeën hebt om de site te verbeteren, aarzel dan niet om ons te contacteren! Bedankt en een fijn bezoek."
      },
      footer: {
        slogan: "Een enthousiaste ploeg vol gemotiveerde chefs voor het echte scoutsavontuur.",
        rights: "Alle rechten voorbehouden. 49 Corbisier (Wilrijk).",
        subline: "Varenlaan 9, 2610 Wilrijk • Opgericht in 1937",
        multilingualNote: "Fait par les chefs • Gemaakt door de leiding • Built with scout spirit",
        motto: "« Eenmaal scout, altijd scout. »"
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About Us",
        sections: "Sections",
        meute: "Meute",
        troupe: "Troupe",
        jeuneEquipe: "Jeune Équipe",
        cadre: "Cadre",
        local: "Our Scout Den",
        photos: "Moments de Vie",
        extras: "Vie de l'Unité",
        inscriptions: "Join Us",
        contact: "Contact & Socials",
        since: "Since 1937",
        langLabel: "Language",
      },
      hero: {
        badge: "49 Corbisier • Wilrijk",
        titlePart1: "The adventure",
        titlePart2: "starts here",
        slogan: "Friendship, games, and discovery: memories that mark a lifetime.",
        subtitle: "For generations, 49 Corbisier has brought together the youth of Wilrijk around simple values: mutual support, games, and friendship. Whether burning off energy during our activities, exploring nature, or sharing memorable moments at our den, this is where strong friendships and unforgettable memories are made.",
        cta: "Explore Sections",
        ctaInscriptions: "Registrations 2026-2027",
        stats: {
          members: "Dedicated Chefs",
          membersVal: "15+",
          history: "Almost 90 Years",
          historyVal: "1937"
        }
      },
      about: {
        badge: "Our Spirit",
        title: "Who are we?",
        content: "Welcome to 49 Corbisier. In Wilrijk, our passionate team of chefs has kept French-speaking scouting alive since 1937. Almost every Sunday morning, we welcome young people aged 5 to 18 for a true dose of adventure. Whether for wide outdoor games, fun activities at our den, or moments of genuine laughter, our goal is simple: have fun, grow together, and forge unforgettable friendships.",
        fiveWs: "Welcome to 49 Corbisier (49 scouts). In Wilrijk (Antwerp), our dedicated chefs host French-speaking scouting every Sunday for youth aged 5 to 18.",
        historyBtn: "Our History (since 1937)",
        historyModalTitle: "NOTRE HISTOIRE : L'ESPRIT DU CLAN DEPUIS 1937",
        historyModalP1: "Founded in 1937, 49 Corbisier gathers the youth of Wilrijk around adventure and true camaraderie.",
        historyModalSubtitle: "Our Scottish heritage",
        historyModalP2: "Our colors and famous 'tartan' pattern are no accident. In scouting tradition, this pattern symbolizes the 'clan' spirit: a united, strong, and caring family. Nearly 90 years later, every louveteau and scout still wears these colors with pride. Whatever the challenges, we move forward together.",
        historyModalP2b: "",
        historyModalP3: "In 2027, we celebrate our 90th anniversary with the '49 Nonante' project!",
        storyBadge: "Scouting Adventure in Wilrijk",
        storyTitle: "A living tradition since 1937",
        storyText: "For almost 90 years, our unit has gathered youth from across south Antwerp to learn group living, respect nature, build teamwork, and forge lifelong friendships.",
        pillarsTitle: "Our core principles",
        pillarsText: "Patrol independence, responsibility, healthy outdoor living, and self-confidence passed down through generations by trained, dedicated chefs.",
        quote: "« Scouting is a school of life: learning resourcefulness, friendship, and respect for nature while having fun. »",
        closeBtn: "Close",
        wizard: {
          badge: "Interactive Guide",
          title: "Find your section at 49 Corbisier",
          subtitle: "Answer two quick questions to discover where your scout journey begins!",
          step1Label: "1. How old are you?",
          step2Label: "2. What kind of adventure do you seek?",
          optAgeMeute: "5 to 11 years (Louveteaux)",
          optAgeTroupe: "12 to 17 years (Scouts)",
          optAgeJE: "18 years (Jeune Équipe)",
          optAgeAnciens: "Alumni or Parents",
          optActForest: "Forest games, den building & imagination",
          optActPioneer: "Large timber pioneering, hikes & campfires",
          optActProjects: "Community aid, project building & hands-on help",
          optActMemories: "Reunions, celebrations & fellowship",
          resultTitle: "Your ideal section:",
          viewSectionBtn: "View this section",
          restartBtn: "Start over"
        },
        values: {
          adventure: "Outdoor adventure",
          adventureDesc: "Forest games, pioneering structures, campfires, and nights under canvas.",
          friendship: "Friends for life",
          friendshipDesc: "Strong friendships and unforgettable moments forged together around the fire.",
          spirit: "Esprit scout",
          spiritDesc: "Patrol independence, resourcefulness (débrouille), respect for nature, and scout engagement.",
          family: "Solidarity & family",
          familyDesc: "A warm, close-knit scout family where everyone is welcomed and supported."
        }
      },
      sections: {
        title: "Nos Sections",
        subtitle: "Two dynamic active sections, Jeune Équipe helping hands, and Cadre d'Unité coordination.",
        discoverBtn: "Discover section",
        programmeDocBtn: "Open schedule (PDF)",
        uniformTitle: "Official uniform",
        saleTitle: "Vente de l'Unité",
        chefsTitle: "Staff",
        phoneLabel: "Phone:",
        meute: {
          name: "MEUTE",
          subtitle: "Les Louveteaux",
          age: "5 – 11 years",
          desc: "Inspired by The Jungle Book: life in the Meute, forest games, knot tying, and discovering group life.",
          intro: "The Meute welcomes children aged 5 to 11. In the world of Mowgli, Akela and Baloo, the louveteaux learn to live together, respect nature, and develop their independence.",
          theme: "This year's theme and camp theme is Formula 1.",
          programme: "On the agenda: wide forest games, nature workshops, and an exciting summer camp.",
          uniforme: "Every louveteau must attend each meeting in impeccable uniform (uniforme impeccable).",
          vente: "A fundraising sale will be organized to finance the summer camp and unit equipment (tents, kitchen gear, pioneering gear). Detailed information and the products will follow soon!",
          docName: "Programme_Meute_Sem1.pdf"
        },
        troupe: {
          name: "TROUPE",
          subtitle: "Les Scouts",
          age: "12 – 17 years",
          desc: "Independent patrol life, timber pioneering lashings (faire des brelages), campfires, outdoor cooking, and navigation expeditions.",
          intro: "The Troupe brings together scouts aged 12 to 17. Organized into self-governing patrols led by their CP, they build platform camp structures through pioneering lashings (sjorren) and learn leadership.",
          theme: "This year's theme and camp theme is Timeline Paradox.",
          programme: "Weekend campouts under tents and a 15-day summer expedition in July.",
          uniforme: "Every scout must attend each meeting in impeccable uniform (uniforme impeccable).",
          vente: "A fundraising sale will be organized to finance the summer camp and unit equipment (tents, kitchen gear, pioneering gear). Detailed information and the products will follow soon!",
          docName: "Programme_Troupe_Sem1.pdf"
        },
        jeuneEquipe: {
          name: "JEUNE EQUIPE",
          subtitle: "Les Aventuriers",
          age: "18 years",
          desc: "No Jeune Équipe this year, but back next year! Need help in your garden or at an event? Contact +32 493 46 86 34.",
          intro: "This year, there is no active Jeune Équipe at the unit, but it will be back next year! If you need help in your garden, for parties, or any other tasks, contact +32 493 46 86 34. Chefs or castor scouts will gladly come to lend a hand.",
          programme: "",
          uniforme: "",
          vente: "",
          docName: ""
        },
        cadre: {
          name: "CADRE D'UNITÉ",
          subtitle: "Staff d'Unité & Logistics",
          age: "General coordination",
          desc: "Working behind the scenes: logistics, quartermaster supplies, finances, and support for all 49 Corbisier sections.",
          intro: "The Staff d'Unité oversees the smooth running of 49 Corbisier, supports the section chefs, and manages equipment and camp logistics.",
          programme: "",
          uniforme: "",
          vente: "",
          docName: ""
        }
      },
      local: {
        badge: "Our Den",
        title: "Our Den",
        desc: "Our headquarters in Wilrijk: a bustling townhouse and the starting point for all our scout adventures.",
        addressTitle: "Address",
        addressStreet: "Varenlaan 9, 2610 Wilrijk",
        addressDesc: "Our scout den is a townhouse located at Varenlaan 9 in Wilrijk. We are situated just a 5-minute walk from Park Den Brandt, where we hold the vast majority of our outdoor activities, wide games, and afternoons in nature!",
        mapTitle: "Google Maps Access",
        openMapsBtn: "Open in Google Maps",
        storeTitle: "The Scout Shop",
        storeSubtitle: "Inside our den",
        storeDesc: "Directly at the den, you can purchase exclusively our unit-specific items: the official unit scarf, badges, and flochettes.",
        barTitle: "Bar 49",
        barSubtitle: "The den's social hub",
        barDesc: "From time to time, parties and friendly gatherings are hosted here to bring together chefs, parents, and friends in a wonderful and festive atmosphere!",
        handymanTitle: "Coup de Main",
        handymanSubtitle: "Equipment, furniture & helping hands",
        handymanDesc: "Sofas, sports gear, or items in good condition that you no longer need: we'll gladly give them a second life for our youth! Any helping hand with minor chores is always welcome."
      },
      photos: {
        badge: "Photo Gallery",
        title: "Moments de Vie",
        subtitle: "Experience the warm camaraderie of our activities, weekends, and summer camps through the eyes of our louveteaux and scouts.",
        uploadTitle: "Share your camp or activity photos",
        uploadSubtitle: "Parents, chefs, or scouts: drop your best snapshots to enrich 49 Corbisier's memory album!",
        uploadNamePlaceholder: "Your name or family (e.g. Miller Family)",
        uploadSectionSelect: "Select section",
        uploadFileBtn: "Choose photos (or drag & drop)",
        uploadSubmitBtn: "Submit to Unit",
        uploadSuccess: "Thank you! Your photos have been successfully submitted to the unit memory gallery."
      },
      extras: {
        badge: "Vie de l'Unité",
        title: "Vie de l'Unité & Downtime",
        subtitle: "Immerse in true scout culture: our summer camp video, mystery shop item crafted by our chefs, the Game of the Month, and sections for alumni and jubilee celebrations!",
        videoTitle: "The Summer Camp Video",
        videoDesc: "Timber structures, campfires, and sincere laughter: relive the finest moments of our camps on video!",
        mysteryTitle: "Scout Shop Mystery Item",
        mysteryDesc: "An exclusive collector's item for our scout shop: a special surprise secretly designed and crafted by the chefs!",
        mysteryStatus: "Under construction",
        crosswordBadge: "JEU DU MOIS",
        crosswordTitle: "Le jeu du mois de septembre : mots croisés thème 49 Corbisier",
        crosswordDesc: "Chaque mois, un petit jeu ou un défi interactif pour toute l'Unité ! Pas forcément sur le site : cela peut être un défi à relever et à envoyer dans le groupe. Le gagnant du mois remporte un prix lors de la réunion suivante !",
        anciensCardTitle: "Le Coin des Anciens",
        anciensCardDesc: "Dedicated space for former chefs, scouts, and friends of 49 Corbisier to stay in touch and share memories.",
        anciensModalTitle: "Le Coin des Anciens • 49 Corbisier",
        anciensModalPlaceholder: "Section under construction. Content and details for alumni will be available here very soon!",
        nonanteCardTitle: "49 Nonante (1937 - 2027)",
        nonanteCardDesc: "The major initiative celebrating 90 years of 49 Corbisier, open to all active members and friends of the unit!",
        nonanteModalTitle: "49 Nonante • Heading to 90 Years",
        nonanteModalPlaceholder: "Section under construction. Exciting details about our 90th jubilee celebrations will be revealed soon!"
      },
      inscriptions: {
        badge: "Join us",
        title: "Registrations 2026-2027",
        subtitle: "Looking to register your child at 49 Corbisier? Please fill out our official online form below.",
        steps: [
          {
            title: "1. Online Form",
            desc: "Complete the official questionnaire with child and parent contact information."
          },
          {
            title: "2. Staff Confirmation",
            desc: "We verify available spots in Meute (5-11 yrs) or Troupe (12-17 yrs) and confirm your registration."
          },
          {
            title: "3. Membership Fee",
            desc: "Payment of the annual unit membership fee and receipt of the official scarf."
          }
        ],
        trialTitle: "Want to try a meeting?",
        trialDesc: "Everyone is welcome to come test an activity on Saturday! For more details, message the section chef (see our sections). You can also simply tag along with a friend who is already a scout!",
        viewSectionsChefs: "Contact chefs →",
        formTitle: "Official Registration Form",
        formNotice: "Secure form hosted on Google Forms. Information remains strictly confidential within the Cadre d'Unité.",
        formActionBtn: "Open registration form",
        formExplanation: "To register yourself or your child at the 49th Corbisier, please complete our official registration form. The link will open in a new tab for easier filling on both desktop and mobile."
      },
      faq: {
        badge: "Frequently Asked Questions",
        title: "Frequently Asked Questions (FAQ)",
        subtitle: "Answers to the most common questions about joining our scout unit.",
        items: [
          {
            q: "At what age can you join the 49?",
            a: "We welcome children from age 5-6 (in the Meute / Louveteaux) to start the great scouting adventure."
          },
          {
            q: "Where and when do meetings take place?",
            a: "Our meetings almost always take place on Sunday mornings, from 9:45 AM to 12:00 PM, usually at our scout den (Varenlaan 9, Wilrijk). As schedules and locations can sometimes change, always refer to each section's specific calendar for exact details."
          },
          {
            q: "Do you need to speak fluent French to register?",
            a: "Not at all! While we are a French-speaking unit, many of our members are bilingual or Dutch-speaking. It's actually the ideal place to practice French while having fun."
          },
          {
            q: "What are we eating tonight?",
            a: "Tu verras ! 😉"
          }
        ]
      },
      socialsAndContact: {
        socialsTitle: "Our Social Channels",
        socialsSubtitle: "Follow our weekly adventures live across our social channels!",
        contactTitle: "Contact us by email",
        contactNotice: "Our chefs will gladly respond to your questions via email or in person during activities at our den.",
        units: {
          meute: "The Meute (Louveteaux)",
          troupe: "The Troupe (Scouts)",
          cadre: "The Cadre"
        },
        unitDescs: {
          meute: "Registrations, activities & pack life",
          troupe: "Registrations, patrols & scout camp",
          cadre: "Finances, tax receipts & administration"
        },
        aiDisclaimer: "This site was crafted with love by your chefs (with a little help from Artificial Intelligence). A tiny mistake might have slipped in here or there. If you spot a bug or have great ideas to improve the website, please feel free to contact us! Thank you and enjoy your visit."
      },
      footer: {
        slogan: "A spirited team of dedicated chefs ready for true scout adventures.",
        rights: "All rights reserved. 49 Corbisier (Wilrijk).",
        subline: "Varenlaan 9, 2610 Wilrijk • Founded in 1937",
        multilingualNote: "Fait par les chefs • Gemaakt door de leiding • Built with scout spirit",
        motto: "« Once a scout, always a scout. »"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof window !== 'undefined' ? (localStorage.getItem('49_lang') || 'fr') : 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export type Lang = "en" | "es";

export const labels = {
  en: {
    about: "About",
    aboutMe: "About Me",
    expertise: "Expertise",
    experience: "Experience",
    education: "Education",
    coreSkills: "Core Skills",
    contactMe: "Contact Me",
    viewProject: "View project",
    allRights: "All rights reserved.",
    langSwitch: "ES",
    langSwitchLabel: "Ver en Español",
  },
  es: {
    about: "Acerca",
    aboutMe: "Sobre Mí",
    expertise: "Experiencia Clave",
    experience: "Experiencia",
    education: "Educación",
    coreSkills: "Habilidades",
    contactMe: "Contáctame",
    viewProject: "Ver proyecto",
    allRights: "Todos los derechos reservados.",
    langSwitch: "EN",
    langSwitchLabel: "View in English",
  },
} as const;

export const content = {
  en: {
    title: "Aeronautical Services Coordinator",
    description:
      "Aviation operations professional with 8+ years of experience in flight operations, crew scheduling, and dispatch at United Airlines. Bilingual EN/ES.",
    tagline:
      "Ensuring safe, on-time operations across one of the world's largest airline networks.",
    stats: [
      { value: "8+", label: "Years in Aviation" },
      { value: "4", label: "Languages" },
      { value: "3", label: "Major Airlines" },
    ],
    aboutMe:
      "Experienced aviation professional with 8+ years managing daily flight operations across major U.S. airlines. Currently serving as Aeronautical Services Coordinator at United Airlines, preparing dispatch instructions and crew briefings for safe, on-time operations. Multilingual professional fluent in English, Spanish, French, and Portuguese, with a Master's in Project Management and a strong foundation in business administration. Passionate about team collaboration, operational excellence, and the Core4 values.",
    skills: [
      "Flight Dispatch",
      "Crew Scheduling",
      "FAA/FAR Compliance",
      "Operations Coordination",
      "Project Management",
      "Team Leadership",
      "Multilingual (EN/ES/FR/PT)",
      "Problem Solving",
    ],
    projects: [
      {
        name: "Dispatch Operations",
        description:
          "Prepare dispatch instructions and mission flight deck crew member briefings targeted to specific operations, ensuring safety and efficiency across United Airlines' network.",
        link: "",
        skills: ["Flight Dispatch", "Safety", "Operations"],
      },
      {
        name: "Crew Coverage Optimization",
        description:
          "Analyzed pilot coverage and assigned reserves for unforeseen circumstances, managing all open flying in compliance with FAR and UPA pilot agreements.",
        link: "",
        skills: ["Resource Planning", "FAR Compliance", "Scheduling"],
      },
      {
        name: "Cross-Department Coordination",
        description:
          "Communicated with multiple departments on pilot legality status, helping reduce delays and misconnections in daily airline operations.",
        link: "",
        skills: ["Stakeholder Management", "Communication", "Operations"],
      },
    ],
    experience: [
      {
        company: "United Airlines",
        title: "Aeronautical Services Coordinator",
        dateRange: "Aug 2023 - Present",
        bullets: [
          "Prepare dispatch instructions and mission flight deck crew member briefings targeted to the operation to be performed",
          "Coordinate with multiple departments to ensure safe and on-time flight operations",
        ],
      },
      {
        company: "United Airlines",
        title: "Senior Pilot Crew Scheduler",
        dateRange: "Jun 2019 - Aug 2023",
        bullets: [
          "Communicated with multiple departments on pilot legality status to ensure on-time and safe departures",
          "Helped reduce delays and misconnections across the airline operation",
        ],
      },
      {
        company: "United Airlines",
        title: "Pilot Crew Scheduler",
        dateRange: "Jun 2018 - Jun 2019",
        bullets: [
          "Analyzed pilot coverage and assigned reserves for unforeseen circumstances",
          "Managed all open flying according to FAR and UPA pilot agreement",
        ],
      },
      {
        company: "American Airlines",
        title: "Customer Relations Representative",
        dateRange: "Nov 2017 - Jun 2018",
        bullets: [
          "Managed and resolved customer complaints complying with American Airlines rules and regulations",
        ],
      },
      {
        company: "Mesa Airlines",
        title: "Crew Scheduler Lead",
        dateRange: "Feb 2016 - Nov 2017",
        bullets: [
          "Monitored flight progression for pilots and flight attendants",
          "Maintained compliance with FAA Flight/Duty regulations",
        ],
      },
    ],
    education: [
      {
        school: "Institute of Flight Operations & Dispatch — Dallas, USA",
        degree: "Dispatch Certificate",
        dateRange: "2022",
        achievements: ["FAA Aircraft Dispatcher certification"],
      },
      {
        school: "European Open Business School — Madrid, Spain",
        degree: "Master's in Project Management",
        dateRange: "2020 - 2021",
        achievements: [],
      },
      {
        school: "Ricardo Palma University — Lima, Peru",
        degree: "Bachelor's in Business Management",
        dateRange: "2004 - 2009",
        achievements: [],
      },
    ],
  },
  es: {
    title: "Coordinadora de Servicios Aeronáuticos",
    description:
      "Profesional de operaciones de aviación con más de 8 años de experiencia en operaciones de vuelo, programación de tripulación y despacho en United Airlines. Bilingüe EN/ES.",
    tagline:
      "Garantizando operaciones seguras y puntuales en una de las redes aéreas más grandes del mundo.",
    stats: [
      { value: "8+", label: "Años en Aviación" },
      { value: "4", label: "Idiomas" },
      { value: "3", label: "Aerolíneas" },
    ],
    aboutMe:
      "Profesional de aviación con más de 8 años gestionando operaciones de vuelo diarias en las principales aerolíneas de EE.UU. Actualmente como Coordinadora de Servicios Aeronáuticos en United Airlines, preparando instrucciones de despacho y briefings de tripulación para operaciones seguras y puntuales. Profesional multilingüe con dominio de inglés, español, francés y portugués, con una Maestría en Gestión de Proyectos y una sólida formación en administración de empresas. Apasionada por el trabajo en equipo, la excelencia operacional y los valores Core4.",
    skills: [
      "Despacho de Vuelos",
      "Programación de Tripulación",
      "Cumplimiento FAA/FAR",
      "Coordinación de Operaciones",
      "Gestión de Proyectos",
      "Liderazgo de Equipos",
      "Multilingüe (EN/ES/FR/PT)",
      "Resolución de Problemas",
    ],
    projects: [
      {
        name: "Operaciones de Despacho",
        description:
          "Preparación de instrucciones de despacho y briefings para tripulaciones de vuelo orientados a operaciones específicas, garantizando seguridad y eficiencia en la red de United Airlines.",
        link: "",
        skills: ["Despacho de Vuelos", "Seguridad", "Operaciones"],
      },
      {
        name: "Optimización de Cobertura de Tripulación",
        description:
          "Análisis de cobertura de pilotos y asignación de reservas para circunstancias imprevistas, gestionando todos los vuelos abiertos en cumplimiento con FAR y acuerdos de pilotos UPA.",
        link: "",
        skills: ["Planificación de Recursos", "Cumplimiento FAR", "Programación"],
      },
      {
        name: "Coordinación Interdepartamental",
        description:
          "Comunicación con múltiples departamentos sobre el estado de legalidad de pilotos, contribuyendo a reducir retrasos y desconexiones en las operaciones aéreas diarias.",
        link: "",
        skills: ["Gestión de Stakeholders", "Comunicación", "Operaciones"],
      },
    ],
    experience: [
      {
        company: "United Airlines",
        title: "Coordinadora de Servicios Aeronáuticos",
        dateRange: "Ago 2023 - Presente",
        bullets: [
          "Preparación de instrucciones de despacho y briefings para tripulaciones de vuelo orientados a la operación a realizar",
          "Coordinación con múltiples departamentos para garantizar operaciones de vuelo seguras y puntuales",
        ],
      },
      {
        company: "United Airlines",
        title: "Programadora Senior de Tripulación de Pilotos",
        dateRange: "Jun 2019 - Ago 2023",
        bullets: [
          "Comunicación con múltiples departamentos sobre el estado de legalidad de pilotos para asegurar salidas puntuales y seguras",
          "Contribución a la reducción de retrasos y desconexiones en la operación de la aerolínea",
        ],
      },
      {
        company: "United Airlines",
        title: "Programadora de Tripulación de Pilotos",
        dateRange: "Jun 2018 - Jun 2019",
        bullets: [
          "Análisis de cobertura de pilotos y asignación de reservas para circunstancias imprevistas",
          "Gestión de todos los vuelos abiertos según FAR y acuerdo de pilotos UPA",
        ],
      },
      {
        company: "American Airlines",
        title: "Representante de Relaciones con el Cliente",
        dateRange: "Nov 2017 - Jun 2018",
        bullets: [
          "Gestión y resolución de quejas de clientes cumpliendo con las normas y regulaciones de American Airlines",
        ],
      },
      {
        company: "Mesa Airlines",
        title: "Líder de Programación de Tripulación",
        dateRange: "Feb 2016 - Nov 2017",
        bullets: [
          "Monitoreo de la progresión de vuelos para pilotos y auxiliares de vuelo",
          "Mantenimiento del cumplimiento con las regulaciones de Vuelo/Servicio de la FAA",
        ],
      },
    ],
    education: [
      {
        school: "Institute of Flight Operations & Dispatch — Dallas, EE.UU.",
        degree: "Certificado de Despacho",
        dateRange: "2022",
        achievements: ["Certificación FAA de Despachador de Aeronaves"],
      },
      {
        school: "European Open Business School — Madrid, España",
        degree: "Maestría en Gestión de Proyectos",
        dateRange: "2020 - 2021",
        achievements: [],
      },
      {
        school: "Universidad Ricardo Palma — Lima, Perú",
        degree: "Licenciatura en Administración de Empresas",
        dateRange: "2004 - 2009",
        achievements: [],
      },
    ],
  },
} as const;

export function getLabels(lang: Lang) {
  return labels[lang];
}

export function getContent(lang: Lang) {
  return content[lang];
}

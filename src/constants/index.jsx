import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const navItems = [
  { label: "Caracteristicas", href: "features" },
  { label: "Funcionamiento", href: "workflow" },
  { label: "Pros", href: "keys" },
  { label: "Testimonios", href: "testimonials" },
];

export const testimonials = [
  
    {
      user: "Juan Pérez",
      company: "Soluciones Estelares",
      image: user1,
      text: "Estoy muy satisfecho con el sistema de monitoreo solar. El equipo fue muy atento, profesional y los resultados superaron nuestras expectativas.",
    },
    {
      user: "Ana Martínez",
      company: "Horizonte Azul Tecnologías",
      image: user2,
      text: "No podría estar más contenta con el desempeño del sistema. La capacidad de obtener estadísticas y datos en tiempo real ha sido fundamental para optimizar nuestra inversión solar.",
    },
    {
      user: "David López",
      company: "Innovaciones Quantum",
      image: user3,
      text: "Trabajar con este sistema de monitoreo ha sido una excelente experiencia. Su precisión y fiabilidad en el análisis de datos son destacables. Lo recomendaría a cualquiera que busque mejorar el rendimiento de sus paneles solares.",
    },
    {
      user: "Rocío Gómez",
      company: "Dinámicas Fusión",
      image: user4,
      text: "El uso del sistema de monitoreo solar ha transformado la gestión de nuestra energía. La capacidad de obtener informes detallados y en tiempo real nos ha permitido ajustar nuestra estrategia de manera efectiva. ¡Estamos muy agradecidos por esta herramienta!",
    },
    {
      user: "Miguel Rodríguez",
      company: "Creaciones Visionarias",
      image: user5,
      text: "Estoy impresionado con la precisión y el nivel de detalle del sistema. Ha superado nuestras expectativas en cuanto a la monitorización y el análisis de nuestro sistema solar.",
    },
    {
      user: "Emily Díaz",
      company: "Sistemas Sinergia",
      image: user6,
      text: "El sistema de monitoreo ha sido clave para el éxito de nuestra instalación solar. Su capacidad para ofrecer datos en tiempo real y análisis detallado es invaluable. Espero seguir utilizándolo para futuros proyectos.",
    },
  ];
  

  export const features = [
    {
      icon: <BotMessageSquare />,
      text: "Interfaz de Arrastrar y Soltar",
      description:
        "Diseña y organiza fácilmente tus entornos del sistema con una interfaz de arrastrar y soltar amigable para el usuario.",
    },
    {
      icon: <Fingerprint />,
      text: "Análisis Histórico",
      description:
        "Analiza datos históricos para identificar tendencias, patrones y problemas recurrentes, lo que permite una toma de decisiones informada y optimización del sistema.",
    },
    {
      icon: <ShieldHalf />,
      text: "Análisis del Rendimiento Energético",
      description:
        "Realiza un análisis profundo de la producción de energía y el rendimiento del sistema para maximizar la eficiencia y el retorno de inversión a lo largo del tiempo.",
    },
    {
      icon: <BatteryCharging />,
      text: "Monitoreo en Tiempo Real",
      description:
        "Monitorea continuamente los datos de voltaje, corriente, luminosidad y temperatura de los paneles solares en tiempo real.",
    },
    {
      icon: <PlugZap />,
      text: "Detección de Anomalías",
      description:
        "Utiliza algoritmos avanzados para detectar anomalías y desviaciones en los indicadores de rendimiento, lo que permite un mantenimiento proactivo.",
    },
    {
      icon: <GlobeLock />,
      text: "Panel de Análisis",
      description:
        "Ofrece una interfaz de panel de control amigable para el usuario, facilitando la visualización de métricas clave de rendimiento, alertas e información de mantenimiento.",
    },
  ];
  

  export const checklistItems = [
    {
      title: "Rendimiento Optimizado",
      description:
        "Código optimizado para la eficiencia en el procesamiento de datos y desarrollo de información.",
    },
    {
      title: "Revisa el código sin preocupaciones",
      description:
        "Sigue el rendimiento de tus aplicaciones del sistema y obtén información sobre el comportamiento del usuario.",
    },
    {
      title: "Cumplimiento de Mejores Prácticas",
      description:
        "Estándares de codificación seguidos para garantizar consistencia y legibilidad en una arquitectura limpia.",
    },
    {
      title: "Diseño Modular",
      description:
        "Código estructurado para un fácil mantenimiento y expansión durante el proceso.",
    },
  ];
  

  export const pricingOptions = [
    {
      title: "Innovación",
      price: "100%",
      features: [
        "Algoritmos",
        "Predictivo",
        "Analítica",
        "Detección",
      ],
    },
    {
      title: "Accesibilidad",
      price: "100%",
      features: [
        "Integración",
        "Útil",
        "Intuitivo",
        "Accesible",
      ],
    },
    {
      title: "Impacto",
      price: "100%",
      features: [
        "Sostenibilidad",
        "Eficiencia",
        "Energía renovable",
        "Conciencia",
      ],
    },
  ];
  
  export const resourcesLinks = [
    { href: "#", text: "Empezando" },
    { href: "#", text: "Documentación" },
    { href: "#", text: "Tutoriales" },
    { href: "#", text: "Referencia de API" },
    { href: "#", text: "Foros de la Comunidad" },
  ];
  
  export const platformLinks = [
    { href: "#", text: "Características" },
    { href: "#", text: "Dispositivos Compatibles" },
    { href: "#", text: "Requisitos del Sistema" },
    { href: "#", text: "Descargas" },
    { href: "#", text: "Notas de la Versión" },
  ];
  
  export const communityLinks = [
    { href: "#", text: "Eventos" },
    { href: "#", text: "Reuniones" },
    { href: "#", text: "Conferencias" },
    { href: "#", text: "" },
    { href: "#", text: "" },
  ];
  

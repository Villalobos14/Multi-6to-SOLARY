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
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Keys", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at Venture Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your System environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Historical Analysis",
    description:
      "Analyze historical data to identify trends, patterns, and recurring issues for informed decision-making and system optimization.",
  },
  {
    icon: <ShieldHalf />,
    text: "Energy Performance Analysis",
    description:
      "Perform in-depth analysis of energy production and system performance to maximize efficiency and ROI over time.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-time Monitoring",
    description:
      "Continuously monitor voltage, current, luminosity, and temperature data from solar panels in real-time.",
  },
  {
    icon: <PlugZap />,
    text: "Anomaly Detection",
    description:
      "Utilize advanced algorithms to detect anomalies and deviations in performance metrics, enabling proactive maintenance.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Provide a user-friendly dashboard interface for easy visualization of key performance metrics, alerts, and maintenance insights.",
  },
];

export const checklistItems = [
  {
    title: "Optimized Performance",
    description:
      "Code optimized for efficiency in data processing and delvelopment of information",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your system apps and gain insights into user behavior.",
  },
  {
    title: "Adherence to Best Practices",
    description:
      "Coding standards followed for consistency and readability for clean architecture",
  },
  {
    title: "Modular Design",
    description:
      "Code structured for easy maintenance and expansion performing the process",
  },
];

export const pricingOptions = [
  {
    title: "Innovating",
    price: "100%",
    features: [
      "Algorithms",
      "Predictive",
      "Analytics",
      "Detection",
    ],
  },
  {
    title: "Accesibility",
    price: "100%",
    features: [
      "Integration",
      "Useful",
      "Intuituve",
      "Accesible",
    ],
  },
  {
    title: "Impact",
    price: "100%",
    features: [
      "Sustainability",
      "Efficiency",
      "Renewable energy",
      "Conscience",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "" },
  { href: "#", text: "" },
];

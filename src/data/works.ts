import SaudeImage from "@/assets/images/saude.png";
import SaudeDashboardImage from "@/assets/images/saude-dashboard.png";
import SaudePatientImage from "@/assets/images/saude-patient.png";
import SaudeSettingImage from "@/assets/images/saude-setting.png";
import SaudeKioskImage from "@/assets/images/saude-kiosk.png";
import NaomiImage from "@/assets/images/naomi.png";
import Naomi1Image from "@/assets/images/naomi-1.png";
import JKIGoShineImage from "@/assets/images/jki-go-shine.png";
import JKIGoShine1Image from "@/assets/images/jki-go-shine-1.png";
import JKIGoShineIpadImage from "@/assets/images/jki-go-shine-ipad.png";
import JKIGoShineIphoneImage from "@/assets/images/jki-go-shine-iphone.png";
import JKIGoShineMacImage from "@/assets/images/jki-go-shine-mac.png";
import type { Work } from "@/types/work";

export const works: Work[] = [
  {
    id: 1,
    image: SaudeImage,
    gallery: [
      SaudeDashboardImage,
      SaudePatientImage,
      SaudeSettingImage,
      SaudeKioskImage,
    ],
    title: "SAÚDE",
    slug: "saude",
    summary: "Transforming healthcare through a unified national digital ecosystem.",
    description:
      "SAÚDE is a comprehensive healthcare information system designed to improve the efficiency, accessibility, and quality of healthcare services across Timor-Leste. The platform centralizes patient medical records into a single national database while integrating hospital operations including patient registration, electronic medical records, pharmacy, laboratory, radiology, outpatient services, executive dashboards, and digital reporting. The system also introduces NFC-based Health Cards (Kartaun Saúde), self-service kiosks, and online registration to simplify patient identification, reduce manual processes, and enable faster, more reliable healthcare services.",
    tools: ["React", "TailwindCSS"],
    timeline: "Oct 2025 - Present",
    role: "Front End Developer",
    problem_statement:
      "Healthcare facilities relied on multiple disconnected applications and separate databases, causing fragmented patient records, duplicated data, inefficient reporting, and limited collaboration between hospital departments. Many clinical processes were still performed manually, while insufficient network infrastructure and hardware further reduced service efficiency and accessibility.",
    solution:
      'SAÚDE provides a centralized national healthcare platform built around the concept of "One Nation, One Record." The system integrates Hospital Information System (HIS), Electronic Medical Records (EMR), NFC-based Health Cards (Kartaun Saúde), self-service kiosks, online registration, executive dashboards, and digital clinical workflows into a single ecosystem. This enables healthcare providers to access unified patient records, streamline hospital operations, improve reporting accuracy, and deliver more efficient healthcare services nationwide.',
    category: "Healthcare System",
  },
  {
    id: 2,
    image: NaomiImage,
    gallery: [Naomi1Image],
    slug: "naomi",
    title: "NAOMI",
    summary: "Streamlining telecommunications maintenance with a centralized operations platform.",
    description:
      "NAOMI is a comprehensive operations management system designed to improve the efficiency of telecommunications infrastructure maintenance. The platform enables administrators to manage network sites, assign maintenance tasks, monitor technician activities, and track maintenance progress in real time. Integrated with mobile field operations, engineers can perform geolocation-based check-ins, submit maintenance reports with photo documentation, and complete structured inspection procedures directly from the app, ensuring greater operational visibility and accountability..",
    tools: ["React", "TailwindCSS"],
    timeline: "Mei 2025 - Present",
    role: "Front End Developer",
    problem_statement:
      "Managing telecommunications site maintenance manually made it difficult to coordinate field engineers, monitor maintenance progress, and maintain consistent documentation. A centralized system was needed to simplify task scheduling, technician assignments, approval workflows, and reporting while improving operational transparency.",
    solution:
      "NAOMI provides a centralized web dashboard alongside a mobile application for field engineers. The platform supports site management, maintenance scheduling, ticket management, geolocation-based attendance, structured maintenance procedures, photo documentation, and multi-level approval workflows, allowing every maintenance activity to be tracked and verified efficiently.",
    category: "Operations Management",
  },
  {
    id: 3,
    image: JKIGoShineImage,
    gallery: [
      JKIGoShine1Image,
      JKIGoShineIpadImage,
      JKIGoShineMacImage,
      JKIGoShineIphoneImage,
    ],
    title: "JKI Go Shine",
    slug: "jki-go-shine",
    summary: "Empowering church communities through a modern digital experience.",
    description:
      "JKI GO Shine is a modern web platform developed to digitalize church services and improve member engagement through a centralized online experience. The application provides easy access to worship schedules across multiple cities, event registrations, media content, online donations, ministry information, community activities, and merchandise. Built with a responsive interface, the platform delivers a consistent user experience across desktop, laptop, tablet, and mobile devices while simplifying content management for administrators.",
    tools: ["React", "TailwindCSS"],
    timeline: "Jan 2026 - Jun 2026",
    role: "Front End Developer",
    problem_statement:
      "Church members often rely on multiple communication channels to access worship schedules, event information, ministry services, media content, and donation programs. This fragmented experience makes it difficult to stay informed and engaged with church activities while increasing the administrative effort required to manage information across different platforms.",
    solution:
      "JKI GO Shine provides a centralized web platform that brings together church information, community services, digital media, online giving, and merchandise into a single responsive application. The platform improves accessibility for members while enabling administrators to manage content and services more efficiently through one integrated system.",
    category: "Church Platform",
  },
  // {
  //   id: 4,
  //   image: NaomiImage,
  //   slug: "medcare",
  //   title: "MedCare Radiology & EMR",
  //   description:
  //     "Integrated electronic medical record and radiology order system built for clinical kiosks.",
  //   category: "Healthcare System",
  // },
];

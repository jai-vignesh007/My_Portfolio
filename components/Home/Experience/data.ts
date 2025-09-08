import type { Exp } from "./types";
//fdfdfdfdf
export const EXPERIENCE: Exp[] = [
  {
    company: "Sagitec Solutions Pvt Ltd",
    role: "Data Analyst Intern",
    period: "Sep 2022 – Nov 2022",
    location: "Chennai, India",
    logo: "/images/SagitecLogo.png",
    bullets: [
      "Built end-to-end ETL with SSMS, SSIS & T-SQL—validated, reconciled, migrated multi-system data.",
      "Automated SSIS packages for daily Excel reports, cutting manual effort by ~50%.",
      "Designed Power BI dashboards for validation trends; led testing, docs, and cross-team troubleshooting.",
    ],
    tech: ["SSMS", "SSIS", "T-SQL", "Power BI"],
  },
{
  company: "Sri Sairam Engineering College NSS",
  role: "V-Connect Admin / V-Connect",
  period: "Sep 2023 - Jan 2024", 
  location: "Chennai, India",
  logo: "/images/Sairam.png", 
  bullets: [
    "Engineered a cross-platform Flutter app with Firebase Authentication & FCM push notifications, serving 400+ NSS volunteers with real-time event alerts.",
    "Implemented dual admin & volunteer workflows for attendance tracking, event creation & RSVP, and automated service-hour monitoring via Firebase Realtime Database.",
    "Built Firebase modules for blood-donor search by group and event photo galleries, digitizing volunteer records and streamlining logistics for campus outreach & donation camps."
  ],
  tech: ["Flutter", "Dart", "Firebase Authentication", "Firebase Realtime Database", "FCM"]
}

];

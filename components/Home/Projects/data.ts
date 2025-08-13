import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "sphere",
    title: "Sphere",
    blurb: "Campus marketplace & social hub with auth, events, gigs.",
    description:
      "Full-stack platform for clubs, events, listings, and job gigs with secure RBAC and transactional emails.",
    tags: ["Web", "React", "Node", "MongoDB"],
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "JWT", "RBAC", "NodeMailer"],
    highlights: [
      "REST APIs with Express + Mongoose; CRUD for events/listings/feeds.",
      "JWT auth + Passport middleware; role-based admin controls.",
      "Automated emails (confirmations, reminders, password reset).",
      "AI chatbot microservice (OpenAI API) embedded in the social feed.",
    ],
    repo: "https://github.com/jai-vignesh007/NEU_Sphere",
    // live: "https://sphere-demo.vercel.app",
    images: ["/images/Sphere/DarkDashBoard.png","/images/Sphere/DashBoard.png","/images/Sphere/Event.png","/images/Sphere/MarketPlace.png","/images/Sphere/Clubs.jpg"],
  },
  {
    id: "cloud-app",
    title: "Cloud Web Application",
    blurb: "Node API on AWS with Terraform, Packer & CI/CD.",
    description:
      "Cloud-native backend with health checks, infra-as-code, and automated AMI baking + deploys.",
    tags: ["Cloud", "DevOps", "Node", "AWS"],
    stack: ["Node.js", "Sequelize", "Terraform", "Packer", "AWS", "GitHub Actions", "Jest", "Shell"],
    highlights: [
      "Provisioned EC2, RDS, VPC, S3, Route 53, KMS/Secrets via Terraform.",
      "Blue/green deploys with AMI baking in Packer; launch templates auto-updated.",
      "ELB + CloudWatch + StatsD monitoring; ASG policies for scale-out.",
      "Jest unit/integration tests wired into CI/CD on every push.",
    ],
    repo: "https://github.com/orgs/Jai-Vignesh-Ravichandran/repositories?q=visibility%3Apublic+archived%3Afalse",
    images: ["/images/Cloud/MainLogo.png","/images/Cloud/Cloud.png",  "/images/Cloud/Pipeline.png"],
  },
  {
  id: "vconnect-admin",
  title: "V-Connect Admin",
  blurb: "Admin console to create events, track attendance, and broadcast alerts.",
  description:
    "Coordinator-facing Flutter app to manage 400+ NSS volunteers—create events with RSVP, take attendance, and monitor service-hours with real-time dashboards.",
  tags: ["Mobile", "Flutter", "Admin"],
  stack: ["Flutter", "Dart", "Firebase Auth", "Realtime DB", "FCM", "Firebase Storage"],
  highlights: [
    "Role-based access for coordinators; secure sign-in and session handling.",
    "Event creation & RSVP approvals with live updates via Realtime Database.",
    "Attendance capture and automated service-hour aggregation.",
    "One-tap broadcast notifications to all volunteers using FCM.",
    "Media uploads for event posts and galleries via Firebase Storage."
  ],
  repo: "https://github.com/jai-vignesh007/V-Connect-Admin",
  images: ["/images/V-connect/applogo.png", "/images/V-connect/Event.jpg", "/images/V-connect/Home.jpg", "/images/V-connect/Blood.jpg", "/images/V-connect/Work.jpg"]
},
{
  id: "vconnect",
  title: "V-Connect",
  blurb: "Volunteer app—secure sign-in, RSVP to events, and get real-time alerts.",
  description:
    "Cross-platform Flutter app for NSS volunteers: event feed and RSVP, attendance check-in, automated service-hour tracking, and instant push notifications.",
  tags: ["Mobile", "Flutter", "Firebase"],
  stack: ["Flutter", "Dart", "Firebase Auth", "Realtime DB", "FCM", "Firebase Storage"],
  highlights: [
    "Secure authentication with Firebase Auth; smooth onboarding flows.",
    "Personalized event feed with RSVP and reminder notifications.",
    "Check-in/out flow that logs volunteer attendance and service hours.",
    "FCM push notifications for new events, schedule changes, and updates.",
    "Blood-donor search module and an organized event photo gallery."
  ],
  repo: "https://github.com/jai-vignesh007/V-Connect",
  images: ["/images/V-ConnectStd/NSSLogo.png","/images/V-Connect-Std/Gallery.jpg","/images/V-Connect-Std/Attendance.jpg","/images/V-Connect-Std/Blood.jpg","/images/V-Connect-Std/Settings.jpg"]
},
  {
  id: "phaila-buyer",
  title: "Phaila – Buyer App",
  blurb: "Shop storefronts from Self-Help Groups with realtime inventory and geo-discovery.",
  description:
    "Cross-platform Flutter app for consumers to discover SHG products, browse catalogs, add to cart, and place orders with realtime stock and location-aware results.",
  tags: ["Mobile", "Flutter", "Firebase"],
  stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "GeoFirestore", "Firebase Storage", "FCM"],
  highlights: [
    "Geo-based product discovery using GeoFirestore (nearby SHG storefronts & items).",
    "Realtime inventory, ratings, and search with Firestore queries & indices.",
    "Cart, order placement, and order-status updates with push notifications (FCM).",
    "Secure onboarding with Firebase Auth; profile & saved addresses.",
    "Media-rich product galleries served from Firebase Storage with cached thumbnails."
  ],
  repo: "https://github.com/jai-vignesh007/Phila_Buyer",
  images: ["/images/Phaila-Buyer/BuyerLogo.png", "/images/Phaila-Buyer/Home.jpg","/images/Phaila-Buyer/Payment.jpg","/images/Phaila-Buyer/TrackOrder.jpg","/images/Phaila-Buyer/Settings.jpg",]
},
{
  id: "phaila-seller",
  title: "Phaila – Seller App",
  blurb: "SHG seller console to manage products, inventory, and orders in real time.",
  description:
    "Flutter admin app for Self-Help Groups to publish products, track inventory, fulfill orders, and broadcast offers—backed by Firebase for realtime sync.",
  tags: ["Mobile", "Flutter", "Firebase", "Admin"],
  stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "GeoFirestore", "FCM"],
  highlights: [
    "Role-based access for SHG admins; secure sign-in with Firebase Auth.",
    "Create/edit products, upload images to Storage, and tag items with location for discovery.",
    "Inventory & order management with Firestore transactions to prevent race conditions.",
    "Sales analytics: simple KPIs (orders, top products, stock alerts) via Firestore aggregations.",
    "Promotions & announcements via FCM topic messages to nearby buyers."
  ],
  repo: "https://github.com/jai-vignesh007/Phila_Seller",
  images: ["/images/Phaila-Seller/SellerLogo.png", "/images/Phaila-Seller/Analytics.jpg","/images/Phaila-Seller/Government.jpg","/images/Phaila-Seller/Home.jpg","/images/Phaila-Seller/Settings.jpg",]
}
];

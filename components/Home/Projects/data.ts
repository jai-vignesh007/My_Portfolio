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
    repo: "https://github.com/yourname/sphere",
    live: "https://sphere-demo.vercel.app",
    images: ["/projects/sphere/cover.png",  "/projects/sphere/screen-2.png","/projects/sphere/screen-2.png","/projects/sphere/screen-2.png"],
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
    repo: "https://github.com/yourname/cloud-app",
    images: ["/projects/cloud/cover.png"],
  },
  {
    id: "vconnect",
    title: "V-Connect",
    blurb: "Flutter app for volunteer management—auth, RSVP, alerts.",
    description:
      "Cross-platform app for 400+ NSS volunteers: attendance, event creation, real-time alerts.",
    tags: ["Mobile", "Flutter", "Firebase"],
    stack: ["Flutter", "Dart", "Firebase Auth", "Realtime DB", "FCM"],
    highlights: [
      "Dual workflow: admin & volunteers with real-time attendance tracking.",
      "FCM push notifications for events and updates.",
      "Blood donor search and photo gallery modules powered by Firebase.",
    ],
    repo: "https://github.com/yourname/vconnect",
    images: ["/projects/vconnect/cover.png"],
  },
  {
    id: "phaila",
    title: "Phaila",
    blurb: "E-commerce for Self-Help Groups—Smart India Hackathon Winner.",
    description:
      "Flutter + Firebase storefronts enabling product discovery and transactions for SHGs.",
    tags: ["Mobile", "Flutter", "Firebase"],
    stack: ["Flutter", "Dart", "Cloud Firestore", "Storage", "GeoFirestore"],
    highlights: [
      "Won 1st Prize (Ministry of Rural Development, Govt. of India).",
      "Real-time sync, secure auth, geo-based product discovery.",
      "Intuitive UI for catalog, cart, and checkout flows.",
    ],
    repo: "https://github.com/yourname/phaila",
    images: ["/projects/phaila/cover.png"],
  },
];

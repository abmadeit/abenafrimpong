export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: "Completed" | "In development" | "Academic project";
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
 
{
  title: "Invoicer",
  category: "Invoice Management System",
  description:
    "An invoice management web application that helps users manage clients, create invoices, track payments, and monitor their business activity.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Django REST Framework",
    "PostgreSQL",
  ],
  status: "Completed",
  liveUrl: "https://invoicer-apps.netlify.app/",
  featured: true,
},

  {
    title: "PennyWise",
    category: "Personal finance",
    description:
      "A planned personal finance and budgeting platform for individuals, freelancers, and small businesses, focused on tracking various income streams and expenses.",
    technologies: [
      "Django REST Framework", 
      "Database Design", 
      "Microservices", 
      "TypeScript", 
      "Next.js"
    ],
    status: "In development",
    featured: true,
  },
{
  title: "KORKOR KOUTURE",
  category: "Fashion Business Management System",
  description:
    "A business management platform in development for my mom's sewing and fashion brand. It is designed to streamline appointments, manage customer measurements and garment orders, maintain staff salary records, handle e-commerce, and organize essential business information in one place.",
  technologies: [
    "Django REST Framework",
    "Database Design",
    "TypeScript",
    "Next.js",
  ],
  status: "In development",
  featured: true,
},
];
export const ProjectData = [
  {
    id: 1,
    name: "Personal Website",
    focus: "Modern site powered by React and Vite",
    description: `This project is a fully responsive personal website that built with React, TypeScript, Vite, and deployed through Vercel with my custom domain. It combines clean design with thoughtful structure, showcasing my projects, photography collections, and blog posts.
                  
    Key features:
    • Smooth animations and intuitive navigation
    • Performance-optimized gallery with WebP images and metadata-driven layout logic
    • Modular content management using JSON and Markdown
    • Consistently optimized Lighthouse scores

    The site was developed over 3 full weeks and represents my first personal website project—a milestone that reflects both my coding skills and UI/UX. What started on scratch paper became a personal canvas — a clean, responsive space that reflects how I think and build.`,
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "UI/UX",
      "Frontend",
      "CSS",
      "Vercel",
      "Responsive Design",
      "CI/CD",
    ],
    coverImage: "/images/portfolio/project1/thumbs/001.webp",
    images: [
      "/images/portfolio/project1/thumbs/002.webp",
      "/images/portfolio/project1/thumbs/003.webp",
      "/images/portfolio/project1/thumbs/004.webp",
      "/images/portfolio/project1/thumbs/005.webp",
      "/images/portfolio/project1/thumbs/006.webp",
      "/images/portfolio/project1/thumbs/007.webp",
      "/images/portfolio/project1/thumbs/008.webp",
      "/images/portfolio/project1/thumbs/009.webp",
      "/images/portfolio/project1/thumbs/010.webp",
      "/images/portfolio/project1/thumbs/011.webp",
      "/images/portfolio/project1/thumbs/012.webp",
    ],
    link: "https://github.com/yliao-dev/yueting-website",
  },
  {
    id: 2,
    name: "Nutri Flow",
    focus: "Nutrition tracking with Python GUI",
    description: `Nutri Flow is a lightweight and intuitive desktop nutrition tracker built with Python and Tkinter. Designed for both general users and fitness enthusiasts, it provides a clean, form-based UI to log meals, calculate intake, and monitor eating habits over time.

    Key features:
    • Clean and minimal form-based interface with zero learning curve
    • CSV-based data storage for full control and transparency
    • JSON-driven ingredient library and user configuration
    • Weekly and monthly report export without external databases
    • Fully offline and distraction-free experience

    This project was developed from the ground up as a personal tool to better understand nutrition through simplicity. It reflects my approach to designing tools that are practical, maintainable, and user-first—free from unnecessary complexity but flexible enough for real-world tracking.`,
    tags: ["Python", "Tkinter", "Configurable", "JSON", "UI/UX", "Desktop App"],
    coverImage: "/images/portfolio/project2/thumbs/001.webp",
    images: [
      "/images/portfolio/project2/thumbs/002.webp",
      "/images/portfolio/project2/thumbs/003.webp",
      "/images/portfolio/project2/thumbs/004.webp",
      "/images/portfolio/project2/thumbs/005.webp",
      "/images/portfolio/project2/thumbs/006.webp",
      "/images/portfolio/project2/thumbs/007.webp",
    ],
    link: "https://github.com/yliao-dev/nutri-flow",
  },
  {
    id: 3,
    name: "Fujifilm Recipe Archive",
    focus: "Full-stack archive for Fujifilm film recipes",
    description: `This project is a modern, searchable archive of Fujifilm JPEG film simulation recipes—built with React, TypeScript, and Vite, and deployed via Vercel on a custom domain. Designed for both enthusiasts and photographers, it offers a clean, fast, and mobile-friendly interface to browse, filter, and submit recipes.

    Key features:
    • Dynamic filtering by camera model, tags, and film look
    • Form-driven recipe submission with validation and preview
    
    This project was built over several focused weeks, refining both technical and design decisions to create a space that’s practical, beautiful, and fast. It’s not just a tool—it’s a curated, user-friendly archive shaped by a passion for photography and precision in code.

    `,
    tags: [
      "Go",
      "React",
      "TypeScript",
      "Vite",
      "CRUD",
      "Postman",
      "MongoDB",
      "Film Simulation",
      "Image storage",
      "Client-Side Filtering",
    ],
    coverImage: "/images/portfolio/project3/thumbs/001.webp",
    images: [
      "/images/portfolio/project3/thumbs/002.webp",
      "/images/portfolio/project3/thumbs/003.webp",
      "/images/portfolio/project3/thumbs/004.webp",
      "/images/portfolio/project3/thumbs/005.webp",
      "/images/portfolio/project3/thumbs/006.webp",
      "/images/portfolio/project3/thumbs/007.webp",
      "/images/portfolio/project3/thumbs/008.webp",
    ],
    link: "https://github.com/yliao-dev/fujifilm-recipe-archive",
  },
  {
    id: 4,
    name: "Cloud-Native E-commerce Platform",
    focus: "A fully orchestrated e-commerce platform deployed on AWS",
    description: `This project implements a classic 3-tier architecture using a modern, cloud-native approach, resulting in a complete e-commerce platform built on a distributed microservices architecture and deployed to Amazon Web Services.
      
      Key features:
      • Infrastructure as Code (IaC): Terraform scripts provision a custom VPC, an EKS cluster, and IAM roles for a secure and repeatable environment.
      • Container Orchestration: Microservices are containerized with Docker and deployed to EKS using declarative Helm charts for versioned, manageable releases.
      • CI/CD Automation: A GitHub Actions pipeline automates building Docker images, pushing them to ECR, and rolling out new deployments to the Kubernetes cluster.
      • Advanced Networking: An Application Load Balancer (ALB), managed by the Kubernetes Ingress controller.
      
      This project represents a deep, practical application of modern cloud engineering principles, building a complex, scalable, and fully automated system from the ground up.,
    `,
    tags: [
      "Kubernetes",
      "Terraform",
      "Microservices",
      "Docker",
      "Helm",
      "CI/CD",
      "GitHub Actions",
      "AWS EKS | ECR | EC2 | VPC | ALB | Ingress | IAM",
      "Redis",
      "RabbitMQ",
      "Go",
      "React",
      "MongoDB",
    ],
    coverImage: "/images/portfolio/project4/thumbs/001.webp",
    images: [
      "/images/portfolio/project4/thumbs/002.webp",
      "/images/portfolio/project4/thumbs/003.webp",
      "/images/portfolio/project4/thumbs/004.webp",
      "/images/portfolio/project4/thumbs/005.webp",
      "/images/portfolio/project4/thumbs/006.webp",
      "/images/portfolio/project4/thumbs/007.webp",
      "/images/portfolio/project4/thumbs/008.webp",
      "/images/portfolio/project4/thumbs/009.webp",
      "/images/portfolio/project4/thumbs/010.webp",
      "/images/portfolio/project4/thumbs/011.webp",
    ],
    link: "https://github.com/yliao-dev/Three-tier-cloud-shop",
  },
];

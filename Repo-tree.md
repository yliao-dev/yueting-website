my-personal-website/
├── public/
│ ├── index.html # Main HTML file
│ ├── assets/ # Static assets (images, fonts, etc.)
│ └── favicon.ico # Favicon
├── src/
│ ├── assets/ # Images, icons, and static assets
│ ├── components/ # Reusable UI components
│ │ ├── Button.tsx # Button component
│ │ ├── Navbar.tsx # Navbar component
│ │ └── Footer.tsx # Footer component
│ ├── context/ # React Context (e.g., Auth context)
│ │ └── AuthContext.tsx # Auth context logic
│ ├── hooks/ # Custom hooks
│ │ ├── useAuth.ts # Custom hook for authentication
│ │ └── useLocalStorage.ts # Custom hook for localStorage
│ ├── pages/ # Page components (each major route)
│ │ ├── Home.tsx # Homepage
│ │ ├── Portfolio.tsx # Portfolio page
│ │ ├── Blog.tsx # Blog page
│ │ ├── About.tsx # About me page
│ │ └── Contact.tsx # Contact form
│ ├── services/ # API calls or service functions
│ │ ├── api.ts # API calls for data fetching
│ │ └── authService.ts # Authentication logic (login/signup)
│ ├── styles/ # Global styles (CSS or SCSS)
│ │ ├── global.css # Global styles
│ │ └── theme.ts # Theme and color variables
│ ├── types/ # TypeScript types and interfaces
│ │ ├── index.ts # General types
│ │ └── authTypes.ts # Auth-related types
│ ├── utils/ # Utility functions and helpers
│ │ ├── formatDate.ts # Date formatting function
│ │ └── validateEmail.ts # Email validation function
│ ├── App.tsx # Main app component
│ ├── index.tsx # Entry point for React
│ └── vite-env.d.ts # Vite environment types
├── .gitignore # Git ignore file
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration
└── README.md # Project documentation

# Vishal Patil - Portfolio Website

A modern, responsive portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion, and lucide-react. This portfolio showcases projects, work experience, skills, and provides an interactive contact form.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for optimal performance
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for elegant page transitions and interactions
- **Professional Pages**:
  - **Home**: Hero section with featured projects and call-to-action
  - **About**: Personal introduction, skills categorization, and education
  - **Projects**: Filterable project showcase with technology badges
  - **Experience**: Timeline view of work history with detailed descriptions
  - **Contact**: Interactive contact form with validation
- **Reusable Components**: Modular component architecture including Button, Card, Badge, Navbar, and Footer
- **Type-Safe**: Full TypeScript support for better code quality and developer experience
- **Clean UI**: Modern design with Tailwind CSS utility classes
- **Accessible**: ARIA labels and semantic HTML for better accessibility
- **Icon Library**: Beautiful icons from lucide-react

## 📦 Technologies Used

### Core
- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Next-generation frontend build tool

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **lucide-react** - Icon library

### Routing
- **React Router DOM** - Client-side routing

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishalp23/Vishal-Patil.git
   cd Vishal-Patil
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode
Start the development server with hot module replacement:
```bash
npm run dev
```
The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

### Build for Production
Create an optimized production build:
```bash
npm run build
```
The built files will be in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
Vishal-Patil/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── common/        # Common UI components
│   │   │   ├── Badge.tsx  # Badge component for tags
│   │   │   ├── Button.tsx # Reusable button component
│   │   │   └── Card.tsx   # Card container component
│   │   └── layout/        # Layout components
│   │       ├── Footer.tsx # Site footer
│   │       ├── Layout.tsx # Main layout wrapper
│   │       └── Navbar.tsx # Navigation bar
│   ├── data/              # Sample data
│   │   ├── experiences.ts # Work experience data
│   │   └── projects.ts    # Project portfolio data
│   ├── pages/             # Page components
│   │   ├── About.tsx      # About page
│   │   ├── Contact.tsx    # Contact page
│   │   ├── Experience.tsx # Experience page
│   │   ├── Home.tsx       # Home page
│   │   └── Projects.tsx   # Projects page
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Shared types
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # TypeScript app configuration
├── tsconfig.node.json     # TypeScript node configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🎨 Customization

### Updating Personal Information

1. **Data Files**: Update the sample data in:
   - `src/data/projects.ts` - Your projects
   - `src/data/experiences.ts` - Your work experience

2. **About Page**: Modify `src/pages/About.tsx` to update:
   - Personal bio
   - Skills and technologies
   - Education and certifications

3. **Contact Information**: Update contact details in `src/pages/Contact.tsx` and `src/components/layout/Footer.tsx`

4. **Colors**: Customize the color scheme in `tailwind.config.js`:
   ```javascript
   theme: {
     extend: {
       colors: {
         primary: {
           // Your custom colors
         },
       },
     },
   }
   ```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation links in `src/components/layout/Navbar.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build

### Netlify
1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Deploy the dist/ directory to GitHub Pages
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/vishalp23/Vishal-Patil/issues).

## 👤 Author

**Vishal Patil**
- GitHub: [@vishalp23](https://github.com/vishalp23)
- Portfolio: [Your Live URL]

## 📸 Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/72844cbc-44b5-4f81-8b16-6365db7e7eef)

### About Page
![About Page](https://github.com/user-attachments/assets/4087dee5-8748-42ab-acf0-896a6b0d8f42)

### Projects Page
![Projects Page](https://github.com/user-attachments/assets/f8b0db25-6079-437e-9265-3f3607242376)

### Experience Page
![Experience Page](https://github.com/user-attachments/assets/18f3f2e0-3d09-4dea-a334-0f7a4494606f)

### Contact Page
![Contact Page](https://github.com/user-attachments/assets/54bc131a-52d3-4e37-8adf-cc55ce0315dd)

## ⭐ Show your support

Give a ⭐️ if you like this project!

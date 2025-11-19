# Modern Portfolio Website

A complete, modern personal portfolio website for software engineers built with React 18, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React.

## Features

- **Clean & Modern UI**: Responsive design with soft shadows, rounded corners, and subtle animations
- **Light/Dark Mode**: Theme toggle with persistent storage
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: ARIA labels, semantic HTML, and keyboard navigation support
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Type-Safe**: Written in TypeScript for better developer experience
- **Production Ready**: Optimized build with code splitting and lazy loading

## Pages

### Home
- Hero section with animated introduction
- Call-to-action buttons
- Key statistics showcase
- Gradient background with animated blobs

### About
- Profile image with decorative effects
- Detailed biography
- Skills showcase organized by category
- Quick stats cards
- Download resume button

### Projects
- Animated project cards with hover effects
- Project images, descriptions, and tech stacks
- GitHub and live demo links
- Featured project highlights

### Experience
- Vertical timeline layout
- Company details with roles and dates
- Key responsibilities and achievements
- Technologies used per position

### Contact
- Functional contact form
- Contact information display
- Social media links
- Form validation

## Tech Stack

- **React 18**: Latest React with hooks and concurrent features
- **TypeScript**: Static typing for better code quality
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Framer Motion**: Animation library for React
- **Lucide React**: Beautiful icon set

## Project Structure

```
portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Section.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── data/           # Sample data
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   ├── socialLinks.ts
│   │   └── personal.ts
│   ├── types/          # TypeScript interfaces
│   │   └── index.ts
│   ├── context/        # React contexts
│   │   └── ThemeContext.tsx
│   ├── hooks/          # Custom hooks
│   │   └── useScrollAnimation.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization

### Personal Information

Update the following files in `src/data/`:

- `personal.ts` - Your name, title, bio, and profile image
- `projects.ts` - Your project portfolio
- `experience.ts` - Your work experience
- `skills.ts` - Your technical skills
- `socialLinks.ts` - Your social media links and contact info

### Styling

- Modify `tailwind.config.js` to customize colors, fonts, and other design tokens
- Update `src/index.css` for global styles and custom CSS

### Theme Colors

The portfolio uses a customizable color scheme. Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: 199 89% 48%;
  /* Add more custom colors */
}
```

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Replace with your name and information.

---

**Note**: Remember to replace all placeholder data in the `src/data/` files with your actual information before deploying!

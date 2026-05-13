# Modern Portfolio Website

A beautiful, modern, and elegant portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio features smooth animations, dark mode support, and a fully responsive design.

## Features

✨ **Modern Design**
- Clean, minimalist interface inspired by real-world portfolios
- Elegant typography and consistent color scheme
- Smooth animations and transitions using Framer Motion

🌓 **Dark Mode**
- Toggle between light and dark themes
- Persistent theme preference
- System preference detection

📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly navigation

🎨 **Sections**
- **Hero**: Eye-catching introduction with animated background
- **About**: Personal story and key features
- **Skills**: Interactive skill bars and technology tags
- **Projects**: Featured projects with case studies
- **Contact**: Contact form and information

⚡ **Performance**
- Optimized images and assets
- Fast page loads
- Smooth scrolling navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Add your social media links

2. **About Section** (`components/About.tsx`):
   - Modify the about text
   - Update statistics (experience, projects, clients)

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skills and adjust proficiency levels
   - Update technology tags

4. **Projects Section** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Update project images, descriptions, and links

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Connect form to your email service (e.g., Formspree, EmailJS)

6. **Navigation** (`components/Navigation.tsx`):
   - Update portfolio name/brand

### Styling

- Colors: Modify `tailwind.config.js` to change the color scheme
- Fonts: Update `app/globals.css` to use different fonts
- Animations: Adjust Framer Motion animations in components

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Intersection Observer**: react-intersection-observer

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact section
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── Navigation.tsx    # Navigation bar
│   ├── Projects.tsx      # Projects section
│   ├── Skills.tsx        # Skills section
│   └── ThemeProvider.tsx # Theme context
└── public/               # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed on:
- Netlify
- AWS Amplify
- Railway
- Any platform supporting Next.js

## License

This project is open source and available under the MIT License.

## Credits

Design inspired by modern portfolio websites and best practices from the web development community.

---

Built with ❤️ using Next.js and Tailwind CSS

## Repository

This portfolio is hosted on GitHub: [https://github.com/Betelhem-Ashenafi/portfolio-](https://github.com/Betelhem-Ashenafi/portfolio-)


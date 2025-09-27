# Moaaz Ahmad - Portfolio Website

A professional, responsive portfolio website showcasing expertise in AI-powered mobile and cross-platform development.

## 🚀 Features

- **Modern Design**: Clean, minimalist, and professional UI with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 14 and optimized for speed
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📱 Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Professional background and expertise overview
3. **Skills**: Comprehensive skills showcase with progress bars
4. **Projects**: Featured projects with GitHub and demo links
5. **Contact**: Contact information and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Moaaz-Ahmad/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Update headline and social links
- `src/components/About.tsx` - Update bio and statistics
- `src/components/Projects.tsx` - Replace with your actual projects
- `src/components/Footer.tsx` - Update contact information

### Projects

To add your projects, edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    category: 'Category',
    icon: YourIcon,
    githubUrl: 'https://github.com/your-username/project',
    demoUrl: 'https://your-demo-url.com',
    featured: true
  }
]
```

### Styling

The website uses Tailwind CSS with a custom color scheme. You can modify colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark theme colors
  }
}
```

## 🎨 Design Features

- **Gradient Text**: Eye-catching gradient text effects
- **Glass Morphism**: Modern glass-like effects
- **Smooth Animations**: Fade-in and slide-up animations
- **Hover Effects**: Interactive hover states
- **Dark Mode**: Automatic dark/light theme switching

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Moaaz-Ahmad/portfolio/issues).

## 📞 Contact

- **Email**: moaazhagag2001@gmail.com
- **GitHub**: [@Moaaz-Ahmad](https://github.com/Moaaz-Ahmad)
- **LinkedIn**: [Moaaz Ahmad](https://www.linkedin.com/in/moaaz-hagag-06969b31a/)

---

Built with ❤️ by Moaaz Ahmad

# Creative Portfolio Website

A modern, responsive portfolio website built with TypeScript, React, and cutting-edge web technologies. Inspired by award-winning portfolio designs, this project showcases UX design, AR/VR experiences, and 3D animations with smooth animations and interactive elements.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and accent colors
- **3D Elements**: Interactive 3D scene using Three.js and React Three Fiber
- **Smooth Animations**: GSAP and Framer Motion for engaging animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling and animated navigation
- **Case Studies**: Detailed project case study pages
- **Contact Form**: Functional contact form with validation
- **TypeScript**: Fully typed codebase for better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion, GSAP
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Variables
- **Smooth Scrolling**: Lenis
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation/          # Navigation component
│   └── Scene3D/            # 3D scene component
├── pages/
│   ├── Home/               # Home page with hero, work, and skills sections
│   ├── About/              # About page
│   ├── Contact/            # Contact page
│   ├── Play/               # Projects showcase page
│   └── CaseStudy/          # Individual case study pages
├── hooks/
│   └── useSmoothScroll.ts  # Custom smooth scrolling hook
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles
```

## 🎨 Key Features

### Home Page
- **Hero Section**: Animated text reveal with floating elements
- **Work Section**: Featured projects grid with hover effects
- **Skills Section**: Interactive skills showcase with progress bars
- **3D Background**: Animated 3D sphere with particle field

### Navigation
- **Desktop Menu**: Clean horizontal navigation
- **Mobile Menu**: Slide-out mobile navigation
- **Scroll Effects**: Navigation background changes on scroll

### Project Showcase
- **Interactive Filtering**: Filter projects by category
- **Smooth Transitions**: Layout animations using Framer Motion
- **Hover Effects**: Project cards with overlay animations

### Case Studies
- **Detailed Views**: Comprehensive project breakdowns
- **Image Galleries**: Project image showcases
- **Navigation**: Easy navigation between projects

## 🚦 Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

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

4. Open your browser and visit `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Customization

### Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #ffffff;
  --secondary-color: #000000;
  --accent-color: #ff6b35;
  --text-color: #ffffff;
  --text-muted: #a0a0a0;
  --background: #000000;
  --surface: #111111;
}
```

### Content
- Update project data in the respective page components
- Replace placeholder images with your own
- Modify text content to match your personal brand

### 3D Scene
Customize the 3D elements in `src/components/Scene3D/Scene3D.tsx`:
- Modify sphere properties
- Adjust particle count and positioning
- Change lighting and materials

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## ⚡ Performance

- **Lazy Loading**: Images and components load as needed
- **Optimized Animations**: Hardware-accelerated CSS and WebGL
- **Code Splitting**: Routes are split for faster loading
- **Asset Optimization**: Images optimized for web

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from Tingting Luo's portfolio
- Three.js community for 3D web graphics
- Framer Motion for smooth animations
- GSAP for advanced animations
- Unsplash for placeholder images

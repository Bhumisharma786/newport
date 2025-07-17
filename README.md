# Bhoomi's Universe - Space Portfolio

An immersive, interactive space-themed portfolio experience built with React, Three.js, and modern web technologies.

## 🌟 Features

### Hero Section
- **Dynamic Universe Background**: Animated starfield with shooting stars and nebula clouds
- **Cinematic Typography**: "WELCOME TO BHOOMI'S UNIVERSE" with glowing effects
- **Interactive Button**: "START EXPLORING" with GSAP animations and shimmer effects
- **Custom Cursor**: Astronaut cursor that responds to user interaction

### Vortex Transition
- **Cinematic Wormhole**: Three.js-powered vortex tunnel with swirling particles
- **Dynamic Text**: "Entering Bhoomi's Solar System..." with animated transitions
- **Energy Effects**: Radial waves and distortion effects for immersive experience

### Solar System Experience
- **3D Interactive Planets**: Each planet represents a portfolio section
- **Realistic Orbits**: Planets rotate and orbit naturally using Three.js
- **Interactive Panels**: Click planets to view detailed information
- **Navigation Controls**: Zoom, rotate, and explore the solar system

## 🪐 Planet Sections

| Planet | Section | Description |
|--------|---------|-------------|
| ☀️ Sun | About Me | Personal introduction and background |
| 🛰️ Mercury | Education | Academic journey and achievements |
| 🌋 Venus | My Hobbies | Personal interests and activities |
| 🌍 Earth | My Skills | Technical skills and expertise |
| 🔴 Mars | My Projects | Portfolio of work and projects |
| 🪐 Jupiter | Internship Experience | Professional experience at LinuxWorld |
| 💫 Saturn | My CV | Downloadable resume and credentials |
| 🌀 Uranus | Articles and Blogs | Written content and insights |
| 🌊 Neptune | Certifications & Experience | Professional certifications |

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Smooth animations and transitions
- **GSAP** - Advanced animations and effects
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Adding New Planets
1. Update `planetData` in `src/components/SolarSystem.jsx`
2. Add planet information and content
3. Update planet interactions as needed

### Modifying Animations
- **GSAP**: Edit animations in `src/components/HeroSection.jsx`
- **Framer Motion**: Modify transitions in component files
- **Three.js**: Adjust 3D effects in `src/components/VortexTransition.jsx`

### Styling
- **Tailwind**: Modify `tailwind.config.js` for custom styles
- **CSS**: Edit `src/index.css` for custom animations

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx      # Landing page with universe background
│   ├── VortexTransition.jsx # Cinematic wormhole transition
│   ├── SolarSystem.jsx      # 3D interactive solar system
│   ├── StarField.jsx        # Animated starfield background
│   ├── CustomCursor.jsx     # Astronaut cursor
│   └── PlanetInfoPanel.jsx  # Planet information panels
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── index.css               # Global styles and animations
```

## 🎯 Performance Optimizations

- **Lazy Loading**: Components load on demand
- **Optimized 3D**: Efficient Three.js rendering
- **CSS Animations**: Hardware-accelerated effects
- **Responsive Design**: Works on all device sizes

## 🌟 Future Enhancements

- [ ] Add space ambient audio
- [ ] Implement more planet interactions
- [ ] Add particle effects to planets
- [ ] Create mobile-optimized controls
- [ ] Add loading screen animations

## 📝 License

This project is created for Bhoomi Sharma's portfolio. All rights reserved.

---

**Experience the universe of possibilities!** 🚀✨ # port
# port

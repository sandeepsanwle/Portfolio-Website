# Sandeep Sanwle - Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack Developer.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Material-UI (MUI)** - Component library
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form validation
- **TanStack Query** - Data fetching and caching
- **Sonner** - Toast notifications
- **Canvas Confetti** - Celebration animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
```

2. Navigate to the project directory:
```sh
cd clever-react-code
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy `dist/` to GitHub Pages (branch: `gh-pages`)

## Deploy (GitHub Pages)

This project is already configured to deploy via the `gh-pages` package:

- `predeploy`: runs `npm run build`
- `deploy`: publishes `dist/` to the `gh-pages` branch

### One-time GitHub setup

1. Push your repo to GitHub.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `(root)`

### Deploy command

```sh
npm install
npm run deploy
```

After the command finishes, GitHub Pages will serve the latest build.

### If you change the repository name

GitHub Pages for a project repo uses a path like `/<repo-name>/`. If your repo name changes, update:

- `vite.config.ts` (`base`)
- `package.json` (`homepage`)

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components
├── assets/        # Static assets (images, etc.)
├── hooks/         # Custom React hooks
└── main.tsx       # Application entry point
```

## Features

- 🎨 Modern, responsive design
- 🌓 Dark/Light theme toggle
- ✨ Smooth animations and transitions
- 📱 Mobile-first approach
- 🚀 Optimized performance
- 📧 Contact form with validation
- 🎉 Interactive UI elements

## License

This project is private and proprietary.

## Contact

Sandeep Sanwle
- Email: sandeepsanwle74@gmail.com
- LinkedIn: [linkedin.com/in/sandeepsanwle](https://www.linkedin.com/in/sandeepsanwle)

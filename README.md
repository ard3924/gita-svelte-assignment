# Bhagavad Gita Web Application

A modern, responsive web application for exploring the Bhagavad Gita, built with SvelteKit and styled with Tailwind CSS.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── lib/
│   │   ├── assets/          # Static assets (images, icons)
│   │   ├── components/      # Reusable Svelte components
│   │   └── index.js         # Library exports
│   ├── routes/
│   │   ├── api/
│   │   │   └── gita/[chapter]/+server.js  # API endpoint for chapter data
│   │   ├── gita/
│   │   │   ├── +page.svelte               # Chapters overview page
│   │   │   └── [chapter]/+page.svelte     # Individual chapter page
│   │   ├── login/+page.svelte             # User login
│   │   ├── register/+page.svelte          # User registration
│   │   ├── dashboard/+page.svelte         # User dashboard
│   │   ├── contact/+page.svelte           # Contact page
│   │   └── admin/+page.svelte             # Admin panel
│   ├── app.css            # Global styles and Tailwind imports
│   ├── app.d.ts           # TypeScript declarations
│   └── app.html           # Main HTML template
├── static/                # Static files (favicon, robots.txt)
├── package.json           # Dependencies and scripts
├── svelte.config.js       # SvelteKit configuration
├── vite.config.js         # Vite build configuration
├── jsconfig.json          # JavaScript/TypeScript config
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🌟 Features

- **Interactive Chapter Display**: Browse all 18 chapters of the Bhagavad Gita in an elegant diamond-grid layout
- **User Authentication**: Complete login, registration, and profile management system
- **Dashboard**: Personal dashboard for users to track their progress
- **Contact Page**: Get in touch with the application maintainers
- **Admin Panel**: Administrative features for content management
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, spiritual-themed design with smooth animations

## 🚀 Tech Stack

- **Framework**: SvelteKit 2.48.5
- **Styling**: Tailwind CSS 4.1.17
- **Build Tool**: Vite 7.2.2
- **Language**: TypeScript 5.9.3
- **Linting**: ESLint 9.39.1 with Prettier 3.6.2
- **Package Manager**: npm
- **Additional Tools**: Svelte 5.43.8, Svelte Check 4.3.4

## 🔗 API Integration

The application integrates with external APIs for Bhagavad Gita content:

- **Sanskrit API**: `https://sanskrit.ie/api/geeta.php` - Provides chapter and verse data
- **Endpoint**: `/api/gita/[chapter]` - Internal API route that proxies requests to the external API
- **Data Format**: JSON responses containing Sanskrit text, translations, and commentaries

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## 🛠️ Installation & Setup

1. **Clone the repository**:

```bash
git clone <repository-url>
cd vows-vibe-work-svelte
```

2. **Navigate to the frontend directory**:

```bash
cd frontend
```

3. **Install dependencies**:

```bash
npm install
```

4. **Start the development server**:

```bash
npm run dev
```

5. **Open your browser** and navigate to `http://localhost:5173`

The application will automatically reload when you make changes to the code.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking and linting
- `npm run check:watch` - Watch mode for type checking
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint and Prettier checks

## 🎨 Design Features

- **Spiritual Theme**: Warm color palette inspired by traditional Indian aesthetics
- **Diamond Grid Layout**: Unique presentation of Gita chapters
- **Smooth Animations**: Fade-in effects and hover transitions
- **Typography**: Serif fonts for headings, clean sans-serif for body text
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and run tests: `npm run check`
4. Format your code: `npm run format`
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

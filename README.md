# Car Down Payment Loans - Unify Capital

A modern, responsive web application for car down payment loan services in Florida. Built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Architecture:** Feature-based modular architecture

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Git

## 🛠️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/sebas1541/Unify-Capital-Page
cd Unify-Capital-Page
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:5173`

## 📁 Project Structure

This project follows a **feature-based module architecture**, where features are organized into self-contained modules:

```
├── src
│   ├── App.tsx
│   ├── app
│   │   └── App.tsx
│   ├── common
│   │   ├── components
│   │   │   ├── Button
│   │   │   │   └── Button.tsx
│   │   │   ├── Container
│   │   │   │   └── Container.tsx
│   │   │   ├── Hero
│   │   │   │   └── Hero.tsx
│   │   │   ├── LoadingSpinner
│   │   │   │   └── LoadingSpinner.tsx
│   │   │   ├── Logo
│   │   │   │   └── Logo.tsx
│   │   │   └── Navbar
│   │   │       └── Navbar.tsx
│   │   └── hooks
│   │       ├── useIntersectionObserver.ts
│   │       └── useScrollToTop.ts
│   ├── components
│   │   ├── Form.js
│   │   └── Landing.js
│   ├── features
│   │   ├── form
│   │   │   └── components
│   │   │       └── FormPage.tsx
│   │   └── landing
│   │       └── components
│   │           ├── ApplicationForm
│   │           │   └── ApplicationForm.tsx
│   │           ├── FeatureSection
│   │           │   └── FeatureSection.tsx
│   │           ├── Footer
│   │           │   └── Footer.tsx
│   │           ├── LandingPage.tsx
│   │           ├── LoanCalculator
│   │           │   └── LoanCalculator.tsx
│   │           └── TestimonialSection
│   │               └── TestimonialSection.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── utils
│   │   └── cn.ts
│   └── vite-env.d.ts
```

### Architecture Explanation

**Feature-based modules** organize code by business functionality rather than technical layers. Each feature module contains:
- Components specific to that feature
- Custom hooks for feature logic
- TypeScript types
- Utility functions
- Tests (if using)

This approach provides:
- Better scalability for large applications
- Easier maintenance and debugging
- Clear separation of concerns
- Simplified collaboration among team members

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🎨 Styling Guidelines

This project uses Tailwind CSS with the following conventions:
- Use utility classes for most styling
- Custom components in `src/components/` for reusable UI elements
- Mobile-first responsive design approach
- Dark mode support (if implemented)

## 🔒 Security

- All API keys should be stored in environment variables
- Never commit sensitive information to the repository
- Use HTTPS for all external API calls
- Implement proper input validation

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Deploy to Hostinger

1. Build the project using the command above
2. Upload the contents of the `dist` folder to your Hostinger hosting directory
3. Configure your domain settings in Hostinger control panel

### Other Deployment Options

- **Vercel:** `vercel deploy`
- **Netlify:** `netlify deploy`
- **GitHub Pages:** Configure in repository settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Keep components small and focused


## 🔍 Troubleshooting

**Common Issues:**

1. **Module not found errors:** Run `npm install` again
2. **Port already in use:** Change port with `npm run dev -- --port 3001`
3. **TypeScript errors:** Run `npm run type-check` to identify issues
4. **Build failures:** Check console for specific errors and ensure all dependencies are installed


## 👥 Team

- **Project Lead:** Sebastián Cañón Castellanos
- **Frontend Developer:** Sebastián Cañón Castellanos
- **UI/UX Designer:** Sebastián Cañón Castellanos

## 📞 Support

For support, email support@unifycapital.com or create an issue in this repository.

---

Made with ❤️ by the Unify Capital Team

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
git clone https://github.com/your-username/car-down-payment-loans.git
cd car-down-payment-loans
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Environment Setup

Create a `.env` file in the root directory and add your environment variables:

```env
VITE_API_URL=your_api_url_here
VITE_ANALYTICS_ID=your_analytics_id_here
# Add other environment variables as needed
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
src/
├── components/           # Shared UI components
│   ├── common/
│   ├── forms/
│   └── layout/
├── features/            # Feature-based modules
│   ├── loan-application/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── utils/
│   ├── dashboard/
│   ├── auth/
│   └── home/
├── hooks/               # Global custom hooks
├── types/               # Global TypeScript type definitions
├── utils/               # Utility functions
├── styles/              # Global styles and Tailwind config
├── assets/              # Static assets (images, icons, etc.)
└── App.tsx
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

## 📝 Environment Variables

```env
VITE_API_URL=                    # API endpoint URL
VITE_ANALYTICS_ID=              # Analytics tracking ID
VITE_ENVIRONMENT=               # development | staging | production
```

## 🔍 Troubleshooting

**Common Issues:**

1. **Module not found errors:** Run `npm install` again
2. **Port already in use:** Change port with `npm run dev -- --port 3001`
3. **TypeScript errors:** Run `npm run type-check` to identify issues
4. **Build failures:** Check console for specific errors and ensure all dependencies are installed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead:** Your Name
- **Frontend Developer:** Your Name
- **UI/UX Designer:** Your Name

## 📞 Support

For support, email support@unifycapital.com or create an issue in this repository.

---

Made with ❤️ by the Unify Capital Team

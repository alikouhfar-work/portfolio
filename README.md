# Personal Portfolio Showcase of Ali Kouhfar

## Table of Contents

- [Personal Portfolio Showcase of Ali Kouhfar](#personal-portfolio-showcase-of-ali-kouhfar)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Version History](#version-history)
  - [Challenges](#challenges)
    - [Technical Challenges](#technical-challenges)
    - [Design \& Performance](#design--performance)
  - [What I Learned](#what-i-learned)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This repository contains a sleek, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. The website serves as a showcase for my projects, skills, and experiences, designed to highlight my technical and frontend capabilities. It features smooth animations, a modern theme, and multi-language support, providing a seamless experience for potential employers or clients.

## Features

- **Single-page layout**: The portfolio consists of a single page with the following sections:
  1. Hero Section
  2. About Section
  3. Work Experience Section
  4. Education Section
  5. Languages Section
  6. Technical Skills Section

- **Theming System**: Supports 3 main color themes, customizable via a context provider.
- **Multi-lingual Support**: Available in English, Persian, and German, based on the user's language preference.
- **Responsive Design**: Optimized for a wide range of devices.
- **Language Detection**: Utilizes Next.js proxy to detect the user's preferred language and display data accordingly.
- **Customizable Content**: Easy updates to sections including work experiences, education, and skills.
- **Smooth Animations**: Powered by **Framer Motion** for smooth transitions and interactions.
- **UI Components**: Utilizes **ShadCN** for accessible and customizable UI primitives.
- **Modern Aesthetic**: Clean, minimal design with motion-based interactions.

## Technologies Used

- **Next.js (v16)**: Framework for React with support for server-side rendering and static generation.
- **TypeScript**: Ensures type safety and maintainability.
- **React (v19)**: Library for building user interfaces.
- **Framer Motion**: For smooth animations and transitions.
- **ShadCN**: Customizable UI components for accessibility and flexibility.
- **Bun**: A modern JavaScript bundler for fast build times.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Next.js Proxy**: To detect user language preference and serve appropriate translations.
- **ESLint + Prettier**: For consistent code formatting and quality.

## Version History

- **Version 1.0.0** (Initial Release - 2024-02-15):
  - Implemented basic portfolio structure with project showcase, skills section, and contact form.
  - Integrated smooth page transitions between sections.
  - Updated dependencies to the latest versions for improved performance and security.
  - Added multi-language support for internationalization.

- **Version 1.1.0** (2024-05-22):
  - Changed the Persian font to Yekan Bakh.
  - Changed the project structure to use TypeScript.
  - As it is not a good thing to use database to store static data, the necessary information is now stored inside of project folders.

- **Version 2.0.0** (2024-08-25):
  - Migrated to Next.js with TypeScript for improved performance and maintainability.
  - Enhanced routing capabilities with Next.js features.
  - Improved type safety and developer experience with TypeScript.
  - Optimized server-side rendering for faster initial load times.
  - Enhanced SEO capabilities through proper Next.js configuration.
  - Improved error handling and debugging with TypeScript-specific tools.
  - Simplified state management using React Context API and custom hooks.
  - Implemented responsive design improvements for better mobile experience.
  - Added TypeScript-specific linting rules for stricter code quality checks.

- **Version 2.1.0** (2024-09-01):
  - Bug fixes and error resolutions.
  - Accent color changed.
  - Contact form functionality improvement.

- **Version 3.0.0** (2025-10-02 – Current Version):
  - Brand new theme and design overhaul.
  - Introduced a dedicated projects page with individual project detail pages.
  - Replaced **Swiper** with lightweight alternatives.
  - Integrated **GitHub GraphQL API** to fetch project/user details.
  - Added advanced scroll-spy behavior for project details.
  - Animations powered by **Framer Motion**.
  - Contact form temporarily removed (to be reintroduced in a future release).

- **Version 4.0.0** (2026-04-19):
  - Added **Single-page layout** with the following sections:
    1. Hero Section
    2. About Section
    3. Work Experience Section
    4. Education Section
    5. Languages Section
    6. Technical Skills Section

  - Introduced a **Theming System** that supports 3 main color schemes.
  - Implemented **language detection** using Next.js proxy for serving content based on user language preference.
  - Integrated **multi-lingual support** for English, Persian, and German based on Next.js’s document system.
  - Optimized UI components using **ShadCN** for improved accessibility and customizability.
  - Added **Bun** for faster build times and performance optimization.
  - Enhanced responsive design for a consistent experience across devices.
  - Streamlined content updates and customizations for work experiences, education, and skills.

## Challenges

### Technical Challenges

- **Multi-language Support**: Ensuring seamless integration of translations and language detection.
- **Theming System**: Implementing a flexible and dynamic theme switching system across the app.
- **Performance Optimization**: Migrating to Bun for faster build times and enhanced performance.

### Design & Performance

- **Minimalist Design**: Striking a balance between smooth animations and performance optimization.
- **Responsive Layouts**: Designing for multiple devices while maintaining a clean, professional aesthetic.

## What I Learned

1. **Multi-language Support**: Implementing language detection and seamless translation handling with Next.js.
2. **Theming System**: Developing a dynamic theme system that supports multiple color schemes.
3. **Performance**: Gained experience in optimizing performance by using modern tools like Bun.
4. **Advanced Animations**: Leveraged **Framer Motion** for smooth, interactive transitions.
5. **Tailwind + ShadCN**: Utilizing Tailwind CSS and **ShadCN** components to create a visually appealing and accessible UI.

## Getting Started

To get started with this project:

1. Clone the repository:

   ```bash
   git clone https://github.com/alikouhfar/portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Contributing

Contributions are welcome! Please fork the repo, create a branch, make changes, and submit a pull request.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

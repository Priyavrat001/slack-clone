# Slack Clone - Home Page

This project is a simple Slack-like homepage built using **React** and **Tailwind CSS**. The design is fully responsive and includes navigation, hero sections, featured logos, and a cookie banner.

## Live Location
[Click here to view](https://incredible-cajeta-819667.netlify.app/)


## Features
- Responsive UI using Tailwind CSS
- Modern navigation with hover effects
- Hero section with CTA buttons
- Partner brand logos
- Video preview section
- Cookie consent banner

## Tech Stack
- **Vite** - Fast build tool for frontend development
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Collection of icons for React applications
- **React Router DOM** - Library for handling navigation in React applications

## Installation
1. Clone this repository:
  
2. Navigate to the project folder:
   ```sh
   cd slack-homepage
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Tailwind Setup
Ensure Tailwind CSS is properly set up:
1. Install Tailwind, PostCSS, and Autoprefixer:
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   ```
2. Initialize Tailwind:
   ```sh
   npx tailwindcss init -p
   ```
3. Configure `tailwind.config.js`:
   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
4. Add Tailwind imports to `index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Deployment
To build for production:
```sh
npm run build
```
To preview production build:
```sh
npm run preview
```


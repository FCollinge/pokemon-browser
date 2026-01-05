# Pokémon Explorer

---

## Part 1: Project Setup & Quick Start

Pokémon Explorer is a responsive web application for browsing, searching, and exploring Pokémon data, built with Next.js, SWR, and shadcn/ui. The UI is based on a provided Figma design, and the app features dynamic data fetching, persistent caching, and polished, accessible components.

### Setup & Installation

- Requires Node.js (v18+) and npm (v9+).
- Clone the repository and install dependencies:
  ```
  git clone https://github.com/FCollinge/pokemon-browser.git
  cd pokemon-browser
  npm install
  ```
- No environment variables are needed.
- Start the development server with `npm run dev` and visit [http://localhost:3000](http://localhost:3000).

---

## Part 2: Technical & Design Report

### Overview

This project was an exercise in building a modern React application from scratch, using Next.js for routing and SSR, SWR for data fetching and caching, and shadcn/ui for the user interface. The goal was to closely follow a Figma design, implement all required features, and demonstrate thoughtful technical decisions throughout.

### Design and Component Choices

The application is structured around a small set of pages, with most UI elements broken out into reusable components. The main landing page handles both the Pokémon list and search results, while the detail view is managed by a dynamic route. Components like the hero section, footer, Pokémon cards, and various sidebar and badge elements were all built to match the Figma as closely as possible, with some adjustments for responsiveness and accessibility.

shadcn/ui components were used throughout: Buttons for pagination and actions, Cards for Pokémon display, Skeletons for loading states, and Inputs for the search bar. Lucide icons were used for visual polish. Where the Figma design was ambiguous or difficult to implement exactly (especially for mobile layouts), I made pragmatic choices to ensure the app remained usable and visually consistent.

### State Management and Data Fetching

All data fetching is handled by SWR, which provides caching, revalidation, and suspense-based loading states. The main custom hook, `usePokemon`, abstracts away the logic for fetching lists and details, supporting both pagination and search. The current page and search state are managed via URL parameters, which keeps navigation simple and enables direct linking to any state of the app.

The detail view is managed via dynamic routing (`/pokemon/[id]`), which fetches and displays the relevant data. The app is wrapped in a custom SWRConfig provider with a localStorage-backed cache, so previously fetched data persists across sessions.

### Caching and Performance

Persistent caching is achieved by configuring SWR with a custom localStorage provider. This means that once data is fetched, it remains available even after a page reload, making navigation between list and detail views nearly instantaneous. I explored implementing a more advanced prefetch queue for background data loading and prioritization, but ultimately decided against it due to complexity and diminishing returns for this scale of project.

### API Interaction

All API interactions are abstracted into helper functions and custom hooks. This keeps the codebase organized and makes it easy to update or extend data fetching logic in the future. SWR handles most of the heavy lifting for caching and revalidation, and errors are caught and surfaced to the UI with fallback states.

### Error Handling

The app is designed to handle missing or incomplete data gracefully. If a Pokémon sprite is missing, a placeholder image is shown. If the API returns incomplete data, the UI displays as much information as possible without crashing. Loading and error states are communicated clearly using skeletons, spinners, and fallback UI.

### Responsive Design

Responsiveness was a major focus, and the layout adapts well to most screen sizes. However, full mobile optimization was not achieved. I attempted to implement a mobile layout, but persistent issues with overflow and scaling led me to revert those changes. The app remains fully usable on desktop and tablet, but on very narrow screens, some elements may not display as intended.

### Challenges and Solutions

One of the main challenges was mapping the complex, nested data structures from the PokéAPI to the UI, especially for details like abilities, types, and species descriptions. I solved this by writing helper functions to parse and format the data before rendering. Another challenge was managing caching and performance; after experimenting with a custom prefetch queue, I settled on SWR’s built-in caching for simplicity and reliability.

Implementing loading states with Suspense and shadcn/ui Skeleton components was a significant improvement over manual loading logic, both in terms of user experience and code maintainability. Responsive design was more difficult than expected, and while I made progress, there is still room for improvement on mobile.

### Bonus Features

In addition to the core requirements, I implemented persistent caching for offline support, fallbacks for missing sprites and data, accessibility improvements (focus states, keyboard navigation), and dynamic search with instant results. Error boundaries and graceful degradation ensure the app remains usable even if the API fails.

### Self-Reflection

This project was a valuable learning experience. I had never used Next.js, SWR, or shadcn/ui before, and I gained a lot of insight into modern front-end development practices. If I were to do it again, I would invest more time in planning the component structure and responsive design from the start, and consider adding automated tests. I’m proud of how closely the app matches the Figma design and how fast and smooth the user experience is, despite some limitations on mobile.

### Credits

PokéAPI for the data, shadcn/ui and Lucide for UI components and icons, and Figma for the design reference. All other libraries and assets are credited in package.json.

---
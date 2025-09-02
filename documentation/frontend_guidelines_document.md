# Frontend Guideline Document

## 1. Frontend Architecture

Our frontend is built on Next.js with React and TypeScript, following a component-based architecture:

- **Next.js (App Router)**  
  - File-based routing: each page is a file under `src/app`.  
  - Server-side rendering (SSR) and automatic code splitting for faster loads.  
  - Built-in support for API routes if we need backend endpoints in the same codebase.

- **React + TypeScript**  
  - Components in `.tsx` files ensure type safety, catching errors at build time.  
  - Functional components with hooks (`useState`, `useEffect`, etc.) for local state and side effects.

- **Project Structure**  
  - `src/app/`: global layout (`layout.tsx`), main page (`page.tsx`), global styles (`globals.css`).  
  - `src/components/`: all UI building blocks, grouped by feature (e.g., `playground/ChatArea`).  
  - `src/api/`: organized HTTP calls to the AI agent backend (`playground.ts`, `routes.ts`).  
  - `public/`: static assets like icons or images.

This setup supports:
- **Scalability**: adding new pages or features is as easy as creating new files in the right folders.  
- **Maintainability**: clear separation between UI, styling, and API logic.  
- **Performance**: SSR, route prefetching, and automatic code splitting keep initial loads snappy.

---

## 2. Design Principles

We follow three core principles to guide every UI decision:

1. **Usability**  
   - Simple, predictable flows (e.g., a single chat page).  
   - Immediate feedback on actions (loading spinners, inline errors).

2. **Accessibility**  
   - Keyboard-focusable inputs and buttons.  
   - ARIA labels on interactive elements.  
   - WCAG 2.1 AA compliance: color contrasts and meaningful text alternatives.

3. **Responsiveness**  
   - Mobile-first design, scaling up to desktop.  
   - Fluid layouts and flexible typography ensure the UI adapts to any screen size.

These principles are applied by using semantic HTML elements, clear focus indicators, and flexible CSS units (%, rem) throughout.

---

## 3. Styling and Theming

### 3.1 Styling Approach

- **Global CSS** in `globals.css` sets base typography, colors, and spacing.  
- **CSS Modules** for component-scoped styles (e.g., `ChatArea.module.css`), avoiding collisions.  
- **PostCSS** tooling (via Next.js) handles autoprefixing and future CSS features.

### 3.2 Theme & Look

- **Visual Style:** Modern flat design with subtle glassmorphism accents on chat bubbles.  
- **Color Palette:**  
  - Primary: #4F46E5 (Indigo)  
  - Secondary: #A78BFA (Light Purple)  
  - Background: #F9FAFB (Light Gray)  
  - Text: #1F2937 (Charcoal)  
  - Accent (Error): #EF4444 (Red), (Success): #10B981 (Green)

- **Typography:**  
  - Font Family: ‘Inter’, sans-serif.  
  - Base font size: 16px, using `rem` for scalable text.

### 3.3 Theming Strategy

- Single light theme in version one.  
- Variables defined in CSS (`:root`) for colors and spacing.  
- Future support for dark mode by swapping CSS variables or using a theme context.

---

## 4. Component Structure

Our components follow a feature-centric, reusable pattern:

- **Folder Layout**  
  - `src/components/{feature}/{ComponentName}/` contains:  
    - `index.tsx` (component logic)  
    - `{ComponentName}.module.css` (styles)  
    - Optionally `types.ts` for prop interfaces.

- **Atomic Design**  
  - **Atoms**: Basic UI elements (Button, Input, Spinner).  
  - **Molecules**: Combinations of atoms (ChatMessage, MessageList).  
  - **Organisms**: Complex features (ChatArea with MessageList + ChatInput).

- **Reusability**  
  - Clear props interface ensures components are self-contained.  
  - Minimal dependencies between components to reduce coupling.

This pattern makes it easier to locate, test, and update individual parts without unintended side effects.

---

## 5. State Management

- **Local State:**  
  - `useState` in `ChatInput` to manage the current message draft.  
  - `useState` and `useEffect` in `ChatArea` (or a parent) to hold and update the message list.

- **Global/Shared State (Future)**:  
  - React Context for application-wide data (e.g., user preferences or theme).  
  - Can introduce libraries like Redux Toolkit, Zustand, or React Query if state logic grows complex (caching, background sync).

For now, local state and simple context cover our needs and keep dependencies minimal.

---

## 6. Routing and Navigation

- **Next.js App Router** handles all routing based on the `src/app` folder.  
- **Primary Route:** `/` for the chat playground page.  
- **Layout:** `layout.tsx` wraps every page, providing persistent elements (header, global styles).

Because our app is a single-page chat experience, no additional routes exist in version one. Future pages (e.g., settings) can be added as new folders under `src/app`.

---

## 7. Performance Optimization

We use several strategies to keep the UI fast and lean:

- **Server-Side Rendering (SSR):** Next.js pre-renders pages to HTML on the server for quick first paint.  
- **Code Splitting & Dynamic Imports:** Large components can be loaded only when needed:  
  ```js
  const ChatArea = dynamic(() => import('@/components/playground/ChatArea'))
  ```
- **Lazy Loading Assets:** Images or heavy assets loaded on demand.  
- **Memoization:** `React.memo`, `useCallback`, and `useMemo` prevent unnecessary renders.  
- **CDN Delivery:** Vercel’s global CDN serves static files quickly across regions.

Regular performance checks (Lighthouse audits) help us catch regressions early.

---

## 8. Testing and Quality Assurance

### 8.1 Linting & Formatting

- **ESLint** with Next.js and TypeScript rules to enforce code quality.  
- **Prettier** for consistent code style (auto-format on save).

### 8.2 Unit & Integration Tests

- **Jest** as the test runner.  
- **React Testing Library** for component-level tests, focusing on user interactions and accessibility.

### 8.3 End-to-End Tests

- **Cypress** for critical user flows (sending a message, error retry).  
- Running on CI for pull requests to catch regressions before merging.

### 8.4 Continuous Integration

- **GitHub Actions** workflow to:  
  1. Run `npm run lint` and `npm run type-check`  
  2. Run unit tests (`npm test`)  
  3. Deploy to Vercel on successful merge to `main`

This pipeline keeps our master branch stable and production-ready.

---

## 9. Conclusion and Overall Frontend Summary

The `agent-ui` frontend combines Next.js, React, and TypeScript to deliver a fast, maintainable chat playground. Key strengths include:

- A clear, component-based structure that scales as we add features.  
- Global CSS with scoped modules and a modern flat design for consistent branding.  
- Simple state management for version one, with room to grow into context or dedicated libraries.  
- Built-in performance benefits from SSR, code splitting, and CDN delivery.  
- A strong testing and CI/CD setup that enforces quality at every step.

By following these guidelines, any developer—regardless of background—can understand, maintain, and extend the frontend. We’ve prioritized clarity, modularity, and user experience to ensure the application remains robust and easy to evolve.
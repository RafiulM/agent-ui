# Frontend Guidelines for Agent-UI Playground

This document lays out the architecture, design principles, and technologies behind the Agent-UI Playground front end. It’s written in everyday language so that anyone—from designers to new developers—can understand how this UI is built and why.

## 1. Frontend Architecture

### 1.1 Overview
- **Framework**: Next.js (App Router) organizes pages, layouts, and data fetching.  
- **UI Library**: React (v18) builds reusable components.  
- **Language**: TypeScript adds safety with compile-time checks.  
- **API Layer**: A folder (`src/api`) holds small helper functions (using `fetch` or an optional Axios wrapper) to talk to the agent service.

### 1.2 Folder Structure
```
agent-ui/
├─ app/                # Next.js router: layout.tsx & page.tsx
├─ src/
│  ├─ api/             # playground.ts (API calls), routes.ts
│  └─ components/
│     └─ playground/   # ChatArea/, ChatInput/, shared UI pieces
├─ public/             # Static assets (e.g. logos)
├─ styles/             # Global styles or CSS variables
├─ .env.local          # API keys & URLs
└─ tsconfig.json, package.json, etc.
```

### 1.3 Scalability, Maintainability, Performance
- **Scalable**: Feature-based folders let us add new chat features or pages without chaos.  
- **Maintainable**: TypeScript and clear API modules separate data logic from UI.  
- **Performant**: Next.js does initial server-side rendering or static generation, speeding up first paint and SEO.

## 2. Design Principles

1. **Usability**:  
   - Simple, familiar chat layout: scrollable message list + input field.  
   - Clear button states (disabled, loading spinner) guide the user.
2. **Accessibility**:  
   - Keyboard navigation: Enter to send, Tab to focus input.  
   - ARIA labels on buttons and form inputs.  
   - Color contrast meets WCAG 2.1 AA.
3. **Responsiveness**:  
   - Mobile-first with Tailwind CSS utilities.  
   - Input bar fixed at bottom on small screens, full-width chat on desktop.
4. **Consistency**:  
   - Shared components (Button, Spinner, MessageBubble) ensure a unified look.

## 3. Styling and Theming

### 3.1 Approach
- **Utility-First**: Tailwind CSS powers most styling directly in JSX.  
- **Scoped Styles**: CSS Modules for any edge cases needing custom CSS.

### 3.2 Visual Style
- **Design Style**: Modern, flat look with slight glass-morphism touches on chat bubbles (subtle backdrop blur).  
- **Font**: Inter (Google Font) or a system-UI stack for fast loading.

### 3.3 Color Palette
| Role       | Hex       | Usage                           |
|------------|-----------|---------------------------------|
| Primary    | #2563EB   | Send button, active states      |
| Secondary  | #1E293B   | Header text, agent message text |
| Accent     | #10B981   | Success states, highlights      |
| Background | #F9FAFB   | Page background                 |
| Surface    | #FFFFFF   | Chat bubbles, card backgrounds  |
| Error      | #EF4444   | Error messages, borders         |
| Text       | #111827   | Body copy                       |

### 3.4 Theming
- **Light Mode**: Default style as above.  
- **Dark Mode** (future): Switch color variables (e.g., using CSS variables in `:root` / `data-theme` attribute).

## 4. Component Structure

### 4.1 Feature-Based Organization
- `src/components/playground/ChatInput/` handles text entry, button states, and validation.  
- `src/components/playground/ChatArea/` renders message bubbles in order.
- **Shared UI**: Button, Spinner, MessageBubble components live alongside or in a `shared/` folder.

### 4.2 Reusability & Isolation
- Each component has its own folder with `index.tsx`, `styles.module.css` (or `.tsx` if using Tailwind).  
- Props drive data—no hidden dependencies—making unit testing straightforward.

## 5. State Management

### 5.1 Current Approach
- **Local State**: React `useState` in `app/page.tsx` or parent component holds:
  - `messages: Message[]` array  
  - `isLoading: boolean`  
  - `error: string | null`
- These states pass down via props to `ChatInput` and `ChatArea`.

### 5.2 Sharing & Future Growth
- If multiple components need chat data or controls, introduce React Context or a lightweight store (e.g., Zustand).  
- For very complex UIs, consider Redux or Recoil, but only when needed.

## 6. Routing and Navigation

- **Next.js App Router**: File-based routing under `app/`.  
- **Single Page**: All chat activity lives in `app/page.tsx`.  
- **Global Layout**: `app/layout.tsx` defines header and wraps child pages—ready for future multi-page expansion.
- **No Nested Menus**: Users stay on one page; the layout stays consistent.

## 7. Performance Optimization

1. **Code Splitting & Lazy Loading**:  
   - Next.js automatically splits code by route.  
   - Use `next/dynamic` for any heavy third-party components.
2. **Memoization**:  
   - Wrap message-rendering lists with `React.memo` or `useMemo` to avoid re-rendering entire chat on each keystroke.  
   - Use `useCallback` for callback props.
3. **Asset Optimization**:  
   - Tailwind’s purging removes unused CSS.  
   - Next.js `Image` component (if images are used) auto-optimizes.
4. **API Debouncing** (future):  
   - Prevent rapid-fire calls if users spam send.  
5. **Server Rendering**:  
   - Leverage SSR/SSG for initial load, then hydrate into a fast client.

## 8. Testing and Quality Assurance

### 8.1 Unit & Integration Tests
- **Jest** + **React Testing Library** (or **Vitest**):  
  - Test `ChatInput` behavior: validation, button states.  
  - Test `ChatArea` rendering logic.
- **Mock API**: Stub out `src/api/playground.ts` for predictable inputs/outputs.

### 8.2 End-to-End Tests
- **Cypress** or **Playwright**: Simulate a full chat session—type message, see response, handle errors.

### 8.3 Linters & Formatters
- **ESLint** (with TypeScript rules) catches code smells and enforces best practices.  
- **Prettier** auto-formats code on save or commit.

### 8.4 Continuous Integration
- **GitHub Actions** runs on every pull request:  
  - `npm run lint`  
  - `npm run test`  
  - Type checking (`tsc --noEmit`)

## 9. Conclusion and Overall Frontend Summary

The Agent-UI Playground front end is a single-page chat application built with Next.js, React, and TypeScript. Its modular, component-based architecture makes it easy to extend and maintain. We prioritize:

- **User Experience**: Clear, responsive chat UI with loading and error states.  
- **Code Quality**: Strong typing, separation of concerns, and automated tests.  
- **Performance**: SSR for fast loads, code splitting, and memoization.  
- **Accessibility**: Keyboard-friendly, ARIA labels, and proper color contrast.

Together, these guidelines ensure any developer or designer can jump in, understand the setup, and confidently build on top of this foundation. Enjoy exploring and extending the Agent-UI Playground!

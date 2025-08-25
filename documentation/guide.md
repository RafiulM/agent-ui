# Agent UI Guide

## Overview

Agent UI is a modern chat interface for AI agents built with Next.js, Tailwind CSS, and TypeScript. This template provides a ready-to-use UI for interacting with Agno agents, featuring a clean design with real-time streaming support, tool calls visualization, reasoning steps display, and multi-modality support for various content types.

## Quick Start

### Prerequisites

Before setting up Agent UI, you need to have an Agno Playground running. If you haven't set up the Agno Playground yet, follow the [official guide](https://agno.link/agent-ui#connect-to-local-agents) to run the Playground locally.

### Installation

#### Automatic Installation (Recommended)

```bash
npx create-agent-ui@latest
```

#### Manual Installation

1. Clone the repository:

```bash
git clone https://github.com/agno-agi/agent-ui.git
cd agent-ui
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## Core Features

### Chat Interface

The main interface consists of two primary components:

1. **ChatArea**: Displays the conversation between the user and the AI agent in a scrollable view with timestamps and distinct styling for user vs agent messages.

2. **ChatInput**: A text input component where users can type messages, with support for sending via button click or Enter key. Includes loading states and error handling.

### API Integration

The application communicates with the Agno Playground backend through a set of API endpoints:

- Agent selection and management
- Session handling for conversation history
- Real-time streaming of agent responses
- Tool call visualization and result display

All API interactions are handled through the `src/api/playground.ts` module, which provides type-safe functions for communicating with the backend.

### Multi-modality Support

Agent UI supports various content types including:
- Text messages with markdown rendering
- Images, videos, and audio files
- Tool calls with visual representation
- Reasoning steps display
- References and sources

### Responsive Design

The UI is built with Tailwind CSS and follows responsive design principles to work seamlessly across desktop and mobile devices.

## Usage Instructions

1. **Select an Agent**: Use the sidebar to select an agent or team to interact with.

2. **Start Chatting**: Type your message in the input field at the bottom and press Enter or click the send button.

3. **View Responses**: Agent responses will appear in the chat area in real-time as they are streamed from the backend.

4. **Interact with Tools**: If the agent uses tools during its reasoning, these will be displayed with their inputs and outputs.

5. **Manage Sessions**: Use the sidebar to create new chats or switch between existing conversation sessions.

## Development

### Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components organized by feature
├── api/                 # API integration layer
├── hooks/               # Custom React hooks
├── store/               # Application state management
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

### Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Builds the application for production
- `pnpm start` - Starts the production server
- `pnpm lint` - Runs ESLint
- `pnpm lint:fix` - Runs ESLint and fixes auto-fixable issues
- `pnpm format` - Checks code formatting with Prettier
- `pnpm format:fix` - Formats code with Prettier
- `pnpm typecheck` - Runs TypeScript type checking
- `pnpm validate` - Runs linting, formatting, and type checking

### Customization

You can customize the UI by modifying:
- Tailwind configuration in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in CSS modules
- Color scheme and theme variables

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and ensure code quality
5. Submit a pull request

## Documentation

For more detailed information about the project, please refer to the documentation in the `documentation/` directory:

- [Project Requirements Document](./documentation/project_requirements_document.md)
- [Frontend Guidelines Document](./documentation/frontend_guidelines_document.md)
- [Backend Structure Document](./documentation/backend_structure_document.md)
- [App Flow Document](./documentation/app_flow_document.md)
- [Tech Stack Document](./documentation/tech_stack_document.md)
# Agent UI

A modern chat interface for AI agents built with Next.js, Tailwind CSS, and TypeScript. This template provides a ready-to-use UI for interacting with Agno agents.

<img src="https://github.com/user-attachments/assets/7765fae5-a813-46cb-993b-904af9bc1672" alt="agent-ui" style="border-radius: 10px; width: 100%; max-width: 800px;" />

## Features

- 💬 **Modern Chat Interface**: Clean design with real-time streaming support
- 🧩 **Tool Calls Support**: Visualizes agent tool calls and their results
- 🧠 **Reasoning Steps**: Displays agent reasoning process (when available)
- 📚 **References Support**: Show sources used by the agent
- 🖼️ **Multi-modality Support**: Handles various content types including images, video, and audio
- 🎨 **Customizable UI**: Built with Tailwind CSS for easy styling
- 🧰 **Built with Modern Stack**: Next.js, TypeScript, shadcn/ui, Framer Motion, and more

## Getting Started

### Prerequisites

Before setting up Agent UI, you may want to have an Agno Playground running. If you haven't set up the Agno Playground yet, follow the [official guide](https://agno.link/agent-ui#connect-to-local-agents) to run the Playground locally.

### Installation

### Automatic Installation (Recommended)

```bash
npx create-agent-ui@latest
```

### Manual Installation

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

## Connecting to an Agent Backend

By default Agent UI connects to `http://localhost:7777`. You can easily change this by hovering over the endpoint URL and clicking the edit option.

The default endpoint works with the standard Agno Playground setup described in the [official documentation](https://agno.link/agent-ui#connect-to-local-agents).

## Guide

### Project Overview

Agent UI is a modern chat interface for AI agents built with Next.js, Tailwind CSS, and TypeScript. This template provides a ready-to-use UI for interacting with Agno agents, featuring a clean design with real-time streaming support, tool calls visualization, reasoning steps display, and multi-modality support for various content types.

### Core Components

The main interface consists of two primary components:

1. **ChatArea**: Displays the conversation between the user and the AI agent in a scrollable view with timestamps and distinct styling for user vs agent messages.

2. **ChatInput**: A text input component where users can type messages, with support for sending via button click or Enter key. Includes loading states and error handling.

### Usage Instructions

1. **Select an Agent**: Use the sidebar to select an agent or team to interact with.

2. **Start Chatting**: Type your message in the input field at the bottom and press Enter or click the send button.

3. **View Responses**: Agent responses will appear in the chat area in real-time as they are streamed from the backend.

4. **Interact with Tools**: If the agent uses tools during its reasoning, these will be displayed with their inputs and outputs.

5. **Manage Sessions**: Use the sidebar to create new chats or switch between existing conversation sessions.

### Building for Production

To create a production build:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

### Development

#### Project Structure

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

#### Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Builds the application for production
- `pnpm start` - Starts the production server
- `pnpm lint` - Runs ESLint
- `pnpm lint:fix` - Runs ESLint and fixes auto-fixable issues
- `pnpm format` - Checks code formatting with Prettier
- `pnpm format:fix` - Formats code with Prettier
- `pnpm typecheck` - Runs TypeScript type checking
- `pnpm validate` - Runs linting, formatting, and type checking

For more detailed information about the project, please refer to the documentation in the `documentation/` directory.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

This project is licensed under the [MIT License](./LICENSE).

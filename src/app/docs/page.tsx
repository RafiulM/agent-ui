export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background/80 text-secondary">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground">
            Complete guide for using the Agent UI platform
          </p>
        </header>

        <section className="mb-10" aria-labelledby="introduction">
          <h2 id="introduction" className="text-2xl font-semibold mb-4 border-b pb-2">
            Introduction & Overview
          </h2>
          <div className="space-y-4">
            <p>
              Agent UI is a modern chat interface for AI agents built with Next.js, 
              Tailwind CSS, and TypeScript. This platform provides a ready-to-use UI 
              for interacting with Agno agents in a playground environment.
            </p>
            <p>
              The interface includes a sidebar for session management and entity selection, 
              a main chat area for agent interactions, and supports multimedia content 
              including text, images, audio, and video.
            </p>
            <p>
              Key features include real-time streaming responses, session persistence, 
              multiple agent support, and team collaboration capabilities.
            </p>
          </div>
        </section>

        <section className="mb-10" aria-labelledby="installation">
          <h2 id="installation" className="text-2xl font-semibold mb-4 border-b pb-2">
            Installation & Setup
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Node.js 18+</li>
                <li>npm or pnpm package manager</li>
                <li>Git for version control</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Installation Steps</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Clone the repository:
                  <code className="block bg-muted/50 p-2 rounded mt-1 text-sm">
                    git clone https://github.com/RafiulM/agent-ui.git
                  </code>
                </li>
                <li>Navigate to the project directory:
                  <code className="block bg-muted/50 p-2 rounded mt-1 text-sm">
                    cd agent-ui
                  </code>
                </li>
                <li>Install dependencies:
                  <code className="block bg-muted/50 p-2 rounded mt-1 text-sm">
                    npm install
                  </code>
                </li>
                <li>Start the development server:
                  <code className="block bg-muted/50 p-2 rounded mt-1 text-sm">
                    npm run dev
                  </code>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Environment Configuration</h3>
              <p className="mb-2">Create a <code className="bg-muted/50 px-2 py-1 rounded text-sm">.env.local</code> file in the root directory:</p>
              <pre className="bg-muted/50 p-3 rounded overflow-x-auto text-sm">
                <code>{`# Required: Playground API URL
NEXT_PUBLIC_PLAYGROUND_API_URL=http://localhost:8000

# Optional: Custom configurations
NEXT_PUBLIC_TITLE=Agent UI
NEXT_PUBLIC_DESCRIPTION=AI Agent Playground
`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mb-10" aria-labelledby="usage">
          <h2 id="usage" className="text-2xl font-semibold mb-4 border-b pb-2">
            Usage Guide
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Navigating the Chat Playground</h3>
              <div className="space-y-3">
                <p>
                  The interface is divided into two main areas: the sidebar on the left 
                  and the chat area on the right.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Sidebar:</strong> Contains session management, agent/team selection, and new chat button</li>
                  <li><strong>Chat Area:</strong> Displays conversation history and input field for new messages</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Input Examples</h3>
              <div className="space-y-3">
                <p>Basic text input:</p>
                <pre className="bg-muted/50 p-3 rounded text-sm">
                  <code>{`User: "Hello, can you help me with Python programming?"`}</code>
                </pre>
                
                <p>Multimedia input:</p>
                <pre className="bg-muted/50 p-3 rounded text-sm">
                  <code>{`User uploads: image.png
Message: "What's in this image?"`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Output Examples</h3>
              <div className="space-y-3">
                <p>Text response:</p>
                <pre className="bg-muted/50 p-3 rounded text-sm">
                  <code>{`Agent: "I can see this is a Python code screenshot showing a function that calculates fibonacci numbers. The implementation uses recursion..."`}</code>
                </pre>
                
                <p>Multimedia response:</p>
                <pre className="bg-muted/50 p-3 rounded text-sm">
                  <code>{`Agent: "Here's the corrected code:"
[Attached: corrected_fibonacci.py]`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10" aria-labelledby="api-reference">
          <h2 id="api-reference" className="text-2xl font-semibold mb-4 border-b pb-2">
            API Reference
          </h2>
          <div className="space-y-6">
            <p>
              The platform uses RESTful APIs for all interactions. Below are the 
              available endpoints from <code className="bg-muted/50 px-2 py-1 rounded text-sm">src/api/routes.ts</code>:
            </p>

            <div>
              <h3 className="text-lg font-medium mb-3">Agents Endpoints</h3>
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">GET /v1/playground/agents</h4>
                  <p className="text-sm text-muted-foreground">Get all available agents</p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">POST /v1/playground/agents/&#123;agent_id&#125;/runs</h4>
                  <p className="text-sm text-muted-foreground">Run an agent with given parameters</p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">GET /v1/playground/agents/&#123;agent_id&#125;/sessions</h4>
                  <p className="text-sm text-muted-foreground">Get all sessions for an agent</p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">GET /v1/playground/agents/&#123;agent_id&#125;/sessions/&#123;session_id&#125;</h4>
                  <p className="text-sm text-muted-foreground">Get specific session details</p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">DELETE /v1/playground/agents/&#123;agent_id&#125;/sessions/&#123;session_id&#125;</h4>
                  <p className="text-sm text-muted-foreground">Delete a session</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Teams Endpoints</h3>
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">GET /v1/playground/teams</h4>
                  <p className="text-sm text-muted-foreground">Get all available teams</p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">POST /v1/playground/teams/&#123;team_id&#125;/runs</h4>
                  <p className="text-sm text-muted-foreground">Run a team with given parameters</p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">GET /v1/playground/teams/&#123;team_id&#125;/sessions</h4>
                  <p className="text-sm text-muted-foreground">Get all sessions for a team</p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">GET /v1/playground/teams/&#123;team_id&#125;/sessions/&#123;session_id&#125;</h4>
                  <p className="text-sm text-muted-foreground">Get specific team session details</p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-mono text-sm mb-1">DELETE /v1/playground/teams/&#123;team_id&#125;/sessions/&#123;session_id&#125;</h4>
                  <p className="text-sm text-muted-foreground">Delete a team session</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Sample Requests</h3>
              <pre className="bg-muted/50 p-3 rounded overflow-x-auto text-sm">
                <code>{`// Example: Get all agents
GET http://localhost:8000/v1/playground/agents

// Example: Run an agent
POST http://localhost:8000/v1/playground/agents/agent-123/runs
{
  "message": "Hello, how can you help me?",
  "session_id": "session-456"
}`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Sample Responses</h3>
              <pre className="bg-muted/50 p-3 rounded overflow-x-auto text-sm">
                <code>{`// Agents list response
{
  "agents": [
    {
      "id": "agent-123",
      "name": "Python Assistant",
      "description": "Helps with Python programming"
    }
  ]
}

// Run agent response (streaming)
data: {"type": "content", "content": "Hello! I can help you with..."}
data: {"type": "content", "content": " various programming tasks."}
data: [DONE]`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mb-10" aria-labelledby="troubleshooting">
          <h2 id="troubleshooting" className="text-2xl font-semibold mb-4 border-b pb-2">
            Troubleshooting & FAQs
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Common Issues</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Q: The app won't load or shows a blank page</h4>
                  <p className="text-muted-foreground">
                    A: Check that your <code className="bg-muted/50 px-1 rounded text-sm">NEXT_PUBLIC_PLAYGROUND_API_URL</code> 
                    environment variable is correctly set in your <code className="bg-muted/50 px-1 rounded text-sm">.env.local</code> file.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Q: Agents are not appearing in the selector</h4>
                  <p className="text-muted-foreground">
                    A: Ensure the playground API is running and accessible. Check the browser console 
                    for any CORS or network errors.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Q: Images/audio are not displaying properly</h4>
                  <p className="text-muted-foreground">
                    A: Verify that your browser supports the file formats and that the API 
                    is returning valid URLs for multimedia content.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Q: Streaming responses are slow or interrupted</h4>
                  <p className="text-muted-foreground">
                    A: Check your network connection and ensure the API server has sufficient resources. 
                    Some corporate networks may block streaming connections.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Performance Tips</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use a modern browser for best performance</li>
                <li>Clear browser cache if experiencing issues</li>
                <li>Check API server logs for any errors</li>
                <li>Use wired connection for more stable streaming</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Getting Help</h3>
              <p>
                If you encounter issues not covered here, please check the GitHub repository 
                issues page or create a new issue with detailed information about your problem.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Agent UI. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  )
}
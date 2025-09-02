# Backend Structure Document

## 1. Backend Architecture

Our backend is designed to be lightweight, easy to maintain, and ready to grow. It consists of simple serverless functions that handle chat requests and delegate the real work to an external AI agent service. By using a modular function-based design, each piece has a single responsibility and can be updated independently.

- Technologies and patterns used:
  - Node.js and Next.js API Routes (serverless functions)
  - RESTful design for clear, predictable endpoints
  - Single-purpose handler files (one function per route)
  - Environment variables for configuration

How this supports our goals:
- Scalability: Serverless functions on Vercel automatically scale up or down based on traffic, so we never pay for idle resources and can handle sudden spikes.
- Maintainability: Each route lives in its own file, keeping the code organized. Adding a new endpoint or feature is as simple as creating another function file.
- Performance: Cold starts are minimal on Vercel. Static assets and API responses benefit from CDN caching, reducing latency for end users.

---

## 2. Database Management

In version one of the project, we do **not** persist chat messages or user data. Every request is forwarded to the AI agent, and we display the response without storing it.

Future plans may include:
- Adding a relational database (e.g., PostgreSQL) to save conversation history
- Using an ORM (e.g., Prisma) for type-safe data access
- Introducing a caching layer (e.g., Redis) for frequently asked prompts

For now, data lives only in application memory and is discarded when the function completes.

---

## 3. Database Schema

**Current State:** No database is in use, so there is no schema to define.  

**Planned (Example) Schema for PostgreSQL:**
- `users` table (if we add authentication later)
  - `id` (UUID, primary key)
  - `username` (string)
  - `created_at` (timestamp)
- `conversations` table
  - `id` (UUID, primary key)
  - `user_id` (UUID, foreign key to users)
  - `started_at` (timestamp)
- `messages` table
  - `id` (UUID, primary key)
  - `conversation_id` (UUID, foreign key to conversations)
  - `role` (enum: "user" or "agent")
  - `content` (text)
  - `sent_at` (timestamp)

This schema could be implemented with SQL migrations if persistence becomes a requirement.

---

## 4. API Design and Endpoints

We follow a RESTful approach to keep things simple and intuitive. All endpoints live under `/api` and are implemented as Next.js serverless functions.

Key endpoints:

- `POST /api/playground/sendMessage`  
  Purpose: Receive a user message, forward it to the AI agent service, and return the agent’s reply.  
  Request body: `{ "message": "string" }`  
  Response: `{ "reply": "string" }`

- `GET /api/playground/status`  
  Purpose: Check health or status of the agent service (optional).  
  Response: `{ "status": "ok" }`

How it works:  
1. **ChatInput** component calls our `sendMessage` endpoint.  
2. The function reads the incoming JSON, validates it, and then uses Fetch (or Axios) to call the external AI API.  
3. Once the AI responds, we format the result and send it back to the front end.  

Each endpoint lives in its own file under `src/pages/api/` (Next.js convention) or in a dedicated `src/api/` folder if you prefer to keep logic separate from routing.

---

## 5. Hosting Solutions

We host both the frontend and backend on **Vercel**, which seamlessly supports Next.js serverless functions. Key benefits:

- **Zero configuration:** Automatic detection of Next.js projects, instant deployments on push.
- **Global CDN:** Static assets and API responses are cached at edge locations around the world for low latency.
- **Auto-scaling:** Serverless functions scale to handle any number of concurrent requests.
- **Built-in SSL:** All traffic is served over HTTPS by default.
- **Cost-effective:** You only pay for what you use—no need for dedicated servers when traffic is low.

---

## 6. Infrastructure Components

Although Vercel abstracts away most infrastructure details, here is what happens behind the scenes:

- **Edge CDN:** Delivers static files (JS, CSS, images) from the nearest data center.
- **Serverless Function Runtime:** Each API route runs in a lightweight container that spins up on demand.
- **Global Load Balancer:** Distributes incoming requests to the closest edge or function region.
- **Environment Variables:** Securely store API keys (e.g., AI service credentials) and runtime settings in Vercel’s dashboard.

Potential enhancements:
- **Redis or Memcached:** For caching frequent replies or session data.
- **Message Queue (e.g., RabbitMQ):** If we move to an asynchronous processing model for heavy tasks.

---

## 7. Security Measures

We’ve implemented several layers of security to protect user data and our infrastructure:

- **HTTPS Everywhere:** Vercel enforces TLS for all domains, preventing eavesdropping.
- **CORS Configuration:** Only allow requests from our frontend domain.
- **Environment Variables:** Store API keys and secrets outside of code. Never commit them to GitHub.
- **Input Validation:** On the server side, we validate that incoming JSON has a `message` field of reasonable length.
- **Rate Limiting (Future):** Plan to add limits per IP or API key to prevent abuse.
- **Dependency Audits:** Use tools like `npm audit` or dependabot alerts in GitHub to catch vulnerabilities early.

---

## 8. Monitoring and Maintenance

To keep the backend healthy and performant:

- **Vercel Logs & Metrics:** Real-time logs for each function execution, error rates, and response times.
- **Automated Testing:** GitHub Actions runs TypeScript checks and linting on every pull request.
- **Error Tracking (Future):** Integrate Sentry or LogRocket to capture runtime exceptions and user-impacting errors.
- **Uptime Checks:** Optionally use a third-party service (e.g., Pingdom) to alert if the status endpoint stops responding.
- **Regular Dependencies Updates:** Schedule periodic reviews of dependencies to apply security patches.

---

## 9. Conclusion and Overall Backend Summary

Our backend is a simple yet powerful serverless API layer built on Next.js and hosted on Vercel. It delegates AI processing to an external agent service, keeping our codebase lean and focused on communication logic. By avoiding a database in this first version, we speed up development and reduce complexity. The chosen architecture supports:

- **Scalability:** Automatic growth with serverless functions.
- **Maintainability:** Clear separation of function files and configuration.
- **Performance:** CDN caching and minimal cold starts.
- **Security:** End-to-end HTTPS, environment-variable management, and input validation.

As the project evolves, we can introduce persistent storage, caching layers, advanced monitoring, and rate limiting—confident that our core backend structure will support each new requirement.

We now have a clear, non-technical overview of how the backend operates, scales, and keeps data safe, aligning perfectly with the project’s goals and ensuring a smooth developer and user experience.
# Backend Structure Document

## 1. Backend Architecture

Our backend is designed as a set of lightweight, serverless functions that act as a bridge between the front end and the AI agent service. We use Next.js API routes running on Vercel, which means each endpoint is packaged and deployed automatically without managing traditional servers.

- **Design Patterns & Frameworks**
  - Serverless functions (Next.js API routes) handle HTTP requests.  
  - Middleware pattern for shared tasks (logging, error handling, CORS).  
  - Single Responsibility: each route handles exactly one feature (e.g., sending a message).

- **Scalability, Maintainability, Performance**
  - **Scalability:** Vercel auto-scales serverless functions on demand, so spikes in traffic are handled seamlessly.  
  - **Maintainability:** Routes live alongside front-end code, promoting a clear project structure. Shared utilities (API client, error handlers) are centralized.  
  - **Performance:** Cold starts are minimized on Vercel. Caching headers and edge network delivery reduce latency.

## 2. Database Management

At this stage, we do not persist chat history or user data. All messages flow through the API and are returned directly without storage. In future versions, if chat logging or user accounts become necessary, we would introduce a database layer.

Potential future database choices:

- **NoSQL (e.g., MongoDB, DynamoDB)** for flexible storage of message arrays per session.  
- **SQL (e.g., PostgreSQL)** for structured tables if we need relational data like user profiles and session metadata.

## 3. Database Schema

Currently, there is no database, so no schema is defined. If we add one later, here is an example for PostgreSQL:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  api_key TEXT UNIQUE NOT NULL
);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  started_at TIMESTAMP DEFAULT NOW(),
  ended_at TIMESTAMP
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  session_id INT REFERENCES sessions(id),
  role VARCHAR(10) NOT NULL,    -- 'user' or 'agent'
  content TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
);
```  

This example shows how we could track users, their sessions, and individual chat messages.

## 4. API Design and Endpoints

We follow a RESTful style with one primary endpoint. All routes are implemented as Next.js API routes under `/pages/api` or the App Router equivalent.

- **POST /api/playground**  
  - Purpose: Receive a user message, forward it to the AI agent, and return the AI’s response.  
  - Request Body:
    - `message`: the user’s text input.  
    - `sessionId` (optional): identifier for chat session (future use).  
  - Response Body:
    - `reply`: the agent’s text response.  
    - `status`: success or error.  

- **Middleware & Utilities**
  - **CORS Handling:** Allows front end to call from any origin.  
  - **Error Handler:** Formats and logs errors before returning a clean JSON payload.  
  - **API Client Wrapper:** Centralizes base URL, headers (including API key), and parsing logic for the external AI service.

## 5. Hosting Solutions

We host our backend code as serverless functions on **Vercel**, which is optimized for Next.js projects.

- **Benefits:**
  - **Reliability:** Vercel’s infrastructure serves endpoints with built-in redundancy.  
  - **Scalability:** Functions scale horizontally without manual intervention.  
  - **Cost-Effectiveness:** Pay-per-execution model means we only pay for what we use.  
  - **Developer Experience:** Automatic deployments on GitHub push, preview URLs for each pull request.

## 6. Infrastructure Components

Even without traditional servers, we rely on several key components:

- **Load Balancer & Edge Network**  
  Vercel distributes traffic across edge locations, reducing latency for global users.

- **Content Delivery Network (CDN)**  
  Static assets (JavaScript bundles, CSS) and even cached API responses are served from CDN nodes close to users.

- **Caching**  
  - Edge caching headers on static content.  
  - Configurable short-term caching for API GET requests (if introduced later).

- **Logging & Error Reporting**  
  - Vercel console logs for serverless functions.  
  - Integration with external tools (e.g., Sentry) for real-time error tracking.

## 7. Security Measures

We protect both user data and our service endpoints with the following:

- **API Key Management**  
  - External AI agent key is stored in Vercel environment variables, never exposed in client code.  
  - Backend routes read the key from `process.env`.

- **Authentication & Authorization**  
  - Currently no user accounts.  
  - Future endpoints (e.g., admin panels) can use JWT or session cookies.

- **Data Protection**  
  - HTTPS enforced by default on Vercel.  
  - Input sanitization to prevent XSS or injection attacks.

- **Rate Limiting & Throttling**  
  - Implement at the function level or via a third-party service to prevent abuse.

- **CORS Policy**  
  - Configured to allow only our front-end origin.

## 8. Monitoring and Maintenance

We use a combination of built-in and external tools:

- **Vercel Dashboard**  
  - Real-time function invocation stats, errors, and deployment logs.

- **External Monitoring (Optional)**  
  - **Sentry:** Captures unhandled exceptions and performance bottlenecks.  
  - **Datadog/New Relic:** Tracks function latency and throughput.

- **Alerts**  
  - Set up alerts for error rate spikes or function latency thresholds.

- **Maintenance Practices**  
  - Regular dependency updates via automated PRs (Dependabot).  
  - Scheduled testing and linting in CI.  
  - Periodic reviews of environment variables and access controls.

## 9. Conclusion and Overall Backend Summary

Our backend is built with simplicity and scalability in mind. By using Next.js serverless functions on Vercel, we eliminate server management overhead while ensuring global performance and reliability. Currently, we do not store chat data, keeping the system lightweight and easy to maintain. Security is enforced through environment-based API keys, proper CORS settings, and input sanitization. Monitoring via Vercel and optional tools like Sentry ensures we catch issues quickly.

This setup aligns perfectly with the project’s goal: a focused, real-time playground for AI interaction without unnecessary complexity. As requirements evolve—such as adding persistent chat history, user accounts, or analytics—we have a solid, extensible foundation ready to grow.
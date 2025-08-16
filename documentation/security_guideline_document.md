# Security Guidelines for Agent-UI Playground

This document describes the security best practices and controls you should apply to the **Agent-UI Playground** codebase. It is organized according to core security principles and tailored to the code’s architecture and functionality.

---
## Table of Contents
1. [Introduction & Scope](#introduction--scope)
2. [Core Security Principles](#core-security-principles)
3. [Threat Model & Assumptions](#threat-model--assumptions)
4. [Secure Design & Architecture](#secure-design--architecture)
5. [Input Handling & Output Encoding](#input-handling--output-encoding)
6. [API & Service Security](#api--service-security)
7. [Data Protection & Privacy](#data-protection--privacy)
8. [Web Application Security Hygiene](#web-application-security-hygiene)
9. [Infrastructure & Configuration Management](#infrastructure--configuration-management)
10. [Dependency Management](#dependency-management)
11. [Monitoring, Logging & Incident Response](#monitoring-logging--incident-response)

---
## 1. Introduction & Scope
This UI repository provides a publicly accessible chat playground for interacting with an AI agent. There is no user authentication, and all communications occur via a backend API. These guidelines cover:

• Frontend (Next.js, React, TypeScript)  
• API interaction modules (`src/api`)  
• Hosting and configuration (Vercel, environment variables)  

They do *not* cover backend agent logic (unless using Next.js API routes as a proxy).

---
## 2. Core Security Principles
1. **Security by Design:** Integrate security from day one.  
2. **Least Privilege:** Grant only the minimum required access (e.g., API keys only on server side).  
3. **Defense in Depth:** Layer multiple controls (validation, CSP, TLS).  
4. **Fail Securely:** Do not expose sensitive details on errors.  
5. **Keep Security Simple:** Favor clear, well-understood mechanisms.  
6. **Secure Defaults:** Default to the strictest settings (e.g., strict CORS, disabled debug).  

---
## 3. Threat Model & Assumptions
- **Attacker Goals:** Inject malicious scripts (XSS), abuse API to extract data or overwhelm backend (DoS), manipulate environment keys.
- **Assets to Protect:** API keys, user-agent messages, application integrity.
- **Assumptions:**  
  • The playground is public with no login.  
  • Backend agent API enforces its own rate limits and authentication.  
  • Communication must always occur over HTTPS.

---
## 4. Secure Design & Architecture
- **Separation of Concerns:** Keep UI components, API clients, and configuration isolated.  
- **Proxy API Routes:** Use Next.js server‐side API routes to inject `NEXT_PUBLIC_AGENT_API_KEY` when forwarding to the agent service—never expose secrets on the client.  
- **No Client-Side Secrets:** All sensitive keys and URLs reside in server-only env vars (`process.env.*`).  
- **Error Handling:** Centralize error formatting so stack traces or internal paths are never sent to the browser.

---
## 5. Input Handling & Output Encoding
- **Treat All Input as Untrusted:** Sanitize and validate every user‐typed message before rendering.  
  • Enforce a maximum length (e.g., 1,000 characters).  
  • Reject or encode suspicious Unicode or control characters.  
- **Prevent XSS:**  
  • Use React’s automatic escaping for any text interpolation in the chat bubbles.  
  • For any HTML‐allowing features (future rich text), integrate a vetted sanitizer (e.g., DOMPurify).  
- **Secure File Uploads (Future):**  
  • Validate file metadata and content types.  
  • Store outside `public/` with randomized file names.

---
## 6. API & Service Security
- **Enforce HTTPS:** All fetch/axios calls must use `https://`. Reject any calls over plain HTTP.  
- **CORS Policy:** If serving API routes, configure CORS to allow only the production UI origin (`https://your-domain.com`).  
- **Rate Limiting & Throttling:**  
  • On server/API routes: integrate a middleware to limit requests per IP or user session.  
  • Surfacing a `429 Too Many Requests` error with a retry‐after header.  
- **HTTP Methods & Status Codes:** Use `POST` for chat submissions. Always check response status codes before parsing JSON.  
- **Credential Management:**  
  • Store `AGENT_API_KEY` in Vercel’s encrypted environment.  
  • Rotate keys regularly and revoke old tokens promptly.

---
## 7. Data Protection & Privacy
- **No PII Storage:** Do not collect or persist personally identifiable information. If future features require user accounts, encrypt all PII at rest.  
- **In-Transit Encryption:** Ensure TLS 1.2+ on frontend and backend.  
- **Minimal Data Exposure:** Only surface the agent’s text response; strip out any metadata or debugging fields.  
- **Log Sanitization:** In server logs (e.g., Vercel), avoid logging full user messages or secrets. Mask or hash sensitive content.

---
## 8. Web Application Security Hygiene
- **Security Headers:** Configure Next.js to emit:  
  • `Content-Security-Policy` (restrict scripts, frames)  
  • `Strict-Transport-Security`  
  • `X-Content-Type-Options: nosniff`  
  • `X-Frame-Options: DENY` / CSP `frame-ancestors 'none'`  
  • `Referrer-Policy: same-origin`  
- **CSRF Protection:** Although a public UI, if you implement write‐operations on cookie‐based auth in the future, add anti‐CSRF tokens.  
- **Secure Cookies (Future):** Use `HttpOnly`, `Secure`, and `SameSite=Strict` on any session cookies.  
- **Client-side Storage:** Avoid storing any secrets or sensitive state in `localStorage` or `sessionStorage`.

---
## 9. Infrastructure & Configuration Management
- **Hardened Hosting:**  
  • Use Vercel’s default hardened Next.js environment.  
  • Disable preview/debug endpoints in production.  
- **Environment Variables:**  
  • Keep `.env*` out of version control (`.gitignore`).  
  • Use Vercel/GitHub Secrets for CI/CD.  
- **TLS Configuration:** Verify strong cipher suites, disable TLS 1.0/1.1.  
- **Server Access:** Limit SSH/API access keys to the smallest set of engineers. Rotate credentials regularly.

---
## 10. Dependency Management
- **Lockfiles:** Commit `package-lock.json` or `yarn.lock`.  
- **Vulnerability Scanning:** Integrate Dependabot/renovate or Snyk to flag vulnerable transitive dependencies.  
- **Minimal Footprint:** Only install necessary packages (avoid heavy UI frameworks until needed).  
- **Regular Updates:** Schedule periodic dependency upgrades and re-scan for new CVEs.

---
## 11. Monitoring, Logging & Incident Response
- **Error Tracking:** Integrate Sentry or LogRocket (client and server) to capture uncaught errors without logging secrets.  
- **Audit Logging:** On API routes (proxy), log request metadata (timestamp, IP, endpoint) for forensic purposes.  
- **Alerting:** Configure alerts for elevated error rates (5xx responses) or suspicious traffic patterns.  
- **Incident Playbook:** Define roles, communication channels, and recovery steps for a breach or service outage.

---
## 12. Conclusion
By following these guidelines, you will build and maintain a secure, resilient, and privacy-preserving UI for interacting with your AI agent. Security is an ongoing process—regularly review controls, update dependencies, and refine your threat model as the application evolves.
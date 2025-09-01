# Security Guidelines for `agent-ui`

This document outlines security best practices tailored to the **agent-ui** Next.js/React/TypeScript frontend. Adhering to these guidelines helps ensure a robust, resilient, and maintainable application.

---

## 1. Secure Defaults & Configuration

- **Enforce HTTPS**
  - Configure Next.js to redirect all HTTP traffic to HTTPS (e.g., using `next.config.js` or platform settings).
  - Ensure your deployment platform (Vercel, Netlify) has TLS 1.2+ enforced and HSTS (`Strict-Transport-Security`) enabled.

- **Environment Variables & Secrets**
  - Do **not** commit API keys, secrets, or credentials to source control. Use secure environment variables (e.g., Vercel’s Secrets, `.env.local` excluded via `.gitignore`).
  - Leverage a secrets manager (AWS Secrets Manager, HashiCorp Vault) for production credentials.
  - Validate that no sensitive data is exposed in build logs or error traces.

- **Next.js Configuration Hardening**
  - Disable `next dev` verbose error overlay in production by setting `productionBrowserSourceMaps: false`.
  - Use `reactStrictMode: true` to catch potential issues early.
  - Avoid exposing internal runtime configuration in the client bundle (use `serverRuntimeConfig` vs. `publicRuntimeConfig`).

---

## 2. Authentication & Access Control

> Version 1 of `agent-ui` is public and does not implement user accounts. Future releases must adhere to the following:

- **Strong Authentication**
  - Use a proven identity provider (Auth0, AWS Cognito) or implement multi-factor authentication (MFA).
  - Enforce password complexity and rotation; store passwords with bcrypt/Argon2 and unique salts.

- **Secure Session Management**
  - If using cookies for session tokens, set `HttpOnly`, `Secure`, and `SameSite=Strict`.
  - Implement CSRF protection (e.g., synchronizer token pattern or `next-csrf` middleware).

- **Role-Based Access Control (RBAC)**
  - Define roles (e.g., `user`, `admin`) and enforce permissions server-side on every API or page.
  - Validate authorization on the backend API; do not rely solely on client-side checks.

---

## 3. Input Validation & Output Encoding

- **Sanitize User Input**
  - On the client, enforce message length limits in `ChatInput` and reject empty or overly large payloads (> 5–10 KB).
  - Parse and validate JSON API responses against TypeScript interfaces (e.g., using `zod` or `io-ts`).

- **Prevent XSS**
  - Always escape or sanitize rich text before rendering (avoid using `dangerouslySetInnerHTML`).
  - Implement a strict **Content Security Policy (CSP)** via Next.js headers:
    ```js
    // next.config.js
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'; style-src 'self'" },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
          ]
        }
      ]
    }
    ```

- **Prevent Injection**
  - Use parameterized requests for any client-side database calls (if applicable).
  - Validate dynamic routes (`[id].tsx`) against an allow-list of expected patterns to avoid open redirects or path traversal.

---

## 4. API & Service Security

- **HTTPS-Only API Calls**
  - In `src/api/routes.ts`, ensure all endpoints start with `https://`.

- **Rate Limiting & Throttling**
  - Although enforced on the backend, consider soft-limits in the UI (e.g., disable the send button for 1 s between messages).

- **CORS Policy**
  - Confirm backend CORS is restricted to your UI’s origin.
  - Do **not** use permissive wildcards (`*`) in production.

- **Least Privilege for API Keys**
  - Provide the frontend with minimal-scope tokens (e.g., read-only AI agent endpoints).

- **Error Handling**
  - Do not leak stack traces or internal error codes. Show a generic message (e.g., “Something went wrong. Please try again.”).
  - Log detailed errors server-side only.

---

## 5. Data Protection & Privacy

- **Sensitive Data in Transit**
  - Enforce TLS for all external and internal requests.

- **Local Storage & Cookies**
  - Avoid storing PII or tokens in `localStorage`; prefer short-lived, `HttpOnly` cookies.

- **Logging & Monitoring**
  - Strip or mask PII from client-side logs.
  - Integrate a secure error-tracking solution (e.g., Sentry) with strict data-scrubbing rules.

- **GDPR/CCPA Compliance**
  - If collecting any user data, provide mechanisms for data deletion and opt-out.

---

## 6. Web Application Security Hygiene

- **CSRF Protection**
  - Use anti-CSRF tokens for any future state-changing REST calls.

- **Security Headers**
  - Ensure the following headers are present globally:
    - `Strict-Transport-Security`
    - `X-Content-Type-Options: nosniff`
    - `X-Frame-Options: DENY`
    - `Referrer-Policy: strict-origin-when-cross-origin`
    - `Permissions-Policy` (e.g., disable features like camera/microphone by default)

- **Cookie Hardening**
  - Mark cookies as `Secure`, `HttpOnly`, and `SameSite=Strict`.

- **Subresource Integrity (SRI)**
  - If loading third-party scripts (e.g., polyfills), include `integrity` and `crossorigin` attributes.

---

## 7. Infrastructure & Deployment Security

- **Server Hardening**
  - On Vercel or your host, disable unused features (e.g., SSH access).
  - Enforce automatic framework updates and security patches.

- **CI/CD Pipeline**
  - Integrate GitHub Actions or similar to run:
    - Static analysis (ESLint, TypeScript strict mode).
    - Dependency vulnerability scans (`npm audit`, Snyk, Dependabot).
    - Automated tests (unit and integration).
  - Prevent merging on failing checks.

- **Least Privilege for Services**
  - Assign minimal roles to CI/CD credentials and deployment tokens.

---

## 8. Dependency Management

- **Lockfiles**
  - Commit `package-lock.json` or `yarn.lock` to ensure deterministic installs.

- **Regular Audits**
  - Schedule weekly dependency vulnerability scans.
  - Immediately patch high/critical CVEs.

- **Minimal Footprint**
  - Remove unused dependencies to reduce attack surface.
  - Vet any new libraries for maintenance frequency, community usage, and known issues.

---

## 9. Monitoring & Incident Response

- **Runtime Monitoring**
  - Use performance monitoring (e.g., New Relic Browser, Sentry Performance) to catch regressions.

- **Alerting**
  - Configure alerts for elevated error rates or suspicious traffic patterns.

- **Incident Playbook**
  - Define steps for containment, investigation, and recovery.
  - Ensure backups of critical configurations.

---

By following these guidelines, the **agent-ui** application will uphold best-in-class security practices, reduce risk, and safeguard both the system and its users.
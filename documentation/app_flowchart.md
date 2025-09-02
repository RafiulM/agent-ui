flowchart TD
    A[User opens app]
    A --> B[Layout rendered]
    B --> C[Chat area displayed]
    C --> D[Chat input displayed]
    D --> E[User types message]
    E --> F[User submits message]
    F --> G[Send api request]
    G --> H{Response received}
    H -->|Yes| I[Append messages to chat]
    I --> J[Auto scroll to latest]
    J --> D
    H -->|No| K[Display error message]
    K --> L[User clicks retry]
    L --> G
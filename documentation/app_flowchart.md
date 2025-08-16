flowchart TD
    A[Page Load] --> B[Render layout and playground page]
    B --> C[Display empty chat area and input field]
    C --> D[User enters message]
    D --> E{Input empty}
    E -->|Yes| F[Disable send button and show reminder]
    E -->|No| G[Disable input and show spinner]
    G --> H[Call API module to send message]
    H --> I{API response received}
    I -->|Success| J[Hide spinner and update chat area with user and agent messages]
    I -->|Error| K[Hide spinner and show error message]
    J --> L[Enable input field]
    K --> L
    L --> C
    C --> M[User clicks clear button]
    M --> N[Reset chat area to empty state]
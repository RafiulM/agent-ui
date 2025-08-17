export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <p className="text-center text-muted-foreground">
          Welcome! This is the signup page. The CTA navigation is working correctly.
        </p>
        <div className="mt-6 text-center">
          <a href="/" className="text-primary hover:underline">
            ← Back to Landing Page
          </a>
        </div>
      </div>
    </div>
  )
}
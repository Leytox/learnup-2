export default function TermsPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using LearnUp, you accept and agree to be bound by
            these terms...
          </p>

          <h2>2. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account...
          </p>

          <h2>3. Content and Conduct</h2>
          <p>
            You agree to use LearnUp in compliance with all applicable laws...
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </main>
  );
}

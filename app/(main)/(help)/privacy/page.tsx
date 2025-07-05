export default function PrivacyPage() {
  return (
    <main className=" flex justify-center">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us...</p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our
            services...
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties...
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </main>
  );
}

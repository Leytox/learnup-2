export default function DashboardPage() {
  return (
    <main className="container py-12 mx-auto">
      <h1 className="text-4xl font-bold tracking-tight">Your Dashboard</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Welcome back! Here you can find your courses, progress, and more.
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              My Courses
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p>You are not enrolled in any courses yet.</p>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              My Progress
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p>No progress to show.</p>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Certificates
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p>You have not earned any certificates.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

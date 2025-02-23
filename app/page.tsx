import { auth } from "@/auth";
import Header from "@/components/header";
import Cta from "@/components/landing/cta";
import LandingHeader from "@/components/landing/landing-header";

export default async function Home() {
  const session = await auth();
  return session ? (
    <main className="min-h-screen flex items-center justify-center">
      <Header />
    </main>
  ) : (
    <main className="min-h-screen bg-gray-900 text-white">
      <LandingHeader />
      <Cta />
    </main>
  );
}

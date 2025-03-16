import { auth } from "@/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="container">
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <Image
            src={session?.user?.image || "/default.jpg"}
            fill
            alt="user's avatar"
          />
        </div>
        <h1 className="text-2xl font-semibold">{session?.user?.name}</h1>
        <p className="text-gray-500">This is your profile page.</p>
      </div>
    </main>
  );
}

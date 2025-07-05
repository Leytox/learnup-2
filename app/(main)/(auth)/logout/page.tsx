import { signOutAll } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { ArrowRightSquareIcon } from "lucide-react";

export default function LogoutPage() {
  return (
    <main className="flex items-center justify-center text-center flex-col gap-4 h-[calc(100vh-80px)]">
      <h1 className="text-3xl">Are you sure you want to sign out?</h1>
      <form action={signOutAll}>
        <Button type="submit" size={"lg"} variant={"destructive"}>
          Sign out <ArrowRightSquareIcon />
        </Button>
      </form>
    </main>
  );
}

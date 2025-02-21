import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      className={"min-h-screen flex flex-col gap-4 items-center justify-center"}
    >
      <h2 className={"text-6xl"}>404 - Not Found</h2>
      <p className={"text-lg"}>Could not find requested resource :(</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </main>
  );
}

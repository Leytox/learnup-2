import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FrownIcon } from "lucide-react";

export default function BlogPostNotFound() {
  return (
    <main
      className={"min-h-screen flex flex-col gap-4 items-center justify-center"}
    >
      <FrownIcon className={"w-24 h-24 text-red-400"} />
      <h2 className={"text-6xl text-center"}>
        404
        <br /> Not Found
      </h2>
      <p className={"text-lg"}>
        This blog post doesn&apos;t exist or has been deleted.
      </p>
      <Link href="/blog">
        <Button>
          <ArrowLeft /> Browse All Blog Posts
        </Button>
      </Link>
    </main>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostNotFound() {
  return (
    <main
      className={"min-h-screen flex flex-col gap-4 items-center justify-center"}
    >
      <h2 className={"text-6xl"}>404 - Blog Post Not Found</h2>
      <p className={"text-lg"}>This blog post could not be found.</p>
      <Link href="/blog">
        <Button>Browse All Blog Posts</Button>
      </Link>
    </main>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogPostNotFound() {
  return (
    <main className={" flex flex-col gap-4 items-center justify-center"}>
      <h2 className={"text-7xl text-center uppercase"}>
        <span className="text-9xl font-bold">404</span>
        <br /> Not Found
      </h2>
      <p className={"text-lg"}>
        This blog post doesn&apos;t exist or has been deleted.
      </p>
      <Link href="/blog">
        <Button>
          <ArrowLeft /> Back to Blog
        </Button>
      </Link>
    </main>
  );
}

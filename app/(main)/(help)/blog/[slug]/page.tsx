import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { getBlog } from "@/actions/blogs";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blogPost = await getBlog(slug);

  if (!blogPost) notFound();

  return (
    <main className="min-h-screen flex justify-center">
      <div className="container">
        <article className="max-sm:px-2">
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          <div className="flex items-center mb-8 text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <time dateTime={blogPost.createdAt.toISOString()}>
              {blogPost.createdAt.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            {blogPost.content?.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}

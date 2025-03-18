import { getBlogs } from "@/actions/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const blogPosts = await getBlogs();
  return (
    <main className="min-h-screen flex justify-center">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No blog posts found.
            </p>
          ) : (
            blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <div className="flex text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <time>
                        {post.createdAt.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {post.content?.substring(0, 110) + "..."}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

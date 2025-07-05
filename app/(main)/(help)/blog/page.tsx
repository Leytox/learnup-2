import { getBlogs } from "@/actions/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const blogPosts = await getBlogs();
  return (
    <div className="size-full">
      {!blogPosts?.length ? (
        <h1 className="h-[calc(100vh-80px)] w-full text-center text-5xl flex items-center justify-center italic text-muted-foreground">
          Nothing found here 🫠
        </h1>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts?.map((post, index) => (
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
          ))}
        </div>
      )}
    </div>
  );
}

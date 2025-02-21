import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Getting Started with LearnUp",
    date: "2024-02-20",
    content: "Learn how to make the most of your LearnUp experience...",
  },
  {
    title: "Top Learning Strategies",
    date: "2024-02-18",
    content: "Discover effective techniques to enhance your learning...",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

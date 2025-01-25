import { Card } from "@/components/ui/card";

const posts = [
  {
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new React project with TypeScript and best practices",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "A comprehensive guide to creating beautiful responsive designs",
    date: "March 10, 2024",
    readTime: "7 min read"
  },
  {
    title: "Modern State Management in React",
    excerpt: "Exploring different state management solutions for React applications",
    date: "March 5, 2024",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Latest Posts</h2>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    {post.readTime}
                  </div>
                </div>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="text-sm text-muted-foreground">{post.date}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
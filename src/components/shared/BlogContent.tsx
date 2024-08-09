import React from "react";
import BlogPost from "@/components/shared/Blog";

const Blog = () => {
  const posts = [
    {
      title: "My First Blog Post",
      description: "This is the description of my first blog post.",
      date: "2024-08-07",
      link: "https://dev.to/iriboneye_nina_47b95feedc/first-week-in-awesomit-4nb5",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center px-4 py-8">
      <div className="container mx-auto">
        
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              link={post.link}
            />
          ))}
        </div>
      </div>
   
  );
};

export default Blog;

import React from "react";
import Post from "@/components/PostCard";

export default function Home() {
  return (
    <main className="relative bg-gray-950 h-screen flex justify-center items-center">
      <div className="max-w-screen-md">
        <Post
          // Enter post title here
          title={
            "AI is changing everything. 🚀 What's the most mind-blowing AI application you've seen?"
          }
          // Enter post description
          description={
            "From art to medicine, AI is revolutionizing industries. Share your favorite AI-powered tool or innovation! What do you think? #AI #technology #future"
          }
          // If image url is provided, it shows the image.
          // If image url is not provided a button to generate an image with the title and description is shown.

          // imageUrl="vercel.svg"
        />
      </div>
    </main>
  );
}

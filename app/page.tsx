"use client";

import React, { useState } from "react";
import Post from "@/components/PostCard";

export default function Home() {
  // State to manage the title and description
  const [title, setTitle] = useState(
    "AI is changing everything. 🚀 What's the most mind-blowing AI application you've seen?"
  );
  const [description, setDescription] = useState(
    "From art to medicine, AI is revolutionizing industries. Share your favorite AI-powered tool or innovation! What do you think? #AI #technology #future"
  );

  return (
    <main className="relative bg-gray-950 min-h-screen flex flex-col justify-center items-center p-4 overflow-auto">
      <div className="max-w-screen-md mb-8">
        {/* Textboxes for user input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-white mb-2">
            Post Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
            style={{ minWidth: "600px" }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white mb-2">
            Post Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
            rows={4}
            style={{ minWidth: "600px" }} // Optional: set a minimum width
          />
        </div>
      </div>
      <div className="max-w-screen-md">
        <Post
          title={title}
          description={description}
          // If you want to add an image URL dynamically, you can also add an input for that.
          // imageUrl="vercel.svg"
        />
      </div>
    </main>
  );
}

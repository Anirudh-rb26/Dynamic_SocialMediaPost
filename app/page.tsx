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
    <main className="relative bg-black min-h-screen flex flex-col items-center p-4 overflow-auto">
      <div className="p-1 mb-11">
        <div className="max-w-screen-sm w-full p-4 border rounded-2xl bg-gray-950 mb-4">
          {/* Textboxes for user input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-white mb-2 text-lg font-semibold"
            >
              Post Title:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded bg-gray-900 text-white text-base"
              style={{ minWidth: "300px" }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-white mb-2 text-lg font-semibold"
            >
              Post Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded bg-gray-900 text-white text-base"
              rows={4}
              style={{ minWidth: "300px" }}
            />
          </div>
        </div>
        <div className="max-w-screen-sm w-full flex-grow sm:mb-5">
          <Post
            title={title}
            description={description}
            // If you want to add an image URL dynamically, you can also add an input for that.
            // imageUrl="vercel.svg"
          />
        </div>
      </div>
    </main>
  );
}

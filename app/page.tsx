"use client";

import InputCard from "@/components/InputCard";
import PostCard from "@/components/PostCard";
import React, { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main className="bg-black min-h-screen flex flex-col items-center p-4">
      <div className="max-w-screen-md w-full">
        <InputCard
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
        />
        <PostCard title={title} description={description} />
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/MovingBorders";
import Loader from "./ui/Loader";
import { generateImage } from "@/lib/ImageGenerator";

interface PostProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const PostCard: React.FC<PostProps> = ({ title, description, imageUrl }) => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleGenerateImage = async (title: string, description: string) => {
    setIsLoading(true); // Set loading state to true
    console.log("Generate Image button clicked");

    const url = await generateImage(title, description); // Call the function from lib
    if (url) {
      setGeneratedImage(url);
      console.log("Image generated and URL set:", url);
    }
    setIsLoading(false); // Set loading state back to false
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      {/* Profile Information */}
      <div className="flex items-center mb-4">
        {/* Profile Picture */}
        <Image
          src="/profile.svg"
          alt="Profile Picture"
          width={30}
          height={30}
          className="rounded-full"
        />
        {/* Name and Username */}
        <div className="ml-4">
          <h3 className="text-white font-bold">Username</h3>
          <span className="text-gray-400">@username</span>
        </div>
      </div>

      {/* Post */}
      {/* Post Title */}
      <h1 className="text-white text-xl font-semibold mb-2">{title}</h1>
      {/* Post Description */}
      <p className="text-gray-300 mb-4">{description}</p>
      {/* Post Image */}
      <div className="flex justify-center mb-4">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {generatedImage ? (
              <Image
                src={generatedImage}
                alt="Generated Image"
                width={400}
                height={400}
                objectFit="contain"
                className="rounded-lg"
              />
            ) : imageUrl ? (
              <Image
                src={imageUrl}
                alt="Post Image"
                width={400}
                height={400}
                objectFit="contain"
                className="rounded-lg"
              />
            ) : (
              <div className="text-gray-500">
                No image available! Click Generate Image to create an AI
                Generated Image.
              </div>
            )}
          </>
        )}
      </div>

      {/* Post Buttons */}
      <div className="flex items-center justify-between">
        {/* Right Side Buttons */}
        <div className="flex space-x-4">
          {/* Like Button */}
          <Button className="text-white px-4 py-2">Like</Button>
          {/* Share Button */}
          <Button className="text-white px-4 py-2">Share</Button>
        </div>
        {/* Left Side Buttons */}
        {/* Generate Image Button */}
        <Button
          className="text-white px-4 py-2 flex items-center transition"
          onClick={() => {
            handleGenerateImage(title, description);
          }}
        >
          <Image src="/gemini.svg" alt="Gemini Image" height={20} width={20} />
          <p className="pl-2">Generate Image</p>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;

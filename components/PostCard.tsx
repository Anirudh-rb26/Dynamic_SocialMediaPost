"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/MovingBorders";
import Loader from "./ui/Loader";

interface PostProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Post = ({ title, description, imageUrl }: PostProps) => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const generateImage = async (title: string, description: string) => {
    setIsLoading(true); // Set loading state to true
    console.log("Generate Image button clicked");

    const prompt = `Generate an image based on the following title and description of a twitter post, Title: ${title}. Description: ${description}. Focus on the main subject and convey the overall mood.`;

    const data = { inputs: prompt };

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      console.log("API request sent");

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setGeneratedImage(url);
      console.log("Image generated and URL set:", url);
    } catch (error) {
      console.error("Error generating image:", error);
      // Handle errors appropriately (e.g., display an error message)
    } finally {
      setIsLoading(false); // Set loading state back to false (important!)
    }
  };

  return (
    <div className="flex flex-col p-4 border rounded-2xl bg-cyan-950">
      {/* Profile Information */}
      <div className="flex items-center">
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
          <h3 className="font-bold">Username</h3>
          <span className="ml-2 text-gray-500">@username</span>
        </div>
      </div>

      {/* Post */}
      {/* Post Title */}
      <h1 className="mt-2">{title}</h1>
      {/* Post Description */}
      <p className="mt-2">{description}</p>
      {/* Post Image */}
      <div className="mt-2 flex justify-center">
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
              <div>
                No image available! Click Generate Image to create an AI
                Generated Image.
              </div>
            )}
          </>
        )}
      </div>

      {/* Post Buttons */}
      <div className="flex items-center mt-2 justify-between pt-5">
        {/* Right Side Buttons */}
        <div className="flex space-x-4">
          {/* Like Button */}
          <Button className="text-white px-4 py-2 rounded">Like</Button>
          {/* Share Button */}
          <Button className="text-white px-4 py-2 rounded">Share</Button>
        </div>
        {/* Left Side Buttons */}
        {/* Generate Image Button */}
        <Button
          className="text-white px-4 py-2 rounded"
          onClick={() => {
            generateImage(title, description);
          }}
        >
          <Image src="/gemini.svg" alt="Gemini Image" height={20} width={20} />
          <p className="pl-2">Generate Image</p>
        </Button>
      </div>
    </div>
  );
};

export default Post;

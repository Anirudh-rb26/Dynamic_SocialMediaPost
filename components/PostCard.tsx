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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async (title: string, description: string) => {
    setIsLoading(true);
    setError(null);
    console.log("Generate Image button clicked");

    try {
      const url = await generateImage(title, description);
      if (url) {
        setGeneratedImage(url);
        console.log("Image generated and URL set:", url);
      } else {
        throw new Error("Failed to generate image");
      }
    } catch (err) {
      console.error("Error generating image:", err);
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/?title=${encodeURIComponent(
      title
    )}&description=${encodeURIComponent(description)}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: shareUrl,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          alert("Shareable link copied to clipboard!");
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
        });
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      {/* Profile Information */}
      <div className="flex items-center mb-4">
        <Image
          src="/profile.svg"
          alt="Profile Picture"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-white font-bold">Username</h3>
          <span className="text-gray-400">@username</span>
        </div>
      </div>

      {/* Post */}
      <h1 className="text-white text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex justify-center mb-4">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            {generatedImage ? (
              <Image
                src={generatedImage}
                alt="Generated Image"
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            ) : imageUrl ? (
              <Image
                src={imageUrl}
                alt="Post Image"
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
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
        <div className="flex space-x-4">
          <Button className="text-white px-4 py-2" aria-label="Like post">
            Like
          </Button>
          <Button
            className="text-white px-4 py-2"
            aria-label="Share post"
            onClick={handleShare}
          >
            Share
          </Button>
        </div>
        <Button
          className="text-white px-4 py-2 flex items-center transition"
          onClick={() => handleGenerateImage(title, description)}
          aria-label="Generate image using AI"
        >
          <Image src="/gemini.svg" alt="" height={20} width={20} />
          <p className="pl-2">Generate Image</p>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;

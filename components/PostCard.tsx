"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Button } from "./ui/MovingBorders";
import Loader from "./ui/Loader";

interface PostProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const PostCard = ({ title, description, imageUrl }: PostProps) => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to Generate Post Image.
  const generateImage = async (title: string, description: string) => {
    // Sets Loading State to true to show loader.
    setIsLoading(true);

    // Prompt sent to the Image Generating Model.
    const prompt = `Generate an image based on the following title and description of a Twitter post, Title: ${title}. Description: ${description}. Focus on the main subject and convey the overall mood.`;
    const data = { inputs: prompt };

    try {
      const response = await fetch(
        // Hugging Face Model
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
          headers: {
            // Enter your Access Token replacing hf_xxxxxxxxxxxxxxxxxxxxxx
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      setGeneratedImage(url);
    } catch (error) {
      // Display Error Message for Troubleshooting.
      console.error("Error generating image:", error);
    } finally {
      // Setting loading state back to false.
      setIsLoading(false);
    }
  };

  // Update OG image meta tag when the image changes
  // useEffect(() => {
  //   const ogImage = document.querySelector("meta[property='og:image']");
  //   if (ogImage) {
  //     ogImage.setAttribute(
  //       "content",
  //       generatedImage || imageUrl || "/default-image.jpg"
  //     );
  //   }
  // }, [generatedImage, imageUrl]);

  // const ogImageUrl = generatedImage || imageUrl || "/default-image.jpg";

  return (
    <div className="p-5">
      {/* Currently the og:image tags do not come into effect as this is a static website and is not dynamic. */}
      {/* <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head> */}
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
          {/* Shows Loader or Generated Image */}
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
          {!imageUrl &&
            // Checks if there is a generated image before showing generate image button.
            !generatedImage && (
              <Button
                className="text-white px-4 py-2 rounded"
                onClick={() => {
                  generateImage(title, description);
                }}
              >
                <Image
                  src="/gemini.svg"
                  alt="Gemini Image"
                  height={20}
                  width={20}
                />
                <p className="pl-2">Generate Image</p>
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;

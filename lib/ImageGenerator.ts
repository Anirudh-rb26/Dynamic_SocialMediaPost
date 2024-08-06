export const generateImage = async (
  title: string,
  description: string
): Promise<string | null> => {
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

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error) {
    console.error("Error generating image:", error);
    // Handle errors appropriately (e.g., display an error message)
    return null;
  }
};

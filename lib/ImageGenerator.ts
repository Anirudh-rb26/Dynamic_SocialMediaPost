// lib/ImageGenerator.ts

export const generateImage = async (
  title: string,
  description: string
): Promise<string | null> => {
  const prompt = `Create an Open Graph image (1200x630) with the following title and description. Title: ${title}. Description: ${description}. Include branding elements and ensure readability.`;
  const data = { inputs: prompt };

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/your-model-id",
      {
        headers: {
          Authorization: "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate OG image");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error) {
    console.error("Error generating OG image:", error);
    return null;
  }
};

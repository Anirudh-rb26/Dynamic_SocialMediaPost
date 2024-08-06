# Dynamic Social Media Post

This project showcases a Next.js application that dynamically generates an image based on the content of a social media post.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed

### Installation

**Clone the repository**

Open Your Terminal or Command Prompt

- Navigate to the local directory where you want to clone the repository.
- Paste the command below and press Enter.

```bash
git clone https://github.com/octocat/Hello-World.git
```

**Install Dependencies**

```bash
npm install
```

## Configuration

Post Content: Edit _app/page.tsx_ to modify the post's title, description, and optional image URL.

_app/page.tsx_

```tsx
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
```

Image Generation: Configure Hugging Face integration in components/PostCard.tsx.

_components/PostCard.tsx_

```tsx
const response = await fetch(
  // Hugging Face Model
  "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
  {
    headers: {
      // Enter your Access Token replacing hf_xxxxxxxxxxxxxxxxxxxxxx
      Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxx",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }
);
```

Hugging Face documentation

- [Get Your Access Token](https://huggingface.co/docs/api-inference/quicktour)
- [Inference API (serverless) Documentation](https://huggingface.co/docs/api-inference/index)

Hugging Face Model Used

- [ZB-Tech/Text-to-Image](https://huggingface.co/ZB-Tech/Text-to-Image)

## Running Development Server

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

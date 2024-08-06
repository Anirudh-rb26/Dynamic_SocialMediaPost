import React from "react";

interface InputCardProps {
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
}

const InputCard: React.FC<InputCardProps> = ({
  title,
  description,
  setTitle,
  setDescription,
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6 w-full max-w-screen-sm mx-auto">
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
          className="w-full p-3 rounded bg-gray-800 text-white text-base border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
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
          className="w-full p-3 rounded bg-gray-800 text-white text-base border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </div>
    </div>
  );
};

export default InputCard;

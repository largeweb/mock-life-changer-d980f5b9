// app/components/LifestyleInput.tsx
"use client";

import React, { useState } from "react";

interface Props {
  onSubmit: (lifestyleChange: string) => void;
}

const LifestyleInput: React.FC<Props> = ({ onSubmit }) => {
  const [lifestyleChange, setLifestyleChange] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(lifestyleChange);
    // Consider clearing the input after submitting:
    // setLifestyleChange("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        value={lifestyleChange}
        onChange={(e) => setLifestyleChange(e.target.value)}
        placeholder="Enter a lifestyle change (e.g., 'Start daily meditation')"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

return LifestyleInput;
// app/components/AICoachInsights.tsx

import React from "react";
import { motion } from "framer-motion";

interface Props {
  insights: string;
}

const AICoachInsights: React.FC<Props> = ({ insights }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-lg p-4 shadow-md text-gray-200"
    >
      <h2 className="text-lg font-semibold mb-2">AI Coach Insights</h2>
      <p className="text-sm">{insights}</p>
      <p className="text-xs italic text-gray-500 mt-2">
        (Simulated AI Data - Not Medical Advice)
      </p>
    </motion.div>
  );
};

return AICoachInsights;
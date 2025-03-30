// app/components/DataDisplay.tsx
import React from "react";
import { motion } from "framer-motion";

interface Props {
  bodyBattery: number;
  sleepScore: number;
  stressLevel: number;
}

const DataDisplay: React.FC<Props> = ({ bodyBattery, sleepScore, stressLevel }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Simulated Data</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Body Battery</h3>
          <div className="flex items-center space-x-2">
            <span>{bodyBattery}</span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${bodyBattery}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Sleep Score</h3>
          <div className="flex items-center space-x-2">
            <span>{sleepScore}</span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${sleepScore}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Stress Level</h3>
          <div className="flex items-center space-x-2">
            <span>{stressLevel}</span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${stressLevel * 2}%` }}
              ></div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Disclaimer: This data is simulated and for demonstration purposes only.
        </p>
      </div>
    </motion.div>
  );
};

return DataDisplay;
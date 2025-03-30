// app/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import LifestyleInput from "./components/LifestyleInput";
import DataDisplay from "./components/DataDisplay";
import AICoachInsights from "./components/AICoachInsights";

// Mock function to simulate fetching data from a Garmin tracker.
const mockGarminData = async (): Promise<{
  bodyBattery: number;
  sleepScore: number;
  stressLevel: number;
}> => {
  // Simulate network latency.
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Generate random simulated data.
  const bodyBattery = Math.floor(Math.random() * 100);
  const sleepScore = Math.floor(Math.random() * 100);
  const stressLevel = Math.floor(Math.random() * 10); // Scale of 1-10

  return { bodyBattery, sleepScore, stressLevel };
};

// Mock function to simulate AI coach insights based on a lifestyle change.
const mockAICoach = async (lifestyleChange: string): Promise<string> => {
  // Simulate network latency.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a mock AI insight.
  return `Based on your input: "${lifestyleChange}", our AI predicts a slight improvement in your overall well-being. Expect your body battery to increase, your sleep score to improve, and your stress level to decrease. Remember, this is just a simulation, not medical advice!`;
};

return function Home() {
  const [lifestyleChange, setLifestyleChange] = useState("");
  const [bodyBattery, setBodyBattery] = useState<number | null>(null);
  const [sleepScore, setSleepScore] = useState<number | null>(null);
  const [stressLevel, setStressLevel] = useState<number | null>(null);
  const [aiInsights, setAiInsights] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (change: string) => {
    setIsLoading(true);
    setLifestyleChange(change); // keep a memory of what they entered for display
    setBodyBattery(null);
    setSleepScore(null);
    setStressLevel(null);
    setAiInsights("");

    try {
      const garminData = await mockGarminData();
      const aiResponse = await mockAICoach(change);

      setBodyBattery(garminData.bodyBattery);
      setSleepScore(garminData.sleepScore);
      setStressLevel(garminData.stressLevel);
      setAiInsights(aiResponse);
    } catch (error) {
      console.error("Error generating data:", error);
      setAiInsights("Error generating data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Mock Life Changer</h1>
      <p className="text-gray-600 mb-4 text-center">
        Simulate the impact of lifestyle changes on your health metrics.{" "}
        <span className="font-bold text-red-500">
          *Simulated Data - Not Medical Advice*
        </span>
      </p>

      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <LifestyleInput onSubmit={handleSubmit} />
        </div>

        <div className="md:w-1/2">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p>Generating simulated data...</p>
              {/* Add loading spinner here if desired */}
            </motion.div>
          )}

          {bodyBattery !== null && sleepScore !== null && stressLevel !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <DataDisplay
                bodyBattery={bodyBattery}
                sleepScore={sleepScore}
                stressLevel={stressLevel}
              />
              <p className="text-sm text-gray-500 italic mt-2">
                Simulated Data Based on: "{lifestyleChange}"
              </p>
            </motion.div>
          )}

          {aiInsights && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AICoachInsights insights={aiInsights} />
              <p className="text-xs text-gray-500 italic mt-1">
                Simulated AI Insights
              </p>
            </motion.div>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Disclaimer: This is a simulation for demonstration purposes only. Not
        intended for medical advice.
      </p>
    </div>
  );
}
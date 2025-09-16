import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import GiftBox from "./components/GiftBox";
import Quiz from "./components/Quiz";

const gifts = [
  { id: 1, type: "media" },
  {
    id: 2,
    type: "quiz",
    question:
      "What was the main ingredient of the Johri spiced shot that Eshaan had?",
    answer: "bhut jhalokia",
    hint: "It's a type of chili",
  },
  { id: 3, type: "media" },
  {
    id: 4,
    type: "quiz",
    question: "Where is the boarding school that Serena ran away to located?",
    answer: "Connecticut",
    hint: "please google it, smh",
  },
  { id: 5, type: "media" },
  {
    id: 6,
    type: "quiz",
    question:
      "In Legally Blonde, what graduating class (year) is Elle in at Harvard?",
    answer: "2004",
    hint: "close to your birth year",
  },
  { id: 7, type: "cake" },
];

export default function App() {
  const [currentGiftIndex, setCurrentGiftIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleOpenGift = () => {
    setRevealed(true);
  };

  const handleQuizComplete = () => {
    setRevealed(true);
  };

  const currentGift = gifts[currentGiftIndex];

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold text-yellow-500 mb-8">
        Happy Birthday, Srish!
      </Text>
      {!revealed && currentGift.type === "media" && (
        <GiftBox onOpen={handleOpenGift} />
      )}
      {!revealed && currentGift.type === "quiz" && (
        <Quiz
          question={currentGift.question}
          answer={currentGift.answer}
          hint={currentGift.hint}
          onComplete={handleQuizComplete}
        />
      )}
      {revealed && (
        <Text className="text-2xl text-gray-700">
          Gift content for box #{currentGift.id} would be here!
        </Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

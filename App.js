import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import GiftBox from "./components/GiftBox";

export default function App() {
  const [currentGift, setCurrentGift] = useState(1);
  const [revealed, setRevealed] = useState(false);

  const handleOpenGift = () => {
    setRevealed(true);
    // In a real app, you'd navigate to the gift's content here
    // For now, we'll just show an alert
    alert(`You've opened gift #${currentGift}!`);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold text-yellow-500 mb-8">
        Happy Birthday, Srish!
      </Text>
      {!revealed ? (
        <GiftBox onOpen={handleOpenGift} />
      ) : (
        <Text className="text-2xl text-gray-700">
          Gift content would be here!
        </Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

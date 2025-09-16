import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

const Quiz = ({ question, answer, hint, onComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleGuess = () => {
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      onComplete();
    } else {
      setAttempts(attempts + 1);
      if (attempts === 0) {
        setShowHint(true);
      }
    }
  };

  if (attempts >= 2) {
    return (
      <View className="p-8 bg-yellow-100 rounded-lg items-center">
        <Text className="text-2xl font-bold text-yellow-600 mb-4">
          Birthday Pass!
        </Text>
        <Pressable
          onPress={onComplete}
          className="bg-yellow-500 px-6 py-3 rounded-lg"
        >
          <Text className="text-white font-bold">Continue</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="p-8 bg-gray-100 rounded-lg w-11/12">
      <Text className="text-xl font-bold text-gray-800 mb-4">{question}</Text>
      <TextInput
        className="bg-white rounded-lg p-4 mb-4 text-lg"
        placeholder="Your answer..."
        value={userAnswer}
        onChangeText={setUserAnswer}
      />
      {showHint && <Text className="text-yellow-600 mb-4">Hint: {hint}</Text>}
      <Pressable
        onPress={handleGuess}
        className="bg-yellow-500 px-6 py-3 rounded-lg items-center"
      >
        <Text className="text-white font-bold text-lg">Guess</Text>
      </Pressable>
    </View>
  );
};

export default Quiz;

import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { Audio } from "expo-av";

const BirthdayCake = ({ onCandlesOut }) => {
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [audioLevel, setAudioLevel] = useState(0);

  useEffect(() => {
    const startMonitoring = async () => {
      if (permissionResponse?.status !== "granted") {
        await requestPermission();
      }
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
        null,
        100
      );
      recording.setOnRecordingStatusUpdate(({ meter }) => {
        if (meter) {
          setAudioLevel(meter);
          if (meter > -10) {
            // Threshold for "blowing"
            onCandlesOut();
          }
        }
      });
    };

    startMonitoring();

    return () => {
      // Clean up the recording
    };
  }, [permissionResponse]);

  return (
    <View className="items-center">
      <Text className="text-8xl mb-4">🎂</Text>
      <Text className="text-2xl font-bold text-yellow-600 mb-8">
        Make a wish and blow out the candles!
      </Text>
      <View className="flex-row flex-wrap justify-center mb-8">
        {Array.from({ length: 24 }).map((_, i) => (
          <Text key={i} className="text-4xl">
            🕯️
          </Text>
        ))}
      </View>
      <Text className="text-gray-500">
        Audio Level: {audioLevel.toFixed(2)}
      </Text>
    </View>
  );
};

export default BirthdayCake;

import React from "react";
import { Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const GiftBox = ({ onOpen }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSpring(1.2, {}, () => {
      scale.value = withSpring(1, {}, () => {
        onOpen();
      });
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={animatedStyle}
        className="w-40 h-40 bg-yellow-400 rounded-lg items-center justify-center shadow-lg"
      >
        <Animated.Text className="text-white text-6xl">🎁</Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

export default GiftBox;

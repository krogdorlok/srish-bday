import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import GiftBox from "./components/GiftBox";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold text-yellow-500 mb-8">
        Happy Birthday, Srish!
      </Text>
      <GiftBox />
      <StatusBar style="auto" />
    </View>
  );
}

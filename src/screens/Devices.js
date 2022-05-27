import { StatusBar } from "expo-status-bar";
import t from "twrnc";
import { StyleSheet, Text, View } from "react-native";

export default function Devices() {
  return (
    <View style={t`p-5 bg-stone-100 h-full`}>
      <Text
        style={t.style(`text-5xl font-medium`, {
          fontFamily: "PlayfairDisplay_400Regular",
        })}
      >
        Your Devices
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

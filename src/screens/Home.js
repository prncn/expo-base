import { StatusBar } from "expo-status-bar";
import t from "twrnc";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CGI_LOGO = require("../../assets/logo_cgi_color.png");

export default function Home() {
  return (
    <View style={t`p-5 bg-stone-100 h-full`}>
      <Text
        style={t.style(`text-5xl font-medium`, {
          fontFamily: "PlayfairDisplay_400Regular",
        })}
      >
        Overview
      </Text>
      <View
        style={t.style(
          `my-8 rounded-b-xl h-40 w-screen overflow-hidden absolute left-0 top-0`
        )}
      >
        <LinearGradient
          colors={["#E31937", "#5835a6"]}
          style={t`h-full w-full`}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

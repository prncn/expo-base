import Home from "./src/screens/Home";
import Devices from "./src/screens/Devices";
import Stats from "./src/screens/Stats";
import { StatusBar } from "expo-status-bar";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import { Feather } from "@expo/vector-icons";
import {
  Inter_300Light,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import t from "twrnc";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Inter_500Medium, PlayfairDisplay_400Regular });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={t`h-20 bg-stone-100`} />
      <Tab.Navigator
        initialRouterName={"Home"}
        screenOptions={{
          headerShown: false,
          tabBarStyle: t`h-24`,
        }}
      >
        <Tab.Screen
          name={"Overview"}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather name="home" size={24} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={"Devices"}
          component={Devices}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather name="printer" size={24} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={"Analytics"}
          component={Stats}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather name="bar-chart-2" size={24} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={"Settings"}
          component={Stats}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather name="settings" size={24} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      <View onLayout={onLayoutRootView}>
        <StatusBar barStyle="auto" />
      </View>
    </NavigationContainer>
  );
}

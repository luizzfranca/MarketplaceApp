import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from "@expo-google-fonts/karla";

import { SignIn } from "./src/screens/SignIn";
import { Text } from "react-native";
import { SignUp } from "./src/screens/SignUp";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_700Bold, Karla_400Regular });

  return (
    <>
      {fontsLoaded ? <Home /> : <Text>erro na fonte</Text>}
      <StatusBar style="auto" />
    </>
  );
}

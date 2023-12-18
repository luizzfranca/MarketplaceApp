import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from "@expo-google-fonts/karla";

import { Text } from "react-native";
import { Adverts } from "./src/screens/Adverts";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_700Bold, Karla_400Regular });

  return (
    <>
      {fontsLoaded ? <Adverts /> : <Text>erro na fonte</Text>}
      <StatusBar style="auto" />
    </>
  );
}

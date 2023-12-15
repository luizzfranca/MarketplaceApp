import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

import imageDetails from "../assets/bike.png";

const ios = Platform.OS == "ios";
export function Details() {
  const [image, setImage] = useState([1, 2, 3]);

  return (
    <View className="flex-1">
      <SafeAreaView className={ios ? "mt-16" : "mt-0"}>
        <View className="mt-11">
          <TouchableOpacity className="left-2">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
          <Image
            source={imageDetails}
            className="w-full h-96 mt-7"
            resizeMode="cover"
          />
        </View>
      </SafeAreaView>
      <View className="">
        <Text>Patrick França</Text>
      </View>
    </View>
  );
}

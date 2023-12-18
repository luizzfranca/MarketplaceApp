import { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PlusIcon } from "react-native-heroicons/outline";
import { Card } from "../components/Card";

const ios = Platform.OS == "ios";
export function Adverts() {
  const [cards, setCards] = useState([1, 2, 3, 4]);
  return (
    <View className="flex-1 p-5">
      <SafeAreaView className={ios ? "mt-16" : "mt-14 items-center"}>
        <View className="flex-row items-center ">
          <Text className="font-bold text-16">Meus anúncios</Text>
          <TouchableOpacity className="left-28">
            <PlusIcon size="30" color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View className="mt-4 flex-row items-center justify-between mx-3">
        <Text className="text-16">9 anúncios</Text>
        <Text>Select</Text>
      </View>

      <FlatList
        data={cards}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Card title="Tênis vermelho" value="R$ 60,00" />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

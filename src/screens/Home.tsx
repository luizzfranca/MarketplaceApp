import React, { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  PlusIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { Card } from "../components/Card";

const ios = Platform.OS == "ios";

export function Home() {
  const [cards, setCards] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  return (
    <View className="flex-1  bg-gray-200">
      <SafeAreaView className={ios ? "mt-16" : "mt-16 "}>
        <View className="flex-row items-center justify-between mx-2  px-4">
          <View className="flex-row items-center gap-2">
            <Image
              source={{ uri: "https://github.com/luizzfranca.png" }}
              className="w-16 h-16 rounded-full"
            />
            <Text className="text-gray-500 text-start text-14">
              Boas vindas, {"\n"}{" "}
              <Text className="text-gray-700 font-bold">Patrick</Text>
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center justify-center bg-gray-700 h-12 rounded-md w-40 space-x-2">
            <PlusIcon size="20" strokeWidth={2} color="white" />
            <Text className="text-white text-14 font-bold">Criar anúncio</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View className="mt-5">
        <Text className="ml-3 text-gray-500 text-14">
          Seus produtos anunciados para venda
        </Text>
        <View className="mt-5 rounded-md flex-row items-center justify-around  bg-blue-100 h-16 mx-3">
          <View className="flex-row items-center gap-2">
            <TagIcon size="27" strokeWidth={1} color="blue" />
            <View className="flex-col">
              <Text className="text-gray-600 font-bold  text-20">4</Text>
              <Text className="text-gray-600  text-16">anúncios ativos</Text>
            </View>
          </View>
          <View className="flex-row gap-2">
            <Text className="text-gray-600   text-16">Meus anúncios</Text>
            <ArrowRightIcon size="20" color="blue" />
          </View>
        </View>
      </View>
      <View className="mt-6">
        <Text className="ml-3 text-gray-500 text-14">
          Compre produtos variados
        </Text>
        <View className="flex-row items-center">
          <TextInput
            placeholder="Buscar anúncio"
            className="flex-1 mt-2 mx-4 rounded-md h-11 pl-6 bg-gray-100 text-base font-semibold text-black tracking-wider"
          />
          <View className=" flex-row gap-2 absolute right-10">
            <MagnifyingGlassIcon size="25" color="black" />
            <Text className="text-20">|</Text>
            <AdjustmentsVerticalIcon size="25" color="black" />
          </View>
        </View>
      </View>
      <View className="flex-1 mt-5 mx-3 mb-5">
        <FlatList
          data={cards}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <Card title="Tênis vermelho" value="R$ 60,00" />
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

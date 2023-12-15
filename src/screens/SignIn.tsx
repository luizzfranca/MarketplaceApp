import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import logoImg from "../assets/logo.png";

const ios = Platform.OS == "ios";
export function SignIn() {
  return (
    <View className="flex-1 ">
      <View className="bg-gray-200 py-10 rounded-2xl">
        <SafeAreaView className={ios ? "mt-20" : "mt-20"}>
          <View className="items-center">
            <Image source={logoImg} />
            <Text className="text-gray-800 text-3xl font-bold">
              marketspace
            </Text>
            <Text className="text-gray-500  text-14">
              Seu espaço de compra e venda
            </Text>
          </View>
        </SafeAreaView>

        <View className=" mt-36 item-center">
          <Text className="text-center  text-14 text-gray-600 mb-5">
            Acesse sua conta
          </Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor={"lightgray"}
            className="  mx-10 h-11 pl-6 bg-gray-100 text-base font-semibold text-white tracking-wider"
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor={"lightgray"}
            className=" mt-6  mx-10 h-11 pl-6 bg-gray-100 text-base font-semibold text-white tracking-wider"
          />
          <TouchableOpacity className="bg-blue-150 mx-10 h-11 mt-5 items-center justify-center">
            <Text className="text-gray-100 text-14">Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-10">
        <Text className="text-center  text-14 text-gray-600 mb-5">
          Ainda não tem acesso?
        </Text>
        <TouchableOpacity className="bg-gray-300 mx-10 h-11  items-center justify-center">
          <Text className="text-gray-600 font-bold text-14">
            Criar uma conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";

import logoImg from "../assets/logo.png";

const ios = Platform.OS == "ios";
export function SignUp() {
  return (
    <View className="flex-1 bg-gray-200">
      <View className="py-10 rounded-2xl">
        <SafeAreaView className={ios ? "mt-19" : "mt-19"}>
          <View className="items-center">
            <Image source={logoImg} />
            <Text className="text-gray-800 text-20 font-bold">Boas vindas</Text>
            <Text className="text-gray-500 text-center mt-2 text-10">
              Crie sua conta e use o espaço para comprar {"\n"} itens variados e
              vender seus produtos
            </Text>
          </View>
        </SafeAreaView>

        <ScrollView>
          <View className="mt-3">
            <View className="items-center mb-5">
              <TouchableOpacity>
                <Image
                  source={{ uri: "https://github.com/luizzfranca.png" }}
                  resizeMode="contain"
                  className="w-36 h-36 rounded-full"
                />
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={{ marginBottom: 30 }}>
              <TextInput
                placeholder="Nome"
                placeholderTextColor={"lightgray"}
                className="  mx-10 h-11 pl-6 bg-gray-100 text-base font-semibold text-gray-500 tracking-wider"
              />
              <TextInput
                placeholder="E-mail"
                placeholderTextColor={"lightgray"}
                className=" mt-6  mx-10 h-11 pl-6 bg-gray-100 text-base font-semibold text-gray-500 tracking-wider"
              />
              <TextInput
                placeholder="Telefone"
                placeholderTextColor={"lightgray"}
                className=" mt-6  mx-10 h-11 pl-6 bg-gray-100 text-base font-semibold text-gray-500 tracking-wider"
              />
              <TextInput
                placeholder="Senha"
                placeholderTextColor={"lightgray"}
                className=" mt-6  mx-10 h-11 pl-6 bg-gray-100 text-base font-semibold text-gray-500 tracking-wider"
              />
              <TextInput
                placeholder="Confirmar senha"
                placeholderTextColor={"lightgray"}
                className=" mt-6  mx-10 h-11 pl-6 bg-gray-100 text-base font-semibold text-gray-500 tracking-wider"
              />
            </KeyboardAvoidingView>
            <TouchableOpacity className="bg-gray-700 mx-10 h-11 mt-5 items-center justify-center">
              <Text className="text-gray-100 text-14">Criar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View>
        <Text className="text-center  text-14 text-gray-600 mb-2">
          Já tem uma conta?
        </Text>
        <TouchableOpacity className="bg-gray-300  mx-10 h-11  items-center justify-center">
          <Text className="text-gray-600 font-bold text-14">
            Ir para o login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

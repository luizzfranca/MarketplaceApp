import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import {
  ArrowLeftIcon,
  QrCodeIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  BuildingLibraryIcon,
  NewspaperIcon,
} from "react-native-heroicons/outline";

import imageDetails from "../assets/bike.png";

const ios = Platform.OS == "ios";
export function Details() {
  const [image, setImage] = useState([1, 2, 3]);

  return (
    <View>
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
      <View className="bg-gray-200 mt-2">
        <View className="flex-row justify-evenly mx-9 ">
          <View>
            <Text className="text-gray-700 text-20">Bicicleta</Text>
            <Text className="mt-3">
              A bicicleta (do francês bicyclette que deriva de bicycle união de
              bi, dois, com a palavra grega kyklos, rodas) é um veículo de duas
              rodas presas a um quadro, movido pelo esforço do próprio usuário
              (ciclista) através de pedais, sendo assim um velocípede de duas
              rodas.
            </Text>
            <View className="mt-1 mb-2">
              <View className="flex-row items-center gap-1 mb-1">
                <Text className="font-bold">Aceita troca?</Text>
                <Text className="font-bold">Sim</Text>
              </View>
              <Text className="mb-1">Meios de pagamento:</Text>
              <View className="gap-1">
                <View className="flex-row items-center">
                  <NewspaperIcon size="20" strokeWidth={2} color="black" />
                  <Text>Boleto</Text>
                </View>
                <View className="flex-row items-center">
                  <QrCodeIcon size="20" strokeWidth={2} color="black" />
                  <Text>Pix</Text>
                </View>
                <View className="flex-row items-center">
                  <CurrencyDollarIcon size="20" strokeWidth={2} color="black" />
                  <Text>Dinheiro</Text>
                </View>
                <View className="flex-row items-center">
                  <CreditCardIcon size="20" strokeWidth={2} color="black" />
                  <Text>Cartão de Crédito</Text>
                </View>
                <View className="flex-row items-center">
                  <BuildingLibraryIcon
                    size="20"
                    strokeWidth={2}
                    color="black"
                  />
                  <Text>Depósito Bancário</Text>
                </View>
              </View>
            </View>
          </View>
          <Text className="text-blue-200  text-16">R$ 120,00</Text>
        </View>
      </View>
      <View className="flex-row mt-4 items-center justify-between mx-3">
        <Text className="text-blue-200 font-bold  text-20">R$ 120,00</Text>
        <TouchableOpacity className="bg-blue-100 rounded-md p-3 h-12   items-center justify-center">
          <Text className="text-gray-100 font-bold text-14">
            Entrar em contato
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

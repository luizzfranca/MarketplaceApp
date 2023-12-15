import { Image, Text, TouchableOpacity, View } from "react-native";
import shoesImage from "../assets/shoes.png";

interface CardProps {
  title: string;
  value: string;
}

export function Card({ title, value }: CardProps) {
  return (
    <TouchableOpacity>
      <Image
        source={shoesImage}
        className="w-44 h-40 mt-4 rounded-lg"
        alt="image"
        resizeMode="contain"
      />
      <Text className="text-20 text-gray-600">{title}</Text>
      <Text className="text-16 font-bold">{value}</Text>
    </TouchableOpacity>
  );
}

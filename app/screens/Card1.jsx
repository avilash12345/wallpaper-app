// components/Card.js
import {
  Alert,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Card1({ image }) {
  const handlepressed = () => {
    Linking.openURL(image.pageURL).catch((err) =>
      Alert.alert("Failed to open link:", err.message)
    );
  };
  return (
    <View className="bg-white rounded-xl shadow-lg overflow-hidden w-80">
      <Image
        className="w-full h-72"
        source={{
          uri: image.webformatURL,
        }}
      />
      <View className="p-4">
        <Text className="text-md font-semibold text-gray-800 mb-2">
          Descriptions:
          <Text className="text-md font-normal text-teal-800 mb-2">
            {" "}
            {image.tags}
          </Text>
        </Text>
        <TouchableOpacity
          className="bg-blue-500 rounded-full px-4 py-2 self-start"
          onPress={handlepressed}
        >
          <Text className="text-white font-semibold text-sm h-7 text-center ">
            Download Image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { PIXABAY_API_KEY } from "@env";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"; // Optional icon library
import Card from "./screens/Card";

export default function Index() {
  const key = PIXABAY_API_KEY;
  //console.log(key);
  const [data, setData] = useState("Nature");
  const [images, setImages] = useState([]);
  useEffect(() => {
    handlesubmit();
  }, []);
  const handlechange = (data) => {
    setData(data);
  };
  const handlesubmit = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${key}&q=${data}&image_type=photo`
      );
      setImages(response.data.hits);
      setData("");
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  //console.log(images);

  return (
    <>
      <View className="flex-1 items-center justify-center bg-gray-100 p-4">
        <View className="flex-row items-center bg-white rounded-full px-4 py-2 shadow-md w-full">
          <TextInput
            placeholder="Search......"
            placeholderTextColor="#9CA3AF" // Tailwind's text-gray-400
            onChangeText={handlechange}
            value={data}
            className="ml-2 flex-1 text-base text-gray-800"
          />
          <TouchableOpacity onPress={handlesubmit}>
            {/* Could add a clear or voice icon here */}
            <MagnifyingGlassIcon size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <View className="h-4"></View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className=" grid grid-cols-3 gap-2 mx-auto">
            {images.map((image) => (
              <Card key={image.id} image={image} />
            ))}
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

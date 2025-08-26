// components/SearchBar.js
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"; // Optional icon library

export default function SearchBar() {
  const [data, setData] = useState("");
  const handlechange = (data) => {
    setData(data);
  };
  return (
    <View className="flex-row items-center bg-white rounded-full px-4 py-2 shadow-md w-full">
      <TextInput
        placeholder="Search......"
        placeholderTextColor="#9CA3AF" // Tailwind's text-gray-400
        onChangeText={handlechange}
        value={data}
        className="ml-2 flex-1 text-base text-gray-800"
      />
      <TouchableOpacity
        onPress={() => {
          console.log(`Search icon pressed ${data}`);
          setData("");
        }}
      >
        {/* Could add a clear or voice icon here */}
        <MagnifyingGlassIcon size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

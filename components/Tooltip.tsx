import images from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Tooltip = () => {
  return (
    <View className="relative w-full rounded-3xl bg-[#C67C4E] overflow-hidden px-6 py-6">
      <View className="absolute inset-0">
        <View className="absolute -right-16 -top-20 size-40 rounded-full bg-white/15" />
        <View className="absolute -right-10 top-4 size-28 rounded-2xl bg-white/20 rotate-6" />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="flex-1 max-w-[52%]">
          <Text className="text-white text-sm uppercase tracking-widest">
            Featured tip
          </Text>
          <Text className="text-lg font-sora-bold text-white mt-1">
            See how you can find a job quickly!
          </Text>

          <TouchableOpacity className="bg-light rounded-full px-5 py-2 mt-4 self-start shadow-md shadow-zinc-500">
            <Text className="text-dark font-sora-semibold text-sm">
              Read more
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={images.woman}
          resizeMode="cover"
          className="w-44 h-44 mt-2"
        />
      </View>
    </View>
  );
};

export default Tooltip;

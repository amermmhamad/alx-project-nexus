import { Card } from "@/components/Card";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const explore = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5 mt-6 flex flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="2xl" />
          </TouchableOpacity>
          <Text className="text-xl font-sora-bold">Explore Jobs</Text>
          <TouchableOpacity onPress={() => router.push("/notification")}>
            <Image
              source={icons.notification}
              className="size-6"
              tintColor={"#C67C4E"}
            />
          </TouchableOpacity>
        </View>
        <View className="px-5 mt-5">
          <Search />
          <View className="mt-5">
            <Filters />
          </View>
          <View className="mt-5">
            <Text className="text-lg font-sora-bold text-dark">
              Found 182 Jobs
            </Text>
            <View className="mt-5 gap-5">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default explore;

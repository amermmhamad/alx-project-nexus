import { categories } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(item.category)}
          className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full border border-grey ${selectedCategory === item.category ? "bg-primary border-primary text-white" : "text-dark"}`}
        >
          <Text
            className={`text-sm ${selectedCategory === item.category ? "font-sora-bold text-white mt-0.5" : "font-sora-medium text-dark"}`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;

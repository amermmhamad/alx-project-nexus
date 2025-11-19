import icons from "@/constants/icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface CardProps {
  jobTitle?: string;
  company?: string;
  location?: string;
  salaryRange?: string;
  tags?: string[];
  logo?: any;
  isSaved?: boolean;
  onPress?: () => void;
}

const defaultTags = ["Full Time", "Onsite"];

export const Card = ({
  jobTitle = "UI/UX Designer",
  company = "Google LLC",
  location = "California, United States",
  salaryRange = "$10,000 - $25,000 /month",
  tags = defaultTags,
  logo = icons.google,
  isSaved = false,
  onPress,
}: CardProps) => {
  return (
    <TouchableOpacity className="w-full rounded-3xl bg-white border border-[#EEF1F6] p-5 gap-4">
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-center gap-3 flex-1">
          <View className="size-12 rounded-2xl bg-[#F5F7FB] items-center justify-center">
            <Image source={logo} className="w-7 h-7" resizeMode="contain" />
          </View>
          <View className="flex-1">
            <Text className="text-dark text-base font-sora-bold">
              {jobTitle}
            </Text>
            <Text className="text-sm text-[#6C727F] font-sora-medium">
              {company}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className={`size-10 rounded-2xl border items-center justify-center ${
            isSaved ? "bg-primary border-primary" : "border-[#E0E4EB]"
          }`}
          onPress={onPress}
        >
          <Image
            source={icons.heart}
            className="size-5"
            style={{ tintColor: isSaved ? "#C67C4E" : "#8F96A3" }}
          />
        </TouchableOpacity>
      </View>
      <View className="flex flex-col border-t border-secondary" />

      <View className="gap-2">
        <Text className="text-sm text-[#6C727F] font-sora-medium">
          {location}
        </Text>
        <Text className="text-xl font-sora-bold text-primary">
          {salaryRange}
        </Text>
      </View>

      <View className="flex-row gap-3">
        {tags.slice(0, 2).map((tag) => (
          <View
            key={tag}
            className="rounded-full border border-[#E7EBF1] px-4 py-2"
          >
            <Text className="text-xs font-sora-bold text-[#6C727F]">{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export const FeaturedCard = ({
  jobTitle = "UI/UX Designer",
  company = "Google LLC",
  location = "California, United States",
  salaryRange = "$10,000 - $25,000/month",
  tags = defaultTags,
  logo = icons.google,
  isSaved = false,
  onPress,
}: CardProps) => {
  return (
    <TouchableOpacity className="w-96 rounded-3xl bg-white border border-[#EEF1F6] p-5 gap-4">
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-center gap-3 flex-1">
          <View className="size-12 rounded-2xl bg-[#F5F7FB] items-center justify-center">
            <Image source={logo} className="w-7 h-7" resizeMode="contain" />
          </View>
          <View className="flex-1">
            <Text className="text-dark text-base font-sora-bold">
              {jobTitle}
            </Text>
            <Text className="text-sm text-[#6C727F] font-sora-medium">
              {company}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className={`size-10 rounded-2xl border items-center justify-center ${
            isSaved ? "bg-primary border-primary" : "border-[#E0E4EB]"
          }`}
          onPress={onPress}
        >
          <Image
            source={icons.heart}
            className="size-5"
            style={{ tintColor: isSaved ? "#C67C4E" : "#8F96A3" }}
          />
        </TouchableOpacity>
      </View>
      <View className="flex flex-col border-t border-secondary" />

      <View className="gap-2">
        <Text className="text-sm text-[#6C727F] font-sora-medium">
          {location}
        </Text>
        <Text className="text-xl font-sora-bold text-primary">
          {salaryRange}
        </Text>
      </View>

      <View className="flex-row gap-3">
        {tags.slice(0, 2).map((tag) => (
          <View
            key={tag}
            className="rounded-full border border-[#E7EBF1] px-4 py-2"
          >
            <Text className="text-xs font-sora-bold text-[#6C727F]">{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

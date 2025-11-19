import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import {
  Alert,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => {
  const textColorClass = textStyle ?? "text-dark";

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-3"
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text className={`text-lg font-sora-medium ${textColorClass}`}>
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, refetch } = useGlobalContext();
  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result) {
        Alert.alert("You have been logged out");
        refetch();
      } else {
        Alert.alert("Error", "Failed to logout");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to logout");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-sora-bold">Profile</Text>
          <Image source={icons.notification} className="size-5" />
        </View>
        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
              resizeMode="cover"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-6" />
            </TouchableOpacity>
            <Text className="text-2xl font-sora-bold mt-2">{user?.name}</Text>
          </View>
        </View>
        <View className="flex flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Jobs" />
          <SettingsItem icon={icons.wallet} title="Work Experience" />
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-secondary">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} icon={item.icon} title={item.title} />
          ))}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-secondary">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-primary"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

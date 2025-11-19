import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { isLoggedIn, loading, refetch } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/" />;
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert("Login failed");
    }
  };
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        contentContainerClassName="flex-grow items-center justify-center px-6 py-12"
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={images.logo}
          className="w-96 h-32"
          resizeMode="contain"
        />
        <View className="items-center mt-8">
          <TouchableOpacity
            className="bg-white p-4 rounded-full shadow-lg shadow-zinc-300 flex-row items-center gap-2 w-full mt-2"
            onPress={handleLogin}
          >
            <Image
              source={icons.google}
              className="w-6 h-6"
              resizeMode="contain"
            />
            <Text className="text-dark text-center font-sora-bold text-base">
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

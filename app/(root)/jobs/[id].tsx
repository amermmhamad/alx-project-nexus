import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const jobDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>jobDetails: {id}</Text>
    </View>
  );
};

export default jobDetails;

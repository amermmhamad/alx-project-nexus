import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import Tooltip from "@/components/Tooltip";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5 py-2"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={images.avatar}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-sora text-dark">
                    Good Morning
                  </Text>
                  <Text className="text-base font-sora-medium text-dark">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image
                source={icons.notification}
                className="size-6"
                tintColor={"#C67C4E"}
              />
            </View>
            <Search />

            <View className="my-5">
              <Tooltip />
              <View className="flex flex-row items-center justify-between mt-5">
                <Text className="text-lg font-sora-bold text-dark">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-sm font-sora text-primary">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex-row gap-4 mt-5 pr-5"
              >
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
              </ScrollView>

              <View className="mt-5">
                <View className="flex flex-row items-center justify-between mt-5">
                  <Text className="text-lg font-sora-bold text-dark">
                    Recent Jobs
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-sm font-sora text-primary">
                      See All
                    </Text>
                  </TouchableOpacity>
                </View>
                <Filters />
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

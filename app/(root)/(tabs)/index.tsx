import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/Filters";
import Tooltip from "@/components/Tooltip";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { JobFromApi } from "@/lib/jobsApi";
import { getJobs } from "@/lib/jobsApi";

const formatSalary = (salaryRaw: JobFromApi["salary_raw"]) =>
  salaryRaw && salaryRaw.trim().length > 0 ? salaryRaw : "Salary not specified";

export default function Index() {
  const { user } = useGlobalContext();

  const [jobs, setJobs] = useState<JobFromApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getJobs();
      setJobs(data);
    } catch (err) {
      console.error("Error loading jobs from JSON", err);
      setError("Failed to load local jobs data.");
    } finally {
      setLoading(false);
    }
  };

  const handleCardPress = (id: string) => router.push(`/jobs/${id}`);

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5 py-2"
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
              <TouchableOpacity onPress={() => router.push("/notification")}>
                <Image
                  source={icons.notification}
                  className="size-6"
                  tintColor={"#C67C4E"}
                />
              </TouchableOpacity>
            </View>

            <View className="my-5">
              <Tooltip />
              <View className="flex flex-row items-center justify-between mt-5">
                <Text className="text-lg font-sora-bold text-dark">
                  Our Recommendation
                </Text>
                <TouchableOpacity onPress={() => router.push("/explore")}>
                  <Text className="text-sm font-sora text-primary">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                bounces={false}
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
                  <TouchableOpacity onPress={() => router.push("/explore")}>
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
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center mt-10">
            {loading ? (
              <>
                <ActivityIndicator size="large" color="#C67C4E" />
                <Text className="mt-2 text-sm text-[#6C727F]">
                  Loading jobs...
                </Text>
              </>
            ) : error ? (
              <Text className="text-sm text-red-500">{error}</Text>
            ) : (
              <Text className="text-sm text-[#6C727F]">
                No jobs found right now.
              </Text>
            )}
          </View>
        }
        renderItem={({ item }) => {
          const location =
            item.locations_derived?.[0] ??
            (item.cities_derived &&
            item.regions_derived &&
            item.countries_derived
              ? `${item.cities_derived[0]}, ${item.regions_derived[0]}, ${item.countries_derived[0]}`
              : (item.locations_raw ?? "Location not specified"));

          const salaryRange = formatSalary(item.salary_raw);

          const tags: string[] = [];
          if (item.employment_type) tags.push(item.employment_type);
          if (item.remote_derived === true) tags.push("Remote");
          if (item.remote_derived === false) tags.push("Onsite");
          if (item.experience_level) tags.push(item.experience_level);

          const logo = item.organization_logo
            ? { uri: item.organization_logo }
            : undefined;

          return (
            <Card
              jobTitle={item.title}
              company={item.organization}
              location={location}
              salaryRange={salaryRange}
              tags={tags.length ? tags : undefined}
              logo={logo}
              onPress={() => handleCardPress(item.id)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

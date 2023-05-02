import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import styles from "./topCategory.style";
import data from "../../../Category_JSON_data/TopCategory.json";
import TopCategoryCard from "../../common/cards/topCategory/TopCategoryCard";

export default function TopCategory() {
  
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>What would you like to rent?</Text>
      </View>

      <View style={styles.cardsContainer}>
        {data.data?.map((item) => (
          <TopCategoryCard
            item={item}
            key={item.data_id}
            handleNavigate={() =>
              router.push(`/category-details/${item.data_id}`)
            }
          />
        ))}
      </View>
    </View>
  );
}

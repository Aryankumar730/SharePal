import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import WhySharePalCard from "../../common/cards/whySharePal/WhySharePalCard";
import styles from "./whySharePal.style";
import data from "../../../Category_JSON_data/whySharePal.json";

const whySharePal = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Why SharePal</Text>
      </View>

      <View style={styles.cardsContainer}>
        {data.data?.map((item) => (
          <WhySharePalCard item={item} key={item.data_id} />
        ))}
      </View>
    </View>
  );
};

export default whySharePal;

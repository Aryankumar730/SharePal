import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./review.style";
import { COLORS, SIZES } from "../../../constants";
import data from "../../../Category_JSON_data/Review.json";
import ReviewCard from "../../common/cards/review/ReviewCard";

export default function Review() {
  const [selectedJob, setSelectedJob] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          More than
          <Text style={{ color: "blue" }}> 50k </Text>Happy
        </Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Customers!</Text>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={data.data}
          renderItem={({ item }) => (
            <ReviewCard
              item={item}
              selectedJob={selectedJob}
             
            />
          )}
          keyExtractor={(item) => item?.data_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
}

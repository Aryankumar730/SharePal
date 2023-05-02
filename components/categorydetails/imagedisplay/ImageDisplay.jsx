import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./imageDisplay.style";

const data = [
  {
    image_url:
      "https://ik.imagekit.io/faskf16pg/new-categories/2_1__mK14XXp4D.png?updatedAt=1680187469898",
    data_id: 501121,
  },
  {
    image_url:
      "https://ik.imagekit.io/faskf16pg/new-categories/1_1__eQBfCIOj3B.png?updatedAt=1680187470191",
    data_id: 502123,
  },
  {
    image_url:
      "https://ik.imagekit.io/faskf16pg/new-categories/3_1__HOochmZCK.png?updatedAt=1680187470138",
    data_id: 503143,
  },
  {
    image_url:
      "https://ik.imagekit.io/faskf16pg/new-categories/4_1__goCTkVQ7l.png?updatedAt=1680187470184",
    data_id: 504154,
  },
];

export default function ImageDisplay() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rent it your way</Text>
      </View>

      <View style={styles.cardsContainer}>
        {data?.map((item) => (
          <TouchableOpacity style={styles.logoContainer} key={item.data_id}>
            <Image
              source={{ uri: item.image_url }}
              resizeMode="contain"
              style={styles.logoImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

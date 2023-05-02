import React from "react";
import styles from "./categoryHeaderCard.style";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function CategoryHeaderCard({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{ uri: item.image_url }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

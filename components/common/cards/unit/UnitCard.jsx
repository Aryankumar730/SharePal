import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./unitCard.style";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function UnitCard({ item }) {
  return (
    <TouchableOpacity style={styles.container}>

      <View style={styles.textContainer}>

        <Text style={styles.Title} numberOfLines={2}>
          {item.title}
        </Text>

        <TouchableOpacity>

            <Text style={styles.Details}> {item.number}+ Products </Text>

        </TouchableOpacity>

      </View>


      <View style={styles.logoContainer}>
        <Image
          source={{uri: item.image_url}}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      
    </TouchableOpacity>
  );
}

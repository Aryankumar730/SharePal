import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./whySharePalcard.style";
import imageIcon from "../../../../assets/icons/1st.png";

const WhySharePalCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={imageIcon}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.Title} numberOfLines={1}>
          {item.title}
        </Text>

        <Text style={styles.Details}>{item.details}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WhySharePalCard;

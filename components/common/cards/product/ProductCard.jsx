import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./productcard.style";

const ProductCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.logoContainer} onPress={handleNavigate}>
          <Image
            source={{ uri: item.image_url }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.header} numberOfLines={2}>
        {item.title}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.details} numberOfLines={1}>
          {item.details}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

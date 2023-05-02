import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./topCategorycard.style";

export default function TopCategoryCard({ item, handleNavigate }) {

  
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

      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>

      
    </TouchableOpacity>
  );
}

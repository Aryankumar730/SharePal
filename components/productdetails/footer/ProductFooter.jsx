import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./productfooter.style";
import { images, icons, COLORS, FONTS, SIZES } from "../../../constants";

export default function ProductFooter() {
  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

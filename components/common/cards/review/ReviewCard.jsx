import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./reviewcard.style";
import Ionicons from "@expo/vector-icons/Ionicons";

const ReviewCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.logoContainer}>
            <Ionicons
              name="person-circle"
              size={51}
              color="#e9932b"
            
            />
            
          </TouchableOpacity>

          <View style={{ paddingLeft: 20 }}>
            <Text style={styles.credentials} numberOfLines={1}>
              {item.name} , {item.city}
            </Text>

            <Text style={styles.productName} numberOfLines={1}>
              {item.product}
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.RemarkHead} numberOfLines={2}>
        {item.Remark_Header}
      </Text>

      <View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 5 }}>
          <Ionicons
            name="star"
            size={20}
            color="gold"
            style={{ paddingRight: 3 }}
          />
          <Ionicons
            name="star"
            size={20}
            color="gold"
            style={{ paddingRight: 3 }}
          />
          <Ionicons
            name="star"
            size={20}
            color="gold"
            style={{ paddingRight: 3 }}
          />
          <Ionicons
            name="star"
            size={20}
            color="gold"
            style={{ paddingRight: 3 }}
          />
          <Ionicons
            name="star"
            size={20}
            color="gold"
            style={{ paddingRight: 3 }}
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.Remarks} numberOfLines={16}>
          {item.Remark}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCard;

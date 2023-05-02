import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { images, icons, COLORS, FONTS, SIZES } from "../../../constants";
import styles from "./home.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { sin } from "react-native-reanimated";

const IconLabel = ({ icon, label }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text>{label}</Text>
    </View>
  );
};

const StarReview = ({ rate }) => {
  var starComponents = [];
  var fullStar = Math.floor(rate);

  // Full Star
  for (var i = 0; i < fullStar; i++) {
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starfull}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {starComponents}
      <Text style={{ marginLeft: SIZES.xSmall, color: COLORS.gray }}>
        {rate}
      </Text>
    </View>
  );
};

export default function Home({ item }) {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState();

  var myArray = [];

  useEffect(() => {
    if (item.details != undefined) {
      myArray = item.details.split(";");
      setInfo(myArray);
      setLoading(true);
    }
  }, [item.details]);

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: item.image_url,
          }}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "70%",
            padding: SIZES.medium
          }}
        />

        <View
          style={[
            {
              position: "absolute",
              bottom: "5%",
              left: "5%",
              right: "5%",
              borderRadius: 15,
              padding: SIZES.small,
              backgroundColor: "white",
            },
            styles.shadow,
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.shadow}>
              <Image
                source={{
                  uri: item.image_url,
                }}
                resizeMode="cover"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15,
                }}
              />
            </View>

            <View
              style={{
                marginHorizontal: SIZES.small,
                justifyContent: "space-around",
              }}
            >
              <Text style={styles.Title} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.smallTitle}>
                Early Bird Discount upto 20%
              </Text>

              <StarReview rate={4} />
            </View>
          </View>

          <View style={{ marginTop: SIZES.small }}>
            <Text>
              <Text style={styles.Titleprice}>₹ {item.price} </Text> for 1 days
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1.5 }}>
        {/* Icons */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.xSmall,
            paddingHorizontal: SIZES.medium * 2,
            justifyContent: "space-between",
          }}
        >
          <IconLabel icon={icons.quality} label="Great quality" />

          <IconLabel icon={icons.price} label="Lowest price" />

          <IconLabel icon={icons.refund} label="Refundable" />
        </View>

        {/* About */}
        <View
          style={{ marginTop: SIZES.xLarge, paddingHorizontal: SIZES.xLarge }}
        >
          <Text style={styles.Title}>Features & Specifications</Text>
          <View style={{ marginTop: SIZES.xSmall, color: COLORS.gray }}>
            {loading &&
              info.map((value, index) => {
                if (index == 0) {
                  const str = value;
                  value = " " + str;
                }
                return (
                  <View key={index}>
                    <Text style={styles.AboutTitle} >
                      {value}
                    </Text>
                  </View>
                );
              })}
          </View>
        </View>
      </View>

      
    </View>
  );
}

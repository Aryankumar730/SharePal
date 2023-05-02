import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import styles from "./productdata.style";
import { SIZES } from "../../../constants";
import ProductCard from "../../common/cards/product/ProductCard";

const Productdata = ({ name, header, data }) => {
  const router = useRouter();

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{name}</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ProductCard item={item} 
            handleNavigate={() =>
              router.push(`/product-details/${header}/${item.data_id}`)
            }
            />
          )}
          keyExtractor={(item) => item?.data_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Productdata;

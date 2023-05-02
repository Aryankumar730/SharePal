import React from "react";
import styles from "./categoryHeader.style";
import { View } from "react-native";
import CategoryHeaderCard from "../../common/cards/categoryHeader/CategoryHeaderCard";

const data = [
  {
    title: "Excellent Quality Products",
    image_url:
      "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660844759942x589981560796495700%2Flike.png?w=96&h=96&auto=compress&dpr=2&fit=max",
    data_id: 201,
  },
  {
    title: "Delivery Date & Return Data is FREE!!",
    image_url:
      "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660843369408x866190984421172400%2Fgift-box.png?w=96&h=96&auto=compress&dpr=2&fit=max",
    data_id: 202,
  },
  {
    title: "Pay on Delivery",
    image_url:
      "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660843381244x490561632153383440%2Fcash-on-delivery.png?w=96&h=96&auto=compress&dpr=2&fit=max",
    data_id: 203,
  },
];

export default function CategoryHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {data?.map((item) => (
          <CategoryHeaderCard item={item} key={item.data_id} />
        ))}
      </View>
    </View>
  );
}

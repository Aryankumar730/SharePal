import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./unit.style";
import {
  TrekkingData,
  RidingData,
  ActionCameras,
  Cameras,
  GameConsole,
  PS4Games,
  WinterWear,
} from "../../../Category_Details_JSON_data";
import UnitCard from "../../common/cards/unit/UnitCard";

export default function Unit({ ID }) {

  const [name, setName] = useState();
  const [data, setData] = useState("Something is wrong");

  useEffect(() => {
    if (ID == 71) {
      setData(TrekkingData);
      setName("Trekking Gear");
    } else if (ID == 72) {
      setData(RidingData);
      setName("Riding Gear");
    } else if (ID == 73) {
      setData(ActionCameras);
      setName("Action Cameras");
    } else if (ID == 74) {
      setData(Cameras);
      setName("Cameras");
    } else if (ID == 75) {
      setData(GameConsole);
      setName("Gaming Console");
    } else if (ID == 76) {
      setData(PS4Games);
      setName("PS4 Games");
    } else if (ID == 77) {
      setData(WinterWear);
      setName("Winter Wear");
    } else {
      setData(TrekkingData);
      setName("Error");
    }
  }, [ID]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{name} On Rent</Text>
      </View>

      <View style={styles.cardsContainer}>
       
        {data.data?.map((item) => (
          <UnitCard item={item} key={item.data_id} />
        ))}
       
      </View>
    </View>
  );
}

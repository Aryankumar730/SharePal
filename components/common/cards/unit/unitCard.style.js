import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: "space-between",
    // alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
    margin: 15
  },
  logoContainer: {
    width: 150,
    height: 150,
    // backgroundColor: COLORS.white,
    // borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    // padding: 5
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
    marginVertical: SIZES.medium,
    
    alignItems:"center"
  },
  Title: {
    fontSize: SIZES.medium,
    fontFamily: "DMMedium",
    color: "#0d0d69",
    textAlign: "center"
  },
  Details: {
    fontSize: SIZES.medium,
    fontFamily: "DMRegular",
    color: "black",
    // backgroundColor: "black", 
    borderWidth:1,
    borderColor: "gray",
    borderRadius: 15,  
    padding: 10,
    marginTop: 30
  },
  
});

export default styles;

import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
    alignItems:"center"
  },
  Title: {
    fontSize: SIZES.medium,
    fontFamily: "DMMedium",
    color: "#0d0d69",
  },
  Details: {
    fontSize: SIZES.small,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 6,
    textTransform: "capitalize",
    textAlign:"center"
  },
});

export default styles;

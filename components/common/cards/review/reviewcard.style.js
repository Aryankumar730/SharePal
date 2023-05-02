import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 270,
    padding: SIZES.xLarge,
    borderRadius: SIZES.medium,
    // justifyContent: "space-between",
    // alignItems:"flex-start"
    ...SHADOWS.medium,
    backgroundColor: "#FFF",
    shadowColor: COLORS.lightWhite,
  },
  logoContainer: {
    width: 55,
    height: 55,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems:"center",
    
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  credentials: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "black",
    marginTop: 2,
  },
  productName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: "black",
    marginTop: SIZES.small / 1.5,
    color: "#639",
  },
  RemarkHead: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: "black",
    // marginTop: SIZES.small / 1.5,
    marginTop: SIZES.large,
  },
  Remarks: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "gray",
    textAlign:"justify",
  },
  infoContainer: {
    marginTop: SIZES.large/2,
  },
      
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },
});

export default styles;

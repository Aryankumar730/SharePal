import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container:  {
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 120,
    height: 120,
    
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "black",
    marginTop: SIZES.small / 1.5,
    
  },
  infoContainer: {
    marginTop: SIZES.large/2,
  },
      
  details: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#575656",
  },
  
});

export default styles;

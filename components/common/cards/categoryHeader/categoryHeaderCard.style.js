import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
    backgroundColor: "#dfe9f3",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems:"center",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    margin:5,
    flexDirection: "row"
    
  },  
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: "black",
    marginTop: SIZES.small / 1.5,
    paddingLeft: 20,
    width: 200,
    textAlign: "center"
  },  
  
  
  
});

export default styles;

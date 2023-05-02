import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 155,
    padding: SIZES.small,
    backgroundColor: "#dfe9f3",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    alignItems:"center",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    margin:10,    
  },  
  logoContainer: {
    width: 155,
    height: 155,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "120%",
    height: "120%",
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: "black",
    marginTop: SIZES.small / 1.5,
  }  
});

export default styles;

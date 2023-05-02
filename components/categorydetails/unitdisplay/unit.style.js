import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.xLarge,
    borderRadius: SIZES.medium,
        ...SHADOWS.medium,
    shadowColor: COLORS.white,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,    
    
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
    
  
});

export default styles;
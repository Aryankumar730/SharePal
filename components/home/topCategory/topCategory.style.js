import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // width: 500,
    paddingTop: SIZES.xLarge,
    borderRadius: SIZES.medium,
    // justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    
    
    
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    flex: 1,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems: "center",
    justifyContent:"center"
  },
  
  
  
});

export default styles;

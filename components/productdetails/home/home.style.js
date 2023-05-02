import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "white"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    logoContainer: {
        flex: 2,
        // width: 400,
        height: 380,
        // backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        // justifyContent: "center",
        // alignItems: "flex-start",
      },
      Title: {
        fontSize: SIZES.medium,
        fontFamily: "DMMedium",
        color: "#0d0d69",
        marginHorizontal: 3
      },
      smallTitle: {
        fontSize: SIZES.small,
        fontFamily: "DMRegular",
        color: "#1ca672",
      },
      Titleprice: {
        fontSize: SIZES.large,
        fontFamily: "DMMedium",
        color: "#0d0d69",
      },
      AboutTitle: {
        
        marginVertical: 3,
      },
      
      
  
});

export default styles;

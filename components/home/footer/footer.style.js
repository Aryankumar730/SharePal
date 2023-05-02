import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#3a3937",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: 5,
    marginTop: 20,
  },
  dataContainer: {
    paddingLeft: 5
  },
  line: {
    flex: 1, 
    height: 2, 
    backgroundColor: '#d7df23', 
    marginTop: 5, 
    

  },
  heading: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.regular,
    color: "#f6f8fc",
    marginTop: 45,
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.white,
    paddingTop: 15,
  },
  icons:{
    flex: 1,
    flexDirection: "row",
    paddingTop: 15 ,
    paddingBottom: 15,
    paddingLeft: 5,
  }
  
});

export default styles;

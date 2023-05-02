import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

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
        fontSize: SIZES.xLarge,
        fontFamily: FONT.medium,
        color: COLORS.primary,
    },
    logoContainer: {
        width: 155,
        height: 155,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    logoImage: {
        width: "100%",
        height: "100%",
    },
    cardsContainer: {
        marginTop: SIZES.medium,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },

});

export default styles;

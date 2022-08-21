import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const baseStyles = StyleSheet.create({
    application: {
        flex: 1,
        backgroundColor: colors.background.extraLight,
    },
    roundedCircle: {
        borderRadius: 1000000000,
        aspectRatio: 1,
    },
});
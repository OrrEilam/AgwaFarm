import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const baseStyles = StyleSheet.create({
    application: {
        flex: 1,
        backgroundColor: colors.background.extraLight,
    },
    roundedCircle: {
        borderRadius: Number.MAX_VALUE,
        aspectRatio: 1,
    },
});
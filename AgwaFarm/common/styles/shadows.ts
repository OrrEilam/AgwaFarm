import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const shadows = StyleSheet.create({
    light: {
        shadowOffset: { width: 0, height: 2 },  
        shadowColor: colors.shade.light,
        shadowOpacity: 0.25,
        shadowRadius: 5,
    }
});
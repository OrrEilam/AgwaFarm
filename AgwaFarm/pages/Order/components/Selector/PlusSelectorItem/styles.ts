import { StyleSheet } from "react-native";
import { baseStyles } from "../../../../../common/styles/baseStyles";
import { colors } from "../../../../../common/styles/colors";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: colors.background.extraLight,
        ...baseStyles.roundedCircle,
    },
    addIcon: {
        zIndex: 1,
        flex: 0.5,
        aspectRatio: 1
    }
})
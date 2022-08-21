import { StyleSheet } from "react-native";
import { baseStyles } from "../../styles/baseStyles";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadows";

export const style = StyleSheet.create({
    actionIconWrapper: {
        zIndex: 3,
        height: 15,
        position: 'absolute',
        top: 3.75,
        right: 3.75,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background.light,
        ...baseStyles.roundedCircle,
        ...shadows.medium,
    },
    actionIcon: {
        flex: 1,
        aspectRatio: 1,
    },
})
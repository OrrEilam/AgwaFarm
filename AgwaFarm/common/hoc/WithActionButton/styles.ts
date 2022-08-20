import { StyleSheet } from "react-native";
import { baseStyles } from "../../styles/baseStyles";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadows";

export const style = StyleSheet.create({
    deleteIconWrapper: {
        zIndex: 3,
        height: '1rem',
        position: 'absolute',
        top: '0.25rem',
        right: '0.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background.light,
        ...baseStyles.roundedCircle,
        ...shadows.medium,
    },
    deleteIcon: {
        height: '75%',
        aspectRatio: 1,
    },
})
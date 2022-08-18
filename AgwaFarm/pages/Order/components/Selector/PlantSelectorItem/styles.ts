import { StyleSheet } from "react-native";
import { baseStyles } from "../../../../../common/styles/baseStyles";
import { colors } from "../../../../../common/styles/colors";

export const styles = StyleSheet.create({
    plantImageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: colors.background.extraLight,
        ...baseStyles.roundedCircle,
    },
    plantImage: {
        height: '75%',
        aspectRatio: 1,
    },
    deleteIcon: {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: '30%',
        ...baseStyles.roundedCircle,
    },
    plantName: {
        marginTop: '0.5rem',
        textAlign: 'center',
    }
})
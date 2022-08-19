import { StyleSheet } from "react-native";
import { baseStyles } from "../../styles/baseStyles";
import { colors } from "../../styles/colors";

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
    plantName: {
        marginTop: '0.5rem',
        textAlign: 'center',
    }
})
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
        flex: 1,
        ...baseStyles.roundedCircle,
    },
    plantImageReplacement: {
        flex: 0.6,
        ...baseStyles.roundedCircle,
    },
    plantName: {
        marginTop: 7.5,
        textAlign: 'center',
        fontSize: 17.5,
        fontWeight: '300',
        color: colors.text.medium,
    }
})
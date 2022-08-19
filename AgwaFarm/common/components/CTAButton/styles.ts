import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    ctaButtonContainer: {
        padding: '0.5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: colors.background.medium,
    },
    ctaButtonDisabled: {
        opacity: 0.5,
    },
    ctaButtonText: {
        color: colors.text.medium,
        fontWeight: '700',
        textTransform: 'uppercase',
    }
})